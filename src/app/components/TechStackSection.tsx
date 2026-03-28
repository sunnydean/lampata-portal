import { motion, useInView } from "motion/react";
import {
  Activity,
  AppWindow,
  ArrowUpRight,
  BrainCircuit,
  Database,
  HardDrive,
  Network,
  ServerCog,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import { useRef, useState } from "react";
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
import azureAdministratorAssociateCertification from "../../assets/logos/certifications/azure-administrator-associate.png";
import azureDeveloperAssociateCertification from "../../assets/logos/certifications/azure-developer-associate.png";
import azureFundamentalsCertification from "../../assets/logos/certifications/azure-fundamentals.png";
import azureNetworkEngineerAssociateCertification from "../../assets/logos/certifications/azure-network-engineer-associate.png";
import azureSecurityEngineerAssociateCertification from "../../assets/logos/certifications/azure-security-engineer-associate.png";
import azureSolutionsArchitectExpertCertification from "../../assets/logos/certifications/azure-solutions-architect-expert.png";
import cmmiLevel3Certification from "../../assets/logos/certifications/cmmi-level-3.png";
import cybersecurityArchitectExpertCertification from "../../assets/logos/certifications/cybersecurity-architect-expert.png";
import devopsEngineerExpertCertification from "../../assets/logos/certifications/devops-engineer-expert.png";
import identityAndAccessAdministratorAssociateCertification from "../../assets/logos/certifications/identity-and-access-administrator-associate.png";
import kubernetesAdministratorCertification from "../../assets/logos/certifications/kubernetes-administrator.png";
import kubernetesApplicationDeveloperCertification from "../../assets/logos/certifications/kubernetes-application-developer.png";
import kubernetesSecuritySpecialistCertification from "../../assets/logos/certifications/kubernetes-security-specialist.png";
import prismaCloudProfessionalCertification from "../../assets/logos/certifications/prisma-cloud-professional.png";
import redhatCertifiedCertification from "../../assets/logos/certifications/redhat-certified.png";
import securityComplianceIdentityFundamentalsCertification from "../../assets/logos/certifications/security-compliance-identity-fundamentals.png";
import securityOperationsAnalystAssociateCertification from "../../assets/logos/certifications/security-operations-analyst-associate.png";
import {
  techStackApproach,
  techStackCategories,
  techStackFocus,
  techStackSection,
} from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const categoryIconMap = {
  core: Waypoints,
  raster: HardDrive,
  frontend: AppWindow,
  realtime: Activity,
  apis: ServerCog,
  analysis: BrainCircuit,
  infrastructure: Network,
  devsecops: ShieldCheck,
  databases: Database,
  warehouse: HardDrive,
} as const;

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

const certificationLogos = [
  {
    label: "Certified Kubernetes Administrator",
    href: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
    src: kubernetesAdministratorCertification,
  },
  {
    label: "Certified Kubernetes Application Developer",
    href: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
    src: kubernetesApplicationDeveloperCertification,
  },
  {
    label: "Certified Kubernetes Security Specialist",
    href: "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/",
    src: kubernetesSecuritySpecialistCertification,
  },
  {
    label: "Microsoft Certified Azure Fundamentals",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    src: azureFundamentalsCertification,
  },
  {
    label: "Microsoft Certified Azure Developer Associate",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/",
    src: azureDeveloperAssociateCertification,
  },
  {
    label: "Microsoft Certified Azure Administrator Associate",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
    src: azureAdministratorAssociateCertification,
  },
  {
    label: "Microsoft Certified Azure Security Engineer Associate",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/",
    src: azureSecurityEngineerAssociateCertification,
  },
  {
    label: "Microsoft Certified Azure Network Engineer Associate",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/",
    src: azureNetworkEngineerAssociateCertification,
  },
  {
    label: "Microsoft Certified Cybersecurity Architect Expert",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/cybersecurity-architect-expert/",
    src: cybersecurityArchitectExpertCertification,
  },
  {
    label: "Microsoft Certified Azure Solutions Architect Expert",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/",
    src: azureSolutionsArchitectExpertCertification,
  },
  {
    label: "Microsoft Certified Security, Compliance, and Identity Fundamentals",
    href: "https://learn.microsoft.com/en-us/certifications/exams/sc-900/",
    src: securityComplianceIdentityFundamentalsCertification,
  },
  {
    label: "Microsoft Certified Security Operations Analyst Associate",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-200",
    src: securityOperationsAnalystAssociateCertification,
  },
  {
    label: "Microsoft Certified Identity and Access Administrator Associate",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/",
    src: identityAndAccessAdministratorAssociateCertification,
  },
  {
    label: "Microsoft Certified DevOps Engineer Expert",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/",
    src: devopsEngineerExpertCertification,
  },
  {
    label: "Prisma Cloud Professional",
    href: "https://www.paloaltonetworks.com/services/education/prisma-certified-cloud-security-engineer",
    src: prismaCloudProfessionalCertification,
  },
  {
    label: "CMMI Level 3",
    href: "https://www.isaca.org/enterprise/cmmi-performance-solutions",
    src: cmmiLevel3Certification,
  },
  {
    label: "Red Hat Certified",
    href: "https://www.redhat.com/en/services/certification/certification-central",
    src: redhatCertifiedCertification,
  },
] as const;

export function TechStackSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [activeMobileStep, setActiveMobileStep] = useState<string | null>(null);
  const mobileVisibleTechCount = Math.ceil(techStackFocus.length / 2);
  const activeApproachStep = activeMobileStep
    ? techStackApproach.steps.find((step) => step.stackLabel === activeMobileStep) ?? null
    : null;

  const renderTechStackCta = () => (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
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
      </DialogTrigger>

      <DialogContent className="max-h-[calc(100vh-1rem)] max-w-[calc(100%-1.5rem)] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-[1rem] border-[#00458b]/10 p-0 sm:max-h-[90vh] sm:max-w-6xl">
        <div className="border-b border-[#00458b]/10 px-4 py-4 sm:px-8 sm:py-6">
          <DialogHeader className="text-left">
            <p className="section-eyebrow mb-3 w-fit sm:mb-4">Lampata - Tech Stack</p>
            <DialogTitle className="font-display text-[1.35rem] leading-[1.02] tracking-[-0.06em] text-[#00458b] sm:text-[2.4rem]">
              Open geo-spatial delivery across analytics, APIs, applications, and infrastructure
            </DialogTitle>
            <DialogDescription className="max-w-4xl text-[0.82rem] leading-5 text-[#00458b]/72 sm:text-sm sm:leading-7">
              The stack below brings together the technologies Lampata uses across open
              geo-spatial analysis, cloud-native earth observation, APIs, applications,
              and infrastructure.
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="min-h-0">
          <div className="grid gap-3 px-4 py-4 pr-6 sm:grid-cols-2 sm:gap-4 sm:px-8 sm:py-6 sm:pr-10">
            {techStackCategories.map((category) => {
              const Icon = categoryIconMap[category.id];

              return (
                <article
                  key={category.title}
                  className="rounded-[0.9rem] border border-[#00458b]/10 bg-[#f8fbff] p-4 sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="brand-gold-fill flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#00458b]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#00458b]/74">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="tag-mono text-[#00458b]/82">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}

            <section className="sm:col-span-2 rounded-[0.9rem] border border-[#00458b]/10 bg-[#fbfdff] p-4 sm:p-5">
              <div className="max-w-2xl">
                <p className="section-eyebrow mb-3 w-fit">Certifications</p>
                <h3 className="font-display text-[1.25rem] leading-tight tracking-[-0.05em] text-[#00458b]">
                  Platform, cloud, and security certifications across our delivery stack
                </h3>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {certificationLogos.map((certification) => (
                  <a
                    key={certification.label}
                    href={certification.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={certification.label}
                    className="group flex min-h-[6.4rem] items-center justify-center rounded-[0.85rem] border border-[#00458b]/8 bg-white p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-[#00458b]/16 hover:shadow-[0_20px_44px_-30px_rgba(0,69,139,0.34)] sm:min-h-[7.25rem] sm:p-[1.125rem]"
                  >
                    <img
                      src={certification.src}
                      alt={certification.label}
                      loading="lazy"
                      className="max-h-[4.7rem] w-auto max-w-full object-contain transition duration-200 group-hover:scale-[1.02] sm:max-h-[5.4rem]"
                    />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
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
    <section id="tech-stack" ref={ref} className="bg-white px-6 py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start xl:grid-cols-[1.08fr_0.92fr]">
          <div className="order-1 hidden lg:flex lg:flex-col lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <SectionIntro
                eyebrow={techStackSection.eyebrow}
                title={techStackSection.title}
                description={techStackSection.description}
                align="left"
                className="mb-0"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              {renderApproachCard()}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.02 }}
            >
              {renderTechStackCta()}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="order-1 lg:hidden"
          >
            <SectionIntro
              eyebrow={techStackSection.eyebrow}
              title={techStackSection.title}
              description={techStackSection.description}
              align="left"
              className="mb-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
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
                      className={`w-auto max-w-full object-contain transition duration-200 group-hover:-translate-y-0.5 ${techLogoClassMap[tech.id]}`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="order-3 lg:hidden"
          >
            {renderTechStackCta()}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.02 }}
            className="order-4 lg:hidden"
          >
            {renderApproachCard()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
