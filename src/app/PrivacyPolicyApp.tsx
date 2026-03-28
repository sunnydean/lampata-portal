import type { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { privacyNoticeContent } from "./content/siteContent";

const icoRightsBaseHref =
  "https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/create-your-own-privacy-notice/your-data-protection-rights/";
const icoLawfulBasesHref =
  "https://ico.org.uk/for-organisations/advice-for-small-organisations/getting-started-with-gdpr/data-protection-principles-definitions-and-key-terms/#lawfulbasis";
const icoComplaintHref = "https://ico.org.uk/make-a-complaint/";

const rights = [
  {
    title: "Your right of access",
    text:
      "You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for.",
    href: `${icoRightsBaseHref}#roa`,
    label: "Read more about the right of access.",
  },
  {
    title: "Your right to rectification",
    text:
      "You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete.",
    href: `${icoRightsBaseHref}#rtr`,
    label: "Read more about the right to rectification.",
  },
  {
    title: "Your right to erasure",
    text: "You have the right to ask us to delete your personal information.",
    href: `${icoRightsBaseHref}#rte`,
    label: "Read more about the right to erasure.",
  },
  {
    title: "Your right to restriction of processing",
    text: "You have the right to ask us to limit how we can use your personal information.",
    href: `${icoRightsBaseHref}#rtrop`,
    label: "Read more about the right to restriction of processing.",
  },
  {
    title: "Your right to object to processing",
    text: "You have the right to object to the processing of your personal data.",
    href: `${icoRightsBaseHref}#rto`,
    label: "Read more about the right to object to processing.",
  },
  {
    title: "Your right to data portability",
    text:
      "You have the right to ask that we transfer the personal information you gave us to another organisation, or to you.",
    href: `${icoRightsBaseHref}#rtdp`,
    label: "Read more about the right to data portability.",
  },
  {
    title: "Your right to withdraw consent",
    text:
      "When we use consent as our lawful basis you have the right to withdraw your consent at any time.",
    href: `${icoRightsBaseHref}#rtwc`,
    label: "Read more about the right to withdraw consent.",
  },
];

function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-semibold text-[#00458b] underline decoration-[#00458b]/24 underline-offset-4 transition-opacity hover:opacity-72"
    >
      {children}
    </a>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[1.65rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:text-[1.9rem]">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-base leading-8 text-[#00458b]/78">{children}</p>;
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyApp() {
  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="relative overflow-hidden px-6 pb-16 pt-12 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[8%] top-10 h-44 w-44 rounded-full bg-[#f5d704]/14 blur-3xl" />
            <div className="absolute right-[7%] top-6 h-60 w-60 rounded-full bg-[#00458b]/8 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,69,139,0.16),transparent)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <article className="panel-surface rounded-[1rem] px-7 py-8 sm:px-10 sm:py-10">
              <h1 className="font-display text-[2.4rem] leading-[0.95] tracking-[-0.06em] text-[#00458b] sm:text-[3.2rem]">
                {privacyNoticeContent.title}
              </h1>
              <Paragraph>{privacyNoticeContent.intro}</Paragraph>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
                {privacyNoticeContent.effectiveDate}
              </p>

              <BulletList items={privacyNoticeContent.summary} />

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>Contact details</SectionHeading>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
                      Telephone
                    </p>
                    <a
                      href={`tel:${privacyNoticeContent.contact.telephone}`}
                      className="mt-2 inline-block text-base leading-8 text-[#00458b]/78 transition-opacity hover:opacity-72"
                    >
                      {privacyNoticeContent.contact.telephone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
                      Email
                    </p>
                    <a
                      href={`mailto:${privacyNoticeContent.contact.email}`}
                      className="mt-2 inline-block break-all text-base leading-8 text-[#00458b]/78 transition-opacity hover:opacity-72"
                    >
                      {privacyNoticeContent.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>What information we collect, use, and why</SectionHeading>

                <div className="mt-6">
                  <Paragraph>
                    We collect or use the following information to provide and improve products and
                    services for clients:
                  </Paragraph>
                  <BulletList
                    items={[
                      "Names and contact details",
                      "Occupation",
                      "Usage data (including information about how you interact with and use our website, products and services)",
                    ]}
                  />
                </div>

                <div className="mt-6">
                  <Paragraph>
                    We collect or use the following personal information for the prevention,
                    detection, investigation or prosecution of crimes:
                  </Paragraph>
                  <BulletList items={["Names and contact information"]} />
                </div>

                <div className="mt-6">
                  <Paragraph>
                    We collect or use the following personal information for information updates or
                    marketing purposes:
                  </Paragraph>
                  <BulletList items={["Names and contact details", "Addresses", "IP addresses"]} />
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>Lawful bases and data protection rights</SectionHeading>

                <div className="mt-6 space-y-4">
                  <Paragraph>
                    Under UK data protection law, we must have a “lawful basis” for collecting and
                    using your personal information. There is a list of possible lawful bases in the
                    UK GDPR. You can find out more about lawful bases on the{" "}
                    <LegalLink href={icoLawfulBasesHref}>ICO’s website</LegalLink>.
                  </Paragraph>

                  <Paragraph>
                    Which lawful basis we rely on may affect your data protection rights which are
                    set out in brief below. You can find out more about your data protection rights
                    and the exemptions which may apply on the{" "}
                    <LegalLink href={icoRightsBaseHref}>ICO’s website</LegalLink>:
                  </Paragraph>
                </div>

                <ul className="mt-6 list-disc space-y-4 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
                  {rights.map((right) => (
                    <li key={right.title}>
                      <span className="font-semibold text-[#00458b]">{right.title}</span>
                      {" - "}
                      {right.text}{" "}
                      <LegalLink href={right.href}>{right.label}</LegalLink>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-4">
                  <Paragraph>
                    If you make a request, we must respond to you without undue delay and in any
                    event within one month.
                  </Paragraph>
                  <Paragraph>
                    To make a data protection rights request, please contact us using the contact
                    details at the top of this privacy notice.
                  </Paragraph>
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>Our lawful bases for the collection and use of your data</SectionHeading>

                <div className="mt-6">
                  <Paragraph>
                    Our lawful bases for collecting or using personal information to provide and
                    improve products and services for clients are:
                  </Paragraph>
                  <ul className="mt-4 list-disc space-y-4 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
                    <li>
                      <span className="font-semibold text-[#00458b]">Consent</span>
                      {" - "}
                      we have permission from you after we gave you all the relevant information.
                      All of your data protection rights may apply, except the right to object. To
                      be clear, you do have the right to withdraw your consent at any time.
                    </li>
                    <li>
                      <span className="font-semibold text-[#00458b]">Contract</span>
                      {" – "}
                      we have to collect or use the information so we can enter into or carry out a
                      contract with you. All of your data protection rights may apply except the
                      right to object.
                    </li>
                    <li>
                      <span className="font-semibold text-[#00458b]">Legal obligation</span>
                      {" – "}
                      we have to collect or use your information so we can comply with the law. All
                      of your data protection rights may apply, except the right to erasure, the
                      right to object and the right to data portability.
                    </li>
                    <li>
                      <span className="font-semibold text-[#00458b]">Legitimate interests</span>
                      {" – "}
                      we’re collecting or using your information because it benefits you, our
                      organisation or someone else, without causing an undue risk of harm to anyone.
                      All of your data protection rights may apply, except the right to portability.
                      Our legitimate interests are:
                      <BulletList
                        items={[
                          "We process business contact details of client users and prospects to provide service updates and relevant offers about our professional services. This is necessary to run and improve our services and is proportionate and expected in a B2B context. We rely on legitimate interests and comply with PECR: we email corporate subscribers or use the soft opt-in for existing customers, include an easy unsubscribe in every message, honour objections, and obtain consent where PECR requires it for individuals.",
                        ]}
                      />
                    </li>
                  </ul>
                  <div className="mt-4 space-y-4">
                    <Paragraph>
                      For more information on our use of legitimate interests as a lawful basis you
                      can contact us using the contact details set out above.
                    </Paragraph>
                  </div>
                  <ul className="mt-4 list-disc space-y-4 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
                    <li>
                      <span className="font-semibold text-[#00458b]">Vital interests</span>
                      {" – "}
                      collecting or using the information is needed when someone’s physical or
                      mental health or wellbeing is at urgent or serious risk. This includes an
                      urgent need for life sustaining food, water, clothing or shelter. All of your
                      data protection rights may apply, except the right to object and the right to
                      portability.
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Paragraph>
                    Our lawful bases for collecting or using personal information for the
                    prevention, detection, investigation or prosecution of crimes are:
                  </Paragraph>
                  <ul className="mt-4 list-disc space-y-4 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
                    <li>
                      <span className="font-semibold text-[#00458b]">Consent</span>
                      {" - "}
                      we have permission from you after we gave you all the relevant information.
                      All of your data protection rights may apply, except the right to object. To
                      be clear, you do have the right to withdraw your consent at any time.
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Paragraph>
                    Our lawful bases for collecting or using personal information for information
                    updates or marketing purposes are:
                  </Paragraph>
                  <ul className="mt-4 list-disc space-y-4 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
                    <li>
                      <span className="font-semibold text-[#00458b]">Consent</span>
                      {" - "}
                      we have permission from you after we gave you all the relevant information.
                      All of your data protection rights may apply, except the right to object. To
                      be clear, you do have the right to withdraw your consent at any time.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>Where we get personal information from</SectionHeading>
                <BulletList items={["Directly from you", "Marketing Sites"]} />
                <div className="mt-6 space-y-4">
                  <Paragraph>
                    In order to enhance our ability to provide relevant marketing, offers, and
                    services to you and update our records, we may obtain information about you from
                    other sources, such as public databases, joint marketing partners, affiliate
                    programs, data providers, and from other third parties.
                  </Paragraph>
                  <Paragraph>
                    This information includes mailing addresses, job titles, email addresses, phone
                    numbers, intent data (or user behaviour data), Internet Protocol (IP)
                    addresses, social media profiles, social media URLs, and custom profiles, for
                    purposes of targeted advertising and event promotion.
                  </Paragraph>
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>How long we keep information</SectionHeading>
                <div className="mt-6 space-y-4">
                  <Paragraph>
                    We keep personal data for the duration of our relationship and for up to three
                    (3) years afterwards, then delete or anonymise it. We may retain it longer only
                    if required by law or to establish, exercise, or defend legal claims;
                    otherwise, we remove it sooner when it is no longer needed.
                  </Paragraph>
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>Who we share information with</SectionHeading>

                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
                      Data processors
                    </h3>
                  </div>

                  <div>
                    <h4 className="font-display text-[1.2rem] leading-tight tracking-[-0.04em] text-[#00458b]">
                      Google Workspace (Google LLC) — Cloud productivity &amp; storage (SaaS)
                    </h4>
                    <Paragraph>
                      This data processor does the following activities for us: Stores and syncs our
                      business documents/files (which may include client contact details or project
                      artefacts) to enable secure collaboration, access control, versioning, and
                      backup.
                    </Paragraph>
                  </div>

                  <div>
                    <h4 className="font-display text-[1.2rem] leading-tight tracking-[-0.04em] text-[#00458b]">
                      Trello (Atlassian US, Inc.) — Project management &amp; collaboration (SaaS)
                    </h4>
                    <Paragraph>
                      This data processor does the following activities for us: Hosts our project
                      boards/cards, comments, and attachments used to deliver client work;
                    </Paragraph>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
                    Others we share personal information with
                  </h3>
                  <BulletList
                    items={[
                      "Professional or legal advisors",
                      "Regulatory authorities",
                      "Organisations we’re legally obliged to share personal information with",
                    ]}
                  />
                </div>
              </div>

              <div className="mt-10 border-t border-[#00458b]/10 pt-10">
                <SectionHeading>How to complain</SectionHeading>
                <div className="mt-6 space-y-4">
                  <Paragraph>
                    If you have any concerns about our use of your personal data, you can make a
                    complaint to us using the contact details at the top of this privacy notice.
                  </Paragraph>
                  <Paragraph>
                    If you remain unhappy with how we’ve used your data after raising a complaint
                    with us, you can also complain to the ICO.
                  </Paragraph>
                  <Paragraph>The ICO’s address:</Paragraph>
                  <div className="space-y-1 text-base leading-8 text-[#00458b]/78">
                    <p>Information Commissioner’s Office</p>
                    <p>Wycliffe House</p>
                    <p>Water Lane</p>
                    <p>Wilmslow</p>
                    <p>Cheshire</p>
                    <p>SK9 5AF</p>
                  </div>
                  <Paragraph>Helpline number: 0303 123 1113</Paragraph>
                  <Paragraph>
                    Website: <LegalLink href={icoComplaintHref}>https://www.ico.org.uk/make-a-complaint</LegalLink>
                  </Paragraph>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
