// Spatio-temporal event registry
let EVENTS = [];

async function loadEventsData() {
  try {
    const response = await fetch('src/data/paradoxStore.json');
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    const data = await response.json();
    EVENTS = data.events || [];
  } catch (error) {
    console.error("Failed to load events database, falling back to empty:", error);
    EVENTS = [];
  }
}

// Event Cover Photo mapping — maps normalized event name keywords to optimized WebP paths
const EVENT_COVERS = {
  // Culturals
  "anime jeopardy": "img/events/culturals/anime-jeopardy.webp",
  "anubhuti": "img/events/culturals/anubhuti.webp",
  "capitol conclave": "img/events/culturals/capitol-conclave.webp",
  "d2d": "img/events/culturals/dream2dance.webp",
  "dream2dance": "img/events/culturals/dream2dance.webp",
  "mr & mrs paradox": "img/events/culturals/mr-and-ms-paradox.webp",
  "mr and ms paradox": "img/events/culturals/mr-and-ms-paradox.webp",
  "paradox got talent": "img/events/culturals/paradox-got-talent.webp",
  "unwind": "img/events/culturals/paradox-unwind.webp",
  "pictionary art relay": "img/events/culturals/pictionary-art-relay.webp",
  "quotopia": "img/events/culturals/qutopia.webp",
  "rants and riffs": "img/events/culturals/rants-and-riffs.webp",
  "rapadox": "img/events/culturals/rapadox.webp",
  "samvaad": "img/events/culturals/samvaad-2.0.webp",
  "shutter safari": "img/events/culturals/shutter-safari.webp",
  "standup comedy": "img/events/culturals/standup-comedy.webp",
  "stand up comedy": "img/events/culturals/standup-comedy.webp",
  "youth parliament": "img/events/culturals/youth-parliament.webp",
  // Sports
  "burn club": "img/events/sports/burn-club.webp",
  "zumba": "img/events/sports/burn-club.webp",
  "chronos crossfire": "img/events/sports/chronos-crossfire.webp",
  "escape room": "img/events/sports/escape-room.webp",
  "hoop hustle": "img/events/sports/hoop-hustle.webp",
  "ipl auction": "img/events/sports/ipl-auction.webp",
  "kampus run": "img/events/sports/kampus-run.webp",
  "last1standing": "img/events/sports/last1standing.webp",
  "badminton league": "img/events/sports/paradox-badminton-league.webp",
  "paradox badminton": "img/events/sports/paradox-badminton-league.webp",
  "champions league": "img/events/sports/paradox-champion-leauge.webp",
  "paradox champions": "img/events/sports/paradox-champion-leauge.webp",
  "pocket arcade": "img/events/sports/pocket-arcade.webp",
  "premier league": "img/events/sports/ppl.webp",
  "ppl": "img/events/sports/ppl.webp",
  "ranneeti 5.0 bgmi": "img/events/sports/ranneeti-5.0-bgmi.webp",
  "bgmi": "img/events/sports/ranneeti-5.0-bgmi.webp",
  "ranneeti valorant": "img/events/sports/ranneeti-valorant.webp",
  "valorant": "img/events/sports/ranneeti-valorant.webp",
  "sprintsaga": "img/events/sports/sprint-saga.webp",
  "sprint saga": "img/events/sports/sprint-saga.webp",
  "squid games": "img/events/sports/squid-games.webp",
  "squid": "img/events/sports/squid-games.webp",
  "volleyvibes": "img/events/sports/volley-vibes.webp",
  "volley vibes": "img/events/sports/volley-vibes.webp",
  "yoga": "img/events/sports/yoga-2.webp",
  // Technical
  "circuit design": "img/events/technical/cdc.webp",
  "chromatix": "img/events/technical/chromatix_final.webp",
  "compassion": "img/events/technical/compassion-a-thon-2.webp",
  "goboxd": "img/events/technical/compassion-a-thon-2.webp",
  "crashlab": "img/events/technical/crashlab.webp",
  "dsa triathlon": "img/events/technical/dsa-trialthon__poster.webp",
  "dsa trialthon": "img/events/technical/dsa-trialthon__poster.webp",
  "echo prometheus": "img/events/technical/echo-prometheus_poster-3.webp",
  "echo//prometheus": "img/events/technical/echo-prometheus_poster-3.webp",
  "final lap": "img/events/technical/final_lap_formula_racing.webp",
  "formula racing": "img/events/technical/final_lap_formula_racing.webp",
  "gadgetxpo": "img/events/technical/gadgetxpo.webp",
  "logi": "img/events/technical/logi.webp",
  "logistically": "img/events/technical/logi.webp",
  "manch of traders": "img/events/technical/manch_of_traders.webp",
  "python coding": "img/events/technical/pcc.webp",
  "probably paradoxical": "img/events/technical/pp.webp",
  "research": "img/events/technical/research.webp",
  "robosoccer": "img/events/technical/robosoccer.webp",
  "ropewalker": "img/events/technical/ropewalker.webp",
  "syngenta": "img/events/technical/syngenta.webp",
  "we found you online": "img/events/technical/wefoundyouonline.webp"
};

// Fuzzy match event title to cover image path
function getEventCover(title) {
  if (!title) return null;
  const normalized = title.toLowerCase();
  // Try exact key match first
  for (const [key, path] of Object.entries(EVENT_COVERS)) {
    if (normalized.includes(key)) return path;
  }
  return null;
}

// Track-based gradient fallbacks for events without cover photos
const TRACK_GRADIENTS = {
  "sports": "linear-gradient(135deg, #14532D 0%, #166534 50%, #22c55e 100%)",
  "competition": "linear-gradient(135deg, #14532D 0%, #166534 50%, #22c55e 100%)",
  "culturals": "linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #F97316 100%)",
  "social": "linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #F97316 100%)",
  "workshop": "linear-gradient(135deg, #92400E 0%, #D97706 50%, #FBBF24 100%)",
  "research": "linear-gradient(135deg, #581c87 0%, #7e22ce 50%, #a855f7 100%)",
  "osint": "linear-gradient(135deg, #92400E 0%, #D97706 50%, #FBBF24 100%)"
};

const VENUES_DB = {
  "Entire_Campus": { name: "Gajendra Circle Center", x: 500, y: 500, q: "Gajendra Circle IIT Madras" },
  "OAT": { name: "Open Air Theatre", x: 620, y: 480, q: "Open Air Theatre IIT Madras" },
  "DoMS": { name: "Department of Management Studies", x: 410, y: 390, q: "Department of Management Studies IIT Madras" },
  "Biotech": { name: "Department of Biotechnology", x: 480, y: 290, q: "Department of Biotechnology IIT Madras" },
  "IC_SR": { name: "IC&SR Complex", x: 530, y: 420, q: "IC and SR Complex IIT Madras" },
  "SAC": { name: "Student Activity Center", x: 710, y: 550, q: "Student Activity Centre IIT Madras" },
  "Wadhwani": { name: "Wadhwani School of AI", x: 450, y: 440, q: "School of Data Science and AI IIT Madras" },
  "NAC2": { name: "NAC2 Block", x: 490, y: 360, q: "NAC2 Block IIT Madras" },
  "Campus_Hub": { name: "Campus Intelligence Hub", x: 500, y: 580, q: "Gajendra Circle IIT Madras" },
  "Himalaya": { name: "Himalaya Lawn", x: 680, y: 380, q: "Himalaya Lawn IIT Madras" },
  "Sports_Zone": { name: "Gymkhana Sports Zone", x: 720, y: 620, q: "Gymkhana IIT Madras" },
  "CLT": { name: "Central Lecture Theatre", x: 520, y: 460, q: "Central Lecture Theatre IIT Madras" },
  "MSB": { name: "Mechanical Sciences Block", x: 380, y: 450, q: "Mechanical Sciences Block IIT Madras" },
  "Quark": { name: "Quark Lab Block", x: 440, y: 320, q: "Department of Physics IIT Madras" },
  "UTIL": { name: "Utility Block", x: 460, y: 350, q: "Utility Block IIT Madras" },
  "Remote": { name: "Remote Portal", x: 0, y: 0, q: "" }
};

const VENUE_DOTS = {
  "Remote": "remote", "OAT": "olt", "DoMS": "olt", "Biotech": "olt",
  "IC_SR": "ic-sr", "SAC": "ic-sr", "Wadhwani": "wadhwani", "NAC2": "nac", 
  "Campus_Hub": "nac", "Himalaya": "remote", "Sports_Zone": "wadhwani",
  "CLT": "nac", "MSB": "olt", "Quark": "ic-sr", "UTIL": "nac"
};

// Dynamic Normalization of Venue names
function getVenueKey(venueName) {
  if (!venueName) return "Entire_Campus";
  const clean = venueName.toUpperCase();
  if (clean.includes("OAT") || clean.includes("THEATRE")) return "OAT";
  if (clean.includes("DOMS") || clean.includes("MANAGEMENT")) return "DoMS";
  if (clean.includes("BIOTECH") || clean.includes("BIOTECHNOLOGY") || clean.includes("RJN")) return "Biotech";
  if (clean.includes("ICSR") || clean.includes("IC&SR") || clean.includes("RMN") || clean.includes("RAMANUJAN")) return "IC_SR";
  if (clean.includes("SAC") || clean.includes("STUDENT ACTIVITY")) return "SAC";
  if (clean.includes("WADHWANI") || clean.includes("DATA SCIENCE") || clean.includes("AI")) return "Wadhwani";
  if (clean.includes("NAC")) return "NAC2";
  if (clean.includes("HIMALAYA")) return "Himalaya";
  if (clean.includes("GYMKHANA") || clean.includes("COURT") || clean.includes("STADIUM") || clean.includes("GROUND") || clean.includes("SITARA") || clean.includes("KV") || clean.includes("SANGAM") || clean.includes("RUN")) return "Sports_Zone";
  if (clean.includes("CLT") || clean.includes("LECTURE")) return "CLT";
  if (clean.includes("MSB") || clean.includes("CHEM")) return "MSB";
  if (clean.includes("QUARK")) return "Quark";
  if (clean.includes("UTIL") || clean.includes("UTILITY")) return "UTIL";
  if (clean.includes("REMOTE") || clean.includes("ONLINE") || clean.includes("PORTAL")) return "Remote";
  return "Entire_Campus";
}

const TRACK_BADGES = {
  "competition": "badge-competition", "research": "badge-research",
  "osint": "badge-osint", "workshop": "badge-workshop", "social": "badge-social"
};

const TRACK_LABELS = {
  "competition": "Competition", "research": "Research Phase",
  "osint": "OSINT", "workshop": "Workshop", "social": "Social & cultural"
};

// Client state model
let state = {
  booked: [],
  watching: [],
  customEvents: [],
  activeDay: 0,
  activeView: "schedule",
  conflicts: [],
  searchQuery: "",
  activeTrack: "all",
  simulators: {
    quizCompleted: false,
    paperSubmitted: false
  },
  settings: {
    theme: "light", // Default to light warm cream
    walkSpeed: 80,
    mapZoom: 15,
    viewMode: "detail",
    simulateTime: false,
    mapMode: "offline",
    notificationsEnabled: false
  },
  hiddenEvents: [],
  notes: {},
  dismissedNotifications: []
};

