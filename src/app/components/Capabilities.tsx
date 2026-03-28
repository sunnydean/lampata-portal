import { motion, useInView } from "motion/react";
import { Cloud, GitBranch, Satellite } from "lucide-react";
import { useRef } from "react";
import { capabilityPillars } from "../content/siteContent";
import { SectionIntro } from "./SectionIntro";

const iconMap = {
  sensing: Satellite,
  infrastructure: Cloud,
  delivery: GitBranch,
};

export function Capabilities() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="capabilities" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Capabilities"
          title="Capabilities built for research-heavy, operationally important geo-spatial work."
          description="Lampata focuses on three core service pillars that repeatedly matter in geo-spatial AI/ML work, from analysis and engineering to delivery and handoff."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {capabilityPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="brand-gold-border-top flex flex-col rounded-[0.75rem] border border-[#00458b]/10 border-t-4 bg-white p-6 shadow-[0_22px_50px_-42px_rgba(0,69,139,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="brand-gold-fill flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#00458b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="section-eyebrow">{pillar.title}</p>
                </div>

                <h3 className="font-display mt-5 text-2xl leading-tight tracking-[-0.06em] text-[#00458b]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#00458b]/76">{pillar.description}</p>

                <div className="mt-5 grow space-y-2">
                  {pillar.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="rounded-[3px] border border-[#00458b]/10 bg-[#00458b]/[0.04] px-3 py-2 font-mono text-[0.72rem] leading-5 tracking-[0.04em] text-[#00458b]/70"
                    >
                      {capability}
                    </div>
                  ))}
                </div>

                <p className="brand-gold-border-left mt-6 border-l-4 pl-3 text-sm font-semibold leading-7 text-[#00458b]/84">
                  {pillar.outcome}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
