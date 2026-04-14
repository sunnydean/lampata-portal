import { ArrowUpRight } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import airflowLogo from "../../assets/logos/tech/airflow.svg";
import awsLogo from "../../assets/logos/tech/aws.png";
import azureLogo from "../../assets/logos/tech/azure.png";
import daskLogo from "../../assets/logos/tech/dask.png";
import duckdbLogo from "../../assets/logos/tech/duckdb.png";
import geopandasLogo from "../../assets/logos/tech/geopandas.png";
import jupyterhubLogo from "../../assets/logos/tech/jupyterhub.png";
import kubernetesLogo from "../../assets/logos/tech/kubernetes.png";
import leafletLogo from "../../assets/logos/tech/leaflet.png";
import pangeoLogo from "../../assets/logos/tech/pangeo-logo.png";
import postgisLogo from "../../assets/logos/tech/postgis.png";
import pythonLogo from "../../assets/logos/tech/python.png";
import scikitlearnLogo from "../../assets/logos/tech/scikitlearn.svg";
import torchgeoLogo from "../../assets/logos/tech/torchgeo.png";
import xarrayLogo from "../../assets/logos/tech/xarray.png";
import {
  techStackApproach,
  techStackFocus,
  techStackSection,
} from "../content/homeContent";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

const TechStackDialog = lazy(() =>
  import("./TechStackDialog").then((module) => ({ default: module.TechStackDialog })),
);

const techLogoMap = {
  airflow: airflowLogo,
  aws: awsLogo,
  azure: azureLogo,
  dask: daskLogo,
  duckdb: duckdbLogo,
  geopandas: geopandasLogo,
  jupyterhub: jupyterhubLogo,
  kubernetes: kubernetesLogo,
  leaflet: leafletLogo,
  pangeo: pangeoLogo,
  postgis: postgisLogo,
  python: pythonLogo,
  scikitlearn: scikitlearnLogo,
  torchgeo: torchgeoLogo,
  xarray: xarrayLogo,
} as const;

const techLogoClassMap = {
  airflow: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  aws: "max-h-[4.35rem] sm:max-h-[5rem]",
  azure: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  dask: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  duckdb: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  geopandas: "max-h-[12rem] sm:max-h-[14rem]",
  jupyterhub: "max-h-[6.8rem] sm:max-h-[8rem]",
  kubernetes: "max-h-[6.7rem] sm:max-h-[7.85rem]",
  leaflet: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  pangeo: "max-h-[8.75rem] sm:max-h-[10.15rem]",
  postgis: "max-h-[5.3rem] sm:max-h-[6.4rem]",
  python: "max-h-[5.1rem] sm:max-h-[6.2rem]",
  scikitlearn: "max-h-[6.15rem] sm:max-h-[7.3rem]",
  torchgeo: "max-h-[7.2rem] sm:max-h-[8.4rem]",
  xarray: "max-h-[6.8rem] sm:max-h-[8rem]",
} as const;

