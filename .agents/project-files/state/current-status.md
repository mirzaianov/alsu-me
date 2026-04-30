# Current Status

Status: project-state current repository state

## Project State

- Existing frontend app for the `alsu-me` personal website.
- The site is a single-page React experience with site chrome, hero, about, services, pricing, testimonials, contact, and back-to-top behavior.
- The README describes the product as a personal website for Alsu Karimova, a professional tutor, translator, and interpreter.

## Current Tooling Baseline

- Node.js `24.15.0` is pinned in `.nvmrc`; `package.json` allows Node `>=24.15.0 <25`.
- pnpm is the package manager; `packageManager` pins `pnpm@10.33.2`, `package.json` requires pnpm `>=10.33.2 <11`, and `pnpm-lock.yaml` is present. [Reason why added: package installs are now lockfile-owned by pnpm instead of npm.]
- A local `preinstall` guard in `scripts/ensure-pnpm.js` rejects non-pnpm installs.
- Vite is the frontend build tool, with `vite.config.ts` typed by TypeScript.
- React and React DOM are at major version 19.
- App source is strict TypeScript, using `.ts`/`.tsx` files and Vite client types for CSS Modules and assets. [Reason why added: KAN-106 migrated source typing from PropTypes and JS/JSX to TypeScript.]
- ESLint flat config is present in `eslint.config.js` with TypeScript-aware linting.
- Prettier config is present in `.prettierrc` and enforces LF line endings.
- Husky and commitlint enforce commit-message checks through `.husky/commit-msg` and `commitlint.config.js`. [Reason why added: local commit-policy readiness is now enforced by repository-owned tooling.]
- Available scripts:
  - `pnpm dev`
  - `pnpm typecheck`
  - `pnpm build`
  - `pnpm lint`
  - `pnpm preview`
  - `pnpm prepare`
  - `pnpm run preinstall`

## Current Repository State

- Source entrypoints are `src/main.tsx` and `src/app.tsx`.
- `src/app.tsx` keeps the critical site header, hero, and about sections eager, then lazy-loads the services, pricing, testimonials, and contact sections.
- UI source is organized by ownership: page sections live under `src/sections`, site chrome lives under `src/layout`, reusable primitives live under `src/shared/ui`, and app-level widgets live under `src/widgets`.
- Most UI files pair `component-name.tsx` with `component-name.module.css`.
- Ordinary frontend source filenames use lowercase kebab-case; React symbols remain `PascalCase`.
- Shared styling lives in `src/styles` and `src/index.css`.
- Images, fonts, and icons live under `src/assets`; public web assets live under `public`.
- Vercel Analytics is enabled in `src/app.tsx`.
- There is no configured test script in `package.json`.
- Project-support files now live under `.agents/project-files`.
- Repository line endings are defined by `.gitattributes` with LF for text files and binary handling for images/fonts.
