import { ArrowUpRight, Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import morphotopesMap from "../../assets/morphotopes_map.svg";
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
                  <div className="relative min-h-[31rem] overflow-hidden bg-[#f7f9fc] sm:min-h-[36rem]">
                    <img
                      src={morphotopesMap}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <svg
                      viewBox="0 0 669.6 378.352075"
                      preserveAspectRatio="xMidYMid slice"
                      className="pointer-events-none absolute inset-0 h-full w-full motion-reduce:hidden"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="ship-path-down"
                          d="M 286.089 378.472 L 286.089 364.317 L 280.874 330.791 L 280.874 319.615 L 277.894 257.033 L 277.894 248.838 L 289.069 154.965 L 292.050 147.515 L 318.870 113.244 L 327.811 111.754 L 396.353 93.873 L 405.293 91.638 L 477.561 64.072 L 487.991 60.347 L 610.175 42.466 L 609.430 40.976 L 655.621 0.000 L 651.896 -0.745"
                        />
                        <path
                          id="ship-path-up"
                          d="M 651.896 -0.745 L 655.621 0.000 L 609.430 40.976 L 610.175 42.466 L 487.991 60.347 L 477.561 64.072 L 405.293 91.638 L 396.353 93.873 L 327.811 111.754 L 318.870 113.244 L 292.050 147.515 L 289.069 154.965 L 277.894 248.838 L 277.894 257.033 L 280.874 319.615 L 280.874 330.791 L 286.089 364.317 L 286.089 378.472"
                        />
                        <g id="ship-large">
                          <path d="M -4.1 0 L -3.4 -1.5 L 1.2 -1.5 L 3.4 -0.75 L 4.1 0 L 3.4 0.75 L 1.2 1.5 L -3.4 1.5 Z" fill="#2e4057" />
                          <rect x="-1.5" y="-0.8" width="2.2" height="1.6" rx="0.3" fill="#3d5a7a" />
                        </g>
                        <g id="ship-medium">
                          <path d="M -3.75 0 L -3.15 -1.35 L 1.05 -1.35 L 3.15 -0.7 L 3.75 0 L 3.15 0.7 L 1.05 1.35 L -3.15 1.35 Z" fill="#2e4057" />
                          <rect x="-1.35" y="-0.75" width="1.95" height="1.5" rx="0.25" fill="#3d5a7a" />
                        </g>
                        <g id="ship-small">
                          <path d="M -3 0 L -2.6 -1.1 L 0.75 -1.1 L 2.6 -0.6 L 3 0 L 2.6 0.6 L 0.75 1.1 L -2.6 1.1 Z" fill="#1e3a5f" />
                          <rect x="-1.1" y="-0.6" width="1.65" height="1.2" rx="0.2" fill="#2d5280" />
                        </g>
                      </defs>

                      {/* Lightweight ship overlay: three slow boats following the route centerline with simple bridge/start-stop fades. */}
                      <g opacity="0.88">
                        <g>
                          <use href="#ship-large" />
                          <animateMotion dur="64s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="0s">
                            <mpath href="#ship-path-down" />
                          </animateMotion>
                          <animate
                            attributeName="opacity"
                            dur="64s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            begin="0s"
                            keyTimes="0;0.012;0.016;0.024;0.028;0.065;0.069;0.094;0.098;0.179;0.183;0.204;0.208;0.339;0.343;0.363;0.367;0.419;0.423;0.445;0.449;0.543;0.547;0.569;0.573;0.677;0.681;0.706;0.710;0.886;0.890;0.900;0.904;1"
                            values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                          />
                        </g>
                        <g>
                          <use href="#ship-small" />
                          <animateMotion dur="64s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-21s">
                            <mpath href="#ship-path-down" />
                          </animateMotion>
                          <animate
                            attributeName="opacity"
                            dur="64s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            begin="-21s"
                            keyTimes="0;0.012;0.016;0.024;0.028;0.065;0.069;0.094;0.098;0.179;0.183;0.204;0.208;0.339;0.343;0.363;0.367;0.419;0.423;0.445;0.449;0.543;0.547;0.569;0.573;0.677;0.681;0.706;0.710;0.886;0.890;0.900;0.904;1"
                            values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                          />
                        </g>
                        <g>
                          <use href="#ship-medium" />
                          <animateMotion dur="72s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-18s">
                            <mpath href="#ship-path-up" />
                          </animateMotion>
                          <animate
                            attributeName="opacity"
                            dur="72s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            begin="-18s"
                            keyTimes="0;0.084;0.088;0.114;0.118;0.278;0.282;0.323;0.327;0.415;0.419;0.457;0.461;0.539;0.543;0.581;0.585;0.621;0.625;0.661;0.665;0.780;0.784;0.821;0.825;0.890;0.894;0.935;0.939;0.960;0.964;0.988;0.992;1"
                            values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                          />
                        </g>
                      </g>
                    </svg>
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
                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
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
