# **🌐 Paradox 2026 Event Navigator: Complete Engineering & Architecture Blueprint**

This document outlines the final production-ready plan to build the **Paradox 2026 Event Navigator**. It details the data layers, real-world IIT Madras campus spatial coordinates, immediate online phase triggers, and front-end component specifications.

## **🚨 Immediate Urgent Action Items: Pre-Paradox Online Windows**

Because today is **May 30, 2026**, several events have online qualifiers and submission timelines active **right now**. The engine must prioritize these items on your primary dashboard interface before rendering the campus maps.

\[🚨 PRE-PARADOX ONLINE ALERT MATRIX\]  
├── 🔍 We Found You Online Qualifier: ACTIVE NOW (May 30, 5:00 PM – June 7, 4:00 PM) \-\> Solve Quiz immediately  
└── 🔬 Research Paper Submission: CLOSING SOON (June 1, 23:59 PM) \-\> Submit initial manuscript draft

* **We Found You Online (OSINT Track):** The online Guest Session and Qualifier Quiz officially go live **today, May 30, at 5:00 PM** and remain open until **June 7 at 4:00 PM**. This is an absolute priority; evaluation is based on speed and accuracy.  
* **Research: To Infinity and Beyond:** The Initial Paper Submission deadline closes on **June 1 at 23:59 PM**. The Peer Review Window runs immediately after from **June 2 to June 4**.

## **💾 1\. Spatio-Temporal Database Schema**

Every workshop, social mixer, and competition stage is registered as a relational node. To capture real IIT Madras geography, coordinates are mapped onto a $1000 \\times 1000$ Cartesian pixel grid where **Gajendra Circle (GC)** serves as the central anchor origin point point point at $(500, 500)$.

JSON  
{  
  "venues": {  
    "OAT": { "name": "Open Air Theatre", "x": 620, "y": 480, "description": "Central cultural open arena" },  
    "DoMS\_Plaza": { "name": "Department of Management Studies", "x": 410, "y": 390, "description": "Management and humanities wing" },  
    "Biotech\_Hall": { "name": "Department of Biotechnology", "x": 480, "y": 290, "description": "Medical & Life Sciences wing" },  
    "Ramanujan\_Auditorium": { "name": "IC\&SR Complex", "x": 530, "y": 420, "description": "Main academic seminar center" },  
    "SAC\_Grounds": { "name": "Student Activity Center", "x": 710, "y": 550, "description": "Sports and larger community spaces" },  
    "Wadhwani\_School": { "name": "School of Data Science & AI", "x": 450, "y": 440, "description": "Core AI computing labs" },  
    "Online\_Portal": { "name": "Remote Interface", "x": 0, "y": 0, "description": "Pre-Paradox digital portal modules" }  
  },  
  "events": \[  
    {  
      "id": "osint-online-qualifier",  
      "title": "We Found You Online: Day 1 \- Guest Session & Qualifier Quiz",  
      "type": "Competition Phase",  
      "isOnline": true,  
      "dateStart": "2026-05-30T17:00:00Z",  
      "dateEnd": "2026-06-07T16:00:00Z",  
      "venueKey": "Online\_Portal",  
      "track": "Cybersecurity / OSINT",  
      "description": "Beginner-level OSINT challenges evaluating submission speed and flag accuracy."  
    },  
    {  
      "id": "research-initial-submission",  
      "title": "Research: To Infinity and Beyond \- Initial Manuscript Draft",  
      "type": "Research Phase",  
      "isOnline": true,  
      "dateStart": "2026-05-30T00:00:00Z",  
      "dateEnd": "2026-06-01T23:59:00Z",  
      "venueKey": "Online\_Portal",  
      "track": "Academic Research",  
      "description": "Submission of anonymized initial manuscript draft for academic peer evaluation."  
    },  
    {  
      "id": "workshop-bio-embeddings",  
      "title": "Representation Learning in Biology: Biomolecular Embeddings",  
      "type": "Workshop",  
      "isOnline": false,  
      "dateStart": "2026-06-10T14:00:00Z",  
      "dateEnd": "2026-06-10T16:00:00Z",  
      "venueKey": "Wadhwani\_School",  
      "track": "Neuro AI / Research",  
      "conflictGroup": "june10-slot2",  
      "description": "Extracting vector spaces and biological embeddings using ESM and DNABERT models."  
    },  
    {  
      "id": "compassion-pod-masterclass",  
      "title": "Compassion-A-Thon 3.0: Grand Finale POD Workshop",  
      "type": "Hackathon Core",  
      "isOnline": false,  
      "dateStart": "2026-06-11T11:00:00Z",  
      "dateEnd": "2026-06-11T13:00:00Z",  
      "venueKey": "Ramanujan\_Auditorium",  
      "track": "Business / Venture Design",  
      "conflictGroup": "june11-slot1",  
      "description": "Masterclass with Prof. Bala Ramadurai on transforming raw validation into scalable MVPs."  
    },  
    {  
      "id": "burn-club-zumba",  
      "title": "The Burn Club: Guided High-Energy Zumba Session",  
      "type": "Social / Common",  
      "isOnline": false,  
      "dateStart": "2026-06-11T17:00:00Z",  
      "dateEnd": "2026-06-11T18:00:00Z",  
      "venueKey": "OAT",  
      "track": "Wellness / Recreation",  
      "conflictGroup": "june11-evening-social",  
      "description": "Guided recreational choreography workshop run by Pravaha × Sportify."  
    }  
  \]  
}

