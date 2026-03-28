import { ArrowUpRight, GitBranch, Layers3, Satellite } from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RadarEmbed } from "./components/RadarEmbed";

export default function RadarApp() {
  return (
    <div className="site-shell min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden bg-white px-6 pb-20 pt-56">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(0,69,139,0.08),transparent_64%)]" />
          <div className="absolute left-[10%] top-36 h-24 w-24 rounded-full border border-[#00458b]/7" />
          <div className="absolute right-[11%] top-40 h-18 w-18 rounded-full border border-[#f5d704]/22" />
          <div className="absolute inset-x-0 top-[11.75rem] mx-auto h-px max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(0,69,139,0.16),transparent)]" />
          <div className="absolute inset-x-0 top-34 mx-auto h-40 max-w-5xl [background-image:radial-gradient(circle,rgba(0,69,139,0.14)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.16]" />
        </div>
        <section>
          <div className="relative z-10 mx-auto max-w-7xl">
            <RadarEmbed />
          </div>
        </section>
        <section className="relative z-10 pt-14">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {[
              {
                icon: Layers3,
                title: "Earth observation focus",
                copy: "A curated view of the open-source tools, standards, and practices shaping applied EO work.",
              },
              {
                icon: GitBranch,
                title: "Open-source oriented",
                copy: "Built to point teams toward inspectable, reusable, community-driven technology choices.",
              },
              {
                icon: Satellite,
                title: "Maintained by Lampata",
                copy: "Updated as part of Lampata's research and engineering work across geo-spatial AI and open science.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[1.1rem] border border-[#00458b]/8 bg-[#fbfdff] p-6 shadow-[0_22px_50px_-46px_rgba(0,69,139,0.2)]"
                >
                  <div className="absolute right-0 top-0 h-18 w-18 rounded-bl-[1.1rem] bg-[#f5d704]/14" />
                  <div className="brand-gold-fill mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-[1.4rem] leading-tight tracking-[-0.04em] text-[#00458b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#00458b]/68">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-10 flex max-w-6xl justify-center">
            <a
              href="https://github.com/sunnydean/space-tech-radar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72"
            >
              View the radar repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
