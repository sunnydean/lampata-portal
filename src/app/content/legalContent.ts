import type {
  CookiePolicyContent,
  PrivacyNoticeContent,
} from "./siteContent";

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

export const cookiePolicyContent: CookiePolicyContent = {
  eyebrow: "Cookie Policy",
  title: "Cookie Policy",
  effectiveDate: "29 March 2026",
  intro:
    "This Cookie Policy explains how Lampata LTD uses cookies and similar technologies on lampata.co.uk.",
  summary: [
    "What cookies are",
    "Strictly necessary cookies",
    "Analytics and measurement",
    "Third-party websites",
    "How to manage cookies",
    "Changes to this policy",
    "Contact",
  ],
  contact: {
    email: "contact+gdpr@lampata.co.uk",
  },
  sections: [
    {
      title: "What cookies are",
      paragraphs: [
        "Cookies are small text files that can be stored on your device when you visit a website. They are commonly used to support core website functions, remember settings, and help website operators understand how a service is performing.",
        "Similar technologies can include browser storage, scripts, pixels, and other tools that store or access information on your device. This policy explains what Lampata uses on this website today.",
      ],
    },
    {
      title: "Strictly necessary cookies",
      paragraphs: [
        "Lampata does not use cookies for advertising or personalised profiling on this website. However, Cloudflare security or service-protection features may set strictly necessary cookies when needed to protect the website, distinguish legitimate visitors from malicious traffic, or complete a security challenge.",
        "These cookies are only used where required to keep the website secure, reliable, and available. They are not used by Lampata to track you across websites for advertising purposes.",
      ],
      bullets: [
        "Examples may include Cloudflare cookies such as __cf_bm or cf_clearance when those protections are triggered.",
        "These cookies may not appear on every visit.",
      ],
    },
    {
      title: "Analytics and measurement",
      paragraphs: [
        "Lampata uses Cloudflare Web Analytics to understand aggregate website usage and performance, such as page views, referral sources, and general traffic trends.",
        "According to Cloudflare's documentation, Cloudflare Web Analytics does not use cookies or browser storage such as localStorage or sessionStorage for this measurement.",
        "Lampata does not currently use Google Analytics or other non-essential cookie-based tracking tools on this website. If that changes, we will update this policy and any required consent controls before enabling them.",
      ],
    },
    {
      title: "Third-party websites",
      paragraphs: [
        "This website includes links to third-party websites and may load third-party resources such as external media thumbnails or documents. Those third parties may process request information according to their own privacy and cookie policies.",
        "If you follow a link to another website or interact with a third-party service, that provider's policies will apply to your use of that service.",
      ],
    },
    {
      title: "How to manage cookies",
      paragraphs: [
        "Most browsers allow you to view, block, or delete cookies through their settings. You can usually find these controls in your browser's privacy or security options.",
        "If you block all cookies, some security-related website functions may not work as expected if anti-abuse or service-protection measures are triggered.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        "We may update this Cookie Policy from time to time to reflect changes to the website, the services we use, or applicable legal requirements. When we make material changes, we will update the effective date shown at the top of this page.",
      ],
    },
  ],
};

export const contactChecklist = [
  "A concise statement of the question you are trying to answer",
  "What data you already have access to and what remains uncertain",
  "Whether you need a prototype, a production workflow, or an expert audit",
];