## **🎨 2\. Frontend Interface & Component Specifications**

The application UI is designed as a split-view dashboard, keeping layout controls responsive on mobile devices when walking across the IIT Madras campus.

\+------------------------------------------------------------------------------------+  
| ✨ PARADOX 2026 INTERACTIVE NAVIGATION HUB                                         |  
\+------------------------------------------------------------------------------------+  
|  🎛️ SIDEBAR CONTROL MODULES      |  🗺️ SPATIAL VECTOR MAP VIEWER                   |  
|                                  |                                                 |  
|  \[👤 Profile Context Switcher\]   |   \+------------------------------------------+  |  
|  (•) My Track  ( ) Friend's Track|   | \[Department of Biotechnology\]            |  |  
|                                  |   |   ⚪ Inactive Facility Block             |  |  
|  \[🟩 PRIMARY ACTIVE SCHEDULER\]   |   \+------------------------------------------+  |  
|  \[x\] Bio Embeddings (June 10\)    |         │                                    |  |  
|  \[x\] Compassion-A-Thon (June 11\) |         │ 🏃‍♂️ (SVG Rendered Routing Path)     |  |  
|                                  |         ▼                                    |  |  
|  \[🟨 SECONDARY WATCHLIST BOXES\]  |   \+------------------------------------------+  |  
|  \[x\] Last1Standing Task Rush     |   | \[Wadhwani School of AI\]                  |  |  
|  \[x\] Paradox Got Talent Finals   |   |   🟢 Active Node: Bio-Embeddings Session |  |  
|                                  |   \+------------------------------------------+  |  
|  \[⬜ SHOW GENERAL FEST EVENTS\]   |                                                 |  
|  \[x\] Professor Meetups           |   \+------------------------------------------+  |  
|  \[x\] Evening DJ Fest Concert     |   | \[Open Air Theatre \- OAT\]                 |  |  
|                                  |   |   🟡 Watchlist Anchor: Talent Prelims    |  |  
\+----------------------------------+---+------------------------------------------+  |  
|  🕒 REAL-TIME TEMPORAL RANGE SCRUBBER SLIDER ENGINE                                |  
|  \[ June 10, 08:00 AM \]===========\[ June 11, 02:30 PM \]========\[ June 13, 06:00 PM \]|  
\+------------------------------------------------------------------------------------+

### **Component A: Profile Context Switcher & Checkbox Matrix**