// Load state from local storage cache
try {
  const saved = JSON.parse(localStorage.getItem("paradox_mobile_settings") || "{}");
  if (saved) {
    if (saved.booked) state.booked = saved.booked;
    if (saved.watching) state.watching = saved.watching;
    if (saved.customEvents) state.customEvents = saved.customEvents;
    if (saved.simulators) state.simulators = saved.simulators;
    if (saved.settings) state.settings = { ...state.settings, ...saved.settings };
    if (saved.hiddenEvents) state.hiddenEvents = saved.hiddenEvents;
    if (saved.notes) state.notes = saved.notes;
    if (saved.dismissedNotifications) state.dismissedNotifications = saved.dismissedNotifications;
  }
} catch(e) {
  console.warn("Storage restore error:", e);
}

function saveState() {
  try {
    localStorage.setItem("paradox_mobile_settings", JSON.stringify({
      booked: state.booked,
      watching: state.watching,
      customEvents: state.customEvents,
      simulators: state.simulators,
      settings: state.settings,
      hiddenEvents: state.hiddenEvents,
      notes: state.notes,
      dismissedNotifications: state.dismissedNotifications
    }));
  } catch(e) {
    console.warn("Storage save error:", e);
  }
}

function getEventsRegistry() {
  return [...EVENTS, ...state.customEvents];
}

// Stable Y scroll coordinate resolver
function getAbsoluteOffsetTop(element) {
  let top = 0;
  while (element) {
    top += element.offsetTop;
    element = element.offsetParent;
  }
  return top;
}

