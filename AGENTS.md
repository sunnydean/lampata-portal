# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite-powered React + TypeScript marketing site. Application entry points live in `src/main.tsx` and `src/app/App.tsx`. Page sections are split into feature components in `src/app/components` (for example, `Header.tsx`, `Hero.tsx`, `Footer.tsx`). Reusable UI primitives generated for the design system live in `src/app/components/ui`. Global styling is centralized in `src/styles`, with `index.css` as the stylesheet entry and theme tokens in `theme.css`. Reference material lives in `guidelines/`, and project metadata sits at the root in `package.json`, `vite.config.ts`, and `index.html`.

## Build, Test, and Development Commands
Install dependencies with `npm install`.

- `npm run dev`: starts the Vite dev server for local development.
- `npm run build`: creates a production bundle and surfaces TypeScript or bundling issues.

There is no dedicated `test` or `lint` script in the current export, so use `npm run build` as the minimum verification step before opening a PR.

## Coding Style & Naming Conventions
Follow the existing code style: TypeScript React function components, 2-space indentation, double quotes, and semicolons. Use `PascalCase` for component files and exports (`CaseStudies.tsx`), `camelCase` for local variables and helpers (`mobileMenuOpen`), and kebab-free section IDs in markup (`#case-studies`). Keep new page sections under `src/app/components` and shared primitives under `src/app/components/ui`. Prefer Tailwind utility classes and the tokens defined in `src/styles/theme.css` over one-off inline styles.

## Testing Guidelines
Automated tests are not configured yet. For UI changes, verify behavior manually in `npm run dev` and run `npm run build` before submission. If you add non-trivial logic, place tests beside the feature or in a future `src/__tests__/` area and document the command needed to run them.

## Commit & Pull Request Guidelines
This workspace does not include `.git` history, so no local commit convention can be inferred. Use short, imperative commit subjects such as `Add services section animation` or `Refine footer spacing`. Pull requests should include a concise summary, screenshots or a short screen recording for visual changes, notes on manual verification, and links to any related issue or design reference.

## Configuration Notes
Treat this repository as a static frontend bundle. Avoid committing secrets, `.env` files, or generated build output. When changing theme values, update the shared tokens in `src/styles/theme.css` instead of duplicating colors across components.
