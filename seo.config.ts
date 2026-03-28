type SeoPageKey =
  | "index.html"
  | "training/index.html"
  | "earth-observation-tech-radar/index.html"
  | "privacypolicy/index.html";

interface SeoPage {
  key: SeoPageKey;
  path: string;
  title: string;
  description: string;
  robots: string;
  includeInSitemap: boolean;
  snapshotHtml: (basePath: string) => string;
  jsonLd: (context: SeoBuildContext) => object[];
  llmsLabel: string;
  llmsSummary: string;
}

interface SeoBuildContext {
  siteUrl: string;
  basePath: string;
  buildDate: string;
}

const defaultSiteUrl = "https://lampata.co.uk";
const defaultOgImagePath = "/lampatageospatial_logo.jpeg";
const organizationIdSuffix = "#organization";
const websiteIdSuffix = "#website";

const companyName = "Lampata";
const companyDescription =
  "Lampata is a Cambridge-based geospatial consultancy focused on earth observation, geospatial AI, FAIR workflows, open science, and production-minded geospatial engineering.";
const officeAddress = {
  "@type": "PostalAddress",
  streetAddress: "Wellington House, East Road",
  addressLocality: "Cambridge",
  addressRegion: "England",
  postalCode: "CB1 1BH",
  addressCountry: "GB",
};

