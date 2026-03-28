import { withBasePath } from "../lib/paths";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface PartnerLogo {
  id: "esa" | "ogc" | "pangeo";
  label: string;
}

export interface AudienceSegment {
  icon: "agency" | "research" | "sustainability" | "enterprise";
  title: string;
  summary: string;
  outcomes: string[];
}

export interface WhoWeArePillar {
  title: string;
  description: string;
  details: string[];
}

export interface TechFocusItem {
  id:
    | "airflow"
    | "aws"
    | "geopandas"
    | "jupyterhub"
    | "kubernetes"
    | "pangeo"
    | "python"
    | "torchgeo"
    | "xarray"
    | "scikitlearn"
    | "postgis"
    | "duckdb"
    | "dask"
    | "leaflet"
    | "azure";
  label: string;
  href: string;
}

export interface TechStackCategory {
  id:
    | "core"
    | "raster"
    | "frontend"
    | "realtime"
    | "apis"
    | "analysis"
    | "infrastructure"
    | "devsecops"
    | "databases"
    | "warehouse";
  title: string;
  description: string;
  items: string[];
}

export interface TechStackSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface TechStackApproachStep {
  title: string;
  description: string;
  stackLabel: string;
}

export interface TechStackApproachContent {
  title: string;
  description: string;
  steps: TechStackApproachStep[];
}

export interface CapabilityPillar {
  icon: "sensing" | "infrastructure" | "delivery";
  title: string;
  description: string;
  outcome: string;
  capabilities: string[];
}

export interface CaseStudy {
  visual: "ogc" | "urban" | "antarctica";
  badge: string;
  metric: string;
  title: string;
  href?: string;
  description: string[];
  outcomes: string[];
  client: string;
}

export interface ProofStory {
  visual: "response" | "footprint" | "mobility";
  image: string;
  title: string;
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
}

export interface OpenScienceItem {
  icon: "reproducibility" | "open-source" | "standards" | "research";
  title: string;
  description: string;
  details: string[];
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  kind: "Journal" | "Dataset" | "Conference" | "Report" | "Thesis";
  href?: string;
  summary: string;
}

export interface EarthcodeSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  leadership: string;
}

export interface PrivacyNoticeListItem {
  label?: string;
  text: string;
  details?: string[];
}

export interface PrivacyNoticeSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  bulletsTitle?: string;
  items?: PrivacyNoticeListItem[];
  itemsTitle?: string;
}

export interface PrivacyNoticeContent {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  summary: string[];
  contact: {
    telephone: string;
    email: string;
  };
  sections: PrivacyNoticeSection[];
}

export interface TrainingTrack {
  title: string;
  purpose: string;
  audience: string;
  topics: string[];
}

export interface TrainingFormat {
  title: string;
  description: string;
  note: string;
}

export interface TrainingVideo {
  title: string;
  source: string;
  url: string;
  youtubeId: string;
  date: string;
  summary: string;
}

export interface TrainingEvent {
  title: string;
  date: string;
  format: string;
  status: "upcoming" | "past";
  link?: string;
}

export interface TrainingRoadmapCourse {
  label: string;
  title: string;
  summary: string;
}

export const trainingRoadmapCourse: TrainingRoadmapCourse = {
  label: "Flagship roadmap",
  title: "Cloud-Native Geospatial Data Science Roadmap",
  summary:
    "A structured route through the cloud-native tools, concepts, and delivery patterns that matter in modern geospatial data science.",
};

export const navItems: NavItem[] = [
  { label: "About Us", href: withBasePath("/#who-we-are") },
  { label: "Tech Stack", href: withBasePath("/#tech-stack") },
  { label: "Case Studies", href: withBasePath("/#case-studies") },
  { label: "Open Science", href: withBasePath("/#open-science") },
];

export const heroProofPoints = [
  "Remote sensing, earth observation, and AI/ML in one delivery team.",
  "Open-science workflows built to be inspectable, reusable, and interoperable.",
  "From rapid pilots to analyst-ready products and production pipelines.",
];

export const audienceFeatureImage =
  "https://images.unsplash.com/photo-1722083854891-7324e80ad2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export const audienceSignals = [
  "Earth observation",
  "Remote sensing",
  "Aerial imagery",
  "Mobility data",
  "Building footprints",
  "Geo-spatial engineering",
];

export const whoWeAreSignals = [
  "Open-source geospatial",
  "Earth observation",
  "Research to delivery",
  "Own your stack",
];