// Time calculations helper: parse AM/PM string into absolute minutes of day
function timeStringToMinutes(timeStr) {
  if (!timeStr) return 0;
  const clean = timeStr.trim().toUpperCase();
  const match = clean.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!match) return 0;
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const ampm = match[3];
  if (ampm === "PM" && hours < 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function getEventTimeRange(ev) {
  if (!ev || !ev.time) return { start: 0, end: 1440 };
  const matches = ev.time.match(/(\d+):(\d+)\s*(AM|PM)/gi);
  if (!matches || matches.length === 0) {
    return { start: 0, end: 1440 };
  }
  const start = timeStringToMinutes(matches[0]);
  let end = start + 60; // Default duration: 60 minutes
  if (matches.length >= 2) {
    end = timeStringToMinutes(matches[1]);
  }
  return { start, end };
}

// Evaluate time overlaps for booked items
function evaluateConflicts() {
  const allEvents = getEventsRegistry();
  state.conflicts = [];
  const bookedEvs = allEvents.filter(e => state.booked.includes(e.id));
  
  for (let i = 0; i < bookedEvs.length; i++) {
    for (let j = i + 1; j < bookedEvs.length; j++) {
      const evA = bookedEvs[i];
      const evB = bookedEvs[j];
      
      if (evA.day === evB.day) {
        const rangeA = getEventTimeRange(evA);
        const rangeB = getEventTimeRange(evB);
        
        // Overlap check: startA < endB && startB < endA
        if (rangeA.start < rangeB.end && rangeB.start < rangeA.end) {
          state.conflicts.push({
            events: [evA, evB],
            msg: `"${evA.title.substring(0, 24)}..." and "${evB.title.substring(0, 24)}..." overlap on ${evA.day} (${evA.time} vs ${evB.time}).`
          });
        }
      }
    }
  }
}

// Calculate Euclidean distance walk travel times and warnings
function evaluateTransitWarnings() {
  const allEvents = getEventsRegistry();
  // Only check physical booked events
  const bookedEvs = allEvents.filter(e => state.booked.includes(e.id) && e.venue !== "Remote");
  const walkSpeed = state.settings.walkSpeed || 80;
  
  bookedEvs.sort((a, b) => {
    const dayOrder = { "Jun 09": 1, "Jun 10": 2, "Jun 11": 3, "Jun 12": 4, "Jun 13": 5, "Jun 14": 6 };
    if (dayOrder[a.day] !== dayOrder[b.day]) return dayOrder[a.day] - dayOrder[b.day];
    const rA = getEventTimeRange(a);
    const rB = getEventTimeRange(b);
    return rA.start - rB.start;
  });

  const warningEl = document.getElementById("transit-warning");
  const svgTransitLine = document.getElementById("svg-transit-line");
  let foundConflict = false;

  for (let i = 0; i < bookedEvs.length - 1; i++) {
    const evA = bookedEvs[i];
    const evB = bookedEvs[i + 1];

    if (evA.day === evB.day && evA.venue !== evB.venue) {
      const rangeA = getEventTimeRange(evA);
      const rangeB = getEventTimeRange(evB);
      
      const timeGap = rangeB.start - rangeA.end;
      // Trigger transit warning if back-to-back within 30 minutes
      if (timeGap >= 0 && timeGap <= 30) {
        const posA = VENUES_DB[getVenueKey(evA.venue)];
        const posB = VENUES_DB[getVenueKey(evB.venue)];
        
        if (posA && posB) {
          const dx = posB.x - posA.x;
          const dy = posB.y - posA.y;
          const distPixel = Math.sqrt(dx*dx + dy*dy);
          const distMeters = Math.round(distPixel * 2); // 1px = ~2 meters
          const walkTime = Math.round(distMeters / walkSpeed);
          
          if (distPixel > 100) { // significant walk
            foundConflict = true;
            const isOvertime = walkTime > timeGap;
            const gmapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(posA.q)}&destination=${encodeURIComponent(posB.q)}&travelmode=walking`;
            
            if (isOvertime) {
              warningEl.classList.add("critical");
              warningEl.querySelector("#transit-text-content").innerHTML = `
                <strong>CRITICAL WALKING ALERT:</strong> Ineligible transit path from <strong>${evA.venue}</strong> to <strong>${evB.venue}</strong>.<br/>
                Walk time (~${walkTime} mins / ${distMeters}m) exceeds break window (${timeGap} mins).<br/>
                <a class="maps-link" href="${gmapsDirectionUrl}" target="_blank" style="color:var(--red); font-weight:700">Calculate GPS Walk Path ↗</a>
              `;
            } else {
              warningEl.classList.remove("critical");
              warningEl.querySelector("#transit-text-content").innerHTML = `
                <strong>Transit Notice:</strong> Back-to-back classes at different buildings (${evA.venue} ➔ ${evB.venue}).<br/>
                Walking distance is ~${distMeters}m taking ~${walkTime} mins. Time gap is ${timeGap} mins.<br/>
                <a class="maps-link" href="${gmapsDirectionUrl}" target="_blank" style="font-weight:700">Calculate GPS Walk Path ↗</a>
              `;
            }
            
            // Draw walk path on SVG offline map
            if (svgTransitLine) {
              const midX = (posA.x + posB.x) / 2;
              const midY = (posA.y + posB.y) / 2 - 35; // arc curve control offset
              svgTransitLine.setAttribute("d", `M ${posA.x} ${posA.y} Q ${midX} ${midY} ${posB.x} ${posB.y}`);
              svgTransitLine.style.display = "block";
            }
            break; // Render the first back-to-back warning
          }
        }
      }
    }
  }

  if (!foundConflict) {
    warningEl.style.display = "none";
    if (svgTransitLine) {
      svgTransitLine.style.display = "none";
    }
  } else {
    warningEl.style.display = "flex";
  }
}

// Google Maps & SVG Offline Map switches
let lastLoadedMapSrc = "";
let mapScale = 1.0;
let mapPanX = 0;
let mapPanY = 0;

function focusMapVenue(venueKey, forceLiveUpdate = false) {
  const select = document.getElementById("map-focus-select");
  if (select) select.value = venueKey;

  const venue = VENUES_DB[venueKey];
  if (!venue) return;

  if (state.settings.mapMode === "live") {
    const gmapsIframe = document.getElementById("gmaps-viewport-iframe");
    const label = document.getElementById("gmaps-selected-label");
    const navLink = document.getElementById("gmaps-external-nav");
    const loader = document.getElementById("map-loader");
    const zoom = state.settings.mapZoom || 15;
    let newSrc = "";

    if (venueKey === "Entire_Campus" || !venue.q) {
      newSrc = `https://maps.google.com/maps?q=Indian%20Institute%20of%20Technology%20Madras&t=&z=${zoom - 1}&ie=UTF8&iwloc=&output=embed`;
      label.textContent = "Selected: IITM Campus";
      navLink.setAttribute("href", "https://www.google.com/maps/search/?api=1&query=IIT+Madras");
    } else {
      newSrc = `https://maps.google.com/maps?q=${encodeURIComponent(venue.q)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
      label.textContent = `Selected: ${venue.name}`;
      navLink.setAttribute("href", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.q)}`);
    }

    if (lastLoadedMapSrc !== newSrc || forceLiveUpdate) {
      if (loader) loader.style.display = "flex";
      gmapsIframe.src = newSrc;
      lastLoadedMapSrc = newSrc;
      gmapsIframe.onload = () => {
        if (loader) loader.style.display = "none";
      };
    }
  } else {
    // Focus SVG map
    focusSVGMapVenue(venueKey);
  }
}

// Center/focus SVG on coordinate
function focusSVGMapVenue(venueKey) {
  document.querySelectorAll(".map-pin").forEach(p => p.classList.remove("selected"));

  const venue = VENUES_DB[venueKey];
  if (!venue) return;

  const pin = document.getElementById("svg-pin-" + venueKey);
  if (pin) pin.classList.add("selected");

  const label = document.getElementById("gmaps-selected-label");
  if (label) {
    label.textContent = venueKey === "Entire_Campus" ? "Selected: IITM Campus" : `Selected: ${venue.name}`;
  }

  const navLink = document.getElementById("gmaps-external-nav");
  if (navLink) {
    if (venueKey === "Entire_Campus" || !venue.q) {
      navLink.setAttribute("href", "https://www.google.com/maps/search/?api=1&query=IIT+Madras");
    } else {
      navLink.setAttribute("href", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.q)}`);
    }
  }

  const mapWrapper = document.getElementById("svg-map-wrapper");
  if (!mapWrapper) return;

  const rect = mapWrapper.getBoundingClientRect();
  const W = rect.width || 388;
  const H = rect.height || 380;

  if (venueKey === "Entire_Campus") {
    mapScale = 1.0;
    mapPanX = 0;
    mapPanY = 0;
  } else {
    mapScale = 2.2;
    const ratio = W / 1000;
    mapPanX = (W / 2) - (venue.x * ratio * mapScale);
    mapPanY = (H / 2) - (venue.y * ratio * mapScale);
  }

  updateSVGTransform();
}

function updateSVGTransform() {
  const svgEl = document.getElementById("svg-campus-map");
  if (svgEl) {
    svgEl.style.transform = `translate(${mapPanX}px, ${mapPanY}px) scale(${mapScale})`;
  }
}

// Map pin click handler
function onMapPinClick(venueKey) {
  const select = document.getElementById("map-focus-select");
  if (select) {
    select.value = venueKey;
    focusMapVenue(venueKey);
  }
}

// Zoom / Center floating buttons
function zoomMapBtn(factor) {
  const mapWrapper = document.getElementById("svg-map-wrapper");
  if (!mapWrapper) return;
  const rect = mapWrapper.getBoundingClientRect();
  const midX = rect.width / 2;
  const midY = rect.height / 2;
  zoomToPoint(midX, midY, factor);
}

function zoomToPoint(x, y, factor) {
  const oldScale = mapScale;
  mapScale = Math.max(0.8, Math.min(5, mapScale * factor));
  mapPanX = x - (x - mapPanX) * (mapScale / oldScale);
  mapPanY = y - (y - mapPanY) * (mapScale / oldScale);
  updateSVGTransform();
}

function resetMapTransform() {
  mapScale = 1.0;
  mapPanX = 0;
  mapPanY = 0;
  updateSVGTransform();
  
  const select = document.getElementById("map-focus-select");
  if (select) select.value = "Entire_Campus";
  
  document.querySelectorAll(".map-pin").forEach(p => p.classList.remove("selected"));
  
  const label = document.getElementById("gmaps-selected-label");
  if (label) label.textContent = "Selected: IITM Campus";
}

// Dual map mode toggle
function toggleMapMode() {
  if (state.settings.mapMode === "live") {
    state.settings.mapMode = "offline";
  } else {
    state.settings.mapMode = "live";
  }
  saveState();
  updateMapModeUI();
}

function updateMapModeUI() {
  const toggleBtn = document.getElementById("map-mode-toggle");
  const svgMapWrap = document.getElementById("svg-map-wrapper");
  const gmapsContainer = document.getElementById("google-map-iframe-container");
  const select = document.getElementById("map-focus-select");
  const selectedVenue = select ? select.value : "Entire_Campus";

  if (state.settings.mapMode === "live") {
    if (toggleBtn) {
      toggleBtn.innerHTML = `<i class="ti ti-map-2" aria-hidden="true"></i> <span>Switch to Offline Map</span>`;
    }
    if (svgMapWrap) svgMapWrap.style.display = "none";
    if (gmapsContainer) gmapsContainer.style.display = "block";
    focusMapVenue(selectedVenue, true);
  } else {
    if (toggleBtn) {
      toggleBtn.innerHTML = `<i class="ti ti-world" aria-hidden="true"></i> <span>Switch to Google Maps</span>`;
    }
    if (svgMapWrap) svgMapWrap.style.display = "block";
    if (gmapsContainer) gmapsContainer.style.display = "none";
    
    // Clear live iframe to save bandwidth
    const gmapsIframe = document.getElementById("gmaps-viewport-iframe");
    if (gmapsIframe) {
      gmapsIframe.removeAttribute("src");
      lastLoadedMapSrc = "";
    }
    
    focusMapVenue(selectedVenue);
  }
}

// Update SVG pin status colors dynamically
function updateSVGMapPinsState() {
  const allEvents = getEventsRegistry();
  const days = window.DAYS_NAMES || ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const day = days[state.activeDay];

  let activeDayEvents = allEvents;
  if (state.activeDay !== 0) {
    activeDayEvents = allEvents.filter(e => e.day === day);
  }

  for (const [key, venue] of Object.entries(VENUES_DB)) {
    const pin = document.getElementById("svg-pin-" + key);
    if (!pin) continue;

    pin.classList.remove("has-active-event", "has-watched-event");

    if (key === "Entire_Campus") continue;

    const venueEvents = activeDayEvents.filter(e => getVenueKey(e.venue) === key);
    const hasBooked = venueEvents.some(e => state.booked.includes(e.id));
    const hasWatched = venueEvents.some(e => state.watching.includes(e.id));

    if (hasBooked) {
      pin.classList.add("has-active-event");
    } else if (hasWatched) {
      pin.classList.add("has-watched-event");
    }
  }
}

// Card expand control with spring transition
function toggleCardExpand(cardEl, evId, e) {
  // Prevent expanding if clicking interactive elements inside expanded content
  if (e.target.closest('.event-actions') || e.target.closest('.maps-link') || e.target.closest('.action-pill') || e.target.closest('.event-notes-section') || e.target.closest('.event-cover-wrap')) {
    return;
  }

  const isExpanded = cardEl.classList.contains('expanded');
  
  // Collapse all other cards first
  document.querySelectorAll('.event-card').forEach(c => {
    c.classList.remove('expanded');
  });

  // Toggle target card expanded class
  if (!isExpanded) {
    cardEl.classList.add('expanded');
    
    // Smoothly scroll the card into view below the sticky header and tabs
    setTimeout(() => {
      const topOffset = 180;
      const offsetPosition = getAbsoluteOffsetTop(cardEl) - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 100);

    // Lazy-load cover image on expand
    const coverImg = cardEl.querySelector('.event-cover-img[data-src]');
    if (coverImg && !coverImg.src) {
      coverImg.src = coverImg.dataset.src;
      coverImg.onload = () => coverImg.classList.add('loaded');
      coverImg.onerror = () => {
        coverImg.style.display = 'none';
        const fallback = cardEl.querySelector('.event-cover-fallback');
        if (fallback) fallback.style.display = 'block';
      };
    }
  }
}

// Fullscreen lightbox for cover photos
function openCoverLightbox(imgSrc, title) {
  const overlay = document.createElement('div');
  overlay.className = 'cover-lightbox';
  overlay.innerHTML = `
    <div class="cover-lightbox-inner">
      <button class="cover-lightbox-close" onclick="this.parentElement.parentElement.remove()"><i class="ti ti-x"></i></button>
      <img src="${imgSrc}" alt="${title || 'Event Cover'}">
      ${title ? `<div class="cover-lightbox-title">${title}</div>` : ''}
    </div>`;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);
}

// Save per-event notes
function saveNote(evId, text) {
  if (text && text.trim()) {
    state.notes[evId] = text;
  } else {
    delete state.notes[evId];
  }
  saveState();
}

// Centering Map directly from card button
function focusMapFromCard(venue, e) {
  if (e) e.stopPropagation();
  const key = getVenueKey(venue);
  switchView('map');
  focusMapVenue(key);
  triggerToast(`Map focused on ${VENUES_DB[key]?.name || venue}`);
}

// UI RENDERERS
function createEventCardElement(ev, index) {
  const isBooked = state.booked.includes(ev.id);
  const isWatching = state.watching.includes(ev.id);
  const hasConflict = state.conflicts.some(c => c.events.some(e => e.id === ev.id));

  const timeText = ev.time || "Time TBA";
  const venueText = ev.venue || "Venue TBA";
  const descText = ev.desc || "No description available.";
  const trackText = ev.track || "competition";

  const cardClass = `event-card${isBooked ? " booked" : isWatching ? " watching" : ""}${hasConflict && isBooked ? " conflict-marker" : ""}`;
  const vkey = getVenueKey(venueText);
  const vdot = VENUE_DOTS[vkey] || "";
  const badge = TRACK_BADGES[trackText] || "badge-competition";
  const blabel = TRACK_LABELS[trackText] || trackText;
  const isCustom = ev.id.toString().startsWith("custom-event-") || ev.id > 1000;
  const coverPath = getEventCover(ev.title);
  
  const card = document.createElement("div");
  card.className = cardClass;
  card.dataset.id = ev.id;
  card.setAttribute("onclick", `toggleCardExpand(this, '${ev.id}', event)`);
  card.setAttribute("onpointerdown", `cardPointerDown(event, this, '${ev.id}', \`${(ev.title || "Untitled").replace(/'/g, "\\'")}\`, \`${timeText}\`, \`${venueText.replace(/'/g, "\\'")}\`)`);
  
  card.style.animationDelay = `${index * 40}ms`;

  // Stamp cover URL for compact background-wash and expanded atmospheric blur
  if (coverPath) {
    card.dataset.cover = '1';
    card.style.setProperty('--card-cover-url', `url('${coverPath}')`);
  }

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueText + ", IIT Madras, Chennai")}`;

  card.innerHTML = `
    <div class="swipe-overlay swipe-added">Booked ✓</div>

    <div class="event-card-header">
      <span class="event-time"><i class="ti ti-clock" style="font-size:10px;vertical-align:-1px;margin-right:2px"></i>${ev.day || "Day TBA"} · ${timeText}</span>
      <span class="event-badge ${badge}">${blabel}</span>
      <span class="category-dot dot-${trackText}" title="${blabel}"></span>
    </div>
    <div class="event-title">${ev.title || "Untitled Event"}</div>
    
    <div class="venue-tag" style="margin-top: 4px;" onclick="focusMapFromCard('${venueText.replace(/'/g, "\\'")}', event)">
      <span class="venue-dot ${vdot}"></span>
      <span class="venue-name-span" style="text-decoration: underline; cursor: pointer;">${venueText}</span>
    </div>
    
    <div class="event-card-details">
      <div class="event-card-details-inner">
        ${coverPath ? `
        <div class="event-cover-wrap" onclick="event.stopPropagation(); openCoverLightbox('${coverPath}', '${(ev.title || '').replace(/'/g, "\\'")}')"> 
          <img class="event-cover-img" data-src="${coverPath}" alt="${ev.title || 'Event Cover'}" loading="lazy">
          <div class="event-cover-fallback" style="background:${TRACK_GRADIENTS[trackText] || TRACK_GRADIENTS['competition']}"></div>
        </div>` : `
        <div class="event-cover-wrap event-cover-mini">
          <div class="event-cover-fallback active" style="background:${TRACK_GRADIENTS[trackText] || TRACK_GRADIENTS['competition']}">
            <i class="ti ti-calendar-event" style="font-size:28px;color:rgba(255,255,255,0.4)"></i>
          </div>
        </div>`}
        <div class="event-desc">${descText}</div>
        <div class="event-notes-section" onclick="event.stopPropagation()">
          <label class="form-label" style="margin-bottom:4px"><i class="ti ti-notebook" style="font-size:11px;margin-right:3px"></i>MY NOTES</label>
          <textarea class="event-notes-input" placeholder="Jot something down…" oninput="saveNote('${ev.id}', this.value)">${state.notes[ev.id] || ''}</textarea>
        </div>
        <div class="event-footer" onclick="event.stopPropagation()">
          <div style="display:flex; flex-direction:column; gap:4px">
            ${venueText !== "Remote" ? `<a class="maps-link" href="${mapsHref}" target="_blank" rel="noopener noreferrer"><i class="ti ti-map-pin" style="font-size:11px" aria-hidden="true"></i>Navigate ↗</a>` : ""}
          </div>
          <div class="event-actions">
            ${isCustom ? `<button class="action-pill" onclick="deleteCustomEvent('${ev.id}', event)" style="color:var(--red); border-color:var(--red); padding:6px 10px;"><i class="ti ti-trash" style="font-size:11px" aria-hidden="true"></i></button>` : ""}
            ${venueText !== "Remote" ? `<button class="action-pill" style="border-color:var(--primary); color:var(--primary);" onclick="focusMapFromCard('${venueText.replace(/'/g, "\\'")}', event)"><i class="ti ti-map-2" style="font-size:11px;margin-right:2px" aria-hidden="true"></i>Map</button>` : ""}
            <button class="action-pill ${isWatching ? "watched" : "watch"}" onclick="toggleWatchlist('${ev.id}', event)">${isWatching ? "Watching" : "Watch"}</button>
            <button class="action-pill ${isBooked ? "booked" : "book"}" onclick="toggleBooking('${ev.id}', event)">${isBooked ? "Booked" : "Book"}</button>
          </div>
        </div>
      </div>
    </div>`;
  return card;
}

function renderUI() {
  const allEvents = getEventsRegistry();
  const days = window.DAYS_NAMES || ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const day = days[state.activeDay];
  
  // 1. Calculate alerts and counters (always needed for dashboard/navigation badges)
  let outstanding = 0;
  if (!state.simulators.quizCompleted) outstanding++;
  if (!state.simulators.paperSubmitted) outstanding++;
  
  const urgentBanner = document.getElementById("urgent-banner");
  const notifDot = document.getElementById("notif-dot");
  const alertBadgeCount = document.getElementById("urgent-count-text");

  const transitWarningEl = document.getElementById("transit-warning");
  const hasTransitWarning = transitWarningEl && transitWarningEl.style.display === "flex";
  const activeNotices = typeof getNotificationsList === "function" ? getNotificationsList() : [];
  const hasUndismissedNotices = activeNotices.length > 0;

  const alertsSignature = `${outstanding}-${hasTransitWarning ? 'Y' : 'N'}-${state.conflicts.length}-${activeNotices.map(n => n.id).join(",")}`;
  if (state.lastAlertsSignature !== alertsSignature) {
    state.notifBadgeCleared = false;
    state.lastAlertsSignature = alertsSignature;
  }

  if (hasUndismissedNotices && !state.notifBadgeCleared) {
    if (notifDot) notifDot.style.display = "block";
  } else {
    if (notifDot) notifDot.style.display = "none";
  }

  if (outstanding > 0) {
    if (urgentBanner) urgentBanner.style.display = "flex";
    if (alertBadgeCount) alertBadgeCount.textContent = outstanding;
  } else {
    if (urgentBanner) urgentBanner.style.display = "none";
  }

  // Update counters in Dashboard
  const statBookedEl = document.getElementById("stat-booked");
  const statWatchingEl = document.getElementById("stat-watching");
  const statConflictsEl = document.getElementById("stat-conflicts");
  
  if (statBookedEl) statBookedEl.textContent = state.booked.length;
  if (statWatchingEl) statWatchingEl.textContent = state.watching.length;
  if (statConflictsEl) statConflictsEl.textContent = state.conflicts.length;
  
  // Update saved events & total hours dashboard metrics directly if no animation ticker is active
  if (typeof updateProfileMetricsDirectly === "function") {
    updateProfileMetricsDirectly();
  }
  
  // Update nav conflicts dot
  const navConflictDot = document.getElementById("nav-conflict-dot");
  if (navConflictDot) {
    navConflictDot.style.display = state.conflicts.length > 0 ? "block" : "none";
  }
  
  const navConflict = document.getElementById("nav-conflicts");
  if (navConflict) {
    if (state.conflicts.length > 0) {
      navConflict.style.color = "var(--red)";
    } else {
      navConflict.style.color = state.activeView === "conflicts" ? "var(--primary)" : "var(--muted)";
    }
  }

  // Now/Next Refresh
  renderNowNextPanel();

  // 2. View-Targeted Rendering: only touch DOM elements for the active tab view
  if (state.activeView === "schedule") {
    renderScheduleView(allEvents, days, day);
  } else if (state.activeView === "myplan") {
    renderMyPlanView(allEvents);
  } else if (state.activeView === "conflicts") {
    renderConflictsView();
  }
  
  // Update SVG Map Pins State
  updateSVGMapPinsState();
}

function renderScheduleView(allEvents, days, day) {
  const listContainer = document.getElementById("events-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  // 1. Filtering by Day, Track, Search Query, and Hidden (Swipe Left)
  let filtered = allEvents;
  if (state.activeDay !== 0) {
    filtered = filtered.filter(e => e.day === day);
  }
  if (state.activeTrack !== "all") {
    filtered = filtered.filter(e => e.track === state.activeTrack);
  }
  if (state.hiddenEvents && state.hiddenEvents.length > 0) {
    filtered = filtered.filter(e => !state.hiddenEvents.includes(e.id));
  }
  
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(e => {
      const titleMatches = (e.title || "").toLowerCase().includes(q);
      const rawVenueMatches = (e.venue || "").toLowerCase().includes(q);
      const trackMatches = (e.track || "").toLowerCase().includes(q);
      const descMatches = (e.desc || "").toLowerCase().includes(q);
      
      // Resolve venue details for matching abbreviations
      const vKey = getVenueKey(e.venue);
      const resolvedVenue = VENUES_DB[vKey];
      const resolvedVenueName = resolvedVenue ? (resolvedVenue.name || "").toLowerCase() : "";
      const resolvedVenueQ = resolvedVenue ? (resolvedVenue.q || "").toLowerCase() : "";
      
      const venueResolvedMatches = resolvedVenueName.includes(q) || resolvedVenueQ.includes(q);
      
      return titleMatches || rawVenueMatches || venueResolvedMatches || trackMatches || descMatches;
    });
  }
  
  // 2. Sorting Chronologically
  filtered.sort((a, b) => {
    const timeA = getEventTimeRange(a).start;
    const timeB = getEventTimeRange(b).start;
    return timeA - timeB;
  });

  const listLabel = document.getElementById("list-label");
  if (listLabel) {
    let activeTrackLabel = state.activeTrack === "all" ? "All Tracks" : state.activeTrack.toUpperCase();
    listLabel.textContent = state.activeDay === 0 
      ? `Filtered: ${filtered.length} Events (${activeTrackLabel})` 
      : `${day} · ${filtered.length} Events (${activeTrackLabel})`;
  }
  
  // 3. Render Timeline Jump Bar pills
  renderTimelineJumpBar(filtered, day);

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <i class="ti ti-calendar-off" aria-hidden="true"></i>
        <p>No events match — try clearing a filter</p>
      </div>`;
    return;
  }

  // Grouping events by starting time blocks for visual slot headers
  let lastTimeBlock = "";
  let currentGroupEl = null;
  let currentGroupContentEl = null;
  
  // Find default active slot to expand (closest to simulated/current minutes)
  const now = getNow();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentDayName = days[now.getMonth() === 5 && now.getDate() >= 9 && now.getDate() <= 14 ? now.getDate() - 8 : 2]; // default Jun 10

  let closestSlotId = "";
  if (day === currentDayName && filtered.length > 0) {
    let minDiff = Infinity;
    const uniqueTimes = [...new Set(filtered.map(ev => {
      const t = ev.time || "";
      return t.split(/[–-]/)[0].trim();
    }))];
    uniqueTimes.forEach(tStr => {
      const slotMins = timeStringToMinutes(tStr);
      const diff = Math.abs(slotMins - currentMinutes);
      if (diff < minDiff) {
        minDiff = diff;
        closestSlotId = `${day.replace(' ', '')}-${tStr.replace(':', '').replace(' ', '')}`;
      }
    });
  }
  if (!closestSlotId && filtered.length > 0) {
    const t = filtered[0].time || "";
    const firstTStr = t.split(/[–-]/)[0].trim();
    closestSlotId = `${day.replace(' ', '')}-${firstTStr.replace(':', '').replace(' ', '')}`;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((ev, idx) => {
    const t = ev.time || "";
    const startStr = t.split(/[–-]/)[0].trim();
    const slotId = `${ev.day.replace(' ', '')}-${startStr.replace(':', '').replace(' ', '')}`;
    
    if (startStr !== lastTimeBlock) {
      lastTimeBlock = startStr;
      
      // Count cards in this slot
      const slotCount = filtered.filter(e => e.day === ev.day && (e.time || "").split(/[–-]/)[0].trim() === startStr).length;
      
      // Create time slot group wrapper
      currentGroupEl = document.createElement("div");
      currentGroupEl.className = "time-slot-group";
      currentGroupEl.id = `group-${slotId}`;
      currentGroupEl.dataset.slot = slotId;
      
      // Read collapse state from sessionStorage
      let isCollapsed = false;
      try {
        const storedVal = sessionStorage.getItem(`paradox_collapsed_${slotId}`);
        if (storedVal !== null) {
          isCollapsed = (storedVal === "true");
        } else {
          isCollapsed = (slotId !== closestSlotId);
        }
      } catch (err) {
        isCollapsed = (slotId !== closestSlotId);
      }
      
      if (isCollapsed) {
        currentGroupEl.classList.add("collapsed");
      }
      
      // Create Header
      const header = document.createElement("div");
      header.className = "time-slot-header";
      header.id = `header-${slotId}`;
      header.setAttribute("onclick", `toggleTimeSlot('${slotId}', event)`);
      header.innerHTML = `
        <div class="time-slot-header-left">
          <i class="ti ti-clock-play" aria-hidden="true"></i>
          <span class="time-slot-time">${startStr}</span>
          <span class="time-slot-label-slots"> Slots</span>
          <span class="time-slot-badge-count"> · ${slotCount} events</span>
        </div>
        <i class="time-slot-chevron ti ti-chevron-down" aria-hidden="true"></i>
      `;
      
      // Create Content Area
      currentGroupContentEl = document.createElement("div");
      currentGroupContentEl.className = "time-slot-content";
      
      currentGroupEl.appendChild(header);
      currentGroupEl.appendChild(currentGroupContentEl);
      fragment.appendChild(currentGroupEl);
    }
    
    const card = createEventCardElement(ev, idx);
    if (currentGroupContentEl) {
      currentGroupContentEl.appendChild(card);
    }
  });
  
  listContainer.appendChild(fragment);
  
  // Initialize IntersectionObserver for scroll pills
  setTimeout(initSlotObserver, 150);
}

