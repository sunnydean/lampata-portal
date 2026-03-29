import { Mail } from "lucide-react";
import {
  BulletList,
  LegalPageIntro,
  LegalPageShell,
  Paragraph,
  SectionHeading,
} from "./components/LegalPage";
import { cookiePolicyContent } from "./content/legalContent";

export default function CookiePolicyApp() {
  return (
    <LegalPageShell>
      <LegalPageIntro
        title={cookiePolicyContent.title}
        intro={cookiePolicyContent.intro}
        effectiveDate={cookiePolicyContent.effectiveDate}
        summary={cookiePolicyContent.summary}
      />

      {cookiePolicyContent.sections.map((section) => (
        <div key={section.title} className="mt-10 border-t border-[#00458b]/10 pt-10">
          <SectionHeading>{section.title}</SectionHeading>
          <div className="mt-6 space-y-4">
            {section.paragraphs?.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
          {section.bullets?.length ? <BulletList items={section.bullets} /> : null}
        </div>
      ))}

      <div className="mt-10 border-t border-[#00458b]/10 pt-10">
        <SectionHeading>Contact</SectionHeading>
        <div className="mt-6 rounded-[0.9rem] border border-[#00458b]/10 bg-white/80 p-5">
          <div className="flex items-start gap-3">
            <div className="brand-gold-fill mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#00458b]">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
                Privacy contact
              </p>
              <a
                href={`mailto:${cookiePolicyContent.contact.email}`}
                className="mt-2 inline-block break-all text-base leading-8 text-[#00458b]/78 transition-opacity hover:opacity-72"
              >
                {cookiePolicyContent.contact.email}
              </a>
              <Paragraph>
                If you have any questions about this Cookie Policy or our use of cookies and
                similar technologies, contact us using the address above.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </LegalPageShell>
  );
}
