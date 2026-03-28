import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { heroMetrics } from "../content/siteContent";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { HeroMapAnimation } from "./HeroMapAnimation";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">

        {/* Left column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-[calc(100vw-3rem)] font-display text-balance leading-[1.01] tracking-[-0.08em] text-[#00458b] sm:max-w-none md:leading-[0.98]"
            style={{ fontSize: "clamp(2.35rem, 10.4vw, 4.8rem)" }}
          >
            <AnimatedHeadline />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 hidden max-w-lg text-lg leading-8 text-[#00458b]/70 md:block md:text-xl"
          >
            Lampata helps space agencies, research institutions, sustainability analysts, and enterprises work with geo-spatial data through rigorous research and practical engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00458b] px-6 py-3.5 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00458b]/90 sm:w-auto"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative mt-7 md:hidden"
          >
            <div className="brand-gold-fill absolute right-0 top-0 h-[72%] w-[76%] rounded-[1rem]" />
            <HeroMapAnimation
              mode="mobile"
              className="relative z-[1] h-[162px] sm:h-[186px]"
            />
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 grid grid-cols-1 border-t border-[#00458b]/10 pt-4 md:mt-10 md:grid-cols-3 md:gap-5 md:pt-6"
          >
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-[#00458b]/8 py-3 last:border-b-0 md:border-b-0 md:py-0"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#00458b]/50 sm:text-[0.62rem] sm:tracking-[0.22em]">
                  {metric.label}
                </p>
                <p className="mt-1.5 max-w-[14rem] font-display text-[0.96rem] font-bold leading-snug tracking-[-0.02em] text-[#00458b] md:mt-2 md:max-w-none md:text-sm">
                  {metric.value}
                </p>
              </div>
            ))}
          </motion.div>

          <TrustStrip className="mt-6 border-t border-[#00458b]/8 pt-5" />
        </div>

        {/* Right column — animated map composition with yellow offset frame */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative hidden md:block lg:pt-4"
        >
          <div className="brand-gold-fill absolute right-0 top-0 hidden h-[80%] w-[84%] rounded-[1rem] lg:block" />
          <HeroMapAnimation className="relative z-[1] h-[500px] md:h-[580px]" />
        </motion.div>
      </div>
    </section>
  );
}
