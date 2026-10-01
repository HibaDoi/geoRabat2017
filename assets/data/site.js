/* =====================================================================
   3D GeoInfo | SDSC 2027 – Rabat
   ---------------------------------------------------------------------
   ALL EDITABLE CONTENT LIVES HERE.
   Organisers: edit the values below, save, and reload index.html.
   No build step is needed. Items marked "TBC" are provisional and were
   seeded from the Sofia 2026 edition shifted by one year.
   ===================================================================== */

window.SITE = {

  /* ---------- Basic event facts ---------- */
  event: {
    shortTitle: "3D GeoInfo | SDSC 2027",
    title: "22nd International 3D GeoInfo Conference & 11th International Smart Data and Smart Cities Conference",
    dates: "4–8 October 2027",
    datesNote: "Monday 4 to Friday 8 October",
    city: "Rabat, Morocco",
    hostShort: "IAV Hassan II",
    host: "Institut Agronomique et Vétérinaire Hassan II (IAV Hassan II)",
    address: "Madinat Al Irfane, B.P. 6202, Rabat-Instituts, 10101 Rabat, Morocco",
    email: "contact@3dgeoinfo-sdsc2027.org",          // TBC – replace with the real mailbox
    conftool: "https://www.conftool.org/3dgeoinfo-sdsc2027/", // TBC – create the ConfTool instance
    hashtag: "#GeoRabat2027",
    // Map centre for the venue (approximate – adjust if needed)
    map: { lat: 33.9784, lon: -6.8639, zoom: 15 }
  },

  /* ---------- Key deadlines (TBC – seeded from Sofia 2026 + 1 year) ---------- */
  deadlines: [
    { label: "Abstract submission (extended abstracts)", date: "9 April 2027", tbc: true },
    { label: "Full paper submission (ISPRS Annals track)", date: "9 April 2027", tbc: true },
    { label: "Notification of acceptance", date: "18 June 2027", tbc: true },
    { label: "Camera-ready papers", date: "23 July 2027", tbc: true },
    { label: "Early-bird registration closes", date: "20 July 2027", tbc: true },
    { label: "Author registration deadline", date: "6 September 2027", tbc: true },
    { label: "Workshops & tutorials (Day 1)", date: "Monday 4 October 2027" },
    { label: "Conference", date: "Monday 4 – Friday 8 October 2027" }
  ],

  /* ---------- Topics ---------- */
  topics: {
    common: [
      "3D/4D data acquisition and sensing technologies",
      "BIM–GIS integration",
      "Urban digital twins",
      "Smart cities and geospatial data infrastructures",
      "GeoAI: machine learning for urban and 3D data",
      "Standards, interoperability and open data (CityGML, CityJSON, IFC, OGC APIs)"
    ],
    geoinfo: [
      "3D/4D data collection: laser scanning, photogrammetry, UAV and mobile mapping",
      "Point cloud processing, classification and 3D reconstruction",
      "3D data modelling, generalisation and level of detail",
      "Data quality, validation, metadata and provenance",
      "3D data management, spatial databases and indexing",
      "Information fusion of 3D, BIM, IoT and remote-sensing data",
      "Semantic enrichment, ontologies and knowledge graphs",
      "3D visualisation, virtual, augmented and mixed reality",
      "Indoor modelling, indoor and multimodal navigation",
      "Underground, utilities and infrastructure modelling",
      "3D cadastre, land administration and legal 3D objects",
      "Applications: urban planning, energy, noise, flood and disaster management, facility management, cultural heritage"
    ],
    sdsc: [
      "GIS, urban informatics and ICT for smart cities",
      "Data science and city analytics",
      "Mobility, people-flow and transportation data",
      "Citizen participation, crowdsourcing and volunteered geographic information",
      "Privacy, security and ethics of urban data and digital twins",
      "Open data, urban data platforms and city dashboards",
      "Sensor networks, IoT and real-time city monitoring",
      "Disaster, risk and resilience management",
      "Artificial intelligence and machine learning for urban systems",
      "Drones and remote monitoring of the city",
      "Smart homes, smart buildings and smart districts",
      "Energy efficiency, net-zero and climate-neutral cities",
      "Circular economy and sustainable urban development",
      "Smart transportation, autonomous systems and smart logistics",
      "Spatio-temporal analysis and urban modelling",
      "Urban health, wellbeing and the 15-minute city"
    ]
  },

  /* ---------- Committees ---------- */
  chairs: [
    { role: "General Chair", name: "To be announced", affiliation: "IAV Hassan II, Morocco", photo: "" },
    { role: "3D GeoInfo Co-Chair", name: "To be announced", affiliation: "ISPRS WG IV – 3D GeoInfo", photo: "" },
    { role: "SDSC Co-Chair", name: "To be announced", affiliation: "Urban Data Management Society (UDMS)", photo: "" }
  ],
  organisingCommittee: [
    // { name: "Full Name", affiliation: "IAV Hassan II, Morocco" },
  ],
  scientificCommittee: [
    // { name: "Full Name", affiliation: "Institution, Country" },
  ],

  /* ---------- Keynotes & workshops ---------- */
  keynotes: [
    { name: "To be announced", affiliation: "", talk: "Keynote speakers will be announced in 2027", photo: "" },
    { name: "To be announced", affiliation: "", talk: "", photo: "" },
    { name: "To be announced", affiliation: "", talk: "", photo: "" }
  ],
  workshops: [
    {
      title: "Call for workshops and tutorials",
      chairs: "Open call",
      description: "Proposals for half-day or full-day workshops and hands-on tutorials on Day 1 (Monday 4 October) are welcome. Send a one-page proposal (title, organisers, format, expected audience) to the organising committee.",
      tbc: true
    }
  ],

  /* ---------- Draft programme (structure only – TBC) ---------- */
  programme: [
    {
      day: "Day 1", date: "Mon 4 Oct", label: "Workshops & tutorials",
      items: [
        { time: "09:00 – 12:30", title: "Workshop / tutorial slot 1", where: "IAV Hassan II" },
        { time: "12:30 – 14:00", title: "Lunch", where: "" },
        { time: "14:00 – 17:30", title: "Workshop / tutorial slot 2", where: "IAV Hassan II" },
        { time: "17:30 – 19:00", title: "Early registration", where: "Registration desk" }
      ]
    },
    {
      day: "Day 2", date: "Tue 5 Oct", label: "3D GeoInfo",
      items: [
        { time: "08:30 – 09:30", title: "Registration", where: "Registration desk" },
        { time: "09:30 – 10:00", title: "Opening ceremony", where: "Main auditorium" },
        { time: "10:00 – 11:00", title: "Keynote 1", where: "Main auditorium" },
        { time: "11:30 – 13:00", title: "Parallel sessions – 3D data acquisition & reconstruction / 3D data management", where: "Rooms A & B" },
        { time: "14:00 – 15:30", title: "Parallel sessions – BIM–GIS integration / Semantic enrichment & GeoAI", where: "Rooms A & B" },
        { time: "16:00 – 17:30", title: "Parallel sessions – 3D visualisation & XR / Applications", where: "Rooms A & B" },
        { time: "19:00", title: "Welcome reception", where: "TBC" }
      ]
    },
    {
      day: "Day 3", date: "Wed 6 Oct", label: "Joint day",
      items: [
        { time: "09:00 – 10:00", title: "Keynote 2", where: "Main auditorium" },
        { time: "10:30 – 12:30", title: "Common session – Urban digital twins for African and Mediterranean cities", where: "Main auditorium" },
        { time: "14:00 – 15:30", title: "Panel – GeoAI-ready smart cities", where: "Main auditorium" },
        { time: "16:00 – 17:30", title: "Government, industry & sponsor session", where: "Main auditorium" },
        { time: "20:00", title: "Gala dinner", where: "TBC" }
      ]
    },
    {
      day: "Day 4", date: "Thu 7 Oct", label: "SDSC",
      items: [
        { time: "09:00 – 10:00", title: "Keynote 3", where: "Main auditorium" },
        { time: "10:30 – 12:30", title: "Parallel sessions – City analytics / Mobility & transportation", where: "Rooms A & B" },
        { time: "13:30 – 14:30", title: "Poster session", where: "Foyer" },
        { time: "14:30 – 16:00", title: "Parallel sessions – IoT & monitoring / Energy & net-zero cities", where: "Rooms A & B" },
        { time: "16:30 – 17:30", title: "Keynote 4", where: "Main auditorium" }
      ]
    },
    {
      day: "Day 5", date: "Fri 8 Oct", label: "SDSC & closing",
      items: [
        { time: "09:00 – 10:30", title: "Parallel sessions – Citizen participation & open data / Resilience & disaster management", where: "Rooms A & B" },
        { time: "11:00 – 12:00", title: "Best paper awards & closing ceremony", where: "Main auditorium" },
        { time: "14:00 – 18:00", title: "Technical tour – Kasbah of the Udayas, Chellah and the Bouregreg valley", where: "Departure from IAV Hassan II" }
      ]
    }
  ],

  /* ---------- Accommodation (distances approximate, from IAV Hassan II) ---------- */
  hotels: [
    { name: "Sofitel Rabat Jardin des Roses", area: "Souissi", stars: 5, distance: "≈ 3 km", url: "https://all.accor.com/" },
    { name: "Rabat Marriott Hotel", area: "Souissi", stars: 5, distance: "≈ 3 km", url: "https://www.marriott.com/" },
    { name: "The View Hotel Rabat", area: "Hay Riad", stars: 5, distance: "≈ 3 km", url: "" },
    { name: "Ibis Rabat Agdal", area: "Agdal", stars: 3, distance: "≈ 3 km", url: "https://all.accor.com/" },
    { name: "Le Diwan Rabat – MGallery", area: "City centre", stars: 4, distance: "≈ 5 km", url: "https://all.accor.com/" },
    { name: "ONOMO Hotel Rabat Terminus", area: "Rabat Ville station", stars: 4, distance: "≈ 5 km", url: "" },
    { name: "Hôtel Tour Hassan Palace", area: "City centre", stars: 5, distance: "≈ 6 km", url: "" },
    { name: "Riads in the Medina (various)", area: "Medina / Udayas", stars: 0, distance: "≈ 7 km", url: "" }
  ],

  /* ---------- Registration fees (EUR, TBC – seeded from Sofia 2026) ---------- */
  fees: {
    currency: "€",
    earlyLabel: "Early (until 20 July 2027)",
    lateLabel: "Late / on-site",
    packages: [
      {
        name: "Joint event (all days)", days: "3D GeoInfo + SDSC",
        rows: [
          { type: "Regular", early: 650, late: 750 },
          { type: "Student", early: 400, late: 450 }
        ]
      },
      {
        name: "3D GeoInfo only", days: "Days 2–3",
        rows: [
          { type: "Regular", early: 300, late: 350 },
          { type: "Student", early: 200, late: 250 }
        ]
      },
      {
        name: "SDSC only", days: "Days 3–5",
        rows: [
          { type: "Regular", early: 350, late: 450 },
          { type: "Student", early: 250, late: 300 }
        ]
      }
    ],
    extras: [
      { label: "Accompanying person (social events only)", price: 150 },
      { label: "Each additional paper (beyond the first)", price: 150 },
      { label: "Workshop / tutorial (Day 1, Monday)", price: 50 }
    ],
    includes: [
      "Access to all sessions of the selected package",
      "Publication of one accepted paper in ISPRS Annals or Archives",
      "Coffee breaks and lunches",
      "Welcome reception (Day 2) and gala dinner (Day 3) for joint and multi-day packages",
      "Conference materials"
    ]
  },

  /* ---------- Sponsorship tiers (EUR, TBC – seeded from Sofia 2026) ---------- */
  sponsorTiers: [
    { name: "Platinum", price: 10000, colour: "#7f8c9a",
      benefits: ["Prominent logo on website, programme and stage backdrop", "Plenary presentation slot (15 min)", "3 full registrations", "Exhibition table", "Attendee list"] },
    { name: "Gold", price: 7000, colour: "#d4a017",
      benefits: ["Logo on website, programme and materials", "2 full registrations", "Exhibition table", "Attendee list"] },
    { name: "Silver", price: 5000, colour: "#a9b1b8",
      benefits: ["Logo on website and programme", "1 full registration", "Exhibition table", "Attendee list"] },
    { name: "Bronze", price: 2000, colour: "#b5532a",
      benefits: ["Logo on website and communications", "1 full registration", "Attendee list"] }
  ],

  /* ---------- Logos (put files in assets/img/ and set `logo`) ---------- */
  supporters: [
    { name: "ISPRS", full: "International Society for Photogrammetry and Remote Sensing", url: "https://www.isprs.org/", logo: "" },
    { name: "UDMS", full: "Urban Data Management Society", url: "https://udms.net/", logo: "" },
    { name: "IAV Hassan II", full: "Institut Agronomique et Vétérinaire Hassan II", url: "https://www.iav.ac.ma/", logo: "" },
    { name: "OGC", full: "Open Geospatial Consortium", url: "https://www.ogc.org/", logo: "" }
  ],
  sponsors: [
    // { name: "Company", tier: "Gold", url: "https://…", logo: "assets/img/sponsors/company.png" }
  ],
  journalPartners: [
    { name: "ISPRS International Journal of Geo-Information (MDPI)", note: "Special issue – to be confirmed", url: "https://www.mdpi.com/journal/ijgi" },
    { name: "Geomatics (MDPI)", note: "Special issue – to be confirmed", url: "https://www.mdpi.com/journal/geomatics" }
  ],

  /* ---------- Past editions (footer) ---------- */
  pastEditions: [
    { year: 2026, label: "Sofia, Bulgaria – 21st 3D GeoInfo, 10th SDSC & 14th LADM/3D LA", url: "https://conference.gate-ai.eu/GeoSofia2026/" },
    { year: 2025, label: "Kashiwa, Japan – 20th 3D GeoInfo & 9th SDSC", url: "https://www.csis.u-tokyo.ac.jp/3d_geoinfo_sdsc_2025/overview.html" },
    { year: 2024, label: "Vigo, Spain – 19th 3D GeoInfo (with EG-ICE)", url: "https://3dgeoinfoeg-ice.webs.uvigo.es/" },
    { year: 2024, label: "Athens, Greece – 8th SDSC", url: "https://tudelft3d.github.io/sdsc2024/" },
    { year: 2023, label: "Munich, Germany – 18th 3D GeoInfo", url: "https://www.3dgeoinfo.org/3dgeoinfo/" },
    { year: 2022, label: "Sydney, Australia – 17th 3D GeoInfo & 7th SDSC", url: "https://www.sdsc3dgeoinfo.unsw.edu.au/" }
  ]
};
