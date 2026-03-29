import type {
  TrainingEvent,
  TrainingFormat,
  TrainingRoadmapCourse,
  TrainingTrack,
  TrainingVideo,
} from "./siteContent";

export const trainingRoadmapCourse: TrainingRoadmapCourse = {
  label: "Flagship roadmap",
  title: "Cloud-Native Geospatial Data Science Roadmap",
  summary:
    "A structured route through the cloud-native tools, concepts, and delivery patterns that matter in modern geospatial data science.",
};

export const contactChecklist = [
  "A concise statement of the question you are trying to answer",
  "What data you already have access to and what remains uncertain",
  "Whether you need a prototype, a production workflow, or an expert audit",
];

export const trainingTracks: TrainingTrack[] = [
  {
    title: "Earth Observation Foundations",
    purpose:
      "Build a practical grounding in earth observation data, sensors, formats, and analysis choices before teams move into delivery work.",
    audience: "For analysts, researchers, and technical teams entering EO workflows.",
    topics: [
      "Mission types, sensor tradeoffs, and spatial-temporal resolution",
      "Raster and vector fundamentals for analysis-ready workflows",
      "Data quality, cloud masking, and uncertainty-aware interpretation",
      "Working with EO outputs in decision support contexts",
    ],
  },
  {
    title: "Geo-spatial AI & ML Workflows",
    purpose:
      "Show how machine learning actually fits into remote sensing production, from labelled data to model review and operational outputs.",
    audience: "For ML practitioners, data scientists, and remote sensing teams building models.",
    topics: [
      "Training data design for detection, segmentation, and change workflows",
      "Evaluation patterns for geo-spatial models and analyst trust",
      "Model error analysis with map-based review loops",
      "Packaging inference outputs for downstream products and teams",
    ],
  },
  {
    title: "FAIR, Open Science & EarthCODE",
    purpose:
      "Teach teams how to turn exploratory EO work into reproducible, FAIR, and shareable science and engineering outputs.",
    audience: "For research groups, open-science practitioners, and public-interest programs.",
    topics: [
      "FAIR principles in applied geo-spatial projects",
      "EarthCODE workflows, reproducibility, and reusable artifacts",
      "Publishing code, methods, and metadata for reuse",
      "Open-science patterns that support institutional adoption",
    ],
  },
  {
    title: "Cloud-Native Geo-spatial Delivery",
    purpose:
      "Bridge the gap between prototypes and production with delivery patterns suited to modern geo-spatial infrastructure.",
    audience: "For engineering teams operationalizing EO or geo-spatial intelligence products.",
    topics: [
      "Cloud-native storage and access patterns for geo-spatial data",
      "Batch and near-real-time pipeline design",
      "Serving analysis outputs through APIs, dashboards, or internal tools",
      "Operational handoff, governance, and support readiness",
    ],
  },
];

export const trainingFormats: TrainingFormat[] = [
  {
    title: "Private team workshops",
    description:
      "Focused sessions for a single organization, tailored to the data, tools, and decisions your team actually works with.",
    note: "Best for in-house capability building and project kickoffs.",
  },
  {
    title: "Live online training",
    description:
      "Remote delivery for distributed teams, with hands-on walkthroughs, Q&A, and practical examples drawn from earth observation work.",
    note: "Best for mixed technical audiences across locations.",
  },
  {
    title: "Tailored training programs",
    description:
      "Multi-session programs designed around a curriculum arc, from foundations through delivery and adoption.",
    note: "Best for teams moving from research into repeatable delivery.",
  },
];

