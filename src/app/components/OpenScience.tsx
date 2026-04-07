import { ArrowUpRight, Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import urbanBackgroundResearch from "../../assets/urban_background_research.webp";
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
  const visibleFeaturedPublications = featuredPublications.slice(0, 3);
  const handleArchiveOpen = () => {
    setArchiveRequested(true);
    setArchiveOpen(true);
  };

  return (
    <section className="relative overflow-visible bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#ffffff_100%)] px-6 py-[4.5rem] md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-13rem] top-[-5rem] h-[28rem] w-[28rem] overflow-hidden rounded-full opacity-[0.18] mix-blend-multiply [mask-image:linear-gradient(90deg,#000_0%,#000_58%,rgba(0,0,0,0.62)_78%,rgba(0,0,0,0.18)_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,#000_0%,#000_58%,rgba(0,0,0,0.62)_78%,rgba(0,0,0,0.18)_92%,transparent_100%)] sm:left-[-14rem] sm:top-[-6rem] sm:h-[34rem] sm:w-[34rem] md:left-[-17rem] md:top-[-6.5rem] md:h-[42rem] md:w-[42rem] lg:left-[-19rem] lg:top-[-7rem] lg:h-[48rem] lg:w-[48rem] xl:left-[-21rem] xl:top-[-7.5rem] xl:h-[54rem] xl:w-[54rem]"
      >
        <img
          src={urbanBackgroundResearch}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full -rotate-[7deg] object-cover saturate-[1.1] contrast-[1.04] scale-[1.03]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-5 md:gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:grid-rows-[auto_1fr] lg:items-stretch">
          {researchItem ? (
            <Reveal className="order-2 lg:order-none lg:col-start-1 lg:row-span-2">
              <div className="panel-surface h-full overflow-hidden rounded-[0.75rem]">
                <div className="grid h-full lg:grid-rows-[0.8fr_0.2fr]">
                  <div className="relative min-h-[31rem] overflow-hidden bg-[linear-gradient(140deg,rgba(245,215,4,0.18),rgba(255,255,255,0.88)_50%,rgba(0,69,139,0.08))] sm:min-h-[36rem]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.76),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.12))]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full sm:h-[56rem] sm:w-[56rem] lg:h-[64rem] lg:w-[64rem]"
                    >
                      <img
                        src={urbanBackgroundResearch}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full -rotate-[2deg] object-cover object-center saturate-[1.1] contrast-[1.05]"
                      />
                    </div>
                    <div className="relative h-full min-h-[31rem] sm:min-h-[36rem]" />
                  </div>

                  <div className="border-t border-[#00458b]/10 bg-white px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex h-full flex-col">
                      <div className="brand-gold-fill mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                        <FlaskConical className="h-5 w-5" />
                      </div>
                      <p className="section-eyebrow mb-3">Research archive</p>
                      <h3 className="font-display max-w-lg text-[1.85rem] leading-[0.96] tracking-[-0.06em] text-[#00458b] sm:text-[2.4rem]">
                        {researchItem.title} & Research.
                      </h3>
                      {researchItem.description ? (
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#00458b]/76">
                          {researchItem.description}
                        </p>
                      ) : null}
                      <button
                        type="button"
                        onClick={handleArchiveOpen}
                        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#00458b] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00458b]/28 sm:mt-6"
                      >
                        Browse the full archive
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleArchiveOpen}
                        className="mt-5 rounded-[1rem] border border-[#00458b]/10 bg-[#f8fbff] p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#00458b]/18 hover:shadow-[0_20px_40px_-34px_rgba(0,69,139,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00458b]/28 sm:mt-6 sm:p-5"
                        aria-label="Open the full research archive from recent publications"
                      >
                        <span className="block text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#00458b]/54">
                          Recent publications
                        </span>
                        <span className="mt-3 block space-y-3">
                          {visibleFeaturedPublications.map((publication) => (
                            <span
                              key={`${publication.title}-${publication.venue}-${publication.year}`}
                              className="brand-gold-border-left block border-l-2 pl-3"
                            >
                              <span className="block text-[0.96rem] font-semibold leading-6 text-[#00458b]">
                                {publication.title}
                              </span>
                              <span className="block text-[0.78rem] leading-5 text-[#00458b]/56 sm:text-sm sm:leading-6">
                                {publication.venue} · {publication.year}
                              </span>
                            </span>
                          ))}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : null}

          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <div className="mb-0 flex max-w-3xl flex-col gap-4 text-center lg:ml-auto lg:text-left">
              <span className="section-eyebrow self-center lg:self-start">
                Open science & research
              </span>
              <h2 className="section-title max-w-4xl text-balance">
                We Believe in Open Source, Open Science for Everyone.
              </h2>
            </div>
          </div>

          <div className="order-3 grid gap-4 sm:grid-cols-2 lg:order-none lg:col-start-2 lg:row-start-2 lg:h-full lg:grid-cols-2 lg:grid-rows-2 lg:auto-rows-fr">
            {audienceSegments.map((segment, index) => {
              const Icon = audienceIconMap[segment.icon];

              return (
                <Reveal
                  as="article"
                  key={segment.title}
                  delay={index * 80}
                  className="brand-gold-border-top panel-surface flex h-full flex-col rounded-[0.75rem] border-t-4 p-5 sm:p-6"
                >
                  <div className="brand-gold-fill mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-[1.42rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:text-[1.55rem]">
                    {segment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#00458b]/76 sm:mt-4 sm:leading-7">
                    {segment.summary}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {archiveRequested ? (
          <Suspense fallback={null}>
            <OpenScienceArchiveDialog
              open={archiveOpen}
              onOpenChange={setArchiveOpen}
            />
          </Suspense>
        ) : null}
      </div>
    </section>
  );
}