* **Profile Context Toggle:** A state controller switches the store variables between primaryUser and friendUser structures. A specialized "Merge Overlay View" highlights matches where both profiles share an exact startTime slot, turning shared blocks dark purple.  
* **The Tri-State Selection State Engine:**  
  * Participating (Green Label): Locked into your personal primary calendar view. It sets strict system boundaries—if you select another item in the same time frame, the scheduler triggers an error alert overlay to prevent double-booking.  
  * Watchlist (Yellow Label): Reserved for spectator components (e.g., *Paradox Got Talent*, *Mr. & Mrs. Paradox*, *Last1Standing* tasks). These items render as active markers on the spatial dashboard map layer without throwing conflict warnings.  
  * Unselected (White Label): Mutes the item completely, removing it from your calendar view to minimize clutter.

### **Component B: Spatial Layout Mapper (SVG Interaction Layer)**

* **Underlying Layer Vector Model:** Uses an absolute responsive SVG viewport canvas ($1000 \\times 1000$ aspect ratio), using real relative location metrics for the campus academic zones.  
* **Real-Time State Node Styling:**  
  * Nodes map directly to pixel positions (venue.x, venue.y).  
  * Nodes adjust automatically based on your active timeline choices. Green rings indicate active primary attendance items, yellow icons signify watched spectator events, and gray dots show dormant locations.  
  * Active rooms grow using standard CSS transformations (scale(1.15)) and feature an SVG radial glow gradient.

### **Component C: Temporal Scrubber Range Slider Engine**

* **Spatio-Temporal Sync:** A linear tracking range slider sits pinned to the bottom viewport boundary. The horizontal range values span across 160 incremental steps of **30-minute blocks**, beginning June 10th at 08:00 AM and concluding June 13th at 06:00 PM\[cite: 1, 2\].  
* **State Extraction Algorithm:** Sliding the tracker instantly passes the system variable currentTimelineEpoch into a rendering slice hook. The viewport filters and reflects event records matching this time window:

$$\\text{currentTimelineEpoch} \\in \[\\text{dateStart}, \\text{dateEnd})$$

## **⚙️ 3\. Advanced Engine Mechanics & Automation Rules**

### **1\. Multi-Profile Scheduling Conflict Matrices**

TypeScript  
interface ScheduleStateStore {  
  userTracks: {  
    \[userId: string\]: {  
      checkedPrimaryIds: string\[\];  
      checkedWatchlistIds: string\[\];  
    }  
  };  
  currentTimeScrub: string; // ISO String mapping format  
  collisionWarningLog: string\[\];  
}