export const techStackFocus: TechFocusItem[] = [
  {
    id: "python",
    label: "Python",
    href: "https://www.python.org/",
  },
  {
    id: "pangeo",
    label: "Pangeo",
    href: "https://pangeo.io/",
  },
  {
    id: "torchgeo",
    label: "TorchGeo",
    href: "https://torchgeo.readthedocs.io/en/stable/",
  },
  {
    id: "jupyterhub",
    label: "JupyterHub",
    href: "https://jupyter.org/hub",
  },
  {
    id: "xarray",
    label: "Xarray",
    href: "https://docs.xarray.dev/en/stable/",
  },
  {
    id: "geopandas",
    label: "GeoPandas",
    href: "https://geopandas.org/en/stable/",
  },
  {
    id: "scikitlearn",
    label: "Scikit-learn",
    href: "https://scikit-learn.org/stable/",
  },
  {
    id: "postgis",
    label: "PostGIS",
    href: "https://postgis.net/",
  },
  {
    id: "duckdb",
    label: "DuckDB",
    href: "https://duckdb.org/",
  },
  {
    id: "dask",
    label: "Dask",
    href: "https://docs.dask.org/en/stable/",
  },
  {
    id: "airflow",
    label: "Airflow",
    href: "https://airflow.apache.org/",
  },
  {
    id: "leaflet",
    label: "Leaflet",
    href: "https://leafletjs.com/",
  },
  {
    id: "aws",
    label: "AWS",
    href: "https://aws.amazon.com/",
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    href: "https://kubernetes.io/",
  },
  {
    id: "azure",
    label: "Azure",
    href: "https://azure.microsoft.com/",
  },
];

export const heroMetrics: HeroMetric[] = [
  {
    label: "What we build",
    value: "Geo-spatial Systems & AI",
    detail:
      "Earth observation workflows, data platforms, and decision-ready applications built to be owned and extended.",
  },
  {
    label: "How we work",
    value: "Open Science & Open Source",
    detail:
      "R&D, engineering, infrastructure, and product thinking combined in one delivery team.",
  },
  {
    label: "What clients keep",
    value: "All the code and research",
    detail:
      "Reusable workflows, training, documentation, and systems your team can run without vendor lock-in.",
  },
];

export const partnerLogos: PartnerLogo[] = [
  {
    id: "esa",
    label: "ESA",
  },
  {
    id: "ogc",
    label: "Open Geospatial Consortium",
  },
  {
    id: "pangeo",
    label: "Pangeo",
  },
];

export const audienceSegments: AudienceSegment[] = [
  {
    icon: "agency",
    title: "Space agencies",
    summary:
      "Mission pilots, earth observation workflows, and analyst tooling built to move into operations.",
    outcomes: [
      "Operational imagery pipelines",
      "Confidence-aware analyst outputs",
    ],
  },
  {
    icon: "research",
    title: "Research institutions",
    summary:
      "Reproducible tooling and benchmarkable methods that outlast a single paper or pilot.",
    outcomes: [
      "Versioned model workflows",
      "Prototype-to-production paths",
    ],
  },
  {
    icon: "sustainability",
    title: "Sustainability analysts",
    summary:
      "Decision support across land use, climate, mobility, and infrastructure with explainable evidence.",
    outcomes: [
      "Auditable monitoring indicators",
      "Scenario-ready geo-spatial products",
    ],
  },
  {
    icon: "enterprise",
    title: "Enterprises seeking an edge",
    summary:
      "Geo-spatial intelligence systems for planning, risk, and product differentiation.",
    outcomes: [
      "Cloud-ready data products",
      "Models tied to business decisions",
    ],
  },
];

export const whoWeArePillars: WhoWeArePillar[] = [
  {
    title: "Open geospatial transformation",
    description:
      "Move away from legacy proprietary geospatial software toward the cutting edge, open source, interoperable tooling where your team owns the workflows, infrastructure, and applications end to end.",
    details: ["Own your stack", "Open-source migration", "Infrastructure to apps"],
  },
  {
    title: "Research, Development and Innovation",
    description:
      "Turn hard geo-spatial questions into practical research programmes, prototypes, and methods that can lead to papers, platforms, and production delivery.",
    details: ["Applied R&D", "Prototype to product", "Research-grade methods"],
  },
  {
    title: "Geo-spatial and EO training",
    description:
      "Build in-house capability around earth observation, cloud-native geo-spatial tooling, FAIR methods, and the practical delivery patterns teams need to keep moving.",
    details: ["Workshops", "Capability building", "EO methods"],
  },
  {
    title: "Data Engineering and Stewardship",
    description:
      "Design the data strategy and quality maintenance plan, architecture, pipelines, and roadmap needed to build your own geo-spatial applications, internal platforms, and decision-ready products.",
    details: ["Data strategy", "Geo-spatial applications", "Production pipelines"],
  },
];

