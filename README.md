<div align="center">

# ⚡ MOTION LAB

### High-Performance Kinetic Typography & Interactive Physics Playground
**Conceived, Designed & Developed by [Teja Priyan](https://github.com/TejaPriyan)**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-motionlab1.vercel.app-00dfa2?style=for-the-badge&logo=vercel)](https://motionlab1.vercel.app/)
[![Author](https://img.shields.io/badge/Author-Teja%20Priyan-ff6a3d?style=for-the-badge&logo=github)](https://github.com/TejaPriyan)
[![License: Proprietary](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg?style=for-the-badge)](LICENSE)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20Vanilla%20JS)-success?style=for-the-badge)](https://github.com/TejaPriyan/MotionLab)
[![Technology](https://img.shields.io/badge/Stack-HTML5%20Canvas%20%7C%20Web%20Audio-blue?style=for-the-badge)](https://github.com/TejaPriyan/MotionLab)
[![Platform](https://img.shields.io/badge/Platform-Mobile%20%26%20Desktop%20Ready-black?style=for-the-badge)](https://github.com/TejaPriyan/MotionLab)

<br/>

> *"Your movement becomes the animation."*  
> **Motion Lab** is a zero-dependency, hardware-accelerated kinetic typography laboratory combining sub-stepped 2D physics integration, procedural Web Audio sound synthesis, directional squash & stretch dynamics, interactive particle deletion tools, and a high-precision multi-track timeline recorder with social video export.

</div>

---

## 🌌 Overview

Motion Lab transforms letterforms and shapes into tactile physical bodies that react dynamically to pointer movements, touch gestures, momentum throws, and simulated physical force fields. Engineered with pure **Vanilla JavaScript**, **HTML5 2D Canvas**, and **Web Audio API**, it operates entirely offline without external libraries, bundles, or frameworks.

Whether on high-refresh desktop monitors or mobile touchscreens, Motion Lab automatically adapts its device pixel ratio (DPR) and particle budgets to ensure locked 60 FPS performance.

---

## ✨ Features

### 🧲 1. Seven Dynamic Physics Environments
Switch seamlessly between unique vector force fields in real-time:
* **`GRAVITY`**: Downward acceleration with configurable floor restitution and kinetic wall bouncing.
* **`MAGNET`**: Radial gravitational pull towards the pointer or focal point, proportional to pressure.
* **`REPEL`**: High-velocity shockwaves pushing typographic bodies away from cursor trajectories.
* **`WIND`**: Aerodynamic fluid drag vector field driven by pointer velocity strokes.
* **`LIQUID`**: Floating sinusoidal turbulence, rotational drift, and viscous wake drag.
* **`ORBIT`**: Centripetal orbital acceleration keeping letters circling the cursor at individual radii.
* **`CHAOS`**: Multi-frequency harmonic trigonometric force vectors with periodic rhythmic pulses.

### 🎨 2. Eight Material Shaders & Aesthetic Styles
* **`Normal`**: Minimalist, high-contrast monochrome vector glyphs.
* **`Glass`**: Translucent linear gradients with specular highlight contours and refraction borders.
* **`Chrome`**: 5-stop metallic gradient with animated light reflections tracking motion and time.
* **`Liquid`**: Soft glowing strokes with animated sinusoidal oscillation and squash dilation.
* **`Glow`**: Double-pass blur with additive (`lighter`) composite glow blending.
* **`Paper`**: Textural directional drop shadows with simulated aerodynamic flutter.
* **`Pixel`**: Retro 8-bit aesthetic computed via cached 16×16 offscreen canvas buffers.
* **`Smoke`**: Translucent buoyant glyphs drifting upward with inverse-gravity physics.

### 🗑️ 3. Interactive Particle & Element Removal Tool
* **Precision Deletion**: Activate the `REMOVE` tool from the bottom dock or via the `X` / `Delete` key.
* **Targeting Crosshair**: A dynamic red targeting reticle identifies target particles and bodies.
* **Vaporization Physics**: Clicking or tapping on any letter, shape, shard, or floating particle detonates it into an outward dispersion ring with procedural acoustic feedback.
* **Swipe-to-Erase**: Click and drag across the canvas while the remove tool is active to erase multiple particles in a fluid sweep.
* **`CLEAR ALL` & `RESPAWN`**: Accessible in the `OBJECT` panel for instant canvas clearing or text re-instantiation.

### 🔊 4. Procedural Web Audio Synthesizer
* **100% Procedural**: No external MP3, WAV, or OGG audio files.
* **Harmonic Sine Sweeps**: Dynamic frequency modulation on grabs (`300 Hz → 520 Hz`) and releases (`520 Hz → 180 Hz`).
* **Velocity-Pitched Collision Audio**: Triangle oscillators modulated by impact velocity (`120 + v * 90 → 60 Hz`).
* **Filtered Noise Explosions**: Procedurally generated white noise buffers processed through biquad resonance filters.
* **Completion Chords**: Multi-voice arpeggiated C-major chords (C5, E5, G5, C6) on state finishes.

### 💥 5. Generative Destruction, Rebuilding & Morphing
* **BREAK**: Shatters text glyphs into 7 randomized angular Voronoi-style shards with explosive outward momentum.
* **REBUILD**: Employs critically damped harmonic spring physics to steer shards back to their home coordinates and angles with staggered delays, fusing them back into typography.
* **MORPH**: Dynamically converts letterforms into geometric primitives (`Letter` → `Circle` → `Triangle` → `Dot`) with smooth cubic easing interpolation.
* **DOUBLE-TAP SHOCKWAVE**: Double-clicking or double-tapping anywhere detonates a radial explosive blast.

### 🎬 6. Multi-Track Timeline Recording & 60FPS Replay
* **Packed Typed Arrays**: Records continuous interactive motion takes using compact `Float32Array` buffers storing kinematics, camera transformations, impacts, and material states.
* **Precision Scrubbing**: Logarithmic binary-search lookup with linear interpolation (`lerp`) enables fluid timeline scrubbing.
* **6 Virtual Cinematic Cameras**:
  * `AUTO`: Kinetic-energy centroid tracking.
  * `PUSH`: Dramatic cinematic slow zoom-in.
  * `PULL`: Wide pull-back lens motion.
  * `ORBIT`: Harmonic rotational swaying.
  * `FOLLOW`: Center-of-mass focal tracking.
  * `LOCKED`: Exact view frozen from recording time.
* **Export Engine**:
  * **Video Export**: WebM / MP4 video encoding via `MediaRecorder` at 6 Mbps with format presets for **9:16 (Stories/Reels/TikTok)**, **16:9 (Landscape)**, and **1:1 (Square)**.
  * **Snapshot Export**: High-resolution rendered PNG output with author watermark signature.

### 📱 7. Mobile & Desktop Responsive
* Full support for mobile touch events (`pointerdown`, `pointermove`, `pointerup`), touch-fling velocity, and two-finger pinch-to-zoom.
* Safe-area-inset padding for borderless mobile screens (iPhone Dynamic Island / Android navigation bars).
* Adaptive performance throttling: monitors 90-frame rolling averages and dynamically scales particle budgets between **High (2,200 particles)**, **Balanced (1,100 particles)**, and **Performance (400 particles)**.

---

## ⌨️ Controls & Shortcuts

| Key / Action | Function |
| :--- | :--- |
| **Click / Drag** | Grab and fling letters with realistic momentum |
| **Click Particle in `REMOVE` Mode** | Vaporize and erase individual letter, shape, or particle |
| **Drag in `REMOVE` Mode** | Continuous eraser sweep across multiple particles |
| **Double Tap / Click** | Trigger radial explosion shockwave |
| **Pinch / Mouse Wheel** | Zoom canvas camera in / out |
| **`X` / `Delete` / `Backspace`** | Toggle interactive `REMOVE` tool on / off |
| **`R`** | Start / Stop motion take recording |
| **`B`** | Break into shards / Rebuild letters |
| **`M`** | Morph letterforms into geometric shapes |
| **`1` – `7`** | Switch physics modes (`Gravity`, `Magnet`, `Repel`, etc.) |
| **`Space`** | Play / Pause replay timeline |
| **`Esc`** | Deactivate remove mode or close open popup panel |

---

## 🏗️ Project Architecture & File Assignments

```
MotionLab/
│
├── index.html                    # Production web application with full SEO/AEO/GEO schemas
├── MOTION LAB.html               # Standalone portable single-file distribution
├── server.js                     # Local HTTP streaming server with complete MIME handling
├── google2af4e1ed3191321d.html   # Google Search Console verification token
├── robots.txt                    # Search crawler indexing rules
├── sitemap.xml                   # XML sitemap schema for search indexing
├── LICENSE                       # Strict Proprietary & Confidential License
├── README.md                     # Architectural documentation, feature guide, and author attribution
└── .gitignore                    # Git tracking exclusion rules
```

### File Responsibilities:
1. **`index.html`**:
   The primary web application. Includes responsive layouts, metadata for search engines and AI answer engines (Schema.org JSON-LD), procedural audio synthesizer, physics simulation loop, and canvas rendering pipeline.
2. **`MOTION LAB.html`**:
   The standalone, zero-dependency source application file, identical in features and ready for instant drag-and-drop viewing in any browser.
3. **`server.js`**:
   Node.js streaming static file server supporting full MIME types (`.html`, `.js`, `.css`, `.json`, `.png`, `.jpg`, `.svg`, `.webm`, `.mp4`, `.xml`, `.txt`) on port 8080.
4. **`google2af4e1ed3191321d.html`**:
   Official ownership verification file for Google Search Console indexing.
5. **`robots.txt`**:
   Robots exclusion standard configuration enabling web crawlers to index the application.
6. **`sitemap.xml`**:
   Standardized XML sitemap providing endpoints and change frequencies to search engines.
7. **`LICENSE`**:
   Comprehensive Proprietary Software License under Copyright © 2025–2026 Teja Priyan, prohibiting unauthorized copying, cloning, or distribution.
8. **`README.md`**:
   Technical documentation, feature overview, and author credentials.
9. **`.gitignore`**:
   Excludes temporary build artifacts, log files, OS metadata, and node modules.

---

## 👤 Author & Creator

**Teja Priyan**
* **GitHub**: [@TejaPriyan](https://github.com/TejaPriyan)
* **Email**: teja1616150@gmail.com
* **Project Repository**: [https://github.com/TejaPriyan/MotionLab](https://github.com/TejaPriyan/MotionLab)

---

## ⚖️ Copyright & Proprietary License

**Copyright © 2025–2026 Teja Priyan. All Rights Reserved.**

> **STRICT PROPRIETARY NOTICE**:  
> This software, including its source code, interaction architecture, mathematical physics simulation, sound synthesis, aesthetic design, branding, and assets, is the confidential and proprietary property of **Teja Priyan**.
>
> **NO PERSON OR ENTITY IS AUTHORIZED TO COPY, CLONE, FORK, DISTRIBUTE, SUBLICENSE, REPRODUCE, MODIFY, RE-ENGINEER, OR COMMERCIALLY EXPLOIT THIS WORK IN WHOLE OR IN PART WITHOUT THE EXPRESS PRIOR WRITTEN CONSENT OF TEJA PRIYAN.**
>
> Unauthorized copying or derivation constitutes copyright infringement under applicable national and international intellectual property laws and will be subject to DMCA takedown actions and legal prosecution.

For licensing inquiries or commercial use, contact [Teja Priyan](mailto:teja1616150@gmail.com).
