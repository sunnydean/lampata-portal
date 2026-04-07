import { ArrowUpRight, Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import {
  audienceSegments,
  featuredPublications,
  openScienceItems,
} from "../content/homeContent";
import { Reveal } from "./Reveal";

const OpenScienceArchiveDialog = lazy(() =>
  import("./OpenScienceArchiveDialog").then((module) => ({
    default: module.OpenScienceArchiveDialog,
  })),
);

const audienceIconMap = {
  agency: Landmark,
  research: FlaskConical,
  sustainability: Leaf,
  enterprise: Building2,
};

export function OpenScience() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveRequested, setArchiveRequested] = useState(false);
  const researchItem = openScienceItems.find((item) => item.icon === "research");

  return (
    <section className="bg-white px-6 py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-0 flex max-w-5xl flex-col gap-3 md:gap-4">
          <span className="section-eyebrow self-start">Open science & research</span>
          <h2 className="section-title max-w-5xl text-balance text-left">
            Open methods are part of the product, not a side note.
          </h2>
          <p className="section-copy max-w-4xl text-left">
            Lampata stands out when the work needs to be explainable, reproducible, and
            supported by methods that can hold up beyond a single project.
          </p>
        </div>

        {researchItem ? (
          <Reveal
            delay={120}
            className="mt-5 overflow-hidden rounded-[1rem] border border-[#00458b]/10 bg-[linear-gradient(135deg,rgba(245,215,4,0.2),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] shadow-[0_32px_70px_-52px_rgba(0,69,139,0.24)] md:mt-6"
          >
            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
              <div>
                <div className="brand-gold-fill mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-[#00458b]">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <p className="section-eyebrow mb-4">Research archive</p>
                <h3 className="font-display max-w-2xl text-[1.7rem] leading-[0.98] tracking-[-0.06em] text-[#00458b] sm:text-[2.6rem]">
                  {researchItem.title} & Research.
                </h3>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[#00458b]/74 sm:mt-5 sm:text-base sm:leading-8">
                  {researchItem.description}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setArchiveRequested(true);
                    setArchiveOpen(true);
                  }}
                  className="brand-gold-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[#00458b] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  See Related Publications
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                {archiveRequested ? (
                  <Suspense fallback={null}>
                    <OpenScienceArchiveDialog
                      open={archiveOpen}
                      onOpenChange={setArchiveOpen}
                    />
                  </Suspense>
                ) : null}
              </div>

              <div className="panel-surface hidden rounded-[0.9rem] p-6 md:block">
                <p className="section-eyebrow mb-4">Inside the archive</p>
                <div className="space-y-3">
                  {featuredPublications.map((publication) => (
                    <div
                      key={`${publication.title}-${publication.venue}-${publication.year}`}
                      className="brand-gold-border-left border-l-2 pl-3"
                    >
                      <p className="text-sm font-semibold leading-6 text-[#00458b]">
                        {publication.title}
                      </p>
                      <p className="text-sm leading-6 text-[#00458b]/58">
                        {publication.venue} · {publication.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-5 grid gap-5 md:mt-6 md:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal
            className="panel-surface flex flex-col rounded-[0.75rem] p-6 md:p-8"
          >
            <p className="section-eyebrow mb-5">Where this shows up</p>
            <h3 className="font-display text-2xl leading-tight tracking-[-0.06em] text-[#00458b]">
              Bridging the gap between research and business applications.
            </h3>
            <span className="yellow-rule mt-4 w-12" />

            <p className="mt-5 text-sm leading-7 text-[#00458b]/76 md:mt-6">
              The same research standards show up across the client work: space-agency
              programmes, research institutions, public-interest analysis, and commercial
              teams that need delivery to hold up after the first prototype.
            </p>

            <div className="mt-5 grow space-y-2 md:mt-6">
              {[
                "Operational GIS workflows and analyst tooling",
                "Reusable research methods and FAIR publishing patterns",
                "Sustainability, mobility, and built-environment analysis",
                "Prototype-to-production paths with documented handoff",
                "Evidence that can be inspected, reused, and defended",
              ].map((item) => (
                <div
                  key={item}
                  className="brand-gold-border-left border-l-2 pl-3 text-sm leading-6 text-[#00458b]/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
            {audienceSegments.map((segment, index) => {
              const Icon = audienceIconMap[segment.icon];

              return (
                <Reveal
                  key={segment.title}
                  delay={index * 80}
                  className="panel-surface flex h-full flex-col rounded-[0.75rem] p-5 md:p-6"
                >
                  <div className="brand-gold-fill mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl leading-tight tracking-[-0.05em] text-[#00458b]">
                    {segment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#00458b]/76">{segment.summary}</p>
                  <div className="mt-5 hidden flex-wrap gap-2 md:flex">
                    {segment.outcomes.map((outcome) => (
                      <span key={outcome} className="tag-mono text-[#00458b]/82">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
