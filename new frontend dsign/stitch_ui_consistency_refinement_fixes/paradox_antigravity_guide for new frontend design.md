# Paradox 2026 — Antigravity Fix Guide
### Page-by-page prompts based on actual screenshots

> **How to use:** Start every Antigravity session with the ground rule block below,
> paste your full current HTML, then paste the relevant page section.
> One page per session. Never combine pages.

---

## Ground rule — paste this before every single prompt

```
Here is my current HTML file. Do NOT rewrite it from scratch.
Do NOT change any event data, EVENTS array, filter logic, or routing.
Only apply the specific fixes described below.

[PASTE YOUR FULL HTML HERE]

Now apply only these changes:
```

---

## Page 1 — `main_home_page.html`

**What I see in the screenshot:**
- Warm cream background (#f5f0e8) ✓ correct
- "PARADOX 2026" Clash Display title ✓ correct
- LIVE NOW red pill badge with ticker — badge looks good but ticker content
  bleeds, no left margin, no divider between badge and text
- Discover cards: first card has amber "WORKSHOP" badge, second has blue "TALK"
  badge — badge colors are inconsistent (workshop should be amber, talk blue ✓)
- Venue dots: "MAIN AUDI" has gray dot ✓, "TTJ" has amber/brown dot ✓
- Now Playing card: flat white, no glass effect, UP NEXT label is plain gray,
  time pills use amber text correctly ✓ but pipe divider is missing
- Day chips at bottom: "Jun 10" is dark filled ✓, others are plain outlines ✓
- Bottom nav: compass icon active with small red dot below ✓

```
Fix main_home_page.html. Reference: main_home_page.png screenshot.
Apply only the following 6 fixes. Do not change anything else.

FIX 1 — TICKER STRIP MARGIN AND DIVIDER:
The ticker strip currently bleeds edge to edge with no side margins.
- Add margin: 8px 16px 0 to the ticker strip container
- Add border-radius: 9999px to the strip container
- The gap between the LIVE NOW badge and the scrolling content needs a
  visible divider: add a 1px solid rgba(192,57,43,0.3) vertical line,
  height 18px, margin 0 8px, flex-shrink 0 between badge and overflow container
- The LIVE NOW badge should have border-radius: 9999px 0 0 9999px (left rounded only)
  so it visually anchors to the left edge of the pill strip

FIX 2 — DISCOVER CARD BADGE COLORS:
Apply this exact category-to-color mapping for all .discover-badge elements:
  WORKSHOP  → background #fff4e6, color #854f0b
  TALK      → background #e6f1fb, color #0c447c
  SPORTS    → background #e1f5ee, color #085041
  COMPETITION → background #fcebeb, color #791f1f
  SOCIAL    → background #eeedfe, color #3c3489
  RESEARCH  → background #eef7ff, color #042c53
  CYBER     → background #faeeda, color #633806
Badge font: JetBrains Mono, 9px, weight 700, letter-spacing 0.06em, uppercase
Badge shape: border-radius 9999px, padding 3px 8px

FIX 3 — DISCOVER CARD LEFT BORDER:
Each discover card must have a 3px solid left border in the category accent color:
  WORKSHOP → #854f0b, TALK → #0c447c, SPORTS → #085041,
  COMPETITION → #791f1f, SOCIAL → #3c3489, RESEARCH → #042c53
border-left: 3px solid [color], border-radius: 0 16px 16px 0

FIX 4 — NOW PLAYING CARD GLASS EFFECT:
The Now Playing card currently has a flat white background.
Apply to .now-next-card:
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)
  border-radius: 16px

FIX 5 — UP NEXT LABEL AND PILL DIVIDER:
The "UP NEXT" label is plain body text — make it a proper label:
  font-family: 'JetBrains Mono', monospace
  font-size: 10px, font-weight: 700, letter-spacing: 0.1em
  text-transform: uppercase, color: #8a7a60
  margin-bottom: 8px, margin-top: 12px
The time pills currently show "11:30  Quantum Computing" with no visual break.
Add a pipe divider between time and event name:
  <span class="next-time">11:30</span>
  <span style="width:1px;height:12px;background:#ddd5c0;margin:0 8px;flex-shrink:0"></span>
  <span class="next-event">Quantum Computing</span>
.next-time: font-family JetBrains Mono, font-size 12px, font-weight 600,
  color #b8550a, min-width 38px

FIX 6 — BOTTOM NAV ACTIVE STATE:
The active tab indicator (compass/Discover icon) must have:
- Icon color: #1a1408 (dark)
- A 5×5px circle dot below the icon: background #c0392b, border-radius 50%,
  margin-top 3px, display block, margin-left auto, margin-right auto
- Inactive tabs: icon color #8a7a60, no dot

Output the complete updated file.
```

---

## Page 2 — `timetable___schedule_page.html`

**What I see in the screenshot:**
- Dark top bar (#1a1408 black) with "PARADOX 2026" white title
- Day chips: "Jun 10" is dark filled pill ✓, others are plain outline pills ✓
- Time labels on left margin: "10:00 AM", "11:30 AM", "01:00 PM" — correct
- Event cards are plain white rectangles, no glass, no left border accent
- "Connected" blue dashed border badge overlaid on some cards (Stitch artifact — should be removed)
- First card (Quantum Computing) has dashed blue outline "connected" border — remove this
- WORKSHOP badge: amber color ✓, TALK badge: purple tint — should be blue per system
- "Time Conflict Detected" banner inside Manch of Traders card: amber background with warning icon ✓ — keep this
- Speaker icon row and venue icon row visible ✓
- Bottom nav: Schedule (calendar icon) is active with purple fill — should match home page style (dark bg, white icon, red dot)

```
Fix timetable___schedule_page.html. Reference: timetable___schedule_page.png screenshot.
Apply only the following 5 fixes. Do not change event data or filter logic.

FIX 1 — REMOVE STITCH "CONNECTED" ARTIFACTS:
Remove all dashed blue border overlays, "Connected" badge labels, and any
dotted outline borders that Stitch added to event cards or nav items.
These are debug artifacts. Delete every element with class "connected-badge",
"stitch-connected", or any border-style: dashed on event cards.
Also remove any purple/blue dashed borders on bottom nav tab items.

FIX 2 — EVENT CARD STYLING:
Each event card in the schedule list needs:
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)
  border-radius: 12px
  margin: 0 0 10px
  padding: 14px 16px
  border-left: 3px solid [category accent color — see badge map below]

BADGE COLOR MAP — apply consistently to all event badge pills:
  WORKSHOP    → background #fff4e6, color #854f0b, border-left #854f0b
  TALK        → background #e6f1fb, color #0c447c, border-left #0c447c
  SPORTS      → background #e1f5ee, color #085041, border-left #085041
  COMPETITION → background #fcebeb, color #791f1f, border-left #791f1f
  SOCIAL      → background #eeedfe, color #3c3489, border-left #3c3489

FIX 3 — CONFLICT BANNER STYLING:
The "Time Conflict Detected" banner inside event cards is correct in structure
but needs consistent styling:
  background: #fff4e6, border: 1px solid #f0c080, border-radius: 8px
  padding: 6px 10px, margin-top: 8px
  display: flex, align-items: center, gap: 6px
  Warning icon: color #b8550a, font-size 14px
  Text: font-size 12px, font-weight 600, color #854f0b
  font-family: Inter, sans-serif

FIX 4 — DAY CHIP ACTIVE STATE:
Active day chip (Jun 10) styling:
  background: #1a1408, color: #f5f0e8, border-radius: 9999px
  padding: 7px 18px, font-weight: 700, font-size: 14px
Inactive chips:
  background: transparent, color: #4a3f28
  border: 1px solid #ddd5c0, border-radius: 9999px
  padding: 7px 18px, font-size: 14px

FIX 5 — BOTTOM NAV CONSISTENCY WITH HOME PAGE:
The bottom nav on this page uses a dark (#1a1408) background with white icons.
Keep this dark style (it's the timetable page variant) but fix the active state:
- Active tab (Schedule/calendar icon): icon color white, filled appearance
  Add a 2px white underline bar below the active icon (not a dot — dark bg variant)
- Inactive tabs: icon color rgba(255,255,255,0.5)
- Remove all "Connected" dashed borders from nav items

Output the complete updated file.
```

---

## Page 3 — `event_details_page.html`

**What I see in the screenshot:**
- Back arrow + "SaaS Conference 2024" title — WRONG, should say "Paradox 2026"
- Share icon top right ✓
- "WORKSHOP" purple badge at top — should be amber (#fff4e6 / #854f0b)
- Event title "Quantum Computing Fundamentals" large and bold ✓
- Date line shows "Select 12, 2026" — "Select" is a bug, should be "Jun 12, 2026"
- "Add to Calendar" CTA button: black background, white text ✓ — keep
  But it has a visible blue focus/selection outline around it — remove this
- "About this Session" section card ✓
- Speaker section with avatar, name, title ✓ — external link icon ✓
- Bottom nav has "Connected" dashed artifacts again — remove
- Bottom nav active icon is calendar (schedule) — active state shows purple filled circle, inconsistent

```
Fix event_details_page.html. Reference: event_details_page.png screenshot.
Apply only the following 6 fixes. Do not change the event description text or speaker data.

FIX 1 — TOP BAR TITLE:
Change the page title from "SaaS Conference 2024" to "Paradox 2026".
This is a hardcoded string — find it and replace it.
The back arrow (←) and share icon (↗) should stay as-is.

FIX 2 — DATE STRING BUG:
The date line shows "Select 12, 2026 • 10:00 AM - 12:00 PM"
"Select" is a bug — it is a leftover placeholder or HTML select element text.
Fix: replace with the correct date string "Jun 12, 2026 • 10:00 AM – 12:00 PM"
Style: font-size 13px, color #8a7a60, font-family Inter

FIX 3 — WORKSHOP BADGE COLOR:
The WORKSHOP badge at the top of the event detail uses purple/lavender.
Change to the correct system color:
  background: #fff4e6, color: #854f0b
  border-radius: 9999px, padding: 4px 12px
  font-family: JetBrains Mono, font-size: 10px, font-weight: 700
  letter-spacing: 0.08em, text-transform: uppercase

FIX 4 — ADD TO CALENDAR BUTTON BORDER:
The "Add to Calendar" button has a visible blue selection/focus outline.
Remove it:
  .add-to-calendar-btn, .add-to-calendar-btn:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
Button style should be:
  background: #1a1408, color: white, border-radius: 12px
  padding: 14px 24px, font-size: 15px, font-weight: 600
  width: 100%, display: flex, align-items: center,
  justify-content: center, gap: 8px
  Calendar icon left of text, both white

FIX 5 — SECTION CARDS GLASS EFFECT:
"About this Session" and "Speaker" section cards currently have flat white bg.
Apply glass effect to both:
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)
  border-radius: 16px, padding: 18px 16px, margin-bottom: 12px

FIX 6 — REMOVE CONNECTED ARTIFACTS + FIX BOTTOM NAV:
Remove all "Connected" dashed border badges from the bottom nav items.
The bottom nav on this page should match main_home_page.html exactly:
- Light glass background: rgba(255,250,240,0.55) with blur
- 4 tabs: Discover, Schedule, Map, Profile — icons only
- Active tab (Schedule): icon color #1a1408, red dot (5px circle, #c0392b) below icon
- Inactive: icon color #8a7a60

Output the complete updated file.
```

---

## Page 4 — `maps_page.html`

**What I see in the screenshot:**
- Dark top bar with "PARADOX 2026" white title ✓, hamburger left, profile right ✓
- Full-width map taking upper ~55% of screen — map tiles look clean ✓
- Black location pin (current position) and gray venue pins on map ✓
- Purple venue pin for one venue ✓ — this is correct to show active/selected
- Zoom controls (+/−) top right ✓, location target icon ✓
- Route panel below map: "Main Stage → Workshop C" with dropdown arrows ✓
- "TRANSIT_LOG: 320m / 5m 20s" — good, keep
- "TIGHT CONNECTION" warning pill: red/salmon background with warning icon ✓
- Amenities chip rail: Restrooms, Food, Charging — chips cut off on right ✓
- "DESTINATION CONTEXT" section with "WC" avatar, event name, time ✓
- Bottom nav: Map icon active with purple filled circle background — needs fix
- "Connected" dashed artifacts on nav items — remove

```
Fix maps_page.html. Reference: maps_page.png screenshot.
Apply only the following 5 fixes. Do not touch map rendering, pin positions, or route logic.

FIX 1 — REMOVE CONNECTED ARTIFACTS:
Remove all "Connected" dashed border overlays and blue dashed borders from
bottom nav items and any UI elements. Delete every element or class that adds
dashed borders Stitch injected as "connected" state indicators.

FIX 2 — ROUTE PANEL GLASS STYLING:
The route panel (containing "Main Stage → Workshop C" and transit info)
currently has a flat white background.
Apply glass effect:
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)
  border-radius: 16px 16px 0 0 (rounded top only, attaches to map bottom)
  padding: 16px

The route selector row (Main Stage → Workshop C):
  display: flex, align-items: center, gap: 8px
  Each location pill: background #e8dfc8, border: 1px solid #ddd5c0,
  border-radius: 9999px, padding: 6px 12px, font-size 13px, font-weight 600

FIX 3 — TRANSIT INFO ROW STYLING:
The "TRANSIT_LOG: 320m / 5m 20s" row:
  font-family: JetBrains Mono, font-size: 11px, color: #8a7a60
  display: flex, align-items: center, gap: 8px
  Walking person icon: color #8a7a60

The "TIGHT CONNECTION" warning pill:
  background: #fcebeb, border: 1px solid #f09595, border-radius: 9999px
  padding: 4px 10px, font-size: 11px, font-weight: 700, color: #791f1f
  Warning icon: color #791f1f, font-size 12px
  display: flex, align-items: center, gap: 4px

FIX 4 — AMENITIES CHIP RAIL:
The amenities chips (Restrooms, Food, Charging) should:
  display: flex, gap: 8px, overflow-x: auto, scrollbar-width: none
  padding: 12px 16px
Each chip: background #e8dfc8, border: 1px solid #ddd5c0,
  border-radius: 9999px, padding: 6px 14px, font-size: 12px,
  font-weight: 600, color: #4a3f28, white-space: nowrap
  Icon before text: 14px, color #8a7a60

FIX 5 — BOTTOM NAV CONSISTENCY:
Map page bottom nav currently uses dark background (matches timetable page).
Standardise to match main_home_page.html:
  Glass background: rgba(255,250,240,0.55) with blur(18px)
  border-top: 1px solid rgba(255,255,255,0.45)
  Active tab (Map/map icon): icon color #1a1408, 5px red dot below (#c0392b)
  Inactive: icon color #8a7a60
  Remove all dashed borders and Connected badges from nav items

Output the complete updated file.
```

---

## Page 5 — `profile_page.html`

**What I see in the screenshot:**
- Top bar: "ParadoxSaaS" — WRONG, should be "Paradox 2026"
- Profile avatar: circular photo ✓, but has light gray background saucer — looks dated
- Name "Alex Mercer", role "Senior Data Architect" ✓
- "Pro" and "Speaker" badge pills — Pro is purple/lavender, Speaker is outline ✓
  Pro badge should use primary accent color, not purple
- "Edit Profile" button: full-width black pill button ✓ — keep
- Stat cards (2-column grid):
  - "EVENTS ATTENDED: 42 +3" — the "+3" has a small trend arrow icon, good
  - "CONNECTIONS: 156 Active" ✓
  - "TALKS GIVEN: 8" (full width) ✓
  - "CERTIFICATIONS: 3 Verified" ✓
  - All stat cards have flat white bg — need glass effect
  - Stat card labels use "label-caps" style (uppercase, small, muted) ✓
- Bottom nav: profile icon active with purple filled circle — needs red dot fix
- A content card at bottom is half-visible ("Future of...tum") — cut-off ok, signals scroll

```
Fix profile_page.html. Reference: profile_page.png screenshot.
Apply only the following 6 fixes. Do not change stat values or user data.

FIX 1 — TOP BAR TITLE:
Change "ParadoxSaaS" to "Paradox 2026" in the top bar title.
Style: font-family 'Clash Display', font-size 18px, font-weight 700,
  color #1a1408, letter-spacing 0.03em

FIX 2 — PROFILE CARD GLASS EFFECT:
The main profile card (containing avatar, name, role, badges, Edit button)
currently has flat white background.
Apply:
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)
  border-radius: 20px, padding: 24px 16px

Avatar container: remove the gray saucer/circle background.
Avatar image: width 80px, height 80px, border-radius 50%,
  border: 2px solid rgba(255,255,255,0.6), display block, margin: 0 auto 12px

FIX 3 — ROLE BADGES:
"Pro" badge: background #c0392b (Paradox red), color white,
  border-radius 9999px, padding 3px 10px, font-size 11px, font-weight 700
"Speaker" badge: background transparent, color #4a3f28,
  border: 1px solid #ddd5c0, border-radius 9999px, padding 3px 10px,
  font-size 11px, font-weight 600
Both badges inline in a flex row, gap 8px, justify-content center, margin-bottom 14px

FIX 4 — STAT CARDS GLASS EFFECT:
All 4 stat cards (Events Attended, Connections, Talks Given, Certifications)
currently have flat white backgrounds.
Apply glass effect to each:
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)
  border-radius: 14px, padding: 14px 16px

Stat card label (EVENTS ATTENDED, CONNECTIONS, etc.):
  font-family: JetBrains Mono, font-size: 10px, font-weight: 700
  letter-spacing: 0.1em, text-transform: uppercase, color: #8a7a60

Stat number (42, 156, 8, 3):
  font-family: 'Clash Display', font-size: 28px, font-weight: 700
  color: #1a1408, line-height: 1.1, margin-top: 6px

Stat suffix (Active, Verified, "+3" trend):
  font-size: 13px, color: #8a7a60, font-weight: 400
  Display inline next to the number

FIX 5 — TREND INDICATOR ON EVENTS ATTENDED:
The "+3" next to "42" has a small upward trend arrow icon — preserve this.
Style: color #1d9e75 (green, positive trend), font-size 12px, font-weight 600
The trend arrow icon: color #1d9e75, font-size 14px
Wrap in: <span class="trend-up">↗ +3</span>
  color: #085041, background: #e1f5ee, border-radius: 9999px
  padding: 2px 6px, font-size: 11px, font-weight: 600, margin-left: 6px

FIX 6 — BOTTOM NAV ACTIVE STATE + REMOVE ARTIFACTS:
Remove any Connected dashed borders from nav items.
Active tab (Profile/person icon):
  icon color: #1a1408 (dark), 5px red dot (#c0392b) below icon, border-radius 50%
Inactive: icon color #8a7a60
Nav background: glass effect rgba(255,250,240,0.55) with blur(18px)

Output the complete updated file.
```

---

## Cross-page consistency fixes

Run this last, after all 5 pages are individually fixed.

```
I have 5 HTML files: main_home_page.html, timetable___schedule_page.html,
event_details_page.html, maps_page.html, profile_page.html.

Paste all 5 files one by one and apply these global consistency rules
to ALL of them in a single pass:

RULE 1 — FONT IMPORTS (check all 5 files have these in <head>):
  <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

RULE 2 — PAGE BACKGROUND:
  All pages: background: #f5f0e8 on body/page-container

RULE 3 — APP TITLE:
  Every top bar title must read "PARADOX 2026"
  Using: font-family 'Clash Display', font-size 18px, font-weight 700

RULE 4 — BOTTOM NAV (light pages: home, event detail, profile, maps):
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  border-top: 1px solid rgba(255,255,255,0.45)
  Active tab: icon #1a1408 + 5×5px red dot (#c0392b) below icon
  Inactive: icon #8a7a60
  No text labels, no dashed borders, no Connected badges

RULE 5 — BOTTOM NAV (dark page: timetable___schedule_page.html only):
  background: #1a1408
  Active tab: white icon + 2px white underline bar below icon
  Inactive: rgba(255,255,255,0.5) icon color

RULE 6 — CATEGORY BADGE COLORS (apply everywhere badges appear):
  WORKSHOP    → bg #fff4e6, text #854f0b
  TALK        → bg #e6f1fb, text #0c447c
  SPORTS      → bg #e1f5ee, text #085041
  COMPETITION → bg #fcebeb, text #791f1f
  SOCIAL      → bg #eeedfe, text #3c3489
  RESEARCH    → bg #eef7ff, text #042c53
  CYBER/OSINT → bg #faeeda, text #633806

RULE 7 — GLASS CARDS (apply to all floating cards, route panels, stat cards):
  background: rgba(255,250,240,0.55)
  backdrop-filter: blur(18px) saturate(180%)
  -webkit-backdrop-filter: blur(18px) saturate(180%)
  border: 1px solid rgba(255,255,255,0.45)

RULE 8 — REMOVE ALL STITCH ARTIFACTS:
  Delete every element with:
  - class containing "connected" (Stitch debug badges)
  - border-style: dashed on any card or nav item
  - Any "Connected" text badge injected by Stitch
  These are build artifacts, not real UI.

Output all 5 corrected files.
```

---

## Session workflow

| Session | File | Section to use |
|---------|------|----------------|
| 1 | `main_home_page.html` | Page 1 prompt |
| 2 | `timetable___schedule_page.html` | Page 2 prompt |
| 3 | `event_details_page.html` | Page 3 prompt |
| 4 | `maps_page.html` | Page 4 prompt |
| 5 | `profile_page.html` | Page 5 prompt |
| 6 | All 5 files | Cross-page consistency |

**After each session:**
1. Open the file in a browser
2. Screenshot it
3. Compare against the reference PNG listed at the top of that section
4. If something regressed, say exactly: *"Revert only [X] — everything else was correct"*
5. Save the working file before moving to the next session

---

## Quick reference — things that should be identical across all pages

| Element | Value |
|---------|-------|
| Page background | `#f5f0e8` |
| App title | `PARADOX 2026` in Clash Display 700 |
| Glass card bg | `rgba(255,250,240,0.55)` |
| Glass blur | `blur(18px) saturate(180%)` |
| Glass border | `1px solid rgba(255,255,255,0.45)` |
| Active nav dot | `5×5px, background #c0392b, border-radius 50%` |
| Inactive nav icon | `#8a7a60` |
| Active nav icon | `#1a1408` |
| Primary accent | `#c0392b` (Paradox red) |
| Time labels | JetBrains Mono, `#b8550a` |
| Section label caps | JetBrains Mono 10px 700, `#8a7a60`, uppercase |
| Heading font | Clash Display 700 |
| Body font | Inter 400/600 |

---

*Paradox 2026 · IIT Madras · Based on screenshots: main_home_page.png,
timetable___schedule_page.png, event_details_page.png, maps_page.png, profile_page.png*