export function TechStackSection() {
  const [activeMobileStep, setActiveMobileStep] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogRequested, setDialogRequested] = useState(false);
  const mobileVisibleTechCount = Math.ceil(techStackFocus.length / 2);
  const activeApproachStep = activeMobileStep
    ? techStackApproach.steps.find((step) => step.stackLabel === activeMobileStep) ?? null
    : null;

  const renderTechStackCta = () => (
    <>
      <button
        type="button"
        onClick={() => {
          setDialogRequested(true);
          setDialogOpen(true);
        }}
        className="group flex w-full items-center justify-between gap-4 rounded-[1rem] border border-[var(--brand-gold-strong)]/60 bg-[linear-gradient(135deg,rgba(255,195,41,0.2),rgba(255,255,255,0.98)_54%,rgba(0,69,139,0.08))] px-4 py-3.5 text-left shadow-[0_22px_54px_-34px_rgba(0,69,139,0.42)] ring-1 ring-transparent transition-all duration-250 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#00458b]/32 hover:bg-[linear-gradient(135deg,rgba(255,195,41,0.34),rgba(255,255,255,0.98)_46%,rgba(0,69,139,0.14))] hover:shadow-[0_34px_80px_-34px_rgba(0,69,139,0.5)] hover:ring-[#00458b]/10 sm:px-6 sm:py-5"
      >
        <div className="min-w-0">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]/62 transition-colors duration-200 group-hover:text-[#00458b]/82">
            Full stack view
          </p>
          <p className="mt-1 font-display text-[1.08rem] leading-tight tracking-[-0.05em] text-[#00458b] transition-colors duration-200 group-hover:text-[#00376f] sm:text-[1.45rem]">
            {techStackSection.ctaLabel}
          </p>
          <p className="mt-1 text-[0.88rem] leading-5 text-[#00458b]/74 transition-colors duration-200 group-hover:text-[#00458b]/86 sm:max-w-2xl sm:text-sm sm:leading-6">
            Open the full Lampata stack across data platforms, analytics, APIs,
            applications, and infrastructure.
          </p>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00458b] text-white shadow-[0_18px_36px_-24px_rgba(0,69,139,0.55)] transition-all duration-250 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:bg-[var(--brand-gold-strong)] group-hover:text-[#00458b] group-hover:shadow-[0_26px_44px_-20px_rgba(245,215,4,0.72)] sm:h-12 sm:w-12">
          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </button>

      {dialogRequested ? (
        <Suspense fallback={null}>
          <TechStackDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </Suspense>
      ) : null}
    </>
  );

  const renderApproachCard = () => (
    <div className="rounded-[1rem] border border-[#00458b]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,251,255,0.94))] p-4 sm:p-5">
      <h3 className="font-display text-[1.18rem] leading-[1.02] tracking-[-0.05em] text-[#00458b] sm:text-[1.32rem]">
        {techStackApproach.title}
      </h3>
      <p className="mt-1.5 max-w-2xl text-[0.92rem] leading-6 text-[#00458b]/74">
        {techStackApproach.description}
      </p>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {techStackApproach.steps.map((step, index) => {
          const isGold = index % 2 === 0;
          const isLargeLayer =
            step.stackLabel === "APIs" ||
            step.stackLabel === "AI & Geospatial Analytics" ||
            step.stackLabel === "Infrastructure & Platform";
          const isActive = activeMobileStep === step.stackLabel;
          const basePillClassName =
            "w-full rounded-[0.85rem] border-2 px-3.5 py-2.5 text-center font-display text-[0.88rem] leading-tight tracking-[-0.04em] text-[#00458b] shadow-[0_10px_24px_-18px_rgba(0,69,139,0.22)] transition duration-200 sm:text-[0.94rem]";
          const toneClassName = isGold
            ? "border-[var(--brand-gold-strong)]"
            : "border-[#00458b]";

          return (
            <div
              key={step.stackLabel}
              className={`group relative ${isLargeLayer ? "sm:col-span-2" : ""}`}
            >
              <div
                className={`${basePillClassName} ${toneClassName} hidden cursor-default md:block md:hover:-translate-y-1 md:hover:bg-[linear-gradient(135deg,rgba(255,195,41,0.18),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] md:hover:shadow-[0_24px_52px_-24px_rgba(0,69,139,0.38)]`}
              >
                {step.stackLabel}
              </div>

              <button
                type="button"
                aria-expanded={isActive}
                onClick={() =>
                  setActiveMobileStep((current) =>
                    current === step.stackLabel ? null : step.stackLabel,
                  )
                }
                className={`${basePillClassName} ${toneClassName} md:hidden ${
                  isActive
                    ? "bg-[linear-gradient(135deg,rgba(255,195,41,0.18),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] shadow-[0_24px_52px_-24px_rgba(0,69,139,0.38)]"
                    : ""
                }`}
              >
                {step.stackLabel}
              </button>

              <div className="pointer-events-none absolute left-1/2 top-0 z-20 hidden w-[min(17rem,calc(100vw-4rem))] -translate-x-1/2 -translate-y-[calc(100%+0.55rem)] opacity-0 transition duration-150 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+0.75rem)] md:block">
                <div className="rounded-[0.85rem] border border-[#00458b]/14 bg-white px-4 py-3 text-left shadow-[0_24px_64px_-28px_rgba(0,69,139,0.32)]">
                  <p className="font-semibold text-[#00458b]">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#00458b]/78">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {activeApproachStep ? (
        <div className="mt-3 rounded-[0.85rem] border border-[#00458b]/12 bg-white px-4 py-3 text-left shadow-[0_18px_48px_-28px_rgba(0,69,139,0.28)] md:hidden">
          <p className="font-semibold text-[#00458b]">{activeApproachStep.title}</p>
          <p className="mt-1 text-sm leading-6 text-[#00458b]/78">
            {activeApproachStep.description}
          </p>
        </div>
      ) : null}
    </div>
  );

  return (
    <section id="tech-stack" className="bg-white px-6 py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start xl:grid-cols-[1.08fr_0.92fr]">
          <div className="order-1 hidden lg:flex lg:flex-col lg:gap-6">
            <Reveal delay={80}>
              <SectionIntro
                eyebrow={techStackSection.eyebrow}
                title={techStackSection.title}
                description={techStackSection.description}
                align="left"
                className="mb-0"
              />
            </Reveal>

            <Reveal delay={40}>
              {renderApproachCard()}
            </Reveal>

            <Reveal delay={20}>
              {renderTechStackCta()}
            </Reveal>
          </div>

          <Reveal delay={80} className="order-1 lg:hidden">
            <SectionIntro
              eyebrow={techStackSection.eyebrow}
              title={techStackSection.title}
              description={techStackSection.description}
              align="left"
              className="mb-0"
            />
          </Reveal>

          <Reveal
            className="order-2 lg:col-start-2 lg:row-start-1 lg:pl-8 lg:pt-20 xl:pt-24"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-5 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-7 xl:grid-cols-3">
              {techStackFocus.map((tech, index) => (
                <a
                  key={tech.id}
                  href={tech.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={tech.label}
                  className={`group min-w-0 items-center justify-center ${index >= mobileVisibleTechCount ? "hidden md:inline-flex" : "inline-flex"}`}
                >
                  <div className="flex h-[6.25rem] items-center justify-center sm:h-[7.15rem] lg:h-[8.45rem]">
                    <img
                      src={techLogoMap[tech.id]}
                      alt={`${tech.label} logo`}
                      loading="lazy"
                      decoding="async"
                      className={`w-auto max-w-full object-contain transition duration-200 group-hover:-translate-y-0.5 ${techLogoClassMap[tech.id]}`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={40} className="order-3 lg:hidden">
            {renderTechStackCta()}
          </Reveal>

          <Reveal delay={20} className="order-4 lg:hidden">
            {renderApproachCard()}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
