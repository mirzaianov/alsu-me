# Current Status

Status: project-state current repository state

## Project State

- Existing frontend app for the `alsu-me` personal website.
- The site is a single-page React experience with sections for header, hero, about, services, prices, testimonials, contacts, footer, and back-to-top behavior.
- The README describes the product as a personal website for Alsu Karimova, a professional tutor, translator, and interpreter.

## Current Tooling Baseline

- Node.js `24.15.0` is pinned in `.nvmrc`; `package.json` allows Node `>=24.15.0 <25`.
- npm is the package manager; `package-lock.json` is present and npm `>=11` is required.
- Vite is the frontend build tool.
- React and React DOM are at major version 19.
- ESLint flat config is present in `eslint.config.js`.
- Prettier config is present in `.prettierrc`.
- Husky and commitlint enforce commit-message checks through `.husky/commit-msg` and `commitlint.config.js`. [Reason why added: local commit-policy readiness is now enforced by repository-owned tooling.]
- Available scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run preview`
  - `npm run prepare`

## Current Repository State

- Source entrypoints are `src/main.jsx` and `src/app.jsx`.
- `src/app.jsx` keeps the critical header, hero, and about sections eager, then lazy-loads the services, prices, testimonials, and contacts sections.
- UI source is organized by intent under `src/components`: page sections live under `src/components/sections`, site chrome lives under `src/components/layout`, and reusable primitives live under `src/components/ui`.
- Most UI files pair `component-name.jsx` with `component-name.module.css`.
- Ordinary frontend source filenames use lowercase kebab-case; React symbols remain `PascalCase`.
- Shared styling lives in `src/styles` and `src/index.css`.
- Images, fonts, and icons live under `src/assets`; public web assets live under `public`.
- Vercel Analytics is enabled in `src/app.jsx`.
- There is no configured test script in `package.json`.
- Project-support files now live under `.agents/project-files`.