const pages: SeoPage[] = [
  {
    key: "index.html",
    path: "/",
    title: "Lampata | Geospatial AI, Earth Observation, and Open-Science Engineering",
    description:
      "Lampata helps space agencies, research institutions, sustainability teams, and enterprises turn earth observation and geospatial data into decision-ready systems with open-science methods, FAIR workflows, and production-minded engineering.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    includeInSitemap: true,
    snapshotHtml: (basePath) =>
      buildSnapshotPage({
        eyebrow: "Lampata",
        title: "Geospatial AI, earth observation, and open-science engineering.",
        intro:
          "Lampata helps space agencies, research institutions, sustainability analysts, and enterprises turn geo-spatial data into decision-ready intelligence. The company combines research-grade earth observation methods, open-source geospatial engineering, FAIR workflows, and operational delivery.",
        sections: [
          {
            title: "What Lampata does",
            body: [
              paragraph(
                "Lampata builds geo-spatial systems, data platforms, analyst-ready applications, and reusable workflows. Engagements span research, engineering, infrastructure, APIs, training, and handoff so clients can own what gets delivered.",
              ),
              list([
                "Open geospatial transformation away from legacy proprietary stacks.",
                "Applied research, development, and innovation in geospatial AI and earth observation.",
                "Cloud-native data engineering and stewardship for decision-ready products.",
                "FAIR, open-science, and EarthCODE-oriented workflow design.",
              ]),
            ].join(""),
          },
          {
            title: "Who Lampata works with",
            body: list([
              "Space agencies building operational imagery pipelines, earth observation workflows, and analyst tooling.",
              "Research institutions that need reproducible tooling, versioned methods, and prototype-to-production paths.",
              "Sustainability analysts working across land use, climate, mobility, and infrastructure evidence.",
              "Enterprises seeking an edge through geo-spatial intelligence, risk analysis, and product differentiation.",
            ]),
          },
          {
            title: "Selected case studies",
            body: [
              subheading("GeoAI reusable workflows for the OGC Open Science Persistent Demonstrator"),
              paragraph(
                "Lampata built an agentic AI system to package research code into reusable, containerised workflows and generate OGC-compliant metadata across coastal vulnerability, flood estimation, and sea ice risk tools.",
              ),
              subheading("Urban analytics for the European Union"),
              paragraph(
                "Lampata used AI and earth observation data to analyse urban development across Europe and turn fragmented national inputs into a consistent classification layer for sustainable planning and policy.",
              ),
              subheading("Building ice data cubes for the Antarctic"),
              paragraph(
                "Lampata built an AI-ready polar data cube that harmonised datasets such as basal melt, ice velocity, calving fronts, and subglacial lakes into a single cloud-native Zarr store.",
              ),
            ].join(""),
          },
          {
            title: "Open science and research",
            body: [
              paragraph(
                "Lampata publishes papers, talks, workshops, datasets, reports, and EarthCODE-related material spanning mobility data, urban analytics, FAIR workflows, and earth observation. The site also features an archive of related research outputs including BiDS, EuroGEO, EUMETSAT, FOSS4G:UK, and Living Planet Symposium contributions.",
              ),
              paragraph(
                `See ${anchor(withBasePath("/#open-science", basePath), "the open-science section")} for research context and ${anchor(withBasePath("/training/", basePath), "the training page")} for workshops and tutorials.`,
              ),
            ].join(""),
          },
          {
            title: "Key pages",
            body: list([
              `${anchor(withBasePath("/training/", basePath), "Training")}: workshops and programmes in earth observation, geospatial AI, FAIR and open science, and cloud-native delivery.`,
              `${anchor(withBasePath("/earth-observation-tech-radar/", basePath), "Earth Observation Tech Radar")}: Lampata's maintained radar of open-source tools, standards, and practices shaping applied EO work.`,
              `${anchor(withBasePath("/privacypolicy/", basePath), "Privacy notice")}: Lampata's customer privacy notice and UK GDPR information.`,
            ]),
          },
          {
            title: "Contact",
            body: paragraph(
              `Email ${anchor("mailto:contact@lampata.com", "contact@lampata.com")} or write to Lampata, Wellington House, East Road, Cambridge, England, CB1 1BH.`,
            ),
          },
        ],
      }),
    jsonLd: ({ siteUrl, basePath }) => {
      const homeUrl = toAbsoluteUrl("/", siteUrl, basePath);
      const organizationId = `${homeUrl}${organizationIdSuffix}`;
      const websiteId = `${homeUrl}${websiteIdSuffix}`;
      const logoUrl = toAbsoluteUrl(defaultOgImagePath, siteUrl, basePath);

      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": organizationId,
          name: companyName,
          legalName: "Lampata LTD",
          url: homeUrl,
          description: companyDescription,
          logo: logoUrl,
          image: logoUrl,
          email: "contact@lampata.com",
          foundingDate: "2020",
          identifier: "Company number 12820181",
          address: officeAddress,
          knowsAbout: [
            "Earth observation",
            "Geospatial AI",
            "Remote sensing",
            "Open science",
            "FAIR workflows",
            "Cloud-native geospatial engineering",
            "Geo-spatial training",
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": websiteId,
          url: homeUrl,
          name: companyName,
          description: companyDescription,
          inLanguage: "en-GB",
          publisher: {
            "@id": organizationId,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${homeUrl}#professional-service`,
          name: companyName,
          url: homeUrl,
          description: companyDescription,
          areaServed: "Worldwide",
          address: officeAddress,
          image: logoUrl,
          serviceType: [
            "Earth observation consulting",
            "Geospatial AI consulting",
            "Open-science workflow engineering",
            "Cloud-native geospatial delivery",
            "Geospatial training",
          ],
          provider: {
            "@id": organizationId,
          },
        },
      ];
    },
    llmsLabel: "Home",
    llmsSummary:
      "Primary company page covering Lampata's geospatial AI consulting, earth observation work, open-science positioning, case studies, and contact details.",
  },
  {
    key: "training/index.html",
    path: "/training/",
    title: "Geospatial AI, Earth Observation, and FAIR Training | Lampata",
    description:
      "Lampata delivers practical training in earth observation, geospatial AI, FAIR and open science, and cloud-native geospatial delivery for research, analyst, and engineering teams.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    includeInSitemap: true,
    snapshotHtml: (basePath) =>
      buildSnapshotPage({
        eyebrow: "Lampata Training",
        title: "Practical training in geospatial AI, earth observation, FAIR workflows, and cloud-native delivery.",
        intro:
          "Lampata's training offer is designed for researchers, analysts, and engineering teams who need usable workflows rather than abstract theory. Delivery includes private workshops, live online sessions, and tailored programmes tied to real projects.",
        sections: [
          {
            title: "Training tracks",
            body: [
              subheading("Earth Observation Foundations"),
              paragraph(
                "Practical grounding in earth observation data, sensors, formats, and analysis choices for analysts, researchers, and technical teams entering EO workflows.",
              ),
              subheading("Geo-spatial AI & ML Workflows"),
              paragraph(
                "How machine learning fits into remote sensing production, from labelled data and evaluation to operational outputs and analyst trust.",
              ),
              subheading("FAIR, Open Science & EarthCODE"),
              paragraph(
                "How to turn exploratory EO work into reproducible, FAIR, and shareable science and engineering outputs with EarthCODE-oriented workflows.",
              ),
              subheading("Cloud-Native Geo-spatial Delivery"),
              paragraph(
                "Patterns for moving from prototypes to production across storage, pipelines, APIs, governance, and operational handoff.",
              ),
            ].join(""),
          },
          {
            title: "Delivery formats",
            body: list([
              "Private team workshops tailored to a single organisation's data, tools, and decisions.",
              "Live online training for distributed teams with walkthroughs, Q&A, and practical examples.",
              "Tailored multi-session programmes designed around a curriculum arc from foundations to adoption.",
            ]),
          },
          {
            title: "Recent sessions and public material",
            body: list([
              "Creating FAIR Workflows with Agentic AI.",
              "FAIR and Open Science for Earth Sciences with ESA EarthCODE.",
              "FAIR and Open Science in Action: An Introduction to EarthCODE.",
              "EarthCODE workshops and talks at FOSS4G:UK, EUMETSAT, and Living Planet Symposium 2025.",
            ]),
          },
          {
            title: "Request training",
            body: paragraph(
              `Use ${anchor(withBasePath("/training/#request-training", basePath), "the training request form")} or email ${anchor("mailto:contact@lampata.com", "contact@lampata.com")} with your team, goals, and preferred format.`,
            ),
          },
        ],
      }),
    jsonLd: ({ siteUrl, basePath }) => {
      const homeUrl = toAbsoluteUrl("/", siteUrl, basePath);
      const pageUrl = toAbsoluteUrl("/training/", siteUrl, basePath);

      return [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: "Lampata training",
          description:
            "Training in earth observation, geospatial AI, FAIR and open science, and cloud-native geospatial delivery.",
          inLanguage: "en-GB",
          isPartOf: {
            "@id": `${homeUrl}${websiteIdSuffix}`,
          },
          about: [
            { "@type": "Thing", name: "Earth observation training" },
            { "@type": "Thing", name: "Geospatial AI training" },
            { "@type": "Thing", name: "FAIR and open-science training" },
            { "@type": "Thing", name: "Cloud-native geospatial delivery" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "@id": `${pageUrl}#courses`,
          name: "Lampata training tracks",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Course",
                name: "Earth Observation Foundations",
                description:
                  "Foundational earth observation training covering sensors, formats, and analysis choices.",
                provider: {
                  "@type": "Organization",
                  name: companyName,
                  url: homeUrl,
                },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Course",
                name: "Geo-spatial AI & ML Workflows",
                description:
                  "Training in practical machine learning workflows for remote sensing and geospatial production.",
                provider: {
                  "@type": "Organization",
                  name: companyName,
                  url: homeUrl,
                },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Course",
                name: "FAIR, Open Science & EarthCODE",
                description:
                  "Training in FAIR methods, reproducibility, open science, and EarthCODE-oriented workflows.",
                provider: {
                  "@type": "Organization",
                  name: companyName,
                  url: homeUrl,
                },
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Course",
                name: "Cloud-Native Geo-spatial Delivery",
                description:
                  "Training in cloud-native storage, pipelines, services, and handoff for geo-spatial products.",
                provider: {
                  "@type": "Organization",
                  name: companyName,
                  url: homeUrl,
                },
              },
            },
          ],
        },
        breadcrumbJsonLd(pageUrl, [
          { name: "Home", path: "/" },
          { name: "Training", path: "/training/" },
        ], siteUrl, basePath),
      ];
    },
    llmsLabel: "Training",
    llmsSummary:
      "Training page covering earth observation, geospatial AI, FAIR/open-science, and cloud-native delivery workshops and programmes.",
  },
  {
    key: "earth-observation-tech-radar/index.html",
    path: "/earth-observation-tech-radar/",
    title: "Earth Observation Tech Radar | Lampata",
    description:
      "The Earth Observation Tech Radar is Lampata's maintained view of open-source tools, standards, and practices shaping applied earth observation science, analytics, and delivery.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    includeInSitemap: true,
    snapshotHtml: (basePath) =>
      buildSnapshotPage({
        eyebrow: "Lampata Radar",
        title: "Earth Observation Tech Radar",
        intro:
          "Lampata maintains the Earth Observation Tech Radar as a curated view of the open-source tools, standards, and practices shaping downstream earth observation science, analytics, and delivery.",
        sections: [
          {
            title: "What the radar covers",
            body: list([
              "Open-source and community-driven earth observation tooling.",
              "Standards and practices that support inspectable, reusable, interoperable delivery.",
              "Technology choices relevant to applied EO science, engineering, and analytics teams.",
            ]),
          },
          {
            title: "How to use it",
            body: [
              paragraph(
                "The radar is intended to help teams scan the landscape, compare tooling, and make practical engineering choices grounded in open science and maintainable delivery patterns.",
              ),
              paragraph(
                `The underlying repository is public at ${anchor("https://github.com/sunnydean/space-tech-radar", "github.com/sunnydean/space-tech-radar")}.`,
              ),
            ].join(""),
          },
          {
            title: "Related pages",
            body: list([
              `${anchor(withBasePath("/", basePath), "Lampata home")}: consultancy, case studies, research, and contact information.`,
              `${anchor(withBasePath("/training/", basePath), "Training")}: workshops and curriculum related to earth observation and FAIR workflows.`,
            ]),
          },
        ],
      }),
    jsonLd: ({ siteUrl, basePath }) => {
      const homeUrl = toAbsoluteUrl("/", siteUrl, basePath);
      const pageUrl = toAbsoluteUrl("/earth-observation-tech-radar/", siteUrl, basePath);

      return [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: "Earth Observation Tech Radar",
          description:
            "A curated radar of open-source tools, standards, and practices shaping applied earth observation work.",
          inLanguage: "en-GB",
          isPartOf: {
            "@id": `${homeUrl}${websiteIdSuffix}`,
          },
          mainEntity: {
            "@type": "CreativeWork",
            name: "Earth Observation Tech Radar",
            url: pageUrl,
            sameAs: "https://github.com/sunnydean/space-tech-radar",
            creator: {
              "@type": "Organization",
              name: companyName,
              url: homeUrl,
            },
          },
          about: [
            { "@type": "Thing", name: "Earth observation" },
            { "@type": "Thing", name: "Open-source geospatial tools" },
            { "@type": "Thing", name: "Standards-aware delivery" },
          ],
        },
        breadcrumbJsonLd(pageUrl, [
          { name: "Home", path: "/" },
          { name: "Earth Observation Tech Radar", path: "/earth-observation-tech-radar/" },
        ], siteUrl, basePath),
      ];
    },
    llmsLabel: "Earth Observation Tech Radar",
    llmsSummary:
      "Interactive radar page describing Lampata's view of open-source tools, standards, and practices for applied earth observation work.",
  },
  {
    key: "privacypolicy/index.html",
    path: "/privacypolicy/",
    title: "Customer Privacy Notice | Lampata",
    description:
      "Lampata's customer privacy notice covering contact details, lawful bases, data use, and UK GDPR rights.",
    robots: "noindex, follow",
    includeInSitemap: false,
    snapshotHtml: (basePath) =>
      buildSnapshotPage({
        eyebrow: "Lampata Privacy",
        title: "Customer privacy notice",
        intro:
          "This page explains how Lampata collects, uses, and protects personal information in line with UK data protection requirements.",
        sections: [
          {
            title: "What the notice covers",
            body: list([
              "Contact details for privacy requests.",
              "Categories of personal information collected for services, security, and marketing.",
              "Lawful bases, retention, and data protection rights.",
              "How to complain and where to find the ICO.",
            ]),
          },
          {
            title: "Contact details",
            body: paragraph(
              `Email ${anchor("mailto:contact+gdpr@lampata.co.uk", "contact+gdpr@lampata.co.uk")} or telephone ${anchor("tel:+447842881257", "+44 7842 881257")}.`,
            ),
          },
          {
            title: "Related page",
            body: paragraph(
              `Return to ${anchor(withBasePath("/", basePath), "the Lampata homepage")} for services, case studies, research, and general contact information.`,
            ),
          },
        ],
      }),
    jsonLd: ({ siteUrl, basePath }) => {
      const homeUrl = toAbsoluteUrl("/", siteUrl, basePath);
      const pageUrl = toAbsoluteUrl("/privacypolicy/", siteUrl, basePath);

      return [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: "Customer privacy notice",
          description:
            "Lampata's customer privacy notice covering personal data use and UK GDPR rights.",
          inLanguage: "en-GB",
          isPartOf: {
            "@id": `${homeUrl}${websiteIdSuffix}`,
          },
          about: {
            "@id": `${homeUrl}${organizationIdSuffix}`,
          },
        },
        breadcrumbJsonLd(pageUrl, [
          { name: "Home", path: "/" },
          { name: "Privacy notice", path: "/privacypolicy/" },
        ], siteUrl, basePath),
      ];
    },
    llmsLabel: "Privacy Notice",
    llmsSummary:
      "Customer privacy notice covering data use, lawful bases, and privacy contact details. This page is intended for policy access rather than search visibility.",
  },
];