function renderMyPlanView(allEvents) {
  const bookedList = document.getElementById("booked-list");
  if (bookedList) {
    bookedList.innerHTML = "";
    const bookedEvents = allEvents.filter(e => state.booked.includes(e.id) && !state.hiddenEvents?.includes(e.id));
    if (bookedEvents.length === 0) {
      bookedList.innerHTML = `
        <div class="empty-state" style="padding: 30px 10px;">
          <i class="ti ti-bookmark" aria-hidden="true"></i>
          <p>Your calendar is empty. Tap "Book" or swipe right on any event.</p>
        </div>`;
    } else {
      const bookedFragment = document.createDocumentFragment();
      bookedEvents.forEach((ev, idx) => {
        const card = createEventCardElement(ev, idx);
        bookedFragment.appendChild(card);
      });
      bookedList.appendChild(bookedFragment);
    }
  }
  
  const watchList = document.getElementById("watch-list");
  if (watchList) {
    watchList.innerHTML = "";
    const watchEvents = allEvents.filter(e => state.watching.includes(e.id) && !state.hiddenEvents?.includes(e.id));
    if (watchEvents.length === 0) {
      watchList.innerHTML = `
        <div class="empty-state" style="padding: 30px 10px;">
          <i class="ti ti-eye" aria-hidden="true"></i>
          <p>Your watchlist is empty.</p>
        </div>`;
    } else {
      const watchFragment = document.createDocumentFragment();
      watchEvents.forEach((ev, idx) => {
        const card = createEventCardElement(ev, idx);
        watchFragment.appendChild(card);
      });
      watchList.appendChild(watchFragment);
    }
  }
}

function renderConflictsView() {
  const conflictsContainer = document.getElementById("conflicts-list");
  if (conflictsContainer) {
    conflictsContainer.innerHTML = "";
    if (state.conflicts.length === 0) {
      conflictsContainer.innerHTML = `
        <div class="empty-state">
          <i class="ti ti-circle-check" aria-hidden="true" style="color:var(--teal)"></i>
          <p>All clear! No schedule conflicts detected.</p>
        </div>`;
    } else {
      const conflictsFragment = document.createDocumentFragment();
      state.conflicts.forEach(c => {
        const card = document.createElement("div");
        card.className = "conflict-card";
        card.innerHTML = `
          <div class="conflict-title">
            <i class="ti ti-alert-triangle" aria-hidden="true" style="font-size:15px; color:var(--red)"></i>Schedule Clash Detected
          </div>
          <div class="conflict-meta">${c.msg}</div>
        `;
        conflictsFragment.appendChild(card);
      });
      conflictsContainer.appendChild(conflictsFragment);
    }
  }
}