export const techStackSection: TechStackSectionContent = {
  eyebrow: "Open-source geospatial tech",
  title: "Experts in open-source geospatial technology.",
  description:
    "Lampata works across the full open geo-spatial stack, connecting infrastructure, data, analytics, APIs, and applications rather than treating them as separate projects.",
  ctaLabel: "Explore Lampata's tech stack",
};

export const techStackApproach: TechStackApproachContent = {
  title: "A holistic approach from infrastructure to application.",
  description:
    "We design infrastructure, data, processing, services, and products as one connected architecture.",
  steps: [
    {
      title: "APIs",
      description:
        "Exposing your data and workflows to the internally and externally to the world in a standardized fashion.",
      stackLabel: "APIs",
    },
    {
      title: "AI and geospatial analytics",
      description:
        "Deploying AI and geospatial analytics for valuable insights and informed decision-making.",
      stackLabel: "AI & Geospatial Analytics",
    },
    {
      title: "MLOps & DevSecOps workflows",
      description:
        "Integrating MLOps and DevSecOps to streamline software and AI development securely.",
      stackLabel: "MLOps & DevSecOps Workflows",
    },
    {
      title: "Security and governance",
      description:
        "Implementing a governance framework for data security and compliance embedded with automation guard-rails and policy as code.",
      stackLabel: "Security & Governance",
    },
    {
      title: "Data integration planning",
      description:
        "Creating a unified data integration layer for efficient data flow, enhancing operational efficiency.",
      stackLabel: "Data Integration Planning",
    },
    {
      title: "Big data storage",
      description:
        "Designing a versatile ELT process and big data lake for comprehensive storage, processing, and analysis of various data types.",
      stackLabel: "Big Data Storage",
    },
    {
      title: "Infrastructure & platform",
      description:
        "Architecting cloud-native environments using Kubernetes for scalable, secure, and reliable geospatial, real-time, AI-driven applications.",
      stackLabel: "Infrastructure & Platform",
    },
  ],
};