export function getSiteUrl(siteUrl?: string) {
  return normalizeSiteUrl(siteUrl || defaultSiteUrl);
}

export function getSeoPages() {
  return pages;
}

export function getPageByKey(key: string) {
  return pages.find((page) => page.key === key);
}

export function resolvePageKey(filename?: string, requestPath?: string) {
  if (filename) {
    const normalizedFilename = normalizePath(filename);
    const candidatePages = [...pages].sort((left, right) => right.key.length - left.key.length);

    for (const page of candidatePages) {
      if (normalizedFilename.endsWith(`/${page.key}`) || normalizedFilename === page.key) {
        return page.key;
      }
    }
  }

  const normalizedRequestPath = normalizeRequestPath(requestPath);
  return pages.find((page) => page.path === normalizedRequestPath)?.key;
}

export function renderSeoHead(page: SeoPage, context: SeoBuildContext) {
  const canonicalUrl = toAbsoluteUrl(page.path, context.siteUrl, context.basePath);
  const ogImageUrl = toAbsoluteUrl(defaultOgImagePath, context.siteUrl, context.basePath);
  const jsonLd = page.jsonLd(context).map((entry) => renderJsonLd(entry)).join("\n");
  const llmsUrl = toAbsoluteUrl("/llms.txt", context.siteUrl, context.basePath);
  const llmsFullUrl = toAbsoluteUrl("/llms-full.txt", context.siteUrl, context.basePath);

  return [
    `<meta name="description" content="${escapeAttribute(page.description)}" />`,
    `<meta name="robots" content="${escapeAttribute(page.robots)}" />`,
    `<meta name="googlebot" content="${escapeAttribute(page.robots)}" />`,
    `<meta name="author" content="${escapeAttribute(companyName)}" />`,
    `<meta name="publisher" content="${escapeAttribute(companyName)}" />`,
    '<meta name="theme-color" content="#00458b" />',
    '<meta name="referrer" content="strict-origin-when-cross-origin" />',
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="en-gb" href="${escapeAttribute(canonicalUrl)}" />`,
    `<link rel="alternate" type="text/markdown" href="${escapeAttribute(llmsUrl)}" title="LLM summary" />`,
    `<link rel="alternate" type="text/markdown" href="${escapeAttribute(llmsFullUrl)}" title="LLM full summary" />`,
    '<meta property="og:locale" content="en_GB" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${escapeAttribute(page.title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(page.description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(canonicalUrl)}" />`,
    `<meta property="og:site_name" content="${escapeAttribute(companyName)}" />`,
    `<meta property="og:image" content="${escapeAttribute(ogImageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeAttribute(`${companyName} logo`)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(ogImageUrl)}" />`,
    '<script>document.documentElement.classList.add("js");</script>',
    `<style>${crawlerSnapshotCss}</style>`,
    jsonLd,
  ].join("\n");
}

