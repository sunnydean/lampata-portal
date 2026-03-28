import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { audienceFeatureImage, whoWeArePillars } from "../content/siteContent";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionIntro } from "./SectionIntro";

export function AudienceSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="who-we-are" ref={ref} className="bg-[#f5f7fa] px-6 py-[4.5rem] md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:grid-rows-[auto_1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="order-2 hidden h-full md:block lg:order-none lg:col-start-1 lg:row-span-2"
          >
            <div className="panel-surface h-full overflow-hidden rounded-[0.75rem]">
              <div className="grid h-full lg:grid-rows-[0.62fr_0.38fr]">
                <ImageWithFallback
                  src={audienceFeatureImage}
                  alt="Earth observation imagery from space"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-full lg:min-h-0"
                />

                <div className="flex h-full flex-col border-t border-[#00458b]/10 bg-white px-6 py-6 sm:px-7">
                  <p className="section-eyebrow mb-3">How we work</p>
                  <h3 className="font-display max-w-lg text-[2rem] leading-[0.96] tracking-[-0.06em] text-[#00458b] sm:text-[2.45rem]">
                    Open Source work that leaves your team with the IP.
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#00458b]/76">
                  We are a research organisation that publishes in open journals and conferences, contributes to open source software, and shares our work through public talks and workshops.
                  </p>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#00458b]/76">
                  We use our research and engineering expertise to help build custom specialised software for our clients without zero vendor lock-in.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
            <SectionIntro
              eyebrow="About us"
              title="Helping you build capability that lasts."
              align="right"
              className="mb-0"
            />
          </div>

          <div className="order-3 grid gap-4 sm:grid-cols-2 lg:order-none lg:col-start-2 lg:row-start-2 lg:h-full lg:grid-cols-2 lg:grid-rows-2 lg:auto-rows-fr">
            {whoWeArePillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="brand-gold-border-top panel-surface flex h-full flex-col rounded-[0.75rem] border-t-4 p-5 sm:p-6"
              >
                <p className="section-eyebrow mb-4 hidden md:block">{pillar.title}</p>
                <h3 className="font-display text-[1.42rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:text-[1.55rem]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#00458b]/76 sm:mt-4 sm:leading-7">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
