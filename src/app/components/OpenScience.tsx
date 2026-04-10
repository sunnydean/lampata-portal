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
                    {/* Animated ships — path11762 converted from Inkscape coords */}
                    <svg
                      viewBox="0 0 669.6 378.352075"
                      preserveAspectRatio="xMidYMid slice"
                      className="absolute inset-0 h-full w-full pointer-events-none"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="rp-down"
                          d="M 286.089 378.472 L 286.089 364.317 L 280.874 330.791 L 280.874 319.615 L 277.894 257.033 L 277.894 248.838 L 289.069 154.965 L 292.050 147.515 L 318.870 113.244 L 327.811 111.754 L 396.353 93.873 L 405.293 91.638 L 477.561 64.072 L 487.991 60.347 L 610.175 42.466 L 609.430 40.976 L 655.621 0.000 L 651.896 -0.745"
                        />
                        <path
                          id="rp-up"
                          d="M 651.896 -0.745 L 655.621 0.000 L 609.430 40.976 L 610.175 42.466 L 487.991 60.347 L 477.561 64.072 L 405.293 91.638 L 396.353 93.873 L 327.811 111.754 L 318.870 113.244 L 292.050 147.515 L 289.069 154.965 L 277.894 248.838 L 277.894 257.033 L 280.874 319.615 L 280.874 330.791 L 286.089 364.317 L 286.089 378.472"
                        />
                      </defs>

                      {/*
                        Collision-free strategy:
                        - All 6 downstream ships share dur=48s, begins spaced 8s apart → they never catch each other.
                        - All 4 upstream ships share dur=58s, begins spaced ~14.5s apart → same guarantee.
                        - Downstream ships wobble in the -2.5 band (port), upstream in the +2.5 band (starboard).
                        - Wobble range ±0.35, so inner ship edges stay at least -2.15+1.5=-0.65 and +2.15-1.5=+0.65
                          from centreline when passing → ~1.3 SVG unit clear gap between passing hulls.
                      */}

                      {/* Ship 1 — downstream, large */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,-2.5; 0,-2.85; 0,-2.5; 0,-2.15; 0,-2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="17s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -4.1 0 L -3.4 -1.5 L 1.2 -1.5 L 3.4 -0.75 L 4.1 0 L 3.4 0.75 L 1.2 1.5 L -3.4 1.5 Z" fill="#2e4057" />
                          <rect x="-1.5" y="-0.8" width="2.2" height="1.6" rx="0.3" fill="#3d5a7a" />
                        </g>
                        <animateMotion dur="48s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="0s">
                          <mpath href="#rp-down" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="48s" repeatCount="indefinite" calcMode="linear" begin="0s"
                          keyTimes="0;0.012;0.020;0.024;0.032;0.065;0.073;0.094;0.102;0.179;0.187;0.204;0.212;0.339;0.347;0.363;0.371;0.419;0.427;0.445;0.453;0.543;0.551;0.569;0.577;0.677;0.685;0.706;0.714;0.886;0.894;0.900;0.908;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 2 — downstream, small */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,-2.5; 0,-2.15; 0,-2.5; 0,-2.85; 0,-2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="13s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3 0 L -2.6 -1.1 L 0.75 -1.1 L 2.6 -0.6 L 3 0 L 2.6 0.6 L 0.75 1.1 L -2.6 1.1 Z" fill="#1e3a5f" />
                          <rect x="-1.1" y="-0.6" width="1.65" height="1.2" rx="0.2" fill="#2d5280" />
                        </g>
                        <animateMotion dur="48s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-8s">
                          <mpath href="#rp-down" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="48s" repeatCount="indefinite" calcMode="linear" begin="-8s"
                          keyTimes="0;0.012;0.020;0.024;0.032;0.065;0.073;0.094;0.102;0.179;0.187;0.204;0.212;0.339;0.347;0.363;0.371;0.419;0.427;0.445;0.453;0.543;0.551;0.569;0.577;0.677;0.685;0.706;0.714;0.886;0.894;0.900;0.908;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 3 — downstream, medium */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,-2.5; 0,-2.8; 0,-2.5; 0,-2.2; 0,-2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="21s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3.75 0 L -3.15 -1.35 L 1.05 -1.35 L 3.15 -0.7 L 3.75 0 L 3.15 0.7 L 1.05 1.35 L -3.15 1.35 Z" fill="#2e4057" />
                          <rect x="-1.35" y="-0.75" width="1.95" height="1.5" rx="0.25" fill="#3d5a7a" />
                        </g>
                        <animateMotion dur="48s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-16s">
                          <mpath href="#rp-down" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="48s" repeatCount="indefinite" calcMode="linear" begin="-16s"
                          keyTimes="0;0.012;0.020;0.024;0.032;0.065;0.073;0.094;0.102;0.179;0.187;0.204;0.212;0.339;0.347;0.363;0.371;0.419;0.427;0.445;0.453;0.543;0.551;0.569;0.577;0.677;0.685;0.706;0.714;0.886;0.894;0.900;0.908;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 4 — downstream, large */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,-2.5; 0,-2.2; 0,-2.5; 0,-2.85; 0,-2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="19s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -4.1 0 L -3.4 -1.5 L 1.2 -1.5 L 3.4 -0.75 L 4.1 0 L 3.4 0.75 L 1.2 1.5 L -3.4 1.5 Z" fill="#2e4057" />
                          <rect x="-1.5" y="-0.8" width="2.2" height="1.6" rx="0.3" fill="#3d5a7a" />
                        </g>
                        <animateMotion dur="48s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-24s">
                          <mpath href="#rp-down" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="48s" repeatCount="indefinite" calcMode="linear" begin="-24s"
                          keyTimes="0;0.012;0.020;0.024;0.032;0.065;0.073;0.094;0.102;0.179;0.187;0.204;0.212;0.339;0.347;0.363;0.371;0.419;0.427;0.445;0.453;0.543;0.551;0.569;0.577;0.677;0.685;0.706;0.714;0.886;0.894;0.900;0.908;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 5 — downstream, small */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,-2.5; 0,-2.85; 0,-2.5; 0,-2.15; 0,-2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="15s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3 0 L -2.6 -1.1 L 0.75 -1.1 L 2.6 -0.6 L 3 0 L 2.6 0.6 L 0.75 1.1 L -2.6 1.1 Z" fill="#1e3a5f" />
                          <rect x="-1.1" y="-0.6" width="1.65" height="1.2" rx="0.2" fill="#2d5280" />
                        </g>
                        <animateMotion dur="48s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-32s">
                          <mpath href="#rp-down" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="48s" repeatCount="indefinite" calcMode="linear" begin="-32s"
                          keyTimes="0;0.012;0.020;0.024;0.032;0.065;0.073;0.094;0.102;0.179;0.187;0.204;0.212;0.339;0.347;0.363;0.371;0.419;0.427;0.445;0.453;0.543;0.551;0.569;0.577;0.677;0.685;0.706;0.714;0.886;0.894;0.900;0.908;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 6 — downstream, medium */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,-2.5; 0,-2.2; 0,-2.5; 0,-2.8; 0,-2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="23s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3.75 0 L -3.15 -1.35 L 1.05 -1.35 L 3.15 -0.7 L 3.75 0 L 3.15 0.7 L 1.05 1.35 L -3.15 1.35 Z" fill="#263b52" />
                          <rect x="-1.35" y="-0.75" width="1.95" height="1.5" rx="0.25" fill="#365472" />
                        </g>
                        <animateMotion dur="48s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-40s">
                          <mpath href="#rp-down" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="48s" repeatCount="indefinite" calcMode="linear" begin="-40s"
                          keyTimes="0;0.012;0.020;0.024;0.032;0.065;0.073;0.094;0.102;0.179;0.187;0.204;0.212;0.339;0.347;0.363;0.371;0.419;0.427;0.445;0.453;0.543;0.551;0.569;0.577;0.677;0.685;0.706;0.714;0.886;0.894;0.900;0.908;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 7 — upstream, medium */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,2.5; 0,2.85; 0,2.5; 0,2.15; 0,2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="18s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3.75 0 L -3.15 -1.35 L 1.05 -1.35 L 3.15 -0.7 L 3.75 0 L 3.15 0.7 L 1.05 1.35 L -3.15 1.35 Z" fill="#2e4057" />
                          <rect x="-1.35" y="-0.75" width="1.95" height="1.5" rx="0.25" fill="#3d5a7a" />
                        </g>
                        <animateMotion dur="58s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="0s">
                          <mpath href="#rp-up" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="58s" repeatCount="indefinite" calcMode="linear" begin="0s"
                          keyTimes="0;0.084;0.092;0.114;0.122;0.278;0.286;0.323;0.331;0.415;0.423;0.457;0.465;0.539;0.547;0.581;0.589;0.621;0.629;0.661;0.669;0.780;0.788;0.821;0.829;0.890;0.898;0.935;0.943;0.960;0.968;0.988;0.996;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 8 — upstream, small */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,2.5; 0,2.15; 0,2.5; 0,2.85; 0,2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="14s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3 0 L -2.6 -1.1 L 0.75 -1.1 L 2.6 -0.6 L 3 0 L 2.6 0.6 L 0.75 1.1 L -2.6 1.1 Z" fill="#1e3a5f" />
                          <rect x="-1.1" y="-0.6" width="1.65" height="1.2" rx="0.2" fill="#2d5280" />
                        </g>
                        <animateMotion dur="58s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-14s">
                          <mpath href="#rp-up" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="58s" repeatCount="indefinite" calcMode="linear" begin="-14s"
                          keyTimes="0;0.084;0.092;0.114;0.122;0.278;0.286;0.323;0.331;0.415;0.423;0.457;0.465;0.539;0.547;0.581;0.589;0.621;0.629;0.661;0.669;0.780;0.788;0.821;0.829;0.890;0.898;0.935;0.943;0.960;0.968;0.988;0.996;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 9 — upstream, large */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,2.5; 0,2.8; 0,2.5; 0,2.2; 0,2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="22s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -4.1 0 L -3.4 -1.5 L 1.2 -1.5 L 3.4 -0.75 L 4.1 0 L 3.4 0.75 L 1.2 1.5 L -3.4 1.5 Z" fill="#2e4057" />
                          <rect x="-1.5" y="-0.8" width="2.2" height="1.6" rx="0.3" fill="#3d5a7a" />
                        </g>
                        <animateMotion dur="58s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-29s">
                          <mpath href="#rp-up" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="58s" repeatCount="indefinite" calcMode="linear" begin="-29s"
                          keyTimes="0;0.084;0.092;0.114;0.122;0.278;0.286;0.323;0.331;0.415;0.423;0.457;0.465;0.539;0.547;0.581;0.589;0.621;0.629;0.661;0.669;0.780;0.788;0.821;0.829;0.890;0.898;0.935;0.943;0.960;0.968;0.988;0.996;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
                      </g>

                      {/* Ship 10 — upstream, medium */}
                      <g>
                        <g>
                          <animateTransform attributeName="transform" type="translate"
                            values="0,2.5; 0,2.2; 0,2.5; 0,2.8; 0,2.5"
                            keyTimes="0;0.25;0.5;0.75;1" dur="20s" repeatCount="indefinite"
                            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
                          <path d="M -3.75 0 L -3.15 -1.35 L 1.05 -1.35 L 3.15 -0.7 L 3.75 0 L 3.15 0.7 L 1.05 1.35 L -3.15 1.35 Z" fill="#263b52" />
                          <rect x="-1.35" y="-0.75" width="1.95" height="1.5" rx="0.25" fill="#365472" />
                        </g>
                        <animateMotion dur="58s" repeatCount="indefinite" rotate="auto" calcMode="paced" begin="-43s">
                          <mpath href="#rp-up" />
                        </animateMotion>
                        <animate attributeName="opacity" dur="58s" repeatCount="indefinite" calcMode="linear" begin="-43s"
                          keyTimes="0;0.084;0.092;0.114;0.122;0.278;0.286;0.323;0.331;0.415;0.423;0.457;0.465;0.539;0.547;0.581;0.589;0.621;0.629;0.661;0.669;0.780;0.788;0.821;0.829;0.890;0.898;0.935;0.943;0.960;0.968;0.988;0.996;1"
                          values="1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1;0;0;1;1"
                        />
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
