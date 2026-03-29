import {
  Activity,
  AppWindow,
  BrainCircuit,
  Database,
  HardDrive,
  Network,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
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
import { techStackCategories } from "../content/techStackDetailContent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface TechStackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categoryIconMap = {
  core: Waypoints,
  raster: HardDrive,
  frontend: AppWindow,
  realtime: Activity,
  apis: Network,
  analysis: BrainCircuit,
  infrastructure: Network,
  devsecops: ShieldCheck,
  databases: Database,
  warehouse: HardDrive,
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

export function TechStackDialog({ open, onOpenChange }: TechStackDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                      decoding="async"
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
}