function toggleBooking(id, e) {
  if (e) e.stopPropagation();
  const castId = isNaN(id) ? id : parseInt(id);

  // Remove from watchlist if booking
  state.watching = state.watching.filter(x => x !== castId);
  
  const allEvents = getEventsRegistry();
  const ev = allEvents.find(x => x.id === castId);
  const titleText = ev ? ev.title : "Event";
  
  if (state.booked.includes(castId)) {
    state.booked = state.booked.filter(x => x !== castId);
    triggerToast("Removed event booking.");
    sendBrowserNotification("Event Removed", `Cancelled booking for: ${titleText}`);
  } else {
    state.booked.push(castId);
    triggerToast("Event successfully booked!");
    sendBrowserNotification("Event Booked", `Successfully booked: ${titleText}`);
  }
  
  evaluateConflicts();
  evaluateTransitWarnings();
  saveState();
  renderUI();
}

function toggleWatchlist(id, e) {
  if (e) e.stopPropagation();
  const castId = isNaN(id) ? id : parseInt(id);

  // Remove from bookings if adding to watchlist
  state.booked = state.booked.filter(x => x !== castId);
  
  const allEvents = getEventsRegistry();
  const ev = allEvents.find(x => x.id === castId);
  const titleText = ev ? ev.title : "Event";
  
  if (state.watching.includes(castId)) {
    state.watching = state.watching.filter(x => x !== castId);
    triggerToast("Removed from watchlist.");
    sendBrowserNotification("Watchlist Removed", `Removed from watchlist: ${titleText}`);
  } else {
    state.watching.push(castId);
    triggerToast("Added to watchlist.");
    sendBrowserNotification("Watchlist Added", `Added to watchlist: ${titleText}`);
  }
  
  evaluateConflicts();
  evaluateTransitWarnings();
  saveState();
  renderUI();
}

function deleteCustomEvent(id, e) {
  if (e) e.stopPropagation();
  if (confirm("Are you sure you want to delete this custom event?")) {
    state.customEvents = state.customEvents.filter(x => x.id.toString() !== id.toString());
    state.booked = state.booked.filter(x => x.toString() !== id.toString());
    state.watching = state.watching.filter(x => x.toString() !== id.toString());
    
    triggerToast("Custom event deleted.");
    evaluateConflicts();
    evaluateTransitWarnings();
    saveState();
    renderUI();
  }
}

// Ticker Animation and Profile Metrics Controllers
const activeTickers = new Map();

function animateSaaSTicker(elementId, targetValue, duration = 800, isFloat = false) {
  const el = document.getElementById(elementId);
  if (!el) return;

  // Cancel any ongoing ticker animation for this element to prevent overlap
  if (activeTickers.has(elementId)) {
    cancelAnimationFrame(activeTickers.get(elementId));
  }

  const startValue = 0;
  const startTime = performance.now();

  function updateTicker(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out quad function for smooth deceleration
    const easeProgress = progress * (2 - progress);
    const currentValue = startValue + (targetValue - startValue) * easeProgress;
    
    if (isFloat) {
      el.textContent = currentValue.toFixed(1);
    } else {
      el.textContent = Math.floor(currentValue);
    }

    if (progress < 1) {
      const handle = requestAnimationFrame(updateTicker);
      activeTickers.set(elementId, handle);
    } else {
      if (isFloat) {
        el.textContent = targetValue.toFixed(1);
      } else {
        el.textContent = Math.floor(targetValue);
      }
      activeTickers.delete(elementId);
    }
  }

  const handle = requestAnimationFrame(updateTicker);
  activeTickers.set(elementId, handle);
}

function triggerProfileTickers() {
  const allEvents = getEventsRegistry();
  const bookedEvents = allEvents.filter(e => state.booked.includes(e.id) && !state.hiddenEvents?.includes(e.id));
  const savedCount = bookedEvents.length;

  let totalHours = 0;
  bookedEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    let durationMinutes = range.end - range.start;
    if (durationMinutes < 0) durationMinutes += 1440;
    totalHours += durationMinutes / 60;
  });

  animateSaaSTicker("metric-saved-count", savedCount, 800, false);
  animateSaaSTicker("metric-total-hours", totalHours, 800, true);
}

function updateProfileMetricsDirectly() {
  if (activeTickers.has("metric-saved-count") || activeTickers.has("metric-total-hours")) {
    return;
  }
  const allEvents = getEventsRegistry();
  const bookedEvents = allEvents.filter(e => state.booked.includes(e.id) && !state.hiddenEvents?.includes(e.id));
  const savedCount = bookedEvents.length;

  let totalHours = 0;
  bookedEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    let durationMinutes = range.end - range.start;
    if (durationMinutes < 0) durationMinutes += 1440;
    totalHours += durationMinutes / 60;
  });

  const savedCountEl = document.getElementById("metric-saved-count");
  const totalHoursEl = document.getElementById("metric-total-hours");
  if (savedCountEl) savedCountEl.textContent = savedCount;
  if (totalHoursEl) totalHoursEl.textContent = totalHours.toFixed(1);
}

function switchView(v) {
  const prevView = state.activeView;
  state.activeView = v;
  ["schedule", "myplan", "conflicts", "map"].forEach(x => {
    const section = document.getElementById("view-" + x);
    const nav = document.getElementById("nav-" + x);
    if (section) section.classList.toggle("visible", x === v);
    if (nav) nav.classList.toggle("active", x === v);
  });
  
  if (v === 'map') {
    updateMapModeUI();
    setTimeout(() => {
      const select = document.getElementById("map-focus-select");
      if (select) {
        const selectVal = select.value;
        focusMapVenue(selectVal);
      }
    }, 100);
  }
  
  renderUI();
  
  if (v === 'myplan' && prevView !== 'myplan') {
    triggerProfileTickers();
  }
}

function scrollToAlerts() {
  const banner = document.getElementById("urgent-banner");
  if (banner && banner.style.display !== "none") {
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    triggerToast("No pending alerts outstanding.");
  }
}

// Modal drawer controllers
function openModal(modalId) {
  document.getElementById(modalId).classList.add("open");
  if (modalId === "event-creator-modal") {
    document.getElementById("ev-title").focus();
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("open");
}

// Close drawers on clicking backdrop
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
    }
  });
});

// Custom Event Creator submission
function saveCustomEvent() {
  const title = document.getElementById("ev-title").value.trim();
  if (!title) {
    document.getElementById("ev-title").focus();
    triggerToast("Please enter an event title.");
    return;
  }
  
  const day = document.getElementById("ev-day").value;
  const startTime = document.getElementById("ev-time").value;
  const duration = parseInt(document.getElementById("ev-duration").value);
  const venue = document.getElementById("ev-venue").value;
  const track = document.getElementById("ev-track").value;
  const desc = document.getElementById("ev-desc").value.trim() || "Custom scheduled event";
  
  const formatTime = (timeStr) => {
    const [h, m] = timeStr.split(":");
    const hr = parseInt(h);
    const ampm = hr >= 12 ? "PM" : "AM";
    const displayHr = hr % 12 || 12;
    return `${displayHr}:${m} ${ampm}`;
  };

  const parseTimeToHoursMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":");
    return { hours: parseInt(h), minutes: parseInt(m) };
  };

  const start = parseTimeToHoursMinutes(startTime);
  const startFmt = formatTime(startTime);
  
  // Calculate end time
  let endM = start.minutes + duration;
  let endH = start.hours + Math.floor(endM / 60);
  endM = endM % 60;
  endH = endH % 24;

  const endHStr = endH.toString().padStart(2, "0");
  const endMStr = endM.toString().padStart(2, "0");
  const endFmt = formatTime(`${endHStr}:${endMStr}`);
  
  const ev = {
    id: "custom-event-" + Date.now(),
    title,
    time: `${startFmt} – ${endFmt}`,
    day,
    track,
    venue,
    desc,
    conflictGroup: "",
    urgent: false
  };
  
  state.customEvents.push(ev);
  // Auto book the newly added custom event
  state.booked.push(ev.id);
  
  triggerToast(`Added & booked "${title}"`);
  
  evaluateConflicts();
  evaluateTransitWarnings();
  saveState();
  renderUI();
  closeModal("event-creator-modal");
  
  // Clean inputs
  document.getElementById("ev-title").value = "";
  document.getElementById("ev-desc").value = "";
}

// Theme, zoom and walking speed triggers
function updateAppTheme(theme) {
  state.settings.theme = theme;
  document.body.setAttribute("data-theme", theme);
  saveState();
  triggerToast(`Theme set to ${theme === 'dark' ? 'Warmsepia Charcoal' : 'IIT Madras Cream'}`);
}

function updateMapsZoom(zoom) {
  state.settings.mapZoom = parseInt(zoom);
  const label = document.getElementById("setting-zoom-val");
  if (label) label.textContent = zoom + "x";
  saveState();
  const select = document.getElementById("map-focus-select");
  if (select) focusMapVenue(select.value);
}

// Walking speed calibration
function updateWalkSpeed(speed) {
  state.settings.walkSpeed = parseInt(speed);
  const label = document.getElementById("setting-speed-val");
  if (label) label.textContent = speed + " m/m";
  saveState();
  evaluateTransitWarnings();
}

function clearAllData() {
  if (confirm("Are you sure you want to reset the application? This deletes all custom events, calendar bookings, and settings.")) {
    localStorage.removeItem("paradox_mobile_settings");
    state.booked = [];
    state.watching = [];
    state.customEvents = [];
    state.simulators = { quizCompleted: false, paperSubmitted: false };
    state.settings = { theme: "light", walkSpeed: 80, mapZoom: 15, viewMode: "detail", simulateTime: false };
    state.hiddenEvents = [];
    
    syncSettingsUI();
    evaluateConflicts();
    evaluateTransitWarnings();
    saveState();
    renderUI();
    closeModal("settings-modal");
    triggerToast("App settings reset successfully.");
  }
}

function syncSettingsUI() {
  const themeSetting = document.getElementById("setting-theme");
  if (themeSetting) themeSetting.value = state.settings.theme;
  document.body.setAttribute("data-theme", state.settings.theme);
  
  const zoomSlider = document.getElementById("setting-zoom-slider");
  if (zoomSlider) zoomSlider.value = state.settings.mapZoom;
  const zoomVal = document.getElementById("setting-zoom-val");
  if (zoomVal) zoomVal.textContent = state.settings.mapZoom + "x";
  
  const speedSlider = document.getElementById("setting-speed-slider");
  if (speedSlider) speedSlider.value = state.settings.walkSpeed;
  const speedVal = document.getElementById("setting-speed-val");
  if (speedVal) speedVal.textContent = state.settings.walkSpeed + " m/m";
  
  const simulateCheck = document.getElementById("setting-simulate-time");
  if (simulateCheck) simulateCheck.checked = !!state.settings.simulateTime;

  const notifCheck = document.getElementById("setting-browser-notifications");
  if (notifCheck) notifCheck.checked = !!state.settings.notificationsEnabled;
}

// OSINT Quiz Simulator Code
const quizQuestions = [
  {
    question: "An image fragment shows the IIT Madras main gate with a route bus in the background. What is the route number?",
    options: ["Route 5C", "Route 21G", "Route 23C", "Route 568"],
    answer: 1 // 21G
  },
  {
    question: "A Git commit hash ending in 'ef56' leaked staging credentials. What was the environment variable name?",
    options: ["STAGING_SECRET", "FLAG_OSINT_1", "JWT_STAGING_KEY", "DB_PASSWORD"],
    answer: 1 // FLAG_OSINT_1
  },
  {
    question: "Which landmark lies exactly at coordinates '12.9915° N, 80.2336° E'?",
    options: ["Open Air Theatre (OAT)", "Gajendra Circle (GC)", "Wadhwani School of AI", "Student Activity Center (SAC)"],
    answer: 1 // GC
  }
];
let currentQuizIdx = 0;