export const techStackCategories: TechStackCategory[] = [
  {
    id: "core",
    title: "Core Geospatial Python",
    description: "The Python tools that anchor practical vector analysis, modelling, and open geospatial workflows.",
    items: [
      "JupyterLab",
      "Pixi",
      "pyproj",
      "GeoPandas",
      "pyogrio",
      "Shapely",
      "pandas",
      "libpysal",
      "esda",
      "pointpats",
      "h3-py",
      "contextily",
      "tobler",
      "pyinterpolate",
      "statsmodels",
      "mgwr",
      "scikit-learn",
      "osmnx",
    ],
  },
  {
    id: "raster",
    title: "Raster & Cloud-Native EO",
    description: "The cloud-native raster, imagery, and data-layout tooling behind modern earth observation delivery.",
    items: [
      "Xarray",
      "rioxarray",
      "Rasterio",
      "Datashader",
      "geocube",
      "xvec",
      "STAC",
      "COG",
      "Zarr",
      "GeoParquet",
      "DuckDB",
      "Dask",
      "Pangeo ecosystem",
      "Azure Blob Storage",
      "Azure Container Apps",
      "Azure Functions",
    ],
  },
  {
    id: "frontend",
    title: "Front-End & Interactive Maps",
    description: "Interfaces for exploration, decision support, and live operational views.",
    items: ["Power BI", "Tableau", "Leaflet", "D3.js", "OpenLayers", "React", "Angular"],
  },
  {
    id: "realtime",
    title: "Real-Time & Event-Driven",
    description: "Streaming infrastructure for IoT, live feeds, and event-driven geo-spatial systems.",
    items: ["Kafka", "WebSockets", "Azure Event Hub", "Stream Analytics", "IoT Hub"],
  },
  {
    id: "apis",
    title: "APIs, Servers & Integration",
    description: "Open standards, service layers, and integration points for geospatial delivery.",
    items: [
      "OGC-compliant APIs",
      "STAC APIs",
      "FastAPI",
      "Flask",
      "Django",
      ".NET Core API",
      "Node.js",
      "Express.js",
      "Ruby",
      "Rails",
      "NGINX",
      "GeoServer",
    ],
  },
  {
    id: "analysis",
    title: "Analysis & ML",
    description: "Earth observation analysis, acceleration, and geospatial machine learning.",
    items: [
      "CUDA",
      "OpenGL",
      "RAPIDS",
      "C/C++",
      "Python",
      "cuDF",
      "TorchGeo",
      "Ktorch",
      "Hugging Face",
      "Spark",
      "Kafka",
      "GDAL",
      "ArcPy",
      "Google Earth Engine",
      "Unity 3D",
      "QGIS",
      "GRASS",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & OS",
    description: "Cloud, containers, orchestration, and operating environments for resilient delivery.",
    items: [
      "CentOS / RHEL 9",
      "Ubuntu",
      "OpenSUSE",
      "Azure",
      "GCP",
      "OpenStack",
      "Podman",
      "Docker",
      "Kubernetes bare-metal",
      "OpenShift",
      "Rancher",
      "AKS",
      "EKS",
    ],
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    description: "Security, testing, monitoring, and delivery automation across the platform.",
    items: [
      "Ansible",
      "Terraform",
      "Qualys",
      "SonarCloud",
      "ZAP",
      "AquaSec",
      "SELinux",
      "Azure Security Center",
      "Prometheus",
      "Grafana",
      "Azure DevOps",
      "GitLab",
      "Selenium",
      "Pytest",
    ],
  },
  {
    id: "databases",
    title: "Databases & Geo-Databases",
    description: "Spatial persistence, delivery layers, and query systems for geo-data applications.",
    items: [
      "Redis",
      "Azure Front Door",
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
      "Cassandra",
      "Hadoop",
      "SQL",
      "SPARQL",
    ],
  },
  {
    id: "warehouse",
    title: "Data Persistence & Next-Gen Data Warehouse",
    description: "Cloud storage, orchestration, and modern geospatial data formats.",
    items: [
      "Azure Data Lake",
      "S3",
      "Databricks",
      "Airflow",
      "BigQuery",
      "Synapse",
      "Cortex",
      "STAC metadata",
      "GeoTIFF",
      "GeoArrow",
      "GeoParquet",
      "FlatGeobuf",
      "PMTiles",
      "COG",
      "Zarr",
      "COPC",
      "RDF"
    ],
  },
];

export const capabilityPillars: CapabilityPillar[] = [
  {
    icon: "sensing",
    title: "Geo-spatial AI & remote sensing",
    description:
      "Model, detect, segment, compare, and interpret features across imagery and vector context without losing scientific rigor.",
    outcome: "Outcome: decision-ready layers with documented confidence and analyst context.",
    capabilities: [
      "Feature detection, segmentation, and change analysis",
      "Multi-source fusion across satellite, aerial, and vector datasets",
      "Model evaluation, uncertainty notes, and QA workflows",
      "Analyst-ready outputs for maps, alerts, and downstream tools",
    ],
  },
  {
    icon: "infrastructure",
    title: "Data engineering & cloud infrastructure",
    description:
      "Engineer reliable geo-spatial pipelines that can handle large collections, evolving schemas, and production-grade delivery.",
    outcome: "Outcome: resilient processing systems that move beyond ad hoc scripts and manual fixes.",
    capabilities: [
      "STAC, COG, GeoParquet, and interoperable data pipelines",
      "Batch and near-real-time processing for large areas of interest",
      "GPU-enabled training and inference where the workload demands it",
      "Cloud or hybrid deployment patterns matched to team constraints",
    ],
  },
  {
    icon: "delivery",
    title: "Open-science products & decision support",
    description:
      "Package methods into usable tools, prototypes, and handover materials so client teams can trust, extend, and adopt the work.",
    outcome: "Outcome: products that are explainable to technical teams, decision-makers, and partners alike.",
    capabilities: [
      "Reusable open-source tooling and method documentation",
      "Standards-aware services, metadata, and exchange formats",
      "Dashboards, digital products, and monitoring prototypes",
      "Structured handoff for teams that will run or maintain the work",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    visual: "ogc",
    badge: "Agentic AI",
    metric: "Open Geospatial Consortium",
    title: "GeoAI Reusable Workflows for the OGC OSPD",
    href: "https://www.ogc.org/initiatives/open-science/",
    description: [
      "Lampata built an agentic AI system to package research code into re-executable, containerised workflows and generate OGC-compliant metadata across geospatial tools covering coastal vulnerability, flood estimation, and sea ice risk.",
      "A neuro-symbolic approach maps each workflow's execution graph before generating packages and metadata, preventing hallucinations and producing output that is containerised, OGC-validated, and ready to reuse.",
    ],
    outcomes: ["OGC-validated", "Agentic AI", "FAIR Workflows"],
    client: "Applied research · AI engineering · Open science",
  },
  {
    visual: "urban",
    badge: "Urban Analytics",
    metric: "European Union",
    title: "Urban Analytics for the European Union",
    href: "https://urbantaxonomy.org/",
    description: [
      "Lampata used AI and Earth Observation data to analyse and map urban development across Europe, producing a classification layer that works from city block to continental scale.",
      "The work supports sustainable urban planning and policy-making across the European Union, turning fragmented national datasets into a consistent evidence base.",
    ],
    outcomes: ["EU-scale", "Policy-ready", "AI + EO"],
    client: "Earth observation · AI classification · Urban policy",
  },
  {
    visual: "antarctica",
    badge: "Geospatial Data Engineering",
    metric: "ESA Polar Sciences Cluster",
    title: "Building Ice Data Cubes for the Antarctic",
    href: "https://esa-earthcode.github.io/polar-science-cluster-dashboard/",
    description: [
      "Lampata built an AI-ready data cube for the polar sciences community, harmonising datasets covering basal melt, ice velocity, calving fronts, subglacial lakes, and more into a single Zarr store.",
      "By bringing these data together, researchers gained immediate access to data that previously required significant preprocessing.",
    ],
    outcomes: ["Zarr data cube", "Analysis-ready", "Polar science"],
    client: "Earth Sciences · Cloud-native infrastructure · Open science",
  },
];

export const proofStories: ProofStory[] = [
  {
    visual: "response",
    image:
      "https://images.unsplash.com/photo-1759044420896-f947fa7505c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Rapid flood intelligence for emergency mapping",
    context: "Earth observation response workflow",
    challenge:
      "Analysts were spending too long comparing scenes by hand before they could publish usable situation layers.",
    approach:
      "Lampata combined satellite change cues, quality masks, and analyst review layers into a same-day triage workflow.",
    outcome:
      "The result was a faster first-pass mapping process with clearer confidence notes for briefings, follow-on review, and field coordination.",
    tags: ["Change detection", "Analyst review", "Earth observation"],
  },
  {
    visual: "footprint",
    image:
      "https://images.unsplash.com/photo-1702600002248-3ae3149ee1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Building footprint harmonisation for urban observatories",
    context: "City-scale data engineering",
    challenge:
      "Municipal footprint data arrived in inconsistent schemas, mixed quality, and uneven geographic coverage.",
    approach:
      "Lampata designed a harmonisation pipeline that aligned source layers, applied QA rules, and prepared a shared footprint product.",
    outcome:
      "Planning and research teams received a consistent building layer, quality flags, and documentation they could extend across jurisdictions.",
    tags: ["Building footprints", "Quality assurance", "Urban analytics"],
  },
  {
    visual: "mobility",
    image:
      "https://images.unsplash.com/photo-1713016601597-ffac0b81bb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Mobility and land-use signals for sustainability strategy",
    context: "Decision support for analysts",
    challenge:
      "Teams needed to connect movement patterns, land use, and built-environment context without relying on opaque black-box summaries.",
    approach:
      "Lampata fused mobility traces, parcel context, and geo-spatial indicators into interpretable analysis layers and scenario views.",
    outcome:
      "The engagement produced auditable indicators that supported site assessment, policy reasoning, and stakeholder communication.",
    tags: ["Mobility data", "Land use", "Scenario analysis"],
  },
];

export const openScienceItems: OpenScienceItem[] = [
  {
    icon: "research",
    title: "Selected publications",
    description:
      "Published papers, talks, workshops, datasets, and reports back up Lampata's work in mobility data, urban analytics, FAIR workflows, and Earth observation.",
    details: [],
  },
  {
    icon: "reproducibility",
    title: "Reproducible by default",
    description:
      "We structure data, code, and model workflows so another technical team can inspect what happened and rerun it.",
    details: ["Versioned methods", "Documented assumptions", "Portable artifacts"],
  },
  {
    icon: "open-source",
    title: "Open-source where it helps",
    description:
      "Lampata builds reusable tooling and lightweight product foundations instead of locking value inside one-off consulting deliverables.",
    details: ["Reusable libraries", "Practical notebooks", "Clear packaging"],
  },
  {
    icon: "standards",
    title: "Standards-aware integration",
    description:
      "Interoperability matters in geo-spatial work, so we design around formats and interfaces that travel well across teams.",
    details: ["Metadata discipline", "OGC-friendly patterns", "Interchangeable outputs"],
  },
];

export const publications: Publication[] = [
  {
    title:
      "Urban exodus? Understanding human mobility in Britain during the COVID-19 pandemic using Meta-Facebook data",
    venue: "Population, Space and Place",
    year: 2023,
    kind: "Journal",
    href: "https://doi.org/10.1002/psp.2637",
    summary:
      "Supports Lampata's mobility and urban analytics positioning with a concrete example of large-scale human movement analysis using new data.",
  },
  {
    title: "Functional Signatures in Great Britain: A dataset",
    venue: "Data in Brief",
    year: 2022,
    kind: "Dataset",
    href: "https://doi.org/10.1016/j.dib.2022.108335",
    summary:
      "Gives Lampata a reusable urban function dataset story that fits decision-ready place intelligence and built-environment analysis.",
  },
  {
    title:
      "Inequalities in experiencing urban functions. An exploration of human digital (geo-)footprints",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    year: 2024,
    kind: "Journal",
    href: "https://doi.org/10.1177/23998083231208507",
    summary:
      "Demonstrates how mobility traces and urban context can be combined to study inequality in how people actually experience cities.",
  },
  {
    title: "Workshop on mobility data in urban science - Report",
    venue: "The Alan Turing Institute",
    year: 2021,
    kind: "Report",
    href: "https://www.turing.ac.uk/news/publications/workshop-mobility-data-urban-science-workshop-report",
    summary:
      "Shows Lampata's role in convening methodological discussion around mobility data, privacy, bias, and practical urban science use.",
  },
  {
    title: "Characterising urban processes using new forms of data and analysis",
    venue: "University of Liverpool",
    year: 2023,
    kind: "Thesis",
    summary:
      "Provides the broader research foundation behind Lampata's urban analytics work and the shift toward new data forms and methods.",
  },
  {
    title: "The productivity effects of polycentricity: A systematic analysis of urban regions in Europe",
    venue: "Papers in Regional Science",
    year: 2023,
    kind: "Journal",
    href: "https://doi.org/10.1111/pirs.12765",
    summary:
      "Adds a stronger regional science and city-systems perspective to Lampata's work on spatial structure, productivity, and polycentric urban regions.",
  },
  {
    title: "Learning Neural Word Salience Scores",
    venue: "Proceedings of the Seventh Joint Conference on Lexical and Computational Semantics",
    year: 2018,
    kind: "Conference",
    href: "https://doi.org/10.18653/v1/S18-2004",
    summary:
      "Signals deeper machine learning experience that underpins present geo-spatial AI work, while remaining secondary to the site's core themes.",
  },
  {
    title: "Lampata engineering report for the OGC Open Science Persistent Demonstrator (OSPD)",
    venue: "OGC",
    year: 2025,
    kind: "Report",
    summary:
      "Captures forthcoming OGC engineering-report work around reproducible, standards-aware open-science workflows, with final release details still pending.",
  },
  {
    title: "EarthCODE poster",
    venue: "EuroGEO Workshop",
    year: 2025,
    kind: "Conference",
    href: "https://eurogeosec.eu/egw2025/eposters.html",
    summary:
      "Adds EuroGEO Workshop 2025 poster visibility for EarthCODE's FAIR and open-science work, linked through the public e-poster gallery.",
  },
  {
    title: "FAIR and Open Science for Earth Sciences with ESA EarthCODE",
    venue: "FOSS4G:UK",
    year: 2025,
    kind: "Conference",
    href: "https://talks.osgeo.org/foss4g-uk-2025/talk/KYMRGJ/",
    summary:
      "A public FOSS4G:UK talk on ESA EarthCODE, open-science delivery, and reproducible Earth observation workflows.",
  },
  {
    title: "EarthCODE 101 Hands-On Workshop",
    venue: "FOSS4G:UK",
    year: 2025,
    kind: "Conference",
    href: "https://talks.osgeo.org/foss4g-uk-2025/talk/YB7BUR/",
    summary:
      "A hands-on FOSS4G:UK workshop introducing EarthCODE, EO dataset access, and reproducible workflows using Pangeo tooling.",
  },
  {
    title: "FAIR and Open Science in Action: An Introduction to EarthCODE",
    venue: "BiDS'25 Satellite Events",
    year: 2025,
    kind: "Conference",
    href: "https://www.bigdatafromspace2025.org/satellite-event-submission",
    summary:
      "A three-hour BiDS'25 tutorial covering FAIR principles, EarthCODE discovery and reuse, and hands-on analysis pipelines with Pangeo on EDC.",
  },
  {
    title:
      "EarthCODE - Advancing Open Science and FAIR practices for enhanced Earth Observation transparency, collaboration, and data reuse",
    venue: "EUMETSAT 2025",
    year: 2025,
    kind: "Conference",
    href: "https://program-eumetsat2025.kuoni-congress.info/presentation/earthcode-advancing-open-science-and-fair-practices-for-enhanced-earth-observation-transparency-collaboration-and-data-reuse",
    summary:
      "A conference presentation on how EarthCODE supports transparency, collaboration, and FAIR data reuse in Earth observation practice.",
  },
  {
    title: "Enabling FAIR and Open Earth System Science with EarthCODE",
    venue: "Proceedings of Big Data from Space (BiDS)",
    year: 2025,
    kind: "Conference",
    href: "https://pure.iiasa.ac.at/id/eprint/21281/1/proceedings%20of%20the%202025%20conference%20on%20big%20data%20from-KJ0125486ENN.pdf",
    summary:
      "Adds a peer-reviewed proceedings paper focused on turning FAIR and open-science principles into practical Earth system science delivery through EarthCODE.",
  },
  {
    title: "EDC & Pangeo Integration on EarthCODE",
    venue: "Living Planet Symposium",
    year: 2025,
    kind: "Conference",
    href: "https://lps25.esa.int/programme/programme-session/?id=81AA4053-47DD-4BF8-8491-ADC3715CE2CB",
    summary:
      "A Living Planet Symposium demo showing how EDC and Pangeo integrate into EarthCODE for scalable, reproducible EO analysis.",
  },
  {
    title: "Introducing EarthCODE",
    venue: "Living Planet Symposium",
    year: 2025,
    kind: "Conference",
    href: "https://lps25.esa.int/programme/programme-session/?id=E8D71CE6-246F-4734-BD5D-971C4046B714",
    summary:
      "A Living Planet Symposium demo introducing EarthCODE's collaborative open-development model for FAIR and open Earth system science.",
  },
  {
    title: "EarthCODE 101 Hands-On Workshop",
    venue: "Living Planet Symposium",
    year: 2025,
    kind: "Conference",
    href: "https://lps25.esa.int/programme/programme-session/?id=3B4C896E-8D9E-4240-BB85-F95BC638BD2B",
    summary:
      "A Living Planet Symposium workshop on accessing EarthCODE datasets and workflows, then publishing reproducible experiments.",
  },
  {
    title: "FAIR and Open Science with EarthCODE Integrated Platforms",
    venue: "Living Planet Symposium",
    year: 2025,
    kind: "Conference",
    href: "https://lps25.esa.int/programme/programme-session/?id=F3B64208-88D1-43C0-9F9E-6B8FE02AD6D7",
    summary:
      "A Living Planet Symposium tutorial on FAIR assessment, integrated EarthCODE platforms, and publishing open EO experiments.",
  },
  {
    title: "EarthCODE - a FAIR and Open Environment for collaborative research in Earth System Science",
    venue: "EGU General Assembly",
    year: 2025,
    kind: "Conference",
    href: "https://doi.org/10.5194/egusphere-egu25-7070",
    summary:
      "Shows Lampata's direct role in FAIR, open, and collaborative Earth observation infrastructure rather than treating open science as a side note.",
  },
  {
    title: "Advancing Cloud-Native Data Analysis and Publishing with Pangeo Tools in EarthCODE",
    venue: "EGU General Assembly",
    year: 2025,
    kind: "Conference",
    href: "https://doi.org/10.5194/egusphere-egu25-21279",
    summary:
      "Connects Lampata's EarthCODE work to cloud-native analysis, publishing workflows, and the Pangeo tooling stack shaping modern EO delivery.",
  },
];

export const earthcodeSection: EarthcodeSectionContent = {
  eyebrow: "EarthCODE",
  title: "Making Earth Observation FAIR and Open",
  description:
    "Historically, Earth Observation (EO) research has been closed and complex. EarthCODE is the European Space Agency's open-science mission to change that, making EO research open, FAIR, and accessible to everyone.",
  leadership:
    "Lampata is proud to be a leading part of this mission. By building tools to make FAIR Earth Sciences easy, providing data stewardship, and working with scientists to create and adopt best practices for data and code quality, we are actively turning the open-science ambition into reality.",
};

export const privacyNoticeContent: PrivacyNoticeContent = {
  eyebrow: "Privacy Notice",
  title: "Lampata customer privacy notice",
  effectiveDate: "14 September 2025",
  intro:
    "This privacy notice tells you what to expect us to do with your personal information.",
  summary: [
    "Contact details",
    "What information we collect, use, and why",
    "Lawful bases and data protection rights",
    "Where we get personal information from",
    "How long we keep information",
    "Who we share information with",
    "How to complain",
  ],
  contact: {
    telephone: "+447842881257",
    email: "contact+gdpr@lampata.co.uk",
  },
  sections: [
    {
      title: "What information we collect, use, and why",
      items: [
        {
          label: "To provide and improve products and services for clients",
          details: [
            "Names and contact details",
            "Occupation",
            "Usage data (including information about how you interact with and use our website, products and services)",
          ],
          text: "",
        },
        {
          label: "For the prevention, detection, investigation or prosecution of crimes",
          details: ["Names and contact information"],
          text: "",
        },
        {
          label: "For information updates or marketing purposes",
          details: ["Names and contact details", "Addresses", "IP addresses"],
          text: "",
        },
      ],
    },
    {
      title: "Lawful bases and data protection rights",
      paragraphs: [
        "Under UK data protection law, we must have a lawful basis for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO's website.",
        "Which lawful basis we rely on may affect your data protection rights, which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO's website.",
        "If you make a request, we must respond to you without undue delay and in any event within one month.",
        "To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.",
      ],
      items: [
        {
          label: "Your right of access",
          text:
            "You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions, which means you may not receive all the information you ask for. Read more about the right of access.",
        },
        {
          label: "Your right to rectification",
          text:
            "You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. Read more about the right to rectification.",
        },
        {
          label: "Your right to erasure",
          text: "You have the right to ask us to delete your personal information. Read more about the right to erasure.",
        },
        {
          label: "Your right to restriction of processing",
          text:
            "You have the right to ask us to limit how we can use your personal information. Read more about the right to restriction of processing.",
        },
        {
          label: "Your right to object to processing",
          text:
            "You have the right to object to the processing of your personal data. Read more about the right to object to processing.",
        },
        {
          label: "Your right to data portability",
          text:
            "You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. Read more about the right to data portability.",
        },
        {
          label: "Your right to withdraw consent",
          text:
            "When we use consent as our lawful basis you have the right to withdraw your consent at any time. Read more about the right to withdraw consent.",
        },
      ],
    },
    {
      title: "Our lawful bases for the collection and use of your data",
      paragraphs: [
        "Our lawful bases for collecting or using personal information to provide and improve products and services for clients are set out below.",
        "For more information on our use of legitimate interests as a lawful basis you can contact us using the contact details set out above.",
      ],
      items: [
        {
          label: "To provide and improve products and services for clients: Consent",
          text:
            "We have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
        },
        {
          label: "To provide and improve products and services for clients: Contract",
          text:
            "We have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.",
        },
        {
          label: "To provide and improve products and services for clients: Legal obligation",
          text:
            "We have to collect or use your information so we can comply with the law. All of your data protection rights may apply, except the right to erasure, the right to object and the right to data portability.",
        },
        {
          label: "To provide and improve products and services for clients: Legitimate interests",
          text:
            "We are collecting or using your information because it benefits you, our organisation or someone else, without causing an undue risk of harm to anyone. All of your data protection rights may apply, except the right to portability.",
          details: [
            "We process business contact details of client users and prospects to provide service updates and relevant offers about our professional services.",
            "This is necessary to run and improve our services and is proportionate and expected in a B2B context.",
            "We rely on legitimate interests and comply with PECR: we email corporate subscribers or use the soft opt-in for existing customers, include an easy unsubscribe in every message, honour objections, and obtain consent where PECR requires it for individuals.",
          ],
        },
        {
          label: "To provide and improve products and services for clients: Vital interests",
          text:
            "Collecting or using the information is needed when someone’s physical or mental health or wellbeing is at urgent or serious risk. This includes an urgent need for life sustaining food, water, clothing or shelter. All of your data protection rights may apply, except the right to object and the right to portability.",
        },
        {
          label: "For the prevention, detection, investigation or prosecution of crimes: Consent",
          text:
            "We have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
        },
        {
          label: "For information updates or marketing purposes: Consent",
          text:
            "We have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.",
        },
      ],
    },
    {
      title: "Where we get personal information from",
      bullets: ["Directly from you", "Marketing Sites"],
      paragraphs: [
        "In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, and from other third parties.",
        "This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behaviour data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.",
      ],
    },
    {
      title: "How long we keep information",
      paragraphs: [
        "We keep personal data for the duration of our relationship and for up to three (3) years afterwards, then delete or anonymise it.",
        "We may retain it longer only if required by law or to establish, exercise, or defend legal claims; otherwise, we remove it sooner when it is no longer needed.",
      ],
    },
    {
      title: "Who we share information with",
      itemsTitle: "Data processors",
      items: [
        {
          label: "Google Workspace (Google LLC) — Cloud productivity & storage (SaaS)",
          text:
            "Stores and syncs our business documents/files (which may include client contact details or project artefacts) to enable secure collaboration, access control, versioning, and backup.",
        },
        {
          label: "Trello (Atlassian US, Inc.) — Project management & collaboration (SaaS)",
          text:
            "Hosts our project boards/cards, comments, and attachments used to deliver client work.",
        },
      ],
      bulletsTitle: "Others we share personal information with",
      bullets: [
        "Professional or legal advisors",
        "Regulatory authorities",
        "Organisations we’re legally obliged to share personal information with",
      ],
    },
    {
      title: "How to complain",
      paragraphs: [
        "If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.",
        "If you remain unhappy with how we’ve used your data after raising a complaint with us, you can also complain to the ICO.",
        "The ICO's address:",
        "Information Commissioner's Office",
        "Wycliffe House",
        "Water Lane",
        "Wilmslow",
        "Cheshire",
        "SK9 5AF",
        "Helpline number: 0303 123 1113.",
        "Website: https://www.ico.org.uk/make-a-complaint",
      ],
    },
  ],
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
