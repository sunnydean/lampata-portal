import type {
  AudienceSegment,
  CaseStudy,
  EarthcodeSectionContent,
  HeroMetric,
  OpenScienceItem,
  PartnerLogo,
  Publication,
  TechStackApproachContent,
  TechStackCategory,
  TechStackSectionContent,
  TechFocusItem,
  WhoWeArePillar,
  CapabilityPillar,
  ProofStory,
} from "./siteContent";

export const heroProofPoints = [
  "Remote sensing, earth observation, and AI/ML in one delivery team.",
  "Open-science workflows built to be inspectable, reusable, and interoperable.",
  "From rapid pilots to analyst-ready products and production pipelines.",
];

// Source reference for the About us feature image:
// https://unsplash.com/s/photos/satellite-imagery?asset=%5B%22Photos%22%2C%7B%22slug%22%3A%22satellite-view-of-desert-terrain-with-geological-formations-1Fi2SOUnB1w%22%7D%5D
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
      "Move away from legacy proprietary geospatial software toward the cutting edge, open source, interoperable tooling where you own your IP.",
    details: ["Own your stack", "Open-source migration", "Infrastructure to apps"],
  },
  {
    title: "Research, Development and Innovation",
    description:
      "Turn hard geo-spatial questions into practical research, prototypes, and methods that can lead to papers, platforms, and production delivery.",
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
      "Design the data strategy and quality maintenance plan, architecture, pipelines, and roadmap needed for decision-ready products.",
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

export const featuredPublications: Publication[] = [
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
    "Lampata is proud to be a leading part of this mission by building tools to make FAIR Earth Sciences easy, data stewardship, and working with scientists to create and adopt best practices for data and code quality.",
};