function openUrgentSimulator() {
  if (!state.simulators.quizCompleted) {
    currentQuizIdx = 0;
    openModal("quiz-modal");
    renderQuizQuestion();
  } else if (!state.simulators.paperSubmitted) {
    openModal("paper-modal");
  }
}

function renderQuizQuestion() {
  const container = document.getElementById("quiz-inner-content");
  const bar = document.getElementById("quiz-progress-fill");
  
  const pct = (currentQuizIdx / quizQuestions.length) * 100;
  if (bar) bar.style.width = `${pct === 0 ? 10 : pct}%`;

  if (currentQuizIdx >= quizQuestions.length) {
    state.simulators.quizCompleted = true;
    
    // Auto book the quiz event once completed
    if (!state.booked.includes(1)) {
      state.booked.push(1);
    }

    saveState();
    evaluateConflicts();
    evaluateTransitWarnings();
    renderUI();
    
    if (container) {
      container.innerHTML = `
        <div style="text-align:center; padding:15px 0;">
          <i class="ti ti-trophy" style="font-size:42px; color:var(--primary); display:block; margin-bottom:12px; animation: fadeIn 0.4s ease"></i>
          <h4 style="font-family:var(--font-display); font-size:18px; font-weight:800; margin-bottom:6px;">OSINT QUALIFIER PASSED!</h4>
          <p style="font-size:13px; color:var(--muted); line-height:1.5;">
            Flags verified. Score: 3/3. The simulator has marked this puzzle complete on your schedule list.
          </p>
          <button class="btn-primary" style="margin-top:18px;" onclick="onQuizSuccessDone()">Done</button>
        </div>
      `;
    }
    return;
  }

  const q = quizQuestions[currentQuizIdx];
  if (container) {
    container.innerHTML = `
      <p style="font-size:13.5px; line-height:1.5; margin-bottom:16px; color:var(--text)">
        <strong>Question ${currentQuizIdx+1} of ${quizQuestions.length}:</strong><br/>
        ${q.question}
      </p>
      <div class="quiz-options-group">
        ${q.options.map((opt, idx) => `
          <button class="quiz-opt-btn" onclick="selectQuizOption(${idx})">${opt}</button>
        `).join('')}
      </div>
      <button class="btn-primary" id="quiz-submit-btn" disabled onclick="submitQuizAnswer()" style="opacity:0.6; cursor:not-allowed;">Submit Answer</button>
    `;
  }
}

let selectedQuizOptionIdx = null;
function selectQuizOption(idx) {
  selectedQuizOptionIdx = idx;
  document.querySelectorAll(".quiz-opt-btn").forEach((btn, bIdx) => {
    btn.classList.toggle("selected", bIdx === idx);
  });
  const submit = document.getElementById("quiz-submit-btn");
  if (submit) {
    submit.disabled = false;
    submit.style.opacity = "1";
    submit.style.cursor = "pointer";
  }
}

function submitQuizAnswer() {
  const q = quizQuestions[currentQuizIdx];
  if (selectedQuizOptionIdx === q.answer) {
    triggerToast("✅ Flag verified successfully!");
    currentQuizIdx++;
    selectedQuizOptionIdx = null;
    renderQuizQuestion();
  } else {
    triggerToast("❌ Incorrect flag. Check clues and try again.");
  }
}

function onQuizSuccessDone() {
  closeModal("quiz-modal");
  if (!state.simulators.paperSubmitted) {
    // Queue paper uploader automatically
    setTimeout(() => openModal("paper-modal"), 350);
  }
}

// PDF manuscript uploader simulator
function triggerSimulatedUpload() {
  const zone = document.getElementById("upload-initial-view");
  if (zone) zone.style.display = "none";
  const progressContainer = document.getElementById("upload-progress-view");
  if (progressContainer) progressContainer.style.display = "block";
  
  const fill = document.getElementById("upload-progress-fill");
  const label = document.getElementById("upload-stage-label");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 4;
    if (fill) fill.style.width = progress + "%";
    
    if (label) {
      if (progress < 30) label.textContent = "Uploading PDF Manuscript (12.4 MB)...";
      else if (progress < 60) label.textContent = "Scanning syntax compliance and formatting...";
      else if (progress < 90) label.textContent = "Validating cross-ref citations and reviewer index...";
    }
    
    if (progress >= 100) {
      clearInterval(interval);
      state.simulators.paperSubmitted = true;
      
      // Auto book paper event once submitted
      if (!state.booked.includes(2)) {
        state.booked.push(2);
      }

      saveState();
      evaluateConflicts();
      evaluateTransitWarnings();
      renderUI();
      
      if (progressContainer) progressContainer.style.display = "none";
      const successView = document.getElementById("upload-success-view");
      if (successView) successView.style.display = "block";
      triggerToast("Research manuscript draft submitted.");
    }
  }, 65);
}

// Dynamic Toast notifications
function showSaaSToast(message, type = 'info') {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-msg ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 15);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function triggerToast(msg) {
  const lowerMsg = msg.toLowerCase();
  const isWarning = lowerMsg.includes("conflict") || 
                    lowerMsg.includes("clash") || 
                    lowerMsg.includes("alert") || 
                    lowerMsg.includes("warning") || 
                    lowerMsg.includes("failed") || 
                    lowerMsg.includes("error") || 
                    lowerMsg.includes("ineligible") || 
                    lowerMsg.includes("exceeds") || 
                    lowerMsg.includes("incorrect");
  
  showSaaSToast(msg, isWarning ? 'warning' : 'info');
}

// Custom simulated time provider
function getNow() {
  if (state.settings && state.settings.simulateTime) {
    return new Date("2026-06-10T12:45:00");
  }
  return new Date();
}

function updateSimulateTime(val) {
  if (!state.settings) state.settings = {};
  state.settings.simulateTime = val;
  saveState();
  evaluateConflicts();
  evaluateTransitWarnings();
  renderNowNextPanel();
  renderUI();
  triggerToast(`Simulated time ${val ? "Enabled (Jun 10, 12:45 PM)" : "Disabled (Real Time)"}`);
}

// View Mode compact/detail toggle
function toggleCardView() {
  const body = document.body;
  const icon = document.getElementById("view-toggle-icon");
  if (body.classList.contains("compact-mode")) {
    body.classList.remove("compact-mode");
    state.settings.viewMode = "detail";
    if (icon) icon.className = "ti ti-list";
    triggerToast("View set to Details Mode");
  } else {
    body.classList.add("compact-mode");
    state.settings.viewMode = "compact";
    if (icon) icon.className = "ti ti-layout-grid";
    triggerToast("View set to Compact Mode");
  }
  saveState();
  setTimeout(initSlotObserver, 200);
}

// Toggle Time Slot collapsing
function toggleTimeSlot(slotId, e) {
  if (e) e.stopPropagation();
  const group = document.getElementById(`group-${slotId}`);
  if (!group) return;
  
  const isCollapsed = group.classList.contains("collapsed");
  if (isCollapsed) {
    group.classList.remove("collapsed");
  } else {
    group.classList.add("collapsed");
  }
  
  if (navigator.vibrate) {
    navigator.vibrate(8);
  }
  
  try {
    sessionStorage.setItem(`paradox_collapsed_${slotId}`, isCollapsed ? "false" : "true");
  } catch (err) {
    console.warn("sessionStorage write failed:", err);
  }
  
  // Refresh timeline jump highlights after height transitions
  setTimeout(initSlotObserver, 250);
}

// Timeline Jump Bar render helper
function renderTimelineJumpBar(filtered, day) {
  const jumpBar = document.getElementById("jump-bar");
  if (!jumpBar) return;
  jumpBar.innerHTML = "";
  
  if (filtered.length === 0) {
    jumpBar.style.display = "none";
  } else {
    jumpBar.style.display = "flex";
    
    const uniqueSlots = [];
    filtered.forEach(ev => {
      const t = ev.time || "";
      const startStr = t.split(/[–-]/)[0].trim();
      const slotId = `${ev.day.replace(' ', '')}-${startStr.replace(':', '').replace(' ', '')}`;
      if (!uniqueSlots.some(s => s.slotId === slotId)) {
        let shortLabel = startStr.replace(/^0/, '').replace(' ', ''); // e.g. "06:00 AM" -> "6:00AM"
        uniqueSlots.push({ slotId, label: shortLabel });
      }
    });
    
    const fragment = document.createDocumentFragment();
    uniqueSlots.forEach(s => {
      const pill = document.createElement("button");
      pill.className = "jump-pill";
      pill.dataset.slot = s.slotId;
      pill.textContent = s.label;
      pill.onclick = () => scrollToTimeSlot(s.slotId);
      fragment.appendChild(pill);
    });
    jumpBar.appendChild(fragment);
  }
}

// Smooth scroll to time slot with offset
function scrollToTimeSlot(slotId) {
  const group = document.getElementById(`group-${slotId}`);
  if (!group) return;
  
  const isCollapsed = group.classList.contains("collapsed");
  if (isCollapsed) {
    group.classList.remove("collapsed");
    try {
      sessionStorage.setItem(`paradox_collapsed_${slotId}`, "false");
    } catch (err) {
      console.warn("sessionStorage write failed:", err);
    }
  }
  
  setTimeout(() => {
    const headerEl = document.getElementById(`group-${slotId}`);
    if (headerEl) {
      const topOffset = 180; // Offset height of headers + jump bar
      const offsetPosition = getAbsoluteOffsetTop(headerEl) - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      highlightJumpPill(slotId);
    }
  }, isCollapsed ? 150 : 0);
}

// IntersectionObserver scroll highlights tracker
let slotObserver;
function initSlotObserver() {
  if (slotObserver) slotObserver.disconnect();
  
  const options = {
    root: null,
    rootMargin: '-180px 0px -50% 0px', // check intersection under sticky offsets
    threshold: 0
  };
  
  slotObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slotId = entry.target.dataset.slot;
        highlightJumpPill(slotId);
      }
    });
  }, options);
  
  document.querySelectorAll(".time-slot-group").forEach(el => {
    slotObserver.observe(el);
  });
}

