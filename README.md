# 🌐 Paradox 2026 Event Tracker: Technical Documentation

A fluid, responsive, and mobile-first event navigator and scheduling dashboard customized for attendees of the **Paradox 2026** fest at the Indian Institute of Technology Madras (IITM).

The application implements a custom Google Material Design 3 (M3) design system, seeded with IIT Madras's brand saffron-gold, featuring a cream-colored off-white base surface, a pure white compact bottom navigation rail, shadowless warm-tonal card elevations, variable typography, and dynamic transit warnings.

---

## 🚀 Getting Started

### 📱 Option A: Direct Android App Installation (Recommended for Mobile)

You can install the native Android app directly onto your device:

1. **Download the APK**: Download the compiled package ZIP from [GitHub Build Artifacts](https://github.com/neurelith/paradox.navigator2026/actions/runs/26720086594/artifacts/7318840047).
   *(Note: You must be logged into the owning GitHub account `neurelith` to access this private repository download link).*
2. **Extract & Open**: Extract the downloaded ZIP folder to get the `app-debug.apk` file, then open/run it on your Android device.
3. **Allow Installation**: If prompted with a security warning, tap **Settings** and enable **Allow from this source** for your browser or file manager.
4. **Bypass Protection**: When Google Play Protect warns about an "Unsafe App" (due to it being a debug-signed build), tap **More details** ➔ **Install anyway**.

---

### Option B: Local Web Server (Recommended for Web)
Running the app via a local server ensures correct iframe loading and prevents local file access policy warnings.
1. Open a terminal in the project directory.
2. Start the local server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to: **[http://localhost:8000](http://localhost:8000)**

### Option C: Direct File Loading
Open [index.html](index.html) or [paradox_2026_event_tracker.html](paradox_2026_event_tracker.html) directly in any modern mobile or desktop web browser.

---

## 🎨 Design System & Theme Specifications

### 1. IIT Madras Saffron-Cream Palette
The visual identity deviates from corporate blue in favor of IIT Madras colors:
* **Base Background & Surfaces:** Warm off-white cream (`#FAF7F0`).
* **Elevation & Contrast:** Elevated cards use tonal warmth (`#F3EFE0` for default state, `#EBE5D3` for hover/active state) instead of drop shadows.
* **Accent Accentuation:** The main primary branding, FAB color, and selected active highlights use IIT Madras Saffron-Gold (`#D97706`).
* **Booked State:** Forest Green canopy color (`#14532D`) with pastel container background (`#DCFCE7`).
* **Conflict/Warning State:** Warm Terracotta Red (`#C2410C`) with a light terracotta container (`#FFEDD5`).
* **Navigation Bar:** Pure white (`#ffffff`) background bar positioned fixed at the bottom.
* **Shadowless Aesthetics:** Drop shadows are completely removed (including FAB, bottom drawers, and cards) and replaced with a `1.5px solid var(--border-focus)` saffron border on focused, active, or selected elements.

### 2. Typographic Tension
* **Body copy:** Google's variable weight `Roboto Flex` for clear, adjustable text readability.
* **Event Titles & Headers:** Heavy, narrow condensed display face `Barlow Condensed` (`text-transform: uppercase`), providing editorial tension and visual structure.
* **Timestamps & Venues:** High-contrast `JetBrains Mono` for precise spatial-temporal details.

### 3. Motion & Animation Curves
* **Spring Card Expansion:** Clicking a card triggers an inline container transform height expansion. Utilizes CSS grid rows transition (`0fr` to `1fr`) controlled by a spring-curve ease:
  ```css
  transition: grid-template-rows 0.4s cubic-bezier(0.2, 0, 0, 1.0);
  ```
* **Staggered Entry Transition:** Card items slide up `8px` sequentially on render, with a JavaScript loop assigning a `40ms` delay multiplier:
  ```javascript
  card.style.animationDelay = `${index * 40}ms`;
  ```

---

## 🛠️ Core Features

### 1. Tri-State Calendar Scheduler & Conflict Handler
* **Unbooked State:** Light beige button. Event remains inactive.
* **Watchlist State (Watch):** Marks the event for observation. Highlighted with a saffron-gold left-border. Does not trigger scheduling conflicts.
* **Booked State (Book):** Reserves the event. Highlighted with a deep forest green left-border. If two booked events clash in time, a warning border appears on the cards, the **Conflicts Tab** logs the overlap, and a red warning badge lights up on the bottom navigation bar.

### 2. Spatio-Temporal Transit calculations
If consecutive booked events are scheduled within 30 minutes of each other at different buildings, the engine calculates the **Euclidean walking distance ($\Delta d$)** between building coordinates:
$$\Delta d = \sqrt{(X_2 - X_1)^2 + (Y_2 - Y_1)^2}$$
* This distance is calibrated into meters ($1\text{px} \approx 2\text{m}$) and checked against the attendee's walking speed settings ($45\text{–}120\text{ m/min}$).
* If travel time exceeds the available break gap, a **Critical Transit warning** (colored terracotta red) is rendered at the top of the schedule view, accompanied by a Google Maps routing navigation hyperlink.

### 3. Interactive Qualifier Simulators
* **OSINT Quiz Drawer:** 3-question trivia challenge validating route codes and GPS coordinates. Completing the quiz automatically books the OSINT event.
* **PDF Manuscript Drawer:** Drag-and-upload area simulating PDF syntax checks and academic submission. Completing the progress track automatically books the Research event.

---

## 📂 Project Architecture

```
PAARDOXGUIDE/
├── index.html                       # Main HTML application page linking to style.css and app.js
├── paradox_2026_event_tracker.html  # Portable, mirrored backup HTML file
├── style.css                        # Core application stylesheet (Material Design 3 visual tokens)
├── app.js                           # Frontend controller, view router, and PWA registration logic
├── package.json                     # Node project metadata and dependencies (Capacitor core/cli/android)
├── capacitor.config.json            # Capacitor Android deployment configuration
├── sw.js                            # PWA Service Worker implementing offline caching
├── scripts/
│   ├── build.js                     # Production web bundler copying assets to www/
│   └── optimize-images.js           # WebP image batch compression pipeline
└── src/
    └── data/
        └── paradoxStore.json        # Static JSON database registry of events and coordinates
```

* **Modular Deployment:** The application is organized in a modular structure to support clean development, native Capacitor Android compilation, PWA service worker caching, and asynchronous loading of the events database during startup.
