import { motion, useInView } from "motion/react";
import { ArrowUpRight, Building2, FlaskConical, Landmark, Leaf } from "lucide-react";
import { useRef } from "react";
import { audienceSegments, openScienceItems, publications } from "../content/siteContent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const audienceIconMap = {
  agency: Landmark,
  research: FlaskConical,
  sustainability: Leaf,
  enterprise: Building2,
};

export function OpenScience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const researchItem = openScienceItems.find((item) => item.icon === "research");
  const highlightedPublications = [
    ...publications.filter((publication) => !publication.title.toLowerCase().includes("earthcode")),
    ...publications.filter((publication) => publication.title.toLowerCase().includes("earthcode")),
  ].slice(0, 4);

  return (
    <section id="open-science" ref={ref} className="bg-white px-6 py-[4.5rem] md:py-24">
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
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 overflow-hidden rounded-[1rem] border border-[#00458b]/10 bg-[linear-gradient(135deg,rgba(245,215,4,0.2),rgba(255,255,255,0.98)_48%,rgba(0,69,139,0.06))] shadow-[0_32px_70px_-52px_rgba(0,69,139,0.24)] md:mt-6"
          >
            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
              <div>
                <div className="brand-gold-fill mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-[#00458b]">
                  <FlaskConical className="h-6 w-6" />
                </div>

                <p className="section-eyebrow mb-4">Research archive</p>
                <h3 className="font-display max-w-2xl text-[1.7rem] leading-[0.98] tracking-[-0.06em] text-[#00458b] sm:text-[2.6rem]">
                  {researchItem.title} that open into the full body of work.
                </h3>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[#00458b]/74 sm:mt-5 sm:text-base sm:leading-8">
                  {researchItem.description}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="brand-gold-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[#00458b] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      See Related Publications
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[calc(100vh-1rem)] max-w-[calc(100%-1rem)] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden rounded-[1rem] border-[#00458b]/10 p-0 sm:max-h-[90vh] sm:max-w-4xl">
                    <div className="border-b border-[#00458b]/10 px-4 py-4 pr-12 sm:px-8 sm:py-6">
                        <DialogHeader className="text-left">
                          <p className="section-eyebrow mb-3 w-fit sm:mb-4">Research Archive</p>
                          <DialogTitle className="font-display text-[1.32rem] leading-[1.02] tracking-[-0.06em] text-[#00458b] sm:text-[2.4rem]">
                          Selected publications, talks, workshops, and research outputs
                          </DialogTitle>
                          <DialogDescription className="max-w-3xl text-[0.82rem] leading-5 text-[#00458b]/72 sm:text-sm sm:leading-7">
                          A fuller list of the papers, talks, workshops, datasets, and
                          reports that inform Lampata's work across urban analytics,
                          mobility data, FAIR open science, and Earth observation.
                          </DialogDescription>
                        </DialogHeader>
                    </div>

                    <ScrollArea className="min-h-0">
                      <div className="grid gap-3 px-4 py-4 pr-6 sm:gap-4 sm:px-8 sm:py-6 sm:pr-10">
                        {publications.map((publication) => (
                          <article
                            key={`${publication.title}-${publication.venue}-${publication.year}`}
                            className="rounded-[0.9rem] border border-[#00458b]/10 bg-[#f8fbff] p-4 sm:p-5"
                          >
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="tag-mono text-[#00458b]/84">
                                    {publication.kind}
                                  </span>
                                  <p className="text-[0.78rem] leading-5 text-[#00458b]/56 sm:text-sm sm:leading-6">
                                    {publication.venue} · {publication.year}
                                  </p>
                                </div>

                                <h3 className="mt-2.5 break-words font-display text-[1.06rem] leading-tight tracking-[-0.05em] text-[#00458b] sm:mt-3 sm:text-[1.4rem]">
                                  {publication.title}
                                </h3>

                                <p className="mt-2.5 max-w-3xl text-[0.84rem] leading-6 text-[#00458b]/74 sm:mt-3 sm:text-sm sm:leading-7">
                                  {publication.summary}
                                </p>
                              </div>

                              {publication.href ? (
                                <a
                                  href={publication.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#00458b]/12 bg-white px-4 py-2.5 text-[0.82rem] font-semibold text-[#00458b] transition-colors hover:border-[#00458b]/28 hover:bg-white sm:text-sm"
                                >
                                  View publication
                                  <ArrowUpRight className="h-4 w-4" />
                                </a>
                              ) : null}
                            </div>
                          </article>
                        ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="panel-surface hidden rounded-[0.9rem] p-6 md:block">
                <p className="section-eyebrow mb-4">Inside the archive</p>
                <div className="space-y-3">
                  {highlightedPublications.map((publication) => (
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
          </motion.div>
        ) : null}

        <div className="mt-5 grid gap-5 md:mt-6 md:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="panel-surface flex flex-col rounded-[0.75rem] p-6 md:p-8"
          >
            <p className="section-eyebrow mb-5">Where this shows up</p>
            <h3 className="font-display text-2xl leading-tight tracking-[-0.06em] text-[#00458b]">
              Open-science delivery that lands in real programmes, institutions, and operational teams.
            </h3>
            <span className="yellow-rule mt-4 w-12" />

            <p className="mt-5 text-sm leading-7 text-[#00458b]/76 md:mt-6">
              The same research standards show up across the client work: space-agency
              programmes, research institutions, public-interest analysis, and commercial
              teams that need delivery to hold up after the first prototype.
            </p>

            <div className="mt-5 grow space-y-2 md:mt-6">
              {[
                "Operational earth observation workflows and analyst tooling",
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
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
            {audienceSegments.map((segment, index) => {
              const Icon = audienceIconMap[segment.icon];

              return (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
