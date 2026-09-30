<div align="center">

# ⚡ MOTION LAB

### High-Performance Kinetic Typography & Interactive Physics Playground
**Conceived, Designed & Developed by [Teja Priyan](https://github.com/TejaPriyan)**

[![Author](https://img.shields.io/badge/Author-Teja%20Priyan-ff6a3d?style=for-the-badge&logo=github)](https://github.com/TejaPriyan)
[![License: Proprietary](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg?style=for-the-badge)](LICENSE)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20Vanilla%20JS)-success?style=for-the-badge)](https://github.com/TejaPriyan/MotionLab)
[![Technology](https://img.shields.io/badge/Stack-HTML5%20Canvas%20%7C%20Web%20Audio-blue?style=for-the-badge)](https://github.com/TejaPriyan/MotionLab)
[![Platform](https://img.shields.io/badge/Platform-Mobile%20%26%20Desktop%20Ready-black?style=for-the-badge)](https://github.com/TejaPriyan/MotionLab)

<br/>

> *"Your movement becomes the animation."*  
> **Motion Lab** is a zero-dependency, hardware-accelerated kinetic typography laboratory combining sub-stepped 2D physics integration, procedural Web Audio sound synthesis, directional squash & stretch dynamics, and a high-precision multi-track timeline recorder with social video export.

</div>

---

## 🌌 Overview

Motion Lab transforms letterforms into tactile physical bodies that react dynamically to pointer movements, touch gestures, momentum throws, and simulated physical force fields. Engineered with pure **Vanilla JavaScript**, **HTML5 2D Canvas**, and **Web Audio API**, it operates entirely offline without external libraries, bundles, or frameworks.

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

### 🔊 3. Procedural Web Audio Synthesizer
* **100% Procedural**: No external MP3, WAV, or OGG audio files.
* **Harmonic Sine Sweeps**: Dynamic frequency modulation on grabs (`300 Hz → 520 Hz`) and releases (`520 Hz → 180 Hz`).
* **Velocity-Pitched Collision Audio**: Triangle oscillators modulated by impact velocity (`120 + v * 90 → 60 Hz`).
* **Filtered Noise Explosions**: Procedurally generated white noise buffers processed through biquad resonance filters.
* **Completion Chords**: Multi-voice arpeggiated C-major chords (C5, E5, G5, C6) on state finishes.

### 💥 4. Generative Destruction, Rebuilding & Morphing
* **BREAK**: Shatters text glyphs into 7 randomized angular Voronoi-style shards with explosive outward momentum.
* **REBUILD**: Employs critically damped harmonic spring physics to steer shards back to their home coordinates and angles with staggered delays, fusing them back into typography.
* **MORPH**: Dynamically converts letterforms into geometric primitives (`Letter` → `Circle` → `Triangle` → `Dot`) with smooth cubic easing interpolation.
* **DOUBLE-TAP SHOCKWAVE**: Double-clicking or double-tapping anywhere detonates a radial explosive blast.

### 🎬 5. Multi-Track Timeline Recording & 60FPS Replay
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

### 📱 6. Mobile & Desktop Responsive
* Full support for mobile touch events (`pointerdown`, `pointermove`, `pointerup`), touch-fling velocity, and two-finger pinch-to-zoom.
* Safe-area-inset padding for borderless mobile screens (iPhone Dynamic Island / Android navigation bars).
* Adaptive performance throttling: monitors 90-frame rolling averages and dynamically scales particle budgets between **High (2,200 particles)**, **Balanced (1,100 particles)**, and **Performance (400 particles)**.

---

## ⌨️ Controls & Shortcuts

| Key / Action | Function |
| :--- | :--- |
| **Click / Drag** | Grab and fling letters with realistic momentum |
| **Double Tap / Click** | Trigger radial explosion shockwave |
| **Pinch / Mouse Wheel** | Zoom canvas camera in / out |
| **`R`** | Start / Stop motion take recording |
| **`B`** | Break into shards / Rebuild letters |
| **`M`** | Morph letterforms into geometric shapes |
| **`1` – `7`** | Switch physics modes (`Gravity`, `Magnet`, `Repel`, etc.) |
| **`Space`** | Play / Pause replay timeline |
| **`Esc`** | Close open popup panel |

---

## 🚀 Getting Started & Local Setup

### Option 1: Direct File Launch
Double-click `MOTION LAB.html` or `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge, Brave, Opera).

### Option 2: Local HTTP Server (Recommended)
Running through a local server enables full video recording and export features:

```bash
# Clone the repository
git clone https://github.com/TejaPriyan/MotionLab.git
cd MotionLab

# Start the built-in server
node server.js
```

Open your browser and navigate to:
```
http://localhost:8080/
```

---

## 🏗️ Architecture & Technical Stack

```
MotionLab/
│
├── index.html                    # Unified production web application (SEO/AEO/GEO optimized)
├── MOTION LAB.html               # Source HTML5 application
├── server.js                     # Local HTTP server with complete MIME streaming
├── robots.txt                    # Search crawler routing
├── sitemap.xml                   # XML sitemap for search engines
├── google87bb3bc53ec346d2.html   # Google Search Console verification token
├── LICENSE                       # Strict Proprietary & Confidential License
└── README.md                     # Documentation & Project Guide
```

### Core Technologies:
* **Graphics**: HTML5 Canvas 2D API (`Path2D`, radial lighting gradients, custom particle system)
* **Physics Integration**: Multi-substepped numerical Euler/Verlet integrator with elastic impulse collision resolution
* **Audio**: Procedural Web Audio API (`OscillatorNode`, `BiquadFilterNode`, `AudioBuffer`)
* **Typography**: Google Fonts (*Syne* weights 500 and 800)
* **Encoding**: `MediaRecorder` API with VP9/VP8 WebM and H.264 MP4 fallbacks

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
