/* =====================================================================
   3D GeoInfo and SDSC 2027, Rabat
   All editable content lives here. Edit, save, reload index.html.
   Deadlines, fees and sponsorship prices are provisional: they were
   seeded from the Sofia 2026 edition shifted by one year. The page
   says so once per table; there are no per-row badges.
   Writing style: plain sentences, no "·" separators, no dashes as
   punctuation. En dashes only inside ranges (4–8, 800–1000).
   ===================================================================== */

window.SITE = {

  /* ---------- Basic event facts ---------- */
  event: {
    pageTitle: "3D GeoInfo and SDSC 2027, Rabat",
    dates: "4–8 October 2027",
    datesShort: "4–8.10.2027",
    city: "Rabat, Morocco",
    hostShort: "IAV Hassan II",
    host: "Institut Agronomique et Vétérinaire Hassan II",
    address: "Madinat Al Irfane, B.P. 6202, Rabat-Instituts, 10101 Rabat, Morocco",
    coords: "33.978° N, 6.864° W",
    email: "contact@3dgeoinfo-sdsc2027.org",          // placeholder: replace with the real mailbox
    conftool: "https://www.conftool.org/3dgeoinfo-sdsc2027/", // placeholder: create the ConfTool instance
    hashtag: "#GeoRabat2027",
    map: { lat: 33.9784, lon: -6.8639, zoom: 15 }
  },

  /* ---------- Key deadlines, in date order (provisional) ---------- */
  deadlines: [
    { label: "Extended abstracts", date: "9 April 2027" },
    { label: "Full papers for the ISPRS Annals", date: "9 April 2027" },
    { label: "Notification of acceptance", date: "18 June 2027" },
    { label: "Early registration closes", date: "20 July 2027" },
    { label: "Camera-ready papers", date: "23 July 2027" },
    { label: "Author registration closes", date: "6 September 2027" },
    { label: "Conference, with workshops on Monday", date: "4–8 October 2027" }
  ],

  /* ---------- Topics ---------- */
  topics: {
    common: [
      "3D and 4D data acquisition and sensing",
      "BIM and GIS integration",
      "Urban digital twins",
      "Spatial data infrastructures for cities",
      "Machine learning on urban and 3D data",
      "Standards and open data: CityGML, CityJSON, IFC, OGC APIs"
    ],
    geoinfo: [
      "Laser scanning, photogrammetry, UAV and mobile mapping",
      "Point cloud processing, classification and 3D reconstruction",
      "3D modelling, generalisation and levels of detail",
      "Data quality, validation, metadata and provenance",
      "3D spatial databases and indexing",
      "Fusion of 3D, BIM, IoT and remote sensing data",
      "Semantic enrichment, ontologies and knowledge graphs",
      "Visualisation, virtual and augmented reality",
      "Indoor modelling and navigation",
      "Underground, utility and infrastructure models",
      "3D cadastre and land administration",
      "Uses in planning, energy, noise, flooding, facility management and heritage"
    ],
    sdsc: [
      "GIS and urban informatics",
      "City analytics and data science",
      "Mobility and people-flow data",
      "Citizen participation and volunteered geographic information",
      "Privacy, security and ethics of urban data",
      "Open data platforms and city dashboards",
      "Sensor networks and real-time monitoring",
      "Disaster risk and resilience",
      "Machine learning for urban systems",
      "Drones for city monitoring",
      "Smart buildings and districts",
      "Energy efficiency and net-zero cities",
      "Circular economy",
      "Transport, autonomous vehicles and logistics",
      "Spatio-temporal analysis and urban modelling",
      "Urban health and the 15-minute city"
    ]
  },

  /* ---------- People ----------
     While a name is "To be announced", the page shows one sentence
     instead of empty portrait cards. */
  chairs: [
    { role: "general chair", name: "To be announced", affiliation: "IAV Hassan II", photo: "" },
    { role: "3D GeoInfo co-chair", name: "To be announced", affiliation: "ISPRS", photo: "" },
    { role: "SDSC co-chair", name: "To be announced", affiliation: "the Urban Data Management Society", photo: "" }
  ],
  peopleNote: "Chairs and committees will be announced in early 2027.",
  organisingCommittee: [
    // { name: "Full Name", affiliation: "IAV Hassan II" },
  ],
  scientificCommittee: [
    // { name: "Full Name", affiliation: "Institution, Country" },
  ],

  /* ---------- Keynotes and workshops ---------- */
  keynotes: [
    // { name: "Full Name", affiliation: "Institution", talk: "Talk title", photo: "assets/img/people/name.jpg" },
  ],
  keynotesNote: "Keynote speakers will be announced in spring 2027.",
  workshops: [
    {
      title: "Call for workshops and tutorials",
      description: "Monday 4 October is set aside for half-day and full-day workshops and hands-on tutorials. They are open to everyone registered for the conference. To propose one, send a single page with the title, organisers, format and expected audience."
    }
  ],

  /* ---------- Programme (structure only, provisional) ---------- */
  programme: [
    {
      day: "Monday", date: "4 Oct", label: "Workshops",
      items: [
        { time: "09:00–12:30", title: "Workshops and tutorials, morning", where: "IAV Hassan II" },
        { time: "14:00–17:30", title: "Workshops and tutorials, afternoon", where: "IAV Hassan II" },
        { time: "17:30–19:00", title: "Early registration", where: "Registration desk" }
      ]
    },
    {
      day: "Tuesday", date: "5 Oct", label: "3D GeoInfo",
      items: [
        { time: "08:30–09:30", title: "Registration" },
        { time: "09:30–10:00", title: "Opening", where: "Main auditorium" },
        { time: "10:00–11:00", title: "Keynote", where: "Main auditorium" },
        { time: "11:30–13:00", title: "Parallel sessions", rooms: ["Room A: acquisition and reconstruction", "Room B: 3D data management"] },
        { time: "14:00–15:30", title: "Parallel sessions", rooms: ["Room A: BIM and GIS integration", "Room B: semantics and machine learning"] },
        { time: "16:00–17:30", title: "Parallel sessions", rooms: ["Room A: visualisation and XR", "Room B: applications"] },
        { time: "19:00", title: "Welcome reception" }
      ]
    },
    {
      day: "Wednesday", date: "6 Oct", label: "Joint day",
      items: [
        { time: "09:00–10:00", title: "Keynote", where: "Main auditorium" },
        { time: "10:30–12:30", title: "Joint session on urban digital twins for African and Mediterranean cities", where: "Main auditorium" },
        { time: "14:00–15:30", title: "Panel on machine learning in city data", where: "Main auditorium" },
        { time: "16:00–17:30", title: "Government, industry and sponsor session", where: "Main auditorium" },
        { time: "20:00", title: "Conference dinner" }
      ]
    },
    {
      day: "Thursday", date: "7 Oct", label: "SDSC",
      items: [
        { time: "09:00–10:00", title: "Keynote", where: "Main auditorium" },
        { time: "10:30–12:30", title: "Parallel sessions", rooms: ["Room A: city analytics", "Room B: mobility and transport"] },
        { time: "13:30–14:30", title: "Posters", where: "Foyer" },
        { time: "14:30–16:00", title: "Parallel sessions", rooms: ["Room A: sensing and monitoring", "Room B: energy and net-zero cities"] },
        { time: "16:30–17:30", title: "Keynote", where: "Main auditorium" }
      ]
    },
    {
      day: "Friday", date: "8 Oct", label: "SDSC and closing",
      items: [
        { time: "09:00–10:30", title: "Parallel sessions", rooms: ["Room A: participation and open data", "Room B: resilience and disaster risk"] },
        { time: "11:00–12:00", title: "Awards and closing", where: "Main auditorium" },
        { time: "14:00–18:00", title: "Technical tour of the Kasbah of the Udayas, the Chellah and the Bouregreg valley", where: "Buses leave from IAV Hassan II" }
      ]
    }
  ],

  /* ---------- Accommodation (distances from IAV Hassan II, approximate) ---------- */
  hotels: [
    { name: "Sofitel Rabat Jardin des Roses", area: "Souissi", category: "5-star", distance: "3 km", url: "https://all.accor.com/" },
    { name: "Rabat Marriott Hotel", area: "Souissi", category: "5-star", distance: "3 km", url: "https://www.marriott.com/" },
    { name: "The View Hotel Rabat", area: "Hay Riad", category: "5-star", distance: "3 km", url: "" },
    { name: "Ibis Rabat Agdal", area: "Agdal", category: "3-star", distance: "3 km", url: "https://all.accor.com/" },
    { name: "Le Diwan Rabat, MGallery", area: "City centre", category: "4-star", distance: "5 km", url: "https://all.accor.com/" },
    { name: "ONOMO Hotel Rabat Terminus", area: "Rabat Ville station", category: "4-star", distance: "5 km", url: "" },
    { name: "Hôtel Tour Hassan Palace", area: "City centre", category: "5-star", distance: "6 km", url: "" },
    { name: "Riads in the medina", area: "Medina and Udayas", category: "Guesthouses", distance: "7 km", url: "" }
  ],

  /* ---------- Registration fees in euros (provisional) ---------- */
  fees: {
    currency: "€",
    earlyLabel: "Until 20 July 2027",
    lateLabel: "After 20 July and on site",
    packages: [
      { name: "Full week", days: "Monday to Friday, both conferences",
        rows: [ { type: "Regular", early: 650, late: 750 }, { type: "Student", early: 400, late: 450 } ] },
      { name: "3D GeoInfo", days: "Tuesday and Wednesday",
        rows: [ { type: "Regular", early: 300, late: 350 }, { type: "Student", early: 200, late: 250 } ] },
      { name: "SDSC", days: "Wednesday to Friday",
        rows: [ { type: "Regular", early: 350, late: 450 }, { type: "Student", early: 250, late: 300 } ] }
    ],
    extras: [
      { label: "Accompanying person, social events only", price: 150 },
      { label: "Each additional paper after the first", price: 150 }
    ],
    includes: [
      "All sessions on the days of your package, and Monday's workshops",
      "Publication of one accepted paper in the ISPRS Annals or Archives",
      "Coffee and lunch on each conference day",
      "The welcome reception on Tuesday and the dinner on Wednesday, if your package covers those days"
    ]
  },

  /* ---------- Sponsorship (euros, provisional) ---------- */
  sponsorTiers: [
    { name: "Platinum", price: 10000, colour: "#0b2a1d",
      benefits: ["Logo on the website, programme and stage", "A 15-minute plenary slot", "Three registrations", "Exhibition table", "Attendee list"] },
    { name: "Gold", price: 7000, colour: "#007136",
      benefits: ["Logo on the website and programme", "Two registrations", "Exhibition table", "Attendee list"] },
    { name: "Silver", price: 5000, colour: "#7aa58a",
      benefits: ["Logo on the website and programme", "One registration", "Exhibition table", "Attendee list"] },
    { name: "Bronze", price: 2000, colour: "#b41c1b",
      benefits: ["Logo on the website", "One registration", "Attendee list"] }
  ],

  /* ---------- Organisations ---------- */
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
    { name: "ISPRS International Journal of Geo-Information", note: "special issue planned", url: "https://www.mdpi.com/journal/ijgi" },
    { name: "Geomatics", note: "special issue planned", url: "https://www.mdpi.com/journal/geomatics" }
  ],

  /* ---------- Past editions (footer) ---------- */
  pastEditions: [
    { name: "Sofia 2026", detail: "21st 3D GeoInfo, 10th SDSC and 14th LADM workshop", url: "https://conference.gate-ai.eu/GeoSofia2026/" },
    { name: "Kashiwa 2025", detail: "20th 3D GeoInfo and 9th SDSC", url: "https://www.csis.u-tokyo.ac.jp/3d_geoinfo_sdsc_2025/overview.html" },
    { name: "Vigo 2024", detail: "19th 3D GeoInfo, with EG-ICE", url: "https://3dgeoinfoeg-ice.webs.uvigo.es/" },
    { name: "Athens 2024", detail: "8th SDSC", url: "https://tudelft3d.github.io/sdsc2024/" },
    { name: "Munich 2023", detail: "18th 3D GeoInfo", url: "https://www.3dgeoinfo.org/3dgeoinfo/" },
    { name: "Sydney 2022", detail: "17th 3D GeoInfo and 7th SDSC", url: "https://www.sdsc3dgeoinfo.unsw.edu.au/" }
  ]
};