export const useScheduleEngine \= create\<ScheduleStateStore\>((set, get) \=\> ({  
  userTracks: {  
    primaryMe: { checkedPrimaryIds: \[\], checkedWatchlistIds: \[\] },  
    splitFriend: { checkedPrimaryIds: \[\], checkedWatchlistIds: \[\] }  
  },  
  currentTimeScrub: "2026-06-11T14:00:00Z",  
  collisionWarningLog: \[\],  
    
  injectPrimaryEvent: (userId, eventId, conflictGroup) \=\> {  
    const track \= get().userTracks\[userId\];  
    const baseEvents \= get().globalEventRegistry;  
      
    // Scan conflict parameter groups  
    const distinctCollision \= baseEvents.find(e \=\>   
      track.checkedPrimaryIds.includes(e.id) &&   
      e.conflictGroup \=== conflictGroup  
    );  
      
    if (distinctCollision) {  
      set((state) \=\> ({  
        collisionWarningLog: \[...state.collisionWarningLog, \`Scheduling Clashing: Slot occupied by ${distinctCollision.title}\`\]  
      }));  
      return false; // Soft-lock intercept triggered  
    }  
    // Proceed with state injection update if clear...  
  }  
}));

### **2\. Micro-Transit Polyline Generator Vector Math**

When your schedule requires back-to-back transit from an event at Location A directly to Location B, the mapping component automatically draws an animated pathway between coordinates.  
The vector transition distance ($\\Delta d$) is calculated using the standard Euclidean metric:

$$\\Delta d \= \\sqrt{(X\_{\\text{VenueB}} \- X\_{\\text{VenueA}})^2 \+ (Y\_{\\text{VenueB}} \- Y\_{\\text{VenueA}})^2}$$  
If $\\Delta d \> 300\\text{ pixels}$ (representing an on-campus walking trip exceeding 15 minutes across the academic complex), the user interface triggers a walking transit pathway alert on your dashboard map. This path shows up as an animated dashed line moving dynamically between your selected nodes.

## **📅 4\. Paradox 2026 Master Timeline Matrix**

| Date & Temporal Window | Event Focus Module & Tracking Context | Core Venue Map Key Anchor | Your Action Status Assignment | Friend Action Status Assignment |
| :---- | :---- | :---- | :---- | :---- |
| **May 30 – June 07** Digital Phase | We Found You Online: Day 1 \- Guest Session & Online Qualifier Quiz | **Online\_Portal** | 🟩 **Active Primary Task** *(Solve Immediately)* | 🟩 **Active Primary Task** *(Solve Immediately)* |
| **May 30 – June 01** Digital Phase | Research: To Infinity and Beyond \- Initial Paper Draft Submission | **Online\_Portal** | 🟩 **Active Primary Task** *(Complete Submission)* | 🟩 **Active Primary Task** *(Complete Submission)* |
| **June 02 – June 04** Digital Phase | Research: Peer Review Window (Evaluate 2 anonymous peer works) | **Online\_Portal** | 🟩 **Active Primary Task** *(Complete Review)* | 🟩 **Active Primary Task** *(Complete Review)* |
| **June 10 (Day 1\)** 02:00 PM \- 04:00 PM | Representation Learning in Biology: Biomolecular Embeddings | **Wadhwani\_School** | 🟩 Primary Participating Track | ⬜ Unselected / Muted |
| **June 10 (Day 1\)** 02:00 PM \- 04:00 PM | From Syntax to Sentience: Classical NLP to LLMs | **Ramanujan\_Auditorium** | ⬜ Unselected / Muted | 🟩 Primary Participating Track |
| **June 10 (Day 1\)** 02:00 PM \- 05:00 PM | Last1Standing: Round I \- Individual Task Rush | **SAC\_Grounds** | 🟨 Watchlist Track *(Wanna Watch)* | 🟨 Watchlist Track *(Wanna Watch)* |
| **June 10 (Day 1\)** 05:00 PM \- 11:59 PM | We Found You Online: Day 2 \- Station Puzzles | **Campus\_Intelligence\_Hub** | 🟨 Watchlist Track *(Evening Slot)* | 🟨 Watchlist Track *(Evening Slot)* |
| **June 11 (Day 2\)** 10:00 AM \- 12:00 PM | Keynote Research Basics & Hypothesis Design Seminar | **Ramanujan\_Auditorium** | 🟩 Primary Participating Track | 🟩 Primary Participating Track |
| **June 11 (Day 2\)** 11:00 AM \- 01:00 PM\[cite: 1, 2\] | Compassion-A-Thon 3.0: On-Campus POD Masterclass Workshop\[cite: 1, 2\] | **Ramanujan\_Auditorium** | 🟩 **Mandatory Core Event Node** | 🟩 **Mandatory Core Event Node** |
| **June 11 (Day 2\)** 01:00 PM \- 06:00 PM | Compassion-A-Thon 3.0: Office Hours & On-Campus Interviews | **Entire Campus Complex** | 🟩 **Mandatory Core Event Node** | 🟩 **Mandatory Core Event Node** |
| **June 11 (Day 2\)** 02:00 PM \- 04:00 PM | Optimisation in Machine Learning (Prof. Harish Guruprasad) | **Wadhwani\_School** | 🟩 Primary Participating Track | ⬜ Unselected / Muted |
| **June 11 (Day 2\)** 02:00 PM \- 04:00 PM | From Chatbots to Autonomous Agents (Shabareesh Raj) | **DoMS\_Plaza** | ⬜ Unselected / Muted | 🟩 Primary Participating Track |
| **June 11 (Day 2\)** 05:00 PM \- 06:00 PM | The Burn Club: Guided Zumba Session Workshop | **OAT** | 🟩 Common Participating Node | 🟩 Common Participating Node |
| **June 12 (Day 3\)** 10:00 AM \- 12:00 PM | AI-Powered Precision Health at Scale (Dr. Naveen Sivadasan) | **Biotech\_Hall** | 🟩 Primary Participating Track | ⬜ Unselected / Muted |
| **June 12 (Day 3\)** 10:00 AM \- 12:00 PM | Context is the New Compute: Engineering Retrieval Systems | **Ramanujan\_Auditorium** | ⬜ Unselected / Muted | 🟩 Primary Participating Track |
| **June 12 (Day 3\)** 10:00 AM \- Onward | Compassion-A-Thon 3.0: Final Stage Pitch Evaluations | **DoMS\_Plaza** | 🟩 **Mandatory Core Event Node** | 🟩 **Mandatory Core Event Node** |
| **June 12 (Day 3\)** 02:00 PM \- 04:00 PM | Playing with AI \- Autonomous Agentic Systems 101 | **Wadhwani\_School** | 🟩 Primary Participating Track | ⬜ Unselected / Muted |
| **June 12 (Day 3\)** 02:00 PM \- 04:00 PM | Sports Analytics & AI Workshop (Dr. Babji Srinivasan) | **SAC\_Grounds** | ⬜ Unselected / Muted | 🟩 Primary Participating Track |
| **June 12 (Day 3\)** 04:00 PM \- 07:00 PM | Paradox Got Talent Showcase & Mr. & Mrs. Paradox Prelims | **OAT** | 🟨 Watchlist Track *(Wanna Watch)* | 🟨 Watchlist Track *(Wanna Watch)* |
| **June 13 (Day 4\)** 10:00 AM \- 12:00 PM | Beyond Next-Token Prediction in Multimodal AI Models | **Wadhwani\_School** | 🟩 Primary Participating Track | ⬜ Unselected / Muted |
| **June 13 (Day 4\)** 10:00 AM \- 12:00 PM | Five Mistakes Data Scientists Make & How Economics Fixes Them | **DoMS\_Plaza** | ⬜ Unselected / Muted | 🟩 Primary Participating Track |
| **June 13 (Day 4\)** 02:00 PM \- 04:00 PM | Data Science with Coding Agents: Masterclass on SLMs | **Wadhwani\_School** | 🟩 Primary Participating Track | ⬜ Unselected / Muted |
| **June 13 (Day 4\)** 02:00 PM \- 04:00 PM | Why Most AI Systems Fail and How to Build Ones That Don't | **Ramanujan\_Auditorium** | ⬜ Unselected / Muted | 🟩 Primary Participating Track |
| **June 13 (Day 4\)** 06:00 PM \- Onward | Paradox Closing Ceremony & Celebratory Grand DJ Concert Night | **OAT** | 🟩 Common Participating Node | 🟩 Common Participating Node |

## **🛠️ 5\. Implementation Roadmap & Development Plan**

### **Milestone 1: Database Assembly & Static Entry Locking**

* Save the normalized timeline array entries into a standalone configuration registry file (/src/data/paradoxStore.json).  
* Build custom data hooks to flag online-only entries, ensuring they load into a dashboard layout before the physical campus map initializes.

### **Milestone 2: Zustand State Engine Development**

* Implement state handling modules for both users, linking them with an overlay comparator function.  
* Incorporate validation logic checks into your selection function to catch potential scheduling clashes:

TypeScript  
const isSlotColliding \= (newEvent, registeredIds, fullRegistry) \=\> {  
  const currentSlot \= fullRegistry.find(e \=\> e.id \=== newEvent.id);  
  return fullRegistry.some(e \=\>   
    registeredIds.includes(e.id) &&   
    e.conflictGroup \=== currentSlot.conflictGroup  
  );  
};

### **Milestone 3: Interactive Map Rendering & Final Build Verification**

* Write standard SVG map node elements to position target facilities accurately.  
* Link data parameters, timeline range configurations, and user choice states together to generate a highly responsive production build deployment.