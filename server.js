const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || '127.0.0.1';
const DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const BLOCKED_TOP_LEVEL = new Set(['server.js', 'package.json', 'package-lock.json', 'tests']);

function resolveSafePath(rawUrl) {
  let reqPath;
  try {
    reqPath = decodeURIComponent((rawUrl || '/').split('?')[0]);
  } catch {
    return { error: 400 };
  }
  if (reqPath === '/' || reqPath === '/index.html') {
    reqPath = '/index.html';
  }
  const normalized = reqPath.replace(/^\/+/, '');
  const segments = normalized.split('/').filter(Boolean);
  if (!segments.length || segments.some((s) => s.startsWith('.'))) {
    return { error: 403 };
  }
  if (BLOCKED_TOP_LEVEL.has(segments[0])) {
    return { error: 403 };
  }
  const filePath = path.resolve(DIR, normalized);
  const rel = path.relative(DIR, filePath);
  if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) {
    return { error: 403 };
  }
  return { filePath };
}

function createServer() {
  return http.createServer((req, res) => {
    const resolved = resolveSafePath(req.url);
    if (resolved.error === 400) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad Request');
      return;
    }
    if (resolved.error === 403) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }

    const { filePath } = resolved;
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    });
  });
}

if (require.main === module) {
  const server = createServer();
  server.listen(PORT, HOST, () => {
    console.log(`MotionLab server running at http://${HOST}:${PORT}/`);
  });
}

module.exports = { createServer, resolveSafePath };
