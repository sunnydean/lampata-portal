import { useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const ROTATING_WORDS = [
  "European Policy",
  "Earth Action",
  "Polar Science",
  "GeoAI",
  "Innovation",
  "Urban Analytics",
  "Engineering",
  "Open Source",
] as const;

const FROZEN_HEADLINE = {
  fromWord: "GeoSpatial Data",
  toWord: "Intelligence",
} as const;

const RESERVED_ROTATING_WORD = ROTATING_WORDS.reduce((longest, word) =>
  word.length > longest.length ? word : longest,
);
const RESERVED_FROM_WORD =
  FROZEN_HEADLINE.fromWord.length > RESERVED_ROTATING_WORD.length
    ? FROZEN_HEADLINE.fromWord
    : RESERVED_ROTATING_WORD;
const RESERVED_TO_WORD =
  FROZEN_HEADLINE.toWord.length > RESERVED_ROTATING_WORD.length
    ? FROZEN_HEADLINE.toWord
    : RESERVED_ROTATING_WORD;

const CYCLE_INTERVAL_MS = 2000;
const FROZEN_DURATION_MS = 5000;
const CYCLES_BEFORE_FREEZE = 12;

type ActiveSlot = "from" | "to";

type HeadlineState = {
  fromWord: string;
  toWord: string;
  phase: "cycling" | "frozen";
  cycleCount: number;
  activeSlot: ActiveSlot;
};

function pickRandomWord(excludedWords: string[] = []) {
  const availableWords = ROTATING_WORDS.filter((word) => !excludedWords.includes(word));
  const pool = availableWords.length ? availableWords : ROTATING_WORDS;

  return pool[Math.floor(Math.random() * pool.length)];
}

function createCyclingState(): HeadlineState {
  const fromWord = pickRandomWord([FROZEN_HEADLINE.fromWord]);
  const toWord = pickRandomWord([fromWord, FROZEN_HEADLINE.toWord]);

  return {
    fromWord,
    toWord,
    phase: "cycling",
    cycleCount: 0,
    activeSlot: "from",
  };
}

export function AnimatedHeadline() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const initialState = useMemo(() => createCyclingState(), []);
  const [headline, setHeadline] = useState<HeadlineState>(initialState);

  useEffect(() => {
    if (shouldReduceMotion) {
      setHeadline({
        ...FROZEN_HEADLINE,
        phase: "frozen",
        cycleCount: 0,
        activeSlot: "from",
      });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setHeadline((current) => {
        if (current.phase === "frozen") {
          return createCyclingState();
        }

        if (current.cycleCount + 1 >= CYCLES_BEFORE_FREEZE) {
          return {
            ...FROZEN_HEADLINE,
            phase: "frozen",
            cycleCount: 0,
            activeSlot: "from",
          };
        }

        if (current.activeSlot === "from") {
          return {
            ...current,
            fromWord: pickRandomWord([current.fromWord, current.toWord]),
            cycleCount: current.cycleCount + 1,
            activeSlot: "to",
          };
        }

        return {
          ...current,
          toWord: pickRandomWord([current.toWord, current.fromWord]),
          cycleCount: current.cycleCount + 1,
          activeSlot: "from",
        };
      });
    }, headline.phase === "cycling" ? CYCLE_INTERVAL_MS : FROZEN_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [headline.phase, headline.cycleCount, shouldReduceMotion]);

  return (
    <span className="grid w-fit max-w-full gap-y-[0.1em] text-[0.92em] sm:text-[0.9em]">
      <span className="flex min-w-0 items-baseline gap-x-[0.22em] whitespace-nowrap">
        <span className="text-[1.08em] font-semibold tracking-[-0.04em]">From</span>
        <AnimatedWord word={headline.fromWord} reserveWord={RESERVED_FROM_WORD} />
      </span>
      <span className="flex min-w-0 items-baseline gap-x-[0.22em] whitespace-nowrap">
        <span className="text-[1.08em] font-semibold tracking-[-0.04em]">To</span>
        <AnimatedWord word={headline.toWord} reserveWord={RESERVED_TO_WORD} />
      </span>
    </span>
  );
}

function AnimatedWord({ word, reserveWord }: { word: string; reserveWord: string }) {
  return (
    <span className="relative inline-grid max-w-full align-baseline pr-[0.12em]">
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap pb-[0.22em]">
        {reserveWord}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[0.02em] left-[0.08em] h-[0.035em] w-[48%] rounded-full bg-[#f5d704]/18"
      />
      <span
        key={word}
        className="animated-headline-word absolute left-0 top-0 whitespace-nowrap"
      >
        <span>{word}</span>
      </span>
    </span>
  );
}