export const trainingVideos: TrainingVideo[] = [
  {
    title: "Creating FAIR Workflows with Agentic AI",
    source: "Dean Summers",
    url: "https://youtu.be/2LVGWiQ2TWs",
    youtubeId: "2LVGWiQ2TWs",
    date: "March 17, 2026",
    summary:
      "A practical session on using agentic AI to support FAIR workflows, with an emphasis on reproducibility, reusable process design, and open-science delivery.",
  },
  {
    title: "FAIR and Open Science for Earth Sciences with ESA EarthCODE",
    source: "FOSS4G:UK",
    url: "https://www.youtube.com/watch?v=lqIPHpNGL2U",
    youtubeId: "lqIPHpNGL2U",
    date: "October 2, 2025",
    summary:
      "A practical talk on ESA EarthCODE and the open-science patterns that support reproducible Earth science delivery beyond one-off pilots.",
  },
  {
    title: "FAIR and Open Science in Action: An Introduction to EarthCODE",
    source: "BiDS'25",
    url: "https://www.youtube.com/watch?v=sLcdFd_iTLg",
    youtubeId: "sLcdFd_iTLg",
    date: "September 29-30, 2025",
    summary:
      "A recorded BiDS'25 tutorial on EarthCODE, FAIR principles, and reproducible Earth observation workflows for teams building open, reusable methods.",
  },
];

export const trainingEvents: TrainingEvent[] = [
  {
    title: "Earth Observation Open Science Bootcamp",
    date: "September 17, 2026",
    format: "Virtual live workshop",
    status: "upcoming",
    link: "#request-training",
  },
  {
    title: "Geo-spatial AI for Sustainability Teams",
    date: "November 12, 2026",
    format: "Cambridge, UK + online",
    status: "upcoming",
    link: "#request-training",
  },
  {
    title: "Reproducible EO Workflows for Research Teams",
    date: "June 12, 2025",
    format: "Private team workshop, Cambridge",
    status: "past",
  },
  {
    title: "FAIR and Open Science for Earth Sciences with ESA EarthCODE",
    date: "October 2, 2025",
    format: "FOSS4G:UK talk, Leeds",
    status: "past",
    link: "https://talks.osgeo.org/foss4g-uk-2025/talk/KYMRGJ/",
  },
  {
    title: "EarthCODE 101 Hands-On Workshop",
    date: "October 1, 2025",
    format: "FOSS4G:UK workshop, Leeds",
    status: "past",
    link: "https://talks.osgeo.org/foss4g-uk-2025/talk/YB7BUR/",
  },
  {
    title: "FAIR and Open Science in Action: An Introduction to EarthCODE",
    date: "September 29-30, 2025",
    format: "BiDS'25 satellite tutorial, Riga",
    status: "past",
    link: "https://www.bigdatafromspace2025.org/satellite-event-submission",
  },
  {
    title:
      "EarthCODE - Advancing Open Science and FAIR practices for enhanced Earth Observation transparency, collaboration, and data reuse",
    date: "September 15, 2025",
    format: "EUMETSAT 2025 conference presentation, Lyon",
    status: "past",
    link: "https://program-eumetsat2025.kuoni-congress.info/presentation/earthcode-advancing-open-science-and-fair-practices-for-enhanced-earth-observation-transparency-collaboration-and-data-reuse",
  },
  {
    title: "EDC & Pangeo Integration on EarthCODE",
    date: "June 25, 2025",
    format: "LPS25 demo, EO Arena, Vienna",
    status: "past",
    link: "https://lps25.esa.int/programme/programme-session/?id=81AA4053-47DD-4BF8-8491-ADC3715CE2CB",
  },
  {
    title: "Introducing EarthCODE",
    date: "June 24, 2025",
    format: "LPS25 demo, EO Arena, Vienna",
    status: "past",
    link: "https://lps25.esa.int/programme/programme-session/?id=E8D71CE6-246F-4734-BD5D-971C4046B714",
  },
  {
    title: "EarthCODE 101 Hands-On Workshop",
    date: "June 23, 2025",
    format: "LPS25 hands-on training, Vienna",
    status: "past",
    link: "https://lps25.esa.int/programme/programme-session/?id=3B4C896E-8D9E-4240-BB85-F95BC638BD2B",
  },
  {
    title: "FAIR and Open Science with EarthCODE Integrated Platforms",
    date: "June 22, 2025",
    format: "LPS25 tutorial, Vienna",
    status: "past",
    link: "https://lps25.esa.int/programme/programme-session/?id=F3B64208-88D1-43C0-9F9E-6B8FE02AD6D7",
  },
];
