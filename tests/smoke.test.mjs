import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { createServer, resolveSafePath } = require(path.join(root, 'server.js'));

function rawGet(port, rawPath) {
  return new Promise((resolve, reject) => {
    const req = http.request({ host: '127.0.0.1', port, path: rawPath, method: 'GET' }, (res) => {
      res.resume();
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers }));
    });
    req.on('error', reject);
    req.end();
  });
}

test('resolveSafePath blocks traversal, dotfiles, server source, and bad URIs', () => {
  assert.equal(resolveSafePath('/%E0%A4%A').error, 400);
  assert.equal(resolveSafePath('/../secret.txt').error, 403);
  assert.equal(resolveSafePath('/.git/HEAD').error, 403);
  assert.equal(resolveSafePath('/server.js').error, 403);
  assert.ok(resolveSafePath('/').filePath.endsWith('index.html'));
});

test('HTTP server serves index.html, ico, and rejects traversal/server source/malformed URI', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  try {
    const rOk = await rawGet(port, '/');
    assert.equal(rOk.status, 200);
    const rIco = await rawGet(port, '/favicon.ico');
    assert.equal(rIco.status, 200);
    assert.equal(rIco.headers['content-type'], 'image/x-icon');
    assert.equal((await rawGet(port, '/%E0%A4%A')).status, 400);
    assert.equal((await rawGet(port, '/../LICENSE')).status, 403);
    assert.equal((await rawGet(port, '/server.js')).status, 403);
    assert.equal((await rawGet(port, '/.git/HEAD')).status, 403);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test('index.html inline script parses and uses relative favicons + object URL cleanup', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.doesNotMatch(html, /href="\/(?:favicon|apple-touch-icon)/);
  assert.match(html, /URL\.revokeObjectURL/);
  assert.match(html, /if\(RP\.exp\)\{toast\('EXPORT ALREADY IN PROGRESS'\);return\}/);
  const scripts = [...html.matchAll(/<script(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length >= 1);
  for (const [, code] of scripts) {
    assert.doesNotThrow(() => new vm.Script(code));
  }
});
