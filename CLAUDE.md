# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # production build (also serves as the lint/type-check step)
```

There is no test or lint script configured. Use `npm run build` as the minimum verification step before submitting changes.

## Architecture

This is a single-page marketing site exported from Figma, built with Vite + React + TypeScript + Tailwind CSS v4.

**Entry points:**
- [src/main.tsx](src/main.tsx) — mounts the React app
- [src/app/App.tsx](src/app/App.tsx) — composes all page sections in order: `Header → Hero → AudienceSection → Capabilities → FeaturedOutcomes → OpenScience → HowWeWork → Contact → Footer`

**Content layer:**
- [src/app/content/siteContent.ts](src/app/content/siteContent.ts) — all site copy, images, metrics, and data arrays with TypeScript interfaces. Update text here rather than in components.

**Component layers:**
- [src/app/components/](src/app/components/) — page section components (one file per section)
- [src/app/components/SectionIntro.tsx](src/app/components/SectionIntro.tsx) — shared eyebrow/title/description header used across most sections; accepts `eyebrow`, `title`, `description`, and optional `align` prop
- [src/app/components/ui/](src/app/components/ui/) — shadcn/ui primitives built on Radix UI; do not edit these unless fixing a bug
- [src/app/components/figma/](src/app/components/figma/) — Figma-specific helpers (e.g. `ImageWithFallback`)

**Styling:**
- [src/styles/theme.css](src/styles/theme.css) — all design tokens (colors, fonts, radii, component classes like `.section-eyebrow`, `.section-title`, `.section-copy`, `.panel-surface`, `.grid-pattern`). Edit tokens here rather than duplicating values in components.
- [src/styles/index.css](src/styles/index.css) — stylesheet entry; imports `fonts.css`, `tailwind.css`, `theme.css`
- Tailwind v4 is configured via `@tailwindcss/vite` plugin — no `tailwind.config` file
- Path alias `@` maps to `src/`

**Key conventions:**
- TypeScript React function components, 2-space indent, double quotes, semicolons
- `PascalCase` for component files/exports; `camelCase` for variables/helpers
- Prefer Tailwind utility classes and `theme.css` tokens over inline styles
- SVG and CSV files can be imported as raw assets (configured in [vite.config.ts](vite.config.ts)); never add `.css`, `.tsx`, or `.ts` to `assetsInclude`
- Both the React and Tailwind Vite plugins are required — do not remove either