function highlightJumpPill(slotId) {
  document.querySelectorAll(".jump-pill").forEach(pill => {
    const isActive = pill.dataset.slot === slotId;
    pill.classList.toggle("active", isActive);
    if (isActive) {
      // Center horizontal scroll position of active pill inside jump-bar
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

// Now/Next Panel renderer
function renderNowNextPanel() {
  const banner = document.getElementById("now-next-banner");
  const container = document.getElementById("now-next-content");
  if (!banner || !container) return;
  
  let isDismissed = false;
  try {
    isDismissed = sessionStorage.getItem("dismiss_now_next") === "true";
  } catch (err) {
    console.warn("sessionStorage read failed:", err);
  }
  if (isDismissed) {
    banner.style.display = "none";
    return;
  }
  
  const now = getNow();
  const isEventRange = (now.getFullYear() === 2026 && now.getMonth() === 5 && now.getDate() >= 9 && now.getDate() <= 14);
  
  if (!isEventRange && !state.settings.simulateTime) {
    banner.style.display = "none";
    return;
  }
  
  const daysMap = ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const currentDayName = daysMap[now.getDate() - 8] || "Jun 10"; // Default to Jun 10
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const allEvents = getEventsRegistry();
  const dayEvents = allEvents.filter(e => e.day === currentDayName && !state.hiddenEvents?.includes(e.id));
  
  let nowEvents = [];
  let nextEvents = [];
  
  dayEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    if (currentMinutes >= range.start && currentMinutes < range.end) {
      nowEvents.push(ev);
    } else if (range.start >= currentMinutes && range.start <= currentMinutes + 60) {
      nextEvents.push(ev);
    }
  });
  
  nextEvents.sort((a, b) => getEventTimeRange(a).start - getEventTimeRange(b).start);
  
  // If no live/next events, fallback to the next single upcoming event
  if (nowEvents.length === 0 && nextEvents.length === 0) {
    const upcoming = dayEvents.filter(e => getEventTimeRange(e).start > currentMinutes);
    if (upcoming.length > 0) {
      upcoming.sort((a, b) => getEventTimeRange(a).start - getEventTimeRange(b).start);
      nextEvents.push(upcoming[0]);
    }
  }
  
  if (nowEvents.length === 0 && nextEvents.length === 0) {
    banner.style.display = "none";
    return;
  }
  
  banner.style.display = "flex";
  container.innerHTML = "";
  
  const createRow = (labelClass, labelText, ev) => {
    const dayIdx = daysMap.indexOf(ev.day);
    const row = document.createElement("div");
    row.className = "now-next-item";
    row.innerHTML = `
      <span class="now-next-label ${labelClass}">${labelText}</span>
      <span class="now-next-title" onclick="scrollToEvent(${dayIdx}, '${ev.id}')">${ev.title}</span>
    `;
    return row;
  };
  
  if (nowEvents.length > 0) {
    container.appendChild(createRow("now", "NOW", nowEvents[0]));
  }
  nextEvents.slice(0, 2).forEach(ev => {
    container.appendChild(createRow("next", "NEXT", ev));
  });
}

function dismissNowNext() {
  try {
    sessionStorage.setItem("dismiss_now_next", "true");
  } catch (err) {
    console.warn("sessionStorage write failed:", err);
  }
  document.getElementById("now-next-banner").style.display = "none";
  triggerToast("Now & Next banner dismissed for this session.");
}

function scrollToEvent(dayIndex, eventId) {
  // 1. Switch to Schedule view
  switchView('schedule');
  
  // 2. Set day tab active
  document.querySelectorAll(".day-tab").forEach((x, idx) => {
    x.classList.toggle("active", idx === dayIndex);
    x.setAttribute("aria-selected", idx === dayIndex ? "true" : "false");
  });
  state.activeDay = dayIndex;
  
  renderUI();
  
  // 3. Scroll to element
  setTimeout(() => {
    const card = document.querySelector(`.event-card[data-id="${eventId}"]`);
    if (card) {
      const group = card.closest(".time-slot-group");
      if (group) {
        const slotId = group.dataset.slot;
        if (group.classList.contains("collapsed")) {
          group.classList.remove("collapsed");
          try {
            sessionStorage.setItem(`paradox_collapsed_${slotId}`, "false");
          } catch (err) {
            console.warn("sessionStorage write failed:", err);
          }
        }
      }
      
      setTimeout(() => {
        const topOffset = 180;
        const offsetPosition = getAbsoluteOffsetTop(card) - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Expand card
        if (!card.classList.contains("expanded")) {
          card.classList.add("expanded");
        }
      }, 100);
    }
  }, 200);
}

// --- swipe pointer gestures code ---
let swipeState = {
  pointerId: null,
  startX: 0,
  startY: 0,
  visualX: 0,
  isSwiping: false,
  isScrolling: false,
  cardEl: null,
  evId: null
};
let longPressTimeout = null;

function cardPointerDown(e, cardEl, evId, evTitle, evTime, evVenue) {
  cardSwipeDown(e, cardEl, evId);
  
  // Setup long-press share sheet trigger (500ms hold)
  clearTimeout(longPressTimeout);
  longPressTimeout = setTimeout(() => {
    if (navigator.share) {
      navigator.share({
        title: evTitle,
        text: `${evTitle} at ${evVenue} (${evTime})`,
        url: window.location.href
      }).catch(err => console.log("Share failed:", err));
    } else {
      triggerToast(`Share Event: ${evTitle} at ${evVenue}`);
    }
  }, 500);
}

function cardSwipeDown(e, cardEl, evId) {
  if (e.button !== 0 && e.pointerType === "mouse") return;
  if (e.target.closest('.event-actions') || e.target.closest('.maps-link') || e.target.closest('.action-pill') || e.target.closest('.venue-name-span')) {
    return;
  }

  swipeState.pointerId = e.pointerId;
  swipeState.startX = e.clientX;
  swipeState.startY = e.clientY;
  swipeState.isSwiping = false;
  swipeState.isScrolling = false;
  swipeState.cardEl = cardEl;
  swipeState.evId = isNaN(evId) ? evId : parseInt(evId);

  cardEl.setPointerCapture(e.pointerId);
  cardEl.style.transition = "none";
  
  cardEl.addEventListener("pointermove", cardSwipeMove);
  cardEl.addEventListener("pointerup", cardSwipeUp);
  cardEl.addEventListener("pointercancel", cardSwipeCancel);
}

function cardSwipeMove(e) {
  if (e.pointerId !== swipeState.pointerId) return;
  const deltaX = e.clientX - swipeState.startX;
  const deltaY = e.clientY - swipeState.startY;

  if (!swipeState.isSwiping && !swipeState.isScrolling) {
    if (Math.abs(deltaY) > 8) {
      clearTimeout(longPressTimeout); // Cancel long-press on vertical scroll
      swipeState.isScrolling = true;
      detachSwipeListeners();
    } else if (Math.abs(deltaX) > 8) {
      clearTimeout(longPressTimeout); // Cancel long-press on drag start
      swipeState.isSwiping = true;
      swipeState.cardEl.dataset.swiped = "true";
    }
  }

  if (swipeState.isSwiping) {
    e.preventDefault();
    
    let visualX = 0;
    if (deltaX > 0) {
      visualX = deltaX / (1 + deltaX / 250);
    } else {
      visualX = deltaX / (1 - deltaX / 250);
    }
    swipeState.visualX = visualX;

    swipeState.cardEl.style.transform = `translateX(${visualX}px) rotate(${visualX * 0.015}deg)`;
    
    const overlay = swipeState.cardEl.querySelector('.swipe-added');
    if (overlay) {
      if (visualX > 15) {
        overlay.classList.add('active');
        overlay.style.opacity = Math.min(visualX / 60, 1.0);
      } else {
        overlay.classList.remove('active');
        overlay.style.opacity = 0;
      }
    }
    
    if (visualX < -15) {
      swipeState.cardEl.style.opacity = Math.max(1.0 + visualX / 100, 0.4);
    } else if (visualX >= 0) {
      swipeState.cardEl.style.opacity = 1.0;
    }
  }
}

function cardSwipeUp(e) {
  if (e.pointerId !== swipeState.pointerId) return;
  clearTimeout(longPressTimeout); // Cancel long-press on release
  const card = swipeState.cardEl;
  const evId = swipeState.evId;
  const finalX = e.clientX - swipeState.startX;

  card.style.transition = "transform 0.25s cubic-bezier(0.2, 0, 0, 1.0), opacity 0.25s ease";

  if (swipeState.isSwiping) {
    if (finalX > 60) {
      card.style.transform = "translateX(100px)";
      const overlay = card.querySelector('.swipe-added');
      if (overlay) {
        overlay.classList.add('active');
        overlay.style.opacity = "1";
      }
      
      setTimeout(() => {
        card.style.transform = "translateX(0) rotate(0)";
        if (overlay) {
          overlay.classList.remove('active');
          overlay.style.opacity = "0";
        }
        toggleBooking(evId);
      }, 300);
    } else if (finalX < -60) {
      card.style.transform = "translateX(-120%)";
      card.style.opacity = "0";
      
      setTimeout(() => {
        card.style.height = "0";
        card.style.padding = "0";
        card.style.margin = "0";
        card.style.border = "none";
        
        setTimeout(() => {
          if (!state.hiddenEvents) state.hiddenEvents = [];
          state.hiddenEvents.push(evId);
          saveState();
          renderUI();
          showUndoSnackbar(evId);
        }, 200);
      }, 200);
    } else {
      card.style.transform = "translateX(0) rotate(0)";
      card.style.opacity = "1";
      const overlay = card.querySelector('.swipe-added');
      if (overlay) {
        overlay.classList.remove('active');
        overlay.style.opacity = "0";
      }
      setTimeout(() => { card.dataset.swiped = "false"; }, 10);
    }
  } else {
    card.dataset.swiped = "false";
  }

  detachSwipeListeners();
}

function cardSwipeCancel(e) {
  if (e.pointerId !== swipeState.pointerId) return;
  clearTimeout(longPressTimeout); // Cancel long-press on cancel
  const card = swipeState.cardEl;
  card.style.transition = "transform 0.25s cubic-bezier(0.2, 0, 0, 1.0), opacity 0.25s ease";
  card.style.transform = "translateX(0) rotate(0)";
  card.style.opacity = "1";
  const overlay = card.querySelector('.swipe-added');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.style.opacity = "0";
  }
  setTimeout(() => { card.dataset.swiped = "false"; }, 10);
  detachSwipeListeners();
}

function detachSwipeListeners() {
  if (swipeState.cardEl) {
    swipeState.cardEl.removeEventListener("pointermove", cardSwipeMove);
    swipeState.cardEl.removeEventListener("pointerup", cardSwipeUp);
    swipeState.cardEl.removeEventListener("pointercancel", cardSwipeCancel);
  }
  swipeState.pointerId = null;
}

let undoTimeout;
let lastHiddenEvId = null;

function showUndoSnackbar(evId) {
  lastHiddenEvId = evId;
  const bar = document.getElementById("undo-snackbar");
  if (bar) bar.classList.add("show");
  
  if (undoTimeout) clearTimeout(undoTimeout);
  undoTimeout = setTimeout(() => {
    if (bar) bar.classList.remove("show");
  }, 4000);
}

function undoHideEvent() {
  if (lastHiddenEvId !== null) {
    state.hiddenEvents = state.hiddenEvents.filter(x => x !== lastHiddenEvId);
    lastHiddenEvId = null;
    saveState();
    renderUI();
    const bar = document.getElementById("undo-snackbar");
    if (bar) bar.classList.remove("show");
    triggerToast("Swipe undo: Event restored.");
  }
}

// Search handler with 150ms debounce
let searchDebounceTimeout;
function onSearchInput(val) {
  state.searchQuery = val.trim();
  const clearBtn = document.getElementById("search-clear-btn");
  if (state.searchQuery) {
    if (clearBtn) clearBtn.style.display = "block";
  } else {
    if (clearBtn) clearBtn.style.display = "none";
  }
  
  clearTimeout(searchDebounceTimeout);
  searchDebounceTimeout = setTimeout(() => {
    renderUI();
  }, 150);
}

function clearSearch() {
  const input = document.getElementById("schedule-search");
  if (input) input.value = "";
  state.searchQuery = "";
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.style.display = "none";
  renderUI();
}

// Track Filter selection listener
const trackTabs = document.getElementById("track-tabs");
if (trackTabs) {
  trackTabs.addEventListener("click", e => {
    const chip = e.target.closest(".track-tab");
    if (!chip) return;
    document.querySelectorAll(".track-tab").forEach(x => {
      x.classList.remove("active");
      x.setAttribute("aria-selected", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-selected", "true");
    state.activeTrack = chip.dataset.track;
    renderUI();
  });
}

// Notifications Builder
// Notifications Builder
function openNotifications() {
  renderNotifications();
  openModal("notifications-modal");
  state.notifBadgeCleared = true;
  const notifDot = document.getElementById("notif-dot");
  if (notifDot) notifDot.style.display = "none";
}

function getNotificationsList() {
  let notices = [];
  
  // 1. Simulator Warnings
  if (!state.simulators.quizCompleted) {
    notices.push({
      id: "quiz-pending",
      type: "alert",
      icon: "ti-alert-triangle",
      title: "Pre-Paradox Quiz Pending",
      body: 'Solve the Qualifier Quiz immediately to lock in your OSINT seat! <a href="#" onclick="closeModal(\'notifications-modal\'); setTimeout(openUrgentSimulator, 300); return false;">Take Quiz Now</a>'
    });
  }
  if (!state.simulators.paperSubmitted) {
    notices.push({
      id: "paper-pending",
      type: "alert",
      icon: "ti-file-upload",
      title: "Research Draft Due Soon",
      body: 'Anonymized paper draft submission closes June 1. <a href="#" onclick="closeModal(\'notifications-modal\'); setTimeout(openUrgentSimulator, 300); return false;">Upload Manuscript PDF</a>'
    });
  }
  
  // 2. Conflicts
  if (state.conflicts && state.conflicts.length > 0) {
    notices.push({
      id: "conflicts-alert",
      type: "alert",
      icon: "ti-calendar-event",
      title: `${state.conflicts.length} Overlapping Bookings`,
      body: 'Multiple events are booked at the same time. Check the <a href="#" onclick="closeModal(\'notifications-modal\'); switchView(\'conflicts\'); return false;">Conflict Log</a> to reschedule.'
    });
  }
  
  // 3. Transit Warnings
  const transitWarningEl = document.getElementById("transit-warning");
  if (transitWarningEl && transitWarningEl.style.display === "flex") {
    const isCritical = transitWarningEl.classList.contains("critical");
    const transitTextContentEl = transitWarningEl.querySelector("#transit-text-content");
    const bodyContent = transitTextContentEl ? transitTextContentEl.innerHTML : "";
    notices.push({
      id: "transit-alert",
      type: isCritical ? "alert" : "warning",
      icon: "ti-run",
      title: isCritical ? "Critical Travel Distance Warning" : "Campus Transit Notice",
      body: bodyContent
    });
  }
  
  // 4. Default Broadcast Announcements
  notices.push({
    id: "announcement-welcome",
    type: "info",
    icon: "ti-speakerphone",
    title: "Welcome to Paradox 2026",
    body: "IIT Madras welcomes all selected students to campus. The Opening Ceremony begins Jun 10 at 9:30 AM in the SAC grounds."
  });
  notices.push({
    id: "announcement-zumba",
    type: "info",
    icon: "ti-music",
    title: "Zumba & DJ Sessions Scheduled",
    body: "Guided zumba is scheduled for Jun 11 at 5:00 AM. DJ Concert goes live on Jun 11 at 7:00 PM at the Open Air Theatre (OAT)."
  });
  
  // Filter out dismissed ones
  const dismissed = state.dismissedNotifications || [];
  return notices.filter(n => !dismissed.includes(n.id));
}

function renderNotifications() {
  const container = document.getElementById("notifications-inner-content");
  if (!container) return;
  container.innerHTML = "";
  
  const activeNotices = getNotificationsList();
  
  if (activeNotices.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--muted);">
        <i class="ti ti-bell-off" style="font-size: 32px; display: block; margin-bottom: 8px; color: var(--dim);"></i>
        <p style="font-size: 13px;">No new notifications. You are all caught up!</p>
      </div>
    `;
    return;
  }
  
  const fragment = document.createDocumentFragment();
  activeNotices.forEach(n => {
    const item = document.createElement("div");
    item.className = `notification-item ${n.type}`;
    item.style.position = "relative";
    item.innerHTML = `
      <i class="ti ${n.icon} notification-icon" aria-hidden="true"></i>
      <div style="flex: 1; padding-right: 20px;">
        <div class="notification-title">${n.title}</div>
        <div class="notification-body">${n.body}</div>
      </div>
      <button class="dismiss-notif-btn" onclick="dismissNotification('${n.id}', event)" aria-label="Dismiss notification" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; transition: color 0.2s;"><i class="ti ti-x" style="font-size: 14px;"></i></button>
    `;
    fragment.appendChild(item);
  });
  container.appendChild(fragment);
}

function dismissNotification(id, event) {
  if (event) event.stopPropagation();
  if (!state.dismissedNotifications) state.dismissedNotifications = [];
  if (!state.dismissedNotifications.includes(id)) {
    state.dismissedNotifications.push(id);
  }
  saveState();
  renderNotifications();
  updateNotifBadgeState();
}

function updateNotifBadgeState() {
  const notifDot = document.getElementById("notif-dot");
  if (!notifDot) return;
  const activeNotices = getNotificationsList();
  if (activeNotices.length > 0 && !state.notifBadgeCleared) {
    notifDot.style.display = "block";
  } else {
    notifDot.style.display = "none";
  }
}

// Browser Reminders & Notifications feature controllers
function toggleBrowserNotifications(enabled) {
  if (enabled) {
    if (!("Notification" in window)) {
      triggerToast("Browser notifications not supported on this device.");
      const cb = document.getElementById("setting-browser-notifications");
      if (cb) cb.checked = false;
      state.settings.notificationsEnabled = false;
      saveState();
      return;
    }
    
    if (Notification.permission === "granted") {
      state.settings.notificationsEnabled = true;
      saveState();
      triggerToast("Browser notifications enabled!");
      sendBrowserNotification("Paradox Navigator", "You will now receive notifications for your schedule.");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          state.settings.notificationsEnabled = true;
          saveState();
          triggerToast("Browser notifications enabled!");
          sendBrowserNotification("Paradox Navigator", "You will now receive notifications for your schedule.");
        } else {
          state.settings.notificationsEnabled = false;
          saveState();
          const cb = document.getElementById("setting-browser-notifications");
          if (cb) cb.checked = false;
          triggerToast("Notification permission denied.");
        }
      });
    } else {
      triggerToast("Notification permission blocked. Please enable it in browser settings.");
      const cb = document.getElementById("setting-browser-notifications");
      if (cb) cb.checked = false;
      state.settings.notificationsEnabled = false;
      saveState();
    }
  } else {
    state.settings.notificationsEnabled = false;
    saveState();
    triggerToast("Browser notifications disabled.");
  }
}

function sendBrowserNotification(title, body) {
  if (state.settings.notificationsEnabled && "Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(title, {
        body: body,
        icon: "img/icon-192.png"
      });
    } catch (e) {
      console.warn("Failed to trigger native Notification:", e);
      if (navigator.serviceWorker && navigator.serviceWorker.ready) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification(title, {
            body: body,
            icon: "img/icon-192.png"
          });
        });
      }
    }
  }
}

// Scroll listener for Back to Top Button
window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top-btn");
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  }
});

function scrollToDayTabs() {
  const dayTabs = document.getElementById("day-tabs");
  if (dayTabs) {
    const topOffset = 180;
    const offsetPosition = getAbsoluteOffsetTop(dayTabs) - topOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Day tabs click triggers
const dayTabs = document.getElementById("day-tabs");
if (dayTabs) {
  dayTabs.addEventListener("click", e => {
    const tab = e.target.closest(".day-tab");
    if (!tab) return;
    document.querySelectorAll(".day-tab").forEach(x => {
      x.classList.remove("active");
      x.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    state.activeDay = parseInt(tab.dataset.day);
    
    // Reset scroll position on day transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderUI();
  });
}

// Initialize SVG Map Pointer and Zoom listeners
function initSVGMapInteractions() {
  const mapWrapper = document.getElementById("svg-map-wrapper");
  const svgEl = document.getElementById("svg-campus-map");
  if (!mapWrapper || !svgEl) return;

  const activePointers = {};
  let isPanning = false;
  let startX = 0;
  let startY = 0;
  let lastPinchDist = 0;

  mapWrapper.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    const ids = Object.keys(activePointers);

    if (ids.length === 1) {
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
      mapWrapper.style.cursor = "grabbing";
      mapWrapper.setPointerCapture(e.pointerId);
    } else if (ids.length === 2) {
      isPanning = false;
      lastPinchDist = getPinchDist();
    }
  });

  mapWrapper.addEventListener("pointermove", (e) => {
    if (!activePointers[e.pointerId]) return;
    activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };

    const ids = Object.keys(activePointers);

    if (ids.length === 1 && isPanning) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      mapPanX += dx;
      mapPanY += dy;
      startX = e.clientX;
      startY = e.clientY;
      updateSVGTransform();
    } else if (ids.length === 2) {
      const dist = getPinchDist();
      if (lastPinchDist > 0) {
        const factor = dist / lastPinchDist;
        const mid = getPinchMid();
        const rect = mapWrapper.getBoundingClientRect();
        const midX = mid.x - rect.left;
        const midY = mid.y - rect.top;
        zoomToPoint(midX, midY, factor);
        lastPinchDist = dist;
      }
    }
  });

  const endPointer = (e) => {
    if (!activePointers[e.pointerId]) return;
    delete activePointers[e.pointerId];
    
    const ids = Object.keys(activePointers);
    if (ids.length < 2) {
      lastPinchDist = 0;
    }
    if (ids.length === 0) {
      isPanning = false;
      mapWrapper.style.cursor = "grab";
    }
  };

  mapWrapper.addEventListener("pointerup", endPointer);
  mapWrapper.addEventListener("pointercancel", endPointer);
  mapWrapper.addEventListener("pointerleave", endPointer);

  mapWrapper.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect = mapWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const factor = Math.exp(-e.deltaY * 0.003);
    zoomToPoint(x, y, factor);
  }, { passive: false });

  mapWrapper.addEventListener("dblclick", (e) => {
    e.preventDefault();
    const rect = mapWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    zoomToPoint(x, y, 1.5);
  });

  function getPinchDist() {
    const ids = Object.keys(activePointers);
    const p1 = activePointers[ids[0]];
    const p2 = activePointers[ids[1]];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  function getPinchMid() {
    const ids = Object.keys(activePointers);
    const p1 = activePointers[ids[0]];
    const p2 = activePointers[ids[1]];
    return { x: (p1.x + p2.x)/2, y: (p1.y + p2.y)/2 };
  }
}

// Bootstrap app
window.addEventListener("DOMContentLoaded", async () => {
  await loadEventsData();
  syncSettingsUI();
  evaluateConflicts();
  evaluateTransitWarnings();
  
  // Initialize view Mode class
  const icon = document.getElementById("view-toggle-icon");
  if (state.settings.viewMode === "compact") {
    document.body.classList.add("compact-mode");
    if (icon) icon.className = "ti ti-layout-grid";
  } else {
    document.body.classList.remove("compact-mode");
    if (icon) icon.className = "ti ti-list";
  }
  
  // Initialize SVG Map Interactions & UI state
  updateMapModeUI();
  initSVGMapInteractions();
  
  renderUI();
});
