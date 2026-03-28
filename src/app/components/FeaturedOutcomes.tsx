import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { proofStories } from "../content/siteContent";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionIntro } from "./SectionIntro";

export function FeaturedOutcomes() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="featured-outcomes" ref={ref} className="bg-[#f5f7fa] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Featured outcomes"
          title="Representative geo-spatial engagements with clearer visual proof."
          description="Image-led examples of how Lampata applies geo-spatial research and engineering to operational questions across earth observation, urban data, and sustainability analysis."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {proofStories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="brand-gold-border-top group overflow-hidden rounded-[0.75rem] border border-[#00458b]/10 border-t-4 bg-white shadow-[0_26px_60px_-46px_rgba(0,69,139,0.22)]"
            >
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="h-56 w-full scale-[1.03] object-cover transition-transform duration-500 group-hover:scale-100 md:h-64"
                />
              </div>

              <div className="p-6">
                <p className="section-eyebrow mb-3">{story.context}</p>
                <h3 className="font-display text-2xl leading-tight tracking-[-0.06em] text-[#00458b]">
                  {story.title}
                </h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]/55">
                      Challenge
                    </p>
                    <p className="mt-1.5 text-sm leading-7 text-[#00458b]/70">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]/55">
                      Approach
                    </p>
                    <p className="mt-1.5 text-sm leading-7 text-[#00458b]/70">{story.approach}</p>
                  </div>
                  <div className="brand-gold-border-left bg-[var(--brand-gold-soft)] border-l-4 px-4 py-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#00458b]">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-7 text-[#00458b]/84">{story.outcome}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {story.tags.map((tag) => (
                    <span key={tag} className="tag-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