export function renderSnapshot(page: SeoPage, basePath: string) {
  return page.snapshotHtml(basePath);
}

export function buildSitemapXml(context: SeoBuildContext) {
  const urls = pages
    .filter((page) => page.includeInSitemap)
    .map((page) => {
      const loc = toAbsoluteUrl(page.path, context.siteUrl, context.basePath);
      const priority = page.path === "/" ? "1.0" : page.path === "/training/" ? "0.8" : "0.7";
      const changefreq = page.path === "/" ? "weekly" : "monthly";

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(context.buildDate)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

export function buildRobotsTxt(context: SeoBuildContext) {
  const sitemapUrl = toAbsoluteUrl("/sitemap.xml", context.siteUrl, context.basePath);

  return `# Lampata crawler policy
# Search engines and answer engines may crawl the public site.
# AI training crawlers are opted out by default.

User-agent: *
Allow: /
Content-signal: search=yes, ai-input=yes, ai-train=no

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: ${sitemapUrl}
`;
}

export function buildLlmsTxt(context: SeoBuildContext) {
  const homeUrl = toAbsoluteUrl("/", context.siteUrl, context.basePath);
  const fullUrl = toAbsoluteUrl("/llms-full.txt", context.siteUrl, context.basePath);

  return `# Lampata

> Lampata is a Cambridge-based geospatial consultancy working across earth observation, geospatial AI, FAIR workflows, open science, and cloud-native delivery.

See [llms-full.txt](${fullUrl}) for the detailed company and site summary.

## Main Pages

- [Home](${homeUrl}): Consultancy overview, sectors, case studies, open-science positioning, and contact information.
- [Training](${toAbsoluteUrl("/training/", context.siteUrl, context.basePath)}): Training in earth observation, geospatial AI, FAIR/open-science, and cloud-native delivery.
- [Earth Observation Tech Radar](${toAbsoluteUrl("/earth-observation-tech-radar/", context.siteUrl, context.basePath)}): Lampata's maintained radar of open-source EO tools, standards, and practices.
- [Privacy Notice](${toAbsoluteUrl("/privacypolicy/", context.siteUrl, context.basePath)}): Customer privacy notice and UK GDPR information.

## Contact

- Email: contact@lampata.com
- Office: Wellington House, East Road, Cambridge, England, CB1 1BH
`;
}

export function buildLlmsFullTxt(context: SeoBuildContext) {
  const homeUrl = toAbsoluteUrl("/", context.siteUrl, context.basePath);
  const trainingUrl = toAbsoluteUrl("/training/", context.siteUrl, context.basePath);
  const radarUrl = toAbsoluteUrl("/earth-observation-tech-radar/", context.siteUrl, context.basePath);
  const openScienceUrl = toAbsoluteUrl("/#open-science", context.siteUrl, context.basePath);
  const earthcodeUrl = toAbsoluteUrl("/#earthcode", context.siteUrl, context.basePath);

  return `# Lampata

Lampata is a UK geospatial consultancy based in Cambridge, England. The company works across earth observation, remote sensing, geospatial AI, FAIR workflows, open science, training, and production-minded geospatial engineering.

## Preferred source pages

- [Home](${homeUrl})
- [Training](${trainingUrl})
- [Earth Observation Tech Radar](${radarUrl})
- [Open science section](${openScienceUrl})
- [EarthCODE section](${earthcodeUrl})

## What Lampata does

- Builds geospatial systems, analyst-ready applications, data platforms, and reusable workflows.
- Helps teams move from research and pilots into operational delivery.
- Uses open-source and standards-aware methods so clients keep the code, research, documentation, and delivery patterns.
- Provides tailored training for teams working in earth observation, geospatial AI, FAIR/open-science, and cloud-native delivery.

## Who Lampata works with

- Space agencies
- Research institutions
- Sustainability analysts
- Enterprises seeking an edge

## Core service themes

- Open geospatial transformation
- Research, development, and innovation
- Geo-spatial and earth observation training
- Data engineering and stewardship

## Selected case studies

- GeoAI reusable workflows for the OGC Open Science Persistent Demonstrator: agentic AI packaging of research code into reusable, containerised, OGC-aware workflows.
- Urban analytics for the European Union: earth observation and AI methods for continental-scale urban classification and policy support.
- Antarctic ice data cubes for the ESA Polar Sciences Cluster: harmonised cloud-native Zarr data infrastructure for polar science.

## Open science and research

The site's research archive includes papers, talks, workshops, datasets, reports, and EarthCODE-related outputs. Themes include:

- Mobility data and urban analytics
- FAIR workflows and reproducibility
- Earth observation and open science
- EarthCODE tutorials, talks, workshops, posters, and conference papers

## Training offer

Lampata's training tracks include:

- Earth Observation Foundations
- Geo-spatial AI & ML Workflows
- FAIR, Open Science & EarthCODE
- Cloud-Native Geo-spatial Delivery

Delivery formats include private team workshops, live online training, and tailored multi-session programmes.

## Earth Observation Tech Radar

The Earth Observation Tech Radar is a Lampata-maintained view of open-source tools, standards, and practices shaping applied earth observation science, analytics, and delivery.

## Contact

- Email: contact@lampata.com
- Privacy email: contact+gdpr@lampata.co.uk
- Office: Wellington House, East Road, Cambridge, England, CB1 1BH
- Company number: 12820181

## Indexing and crawler intent

Lampata's public site is intended to be discoverable by search engines and answer engines. Privacy policy content is public for compliance access but is not intended as a primary search landing page.
`;
}

function buildSnapshotPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
}) {
  return `<main class="crawler-snapshot">
  <p class="crawler-snapshot__eyebrow">${escapeHtml(eyebrow)}</p>
  <h1>${escapeHtml(title)}</h1>
  <p class="crawler-snapshot__intro">${escapeHtml(intro)}</p>
  ${sections
    .map(
      (section) => `<section>
    <h2>${escapeHtml(section.title)}</h2>
    ${section.body}
  </section>`,
    )
    .join("\n  ")}
</main>`;
}

function paragraph(text: string) {
  return `<p>${text}</p>`;
}

function subheading(text: string) {
  return `<h3>${escapeHtml(text)}</h3>`;
}

function list(items: string[]) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function anchor(href: string, label: string) {
  return `<a href="${escapeAttribute(href)}">${escapeHtml(label)}</a>`;
}

function breadcrumbJsonLd(
  pageUrl: string,
  items: { name: string; path: string }[],
  siteUrl: string,
  basePath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path, siteUrl, basePath),
    })),
  };
}

