import { motion, useReducedMotion } from "motion/react";
import { cn } from "./ui/utils";

interface HeroMapAnimationProps {
  className?: string;
  mode?: "full" | "mobile";
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const blue = (a: number) => `rgba(0, 69, 139, ${a})`;
const gold = (a: number) => `rgba(245, 215, 4, ${a})`;

/** SVG ellipse as a path d-string (for pathLength animation). */
function ePath(cx: number, cy: number, rx: number, ry: number) {
  return `M${cx - rx},${cy}A${rx},${ry} 0 1,1 ${cx + rx},${cy}A${rx},${ry} 0 1,1 ${cx - rx},${cy}`;
}

/* ─── Graticule grid ─── */
const GRID_H = [
  "M0 80C180 66 360 66 720 84",
  "M0 155C178 142 360 142 720 160",
  "M0 235C180 222 360 222 720 240",
  "M0 320C182 308 360 308 720 324",
  "M0 410C184 398 360 398 720 414",
  "M0 495C186 484 360 484 720 498",
];
const GRID_V = [
  "M95 0C80 140 80 280 100 560",
  "M225 0C212 140 210 280 230 560",
  "M360 0C348 140 348 280 364 560",
  "M495 0C482 140 482 280 498 560",
  "M625 0C612 140 612 280 628 560",
];

/* ─── Topographic contour lines ─── */
const CONTOURS = [
  { d: ePath(385, 278, 50, 42), delay: 0.35, alt: false },
  { d: ePath(378, 282, 88, 68), delay: 0.5, alt: true },
  { d: ePath(374, 276, 128, 100), delay: 0.65, alt: false },
  { d: ePath(380, 284, 172, 138), delay: 0.85, alt: true },
  { d: ePath(152, 156, 42, 36), delay: 0.5, alt: false },
  { d: ePath(146, 160, 82, 66), delay: 0.7, alt: true },
  { d: ePath(592, 428, 38, 32), delay: 0.6, alt: false },
  { d: ePath(586, 432, 72, 58), delay: 0.8, alt: true },
];

/* ─── Region boundaries ─── */
const REGIONS = [
  { d: "M38 128L125 58L258 46L342 108L316 206L198 254L78 232L28 172Z", delay: 1.05 },
  { d: "M378 60L516 38L648 80L688 174L646 262L522 294L396 258L358 162Z", delay: 1.2 },
  { d: "M58 322L178 278L304 312L342 406L280 486L138 506L46 444Z", delay: 1.35 },
  { d: "M418 334L558 300L684 342L708 444L656 526L498 546L394 482L378 402Z", delay: 1.5 },
];

/* ─── Data measurement points ─── */
const POINTS = [
  { x: 128, y: 92, r: 4, alt: false, delay: 2.0 },
  { x: 264, y: 66, r: 3, alt: true, delay: 2.05 },
  { x: 508, y: 58, r: 4, alt: false, delay: 2.1 },
  { x: 648, y: 148, r: 3, alt: true, delay: 2.15 },
  { x: 384, y: 280, r: 6, alt: true, delay: 2.2 },
  { x: 178, y: 308, r: 3, alt: false, delay: 2.25 },
  { x: 312, y: 408, r: 4, alt: true, delay: 2.3 },
  { x: 568, y: 326, r: 3, alt: false, delay: 2.35 },
  { x: 98, y: 448, r: 4, alt: true, delay: 2.4 },
  { x: 612, y: 468, r: 3, alt: false, delay: 2.45 },
  { x: 458, y: 198, r: 3, alt: false, delay: 2.5 },
  { x: 218, y: 188, r: 4, alt: true, delay: 2.55 },
];

/* ─── Network connections ─── */
const LINKS = [
  { d: "M128 92L264 66", delay: 2.35 },
  { d: "M264 66L508 58", delay: 2.42 },
  { d: "M508 58L648 148", delay: 2.48 },
  { d: "M218 188L384 280", delay: 2.54 },
  { d: "M384 280L568 326", delay: 2.6 },
  { d: "M178 308L312 408", delay: 2.66 },
  { d: "M312 408L612 468", delay: 2.72 },
  { d: "M458 198L648 148", delay: 2.78 },
  { d: "M128 92L178 308", delay: 2.84 },
  { d: "M384 280L312 408", delay: 2.9 },
];

/* ─── Timing ─── */
const T_FLASH = 3.3;
const T_DIM = 3.45;
const T_TAG = 3.55;
const T_IDLE = 4.6;

/* ─── Ambient pulse config ─── */
const AMBIENT_SCAN_OPACITY = 0.25;

/* ─── Targeting reticle rings ─── */
const RETICLE = [
  { r: 110, delay: 2.95, stroke: gold(0.6), width: 1.8 },
  { r: 70, delay: 3.05, stroke: blue(0.5), width: 1.4 },
  { r: 30, delay: 3.15, stroke: gold(0.8), width: 2 },
];

export function HeroMapAnimation({
  className,
  mode = "full",
}: HeroMapAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = mode === "mobile";
  const intro = mode === "full" && !shouldReduceMotion;
  const shouldPulse = !shouldReduceMotion;

  /* ═══════ Mobile ═══════ */
  if (isMobile) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "hero-map-frame pointer-events-none relative isolate w-full overflow-hidden",
          className,
        )}
      >
        <div className="hero-map-panel absolute inset-0" />
        <div className="hero-map-grid absolute inset-0 opacity-14" />
        <div className="absolute inset-[8%] rounded-[1rem] border border-[#00458b]/10" />
        <div className="absolute left-[76%] top-[24%] h-[20%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-[#f5d704]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#eaf2fb]/98 via-white/20 to-transparent" />

        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          focusable="false"
          viewBox="0 0 720 320"
        >
          {/* Grid */}
          {["M0 80H720", "M0 160H720", "M0 240H720"].map((d, i) => (
            <motion.path
              key={`mg-${i}`}
              d={d}
              fill="none"
              stroke={i === 1 ? gold(0.1) : blue(0.1)}
              strokeWidth={1}
              initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            />
          ))}
          {["M200 0V320", "M520 0V320"].map((d, i) => (
            <motion.path
              key={`mgv-${i}`}
              d={d}
              fill="none"
              stroke={blue(0.08)}
              strokeWidth={1}
              initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: EASE }}
            />
          ))}

          {/* Contours */}
          {[
            ePath(380, 165, 50, 40),
            ePath(375, 168, 100, 75),
            ePath(382, 162, 155, 110),
          ].map((d, i) => (
            <motion.path
              key={`mc-${i}`}
              d={d}
              fill="none"
              stroke={i % 2 === 0 ? blue(0.25) : gold(0.2)}
              strokeWidth={1.2}
              initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.3 + i * 0.15, ease: EASE }}
            />
          ))}

          {/* Data points */}
          {[
            { x: 180, y: 100, alt: false },
            { x: 380, y: 165, alt: true },
            { x: 560, y: 120, alt: false },
            { x: 300, y: 230, alt: true },
          ].map((p, i) => (
            <motion.circle
              key={`mp-${i}`}
              cx={p.x}
              cy={p.y}
              fill={p.alt ? "#f5d704" : "#00458b"}
              stroke="white"
              strokeWidth={1.5}
              initial={shouldReduceMotion ? false : { r: 0, opacity: 0 }}
              animate={{ r: 4, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 + i * 0.08, ease: EASE }}
            />
          ))}

          {/* Flash */}
          {!shouldReduceMotion && (
            <motion.rect
              x="0"
              y="0"
              width="720"
              height="320"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{
                delay: 1.6,
                duration: 0.5,
                times: [0, 0.3, 1],
                ease: "easeOut",
              }}
            />
          )}

          {/* Dim overlay */}
          <motion.rect
            x="0"
            y="0"
            width="720"
            height="320"
            fill="rgba(234, 242, 251, 0.78)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 1.7,
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        </svg>

        <div className="hero-map-vignette absolute inset-0" />

        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center px-8"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 1.8,
            duration: 0.6,
            ease: EASE,
          }}
        >
          <div className="max-w-[13.5rem] text-center">
            <p className="font-display text-[1.96rem] font-black leading-[0.92] tracking-[-0.075em] text-[#00458b] [text-shadow:0_1px_0_rgba(255,255,255,0.82)] sm:text-[2.2rem]">
              Making sense of the real world
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ═══════ Desktop ═══════ */
  return (
    <div
      aria-hidden="true"
      className={cn(
        "hero-map-frame pointer-events-none relative isolate w-full overflow-hidden",
        className,
      )}
    >
      <div className="hero-map-panel absolute inset-0" />

      <motion.div
        className="hero-map-grid absolute inset-0"
        initial={intro ? { opacity: 0, scale: 1.04 } : false}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
      />

      <motion.div
        className="absolute inset-[5.5%] rounded-[1.3rem] border border-[#00458b]/16"
        initial={intro ? { opacity: 0, scale: 0.96 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      />

      {/* Coordinate labels */}
      <motion.div
        className="absolute left-[8%] top-[8.5%] z-[1] flex items-center gap-2 font-mono text-[0.58rem] tracking-[0.22em] text-[#00458b]/72"
        initial={intro ? { opacity: 0, y: -8 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
      >
        <span className="h-px w-8 bg-[#f5d704]/62" />
        52.2053° N
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[8.5%] z-[1] flex items-center gap-2 font-mono text-[0.58rem] tracking-[0.22em] text-[#00458b]/72"
        initial={intro ? { opacity: 0, y: -8 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
      >
        0.1218° E
        <span className="h-px w-8 bg-[#f5d704]/62" />
      </motion.div>

      {/* Gold ambient glow */}
      <motion.div
        className="absolute left-[46%] top-[43%] z-[1] h-[20%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[2.75rem] bg-[#f5d704]/10 blur-3xl"
        initial={intro ? { opacity: 0, scale: 0.72 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.05, delay: 1.0, ease: EASE }}
      />

      {/* Bottom fade */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[6%] bg-gradient-to-t from-[#eaf2fb]/60 via-white/10 to-transparent"
        initial={intro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: intro ? T_DIM : 0, ease: EASE }}
      />

      {/* ─── Main SVG ─── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        focusable="false"
        viewBox="0 -50 720 660"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hma-scan-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gold(0)} />
            <stop offset="40%" stopColor={gold(0.45)} />
            <stop offset="60%" stopColor={gold(0.45)} />
            <stop offset="100%" stopColor={gold(0)} />
          </linearGradient>
          <linearGradient id="hma-scan-h" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={blue(0)} />
            <stop offset="40%" stopColor={blue(0.35)} />
            <stop offset="60%" stopColor={blue(0.35)} />
            <stop offset="100%" stopColor={blue(0)} />
          </linearGradient>
          <radialGradient id="hma-flash-g" cx="50%" cy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="55%" stopColor="white" stopOpacity="0.92" />
            <stop offset="100%" stopColor="white" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Layer 1: Graticule grid */}
        {GRID_H.map((d, i) => (
          <motion.path
            key={`gh-${i}`}
            d={d}
            fill="none"
            stroke={i % 2 === 0 ? blue(0.16) : gold(0.12)}
            strokeWidth={1}
            initial={intro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.05 + i * 0.05, ease: EASE }}
          />
        ))}
        {GRID_V.map((d, i) => (
          <motion.path
            key={`gv-${i}`}
            d={d}
            fill="none"
            stroke={i % 2 === 0 ? blue(0.12) : gold(0.1)}
            strokeWidth={1}
            initial={intro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 + i * 0.05, ease: EASE }}
          />
        ))}

        {/* Layer 2: Topographic contours */}
        {CONTOURS.map((c, i) => (
          <motion.path
            key={`ct-${i}`}
            d={c.d}
            fill="none"
            stroke={c.alt ? gold(0.28) : blue(0.32)}
            strokeWidth={1.3}
            strokeLinecap="round"
            initial={intro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: c.delay, ease: EASE }}
          />
        ))}

        {/* Layer 3: Region boundaries */}
        {REGIONS.map((r, i) => (
          <motion.path
            key={`rg-${i}`}
            d={r.d}
            fill={i % 2 === 0 ? blue(0.06) : gold(0.04)}
            stroke={i % 2 === 0 ? blue(0.24) : gold(0.2)}
            strokeWidth={1.6}
            strokeLinejoin="round"
            initial={intro ? { opacity: 0, y: 18 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: r.delay, ease: EASE }}
          />
        ))}

        {/* Layer 4: Satellite scan lines */}
        {intro && (
          <>
            <motion.rect
              x="0"
              width="720"
              height="6"
              fill="url(#hma-scan-v)"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: [0, 560], opacity: [0, 0.75, 0.75, 0] }}
              transition={{
                delay: 1.7,
                duration: 1.1,
                times: [0, 0.04, 0.88, 1],
                ease: "linear",
              }}
            />
            <motion.rect
              y="0"
              height="560"
              width="6"
              fill="url(#hma-scan-h)"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: [0, 720], opacity: [0, 0.6, 0.6, 0] }}
              transition={{
                delay: 2.0,
                duration: 0.9,
                times: [0, 0.04, 0.88, 1],
                ease: "linear",
              }}
            />
          </>
        )}

        {/* Layer 5: Data points */}
        {POINTS.map((p, i) => (
          <g key={`pt-${i}`}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              fill={p.alt ? gold(0.14) : blue(0.1)}
              stroke={p.alt ? gold(0.28) : blue(0.28)}
              strokeWidth={1}
              initial={intro ? { r: 0, opacity: 0 } : false}
              animate={{ r: p.r + 6, opacity: 1 }}
              transition={{ duration: 0.45, delay: intro ? p.delay : 0, ease: EASE }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              fill={p.alt ? "#f5d704" : "#00458b"}
              stroke="white"
              strokeWidth={1.5}
              initial={intro ? { r: 0, opacity: 0 } : false}
              animate={{ r: p.r, opacity: 1 }}
              transition={{ duration: 0.35, delay: intro ? p.delay + 0.05 : 0, ease: EASE }}
            />
          </g>
        ))}

        {/* Layer 6: Network connections */}
        {LINKS.map((l, i) => (
          <motion.path
            key={`ln-${i}`}
            d={l.d}
            fill="none"
            stroke={i % 2 === 0 ? blue(0.36) : gold(0.42)}
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeDasharray={i % 3 === 0 ? "6 8" : undefined}
            initial={intro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: intro ? l.delay : 0, ease: EASE }}
          />
        ))}

        {/* Layer 7: Targeting reticle — converges before flash */}
        {intro &&
          RETICLE.map((ring, i) => (
            <motion.circle
              key={`ret-${i}`}
              cx="360"
              cy="280"
              fill="none"
              stroke={ring.stroke}
              strokeWidth={ring.width}
              initial={{ r: ring.r, opacity: 0 }}
              animate={{ r: 0, opacity: [0, 0.8, 0] }}
              transition={{
                delay: ring.delay,
                duration: 0.32 - i * 0.04,
                ease: "easeIn",
              }}
            />
          ))}

        {/* CAMBRIDGE label next to bottom-left yellow dot */}
        <motion.text
          x="118"
          y="452"
          fill={blue(0.5)}
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="3"
          initial={intro ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: intro ? 2.6 : 0, ease: EASE }}
        >
          CAMBRIDGE
        </motion.text>

        {/* Bottom-area content: extra grid, contours, points, links */}
        {/* Extra horizontal grid lines in bottom zone */}
        {["M0 500C180 492 360 490 720 502", "M0 540C180 534 360 532 720 542"].map((d, i) => (
          <motion.path
            key={`gbh-${i}`}
            d={d}
            fill="none"
            stroke={i === 0 ? blue(0.12) : gold(0.09)}
            strokeWidth={1}
            initial={intro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 + i * 0.06, ease: EASE }}
          />
        ))}

        {/* Bottom contour cluster */}
        <motion.path
          d={ePath(340, 510, 68, 34)}
          fill="none"
          stroke={blue(0.22)}
          strokeWidth={1.2}
          strokeLinecap="round"
          initial={intro ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.75, ease: EASE }}
        />
        <motion.path
          d={ePath(340, 510, 130, 58)}
          fill="none"
          stroke={gold(0.16)}
          strokeWidth={1.2}
          strokeLinecap="round"
          initial={intro ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
        />

        {/* Bottom data points */}
        {[
          { x: 240, y: 518, r: 3, alt: true, delay: 2.6 },
          { x: 440, y: 506, r: 4, alt: false, delay: 2.65 },
          { x: 160, y: 534, r: 3, alt: false, delay: 2.7 },
          { x: 560, y: 528, r: 3, alt: true, delay: 2.75 },
          { x: 340, y: 542, r: 4, alt: true, delay: 2.8 },
          { x: 650, y: 516, r: 3, alt: false, delay: 2.85 },
        ].map((p, i) => (
          <g key={`bpt-${i}`}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              fill={p.alt ? gold(0.14) : blue(0.1)}
              stroke={p.alt ? gold(0.28) : blue(0.28)}
              strokeWidth={1}
              initial={intro ? { r: 0, opacity: 0 } : false}
              animate={{ r: p.r + 6, opacity: 1 }}
              transition={{ duration: 0.45, delay: intro ? p.delay : 0, ease: EASE }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              fill={p.alt ? "#f5d704" : "#00458b"}
              stroke="white"
              strokeWidth={1.5}
              initial={intro ? { r: 0, opacity: 0 } : false}
              animate={{ r: p.r, opacity: 1 }}
              transition={{ duration: 0.35, delay: intro ? p.delay + 0.05 : 0, ease: EASE }}
            />
          </g>
        ))}

        {/* Bottom network links */}
        {[
          { d: "M240 518L440 506", delay: 2.72 },
          { d: "M160 534L340 542", delay: 2.78 },
          { d: "M340 542L560 528", delay: 2.84 },
          { d: "M440 506L650 516", delay: 2.9 },
          { d: "M98 448L160 534", delay: 2.92 },
          { d: "M612 468L650 516", delay: 2.96 },
        ].map((l, i) => (
          <motion.path
            key={`bln-${i}`}
            d={l.d}
            fill="none"
            stroke={i % 2 === 0 ? blue(0.3) : gold(0.35)}
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeDasharray={i % 3 === 0 ? "6 8" : undefined}
            initial={intro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: intro ? l.delay : 0, ease: EASE }}
          />
        ))}

        {/* Post-flash ambient: pulse rings on all data points */}
        {shouldPulse &&
          POINTS.map((p, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={p.x}
              cy={p.y}
              fill="none"
              stroke={p.alt ? gold(0.4) : blue(0.4)}
              strokeWidth={1.6}
              initial={{ r: p.r, opacity: 0 }}
              animate={{
                r: [p.r + 4, p.r + 24, p.r + 4],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                delay: T_IDLE + i * 0.22,
                duration: 3.2 + (i % 3) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Ambient: concentric waves from center */}
        {shouldPulse &&
          [0, 1, 2].map((i) => (
            <motion.circle
              key={`wave-${i}`}
              cx="360"
              cy="280"
              fill="none"
              stroke={i % 2 === 0 ? gold(0.2) : blue(0.18)}
              strokeWidth={1.2}
              initial={{ r: 20, opacity: 0 }}
              animate={{
                r: [20, 180],
                opacity: [0.3, 0],
              }}
              transition={{
                delay: T_IDLE + 0.5 + i * 1.6,
                duration: 3.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

        {/* Ambient: slow repeating vertical scan sweep */}
        {shouldPulse && (
          <motion.rect
            x="0"
            width="720"
            height="4"
            fill="url(#hma-scan-v)"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, 560],
              opacity: [0, AMBIENT_SCAN_OPACITY, AMBIENT_SCAN_OPACITY, 0],
            }}
            transition={{
              delay: T_IDLE + 1,
              duration: 4.5,
              times: [0, 0.05, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          />
        )}

        {/* Ambient: horizontal scan sweep (offset from vertical) */}
        {shouldPulse && (
          <motion.rect
            y="0"
            height="560"
            width="4"
            fill="url(#hma-scan-h)"
            initial={{ x: 720, opacity: 0 }}
            animate={{
              x: [720, 0],
              opacity: [0, 0.18, 0.18, 0],
            }}
            transition={{
              delay: T_IDLE + 4,
              duration: 3.8,
              times: [0, 0.05, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear",
            }}
          />
        )}

        {/* Ambient: data pulses traveling along network links */}
        {shouldPulse &&
          LINKS.map((l, i) => (
            <motion.path
              key={`lpulse-${i}`}
              d={l.d}
              fill="none"
              stroke={i % 2 === 0 ? blue(0.5) : gold(0.55)}
              strokeWidth={2.2}
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0.3, 0],
                pathOffset: [0, 0.7, 1],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                delay: T_IDLE + 2 + i * 0.8,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Ambient: contour ring breathing */}
        {shouldPulse &&
          [0, 2].map((ci) => (
            <motion.path
              key={`cbreathe-${ci}`}
              d={CONTOURS[ci].d}
              fill="none"
              stroke={ci === 0 ? gold(0.25) : blue(0.2)}
              strokeWidth={1.8}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{
                delay: T_IDLE + 1.5 + ci * 2,
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Flash overlay */}
        {intro && (
          <>
            <motion.rect
              x="0"
              y="0"
              width="720"
              height="560"
              fill="url(#hma-flash-g)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: T_FLASH,
                duration: 0.65,
                times: [0, 0.28, 1],
                ease: "easeOut",
              }}
            />
            {/* Afterglow ring */}
            <motion.circle
              cx="360"
              cy="280"
              fill="none"
              stroke={gold(0.25)}
              strokeWidth={2}
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: 200, opacity: [0, 0.35, 0] }}
              transition={{
                delay: T_FLASH + 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </>
        )}
      </svg>

      <div className="hero-map-vignette absolute inset-0" />

      {/* Tagline — centered in sleek box */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center px-8"
        initial={intro ? { opacity: 0, scale: 1.04 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: intro ? T_TAG : 0,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="hero-map-logo-shell max-w-[20rem] px-7 py-4 text-center">
          <p className="font-display text-[1.48rem] font-bold uppercase leading-tight tracking-[0.14em] text-[#00458b] sm:text-[1.6rem] md:text-[1.52rem]">
            Making Sense of the Real World
          </p>
        </div>
      </motion.div>

    </div>
  );
}
