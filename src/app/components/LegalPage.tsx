import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function LegalPageShell({ children }: { children: ReactNode }) {
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
              {children}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function LegalPageIntro({
  title,
  intro,
  effectiveDate,
  summary,
}: {
  title: string;
  intro: ReactNode;
  effectiveDate: string;
  summary: ReactNode[];
}) {
  return (
    <>
      <h1 className="font-display text-[2.4rem] leading-[0.95] tracking-[-0.06em] text-[#00458b] sm:text-[3.2rem]">
        {title}
      </h1>
      <Paragraph>{intro}</Paragraph>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#00458b]/54">
        {effectiveDate}
      </p>
      <BulletList items={summary} />
    </>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
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

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[1.65rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:text-[1.9rem]">
      {children}
    </h2>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-base leading-8 text-[#00458b]/78">{children}</p>;
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[#00458b]/78 marker:text-[#00458b]">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