function renderJsonLd(value: object) {
  return `<script type="application/ld+json">${JSON.stringify(value).replace(/</g, "\\u003c")}</script>`;
}

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.replace(/\/+$/, "");
}

export function normalizeBasePath(basePath: string) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const trimmed = basePath.replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
}

function normalizeRequestPath(requestPath?: string) {
  if (!requestPath || requestPath === "/") {
    return "/";
  }

  const withoutQuery = requestPath.replace(/[?#].*$/, "");
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}

function normalizePath(filePath: string) {
  return filePath.replace(/\\/g, "/");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value: string) {
  return escapeHtml(value);
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function withBasePath(path: string, basePath: string) {
  if (!path || /^[a-z]+:/i.test(path)) {
    return path;
  }

  const normalizedBasePath = normalizeBasePath(basePath);
  const hashOrQueryIndex = path.search(/[?#]/);
  const pathname = hashOrQueryIndex === -1 ? path : path.slice(0, hashOrQueryIndex);
  const suffix = hashOrQueryIndex === -1 ? "" : path.slice(hashOrQueryIndex);

  if (pathname === "/" || pathname === "") {
    return `${normalizedBasePath}${suffix}`;
  }

  const trimmedPath = pathname.replace(/^\/+/, "");

  if (normalizedBasePath === "/") {
    return `/${trimmedPath}${suffix}`;
  }

  return `${normalizedBasePath}${trimmedPath}${suffix}`;
}

export function toAbsoluteUrl(path: string, siteUrl: string, basePath: string) {
  return new URL(withBasePath(path, basePath), `${normalizeSiteUrl(siteUrl)}/`).toString();
}

const crawlerSnapshotCss = `
html.js .crawler-snapshot {
  display: none;
}

.crawler-snapshot {
  margin: 0 auto;
  max-width: 72rem;
  padding: 2.75rem 1.5rem 4rem;
  color: #103d66;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.7;
}

.crawler-snapshot__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6d83a1;
}

.crawler-snapshot__intro {
  max-width: 52rem;
  font-size: 1.08rem;
}

.crawler-snapshot h1,
.crawler-snapshot h2,
.crawler-snapshot h3 {
  margin: 0;
  color: #00458b;
  line-height: 1.15;
}

.crawler-snapshot h1 {
  max-width: 56rem;
  font-size: clamp(2.2rem, 6vw, 4.25rem);
  letter-spacing: -0.06em;
}

.crawler-snapshot h2 {
  margin-top: 2rem;
  font-size: 1.45rem;
  letter-spacing: -0.04em;
}

.crawler-snapshot h3 {
  margin-top: 1rem;
  font-size: 1.05rem;
}

.crawler-snapshot p,
.crawler-snapshot li {
  max-width: 60rem;
  font-size: 1rem;
}

.crawler-snapshot ul {
  margin: 0.75rem 0 0;
  padding-left: 1.3rem;
}

.crawler-snapshot p + p,
.crawler-snapshot h3 + p,
.crawler-snapshot p + ul,
.crawler-snapshot ul + p {
  margin-top: 0.75rem;
}

.crawler-snapshot a {
  color: #00458b;
  font-weight: 600;
  text-decoration-thickness: 0.08em;
  text-underline-offset: 0.18em;
}
`;
