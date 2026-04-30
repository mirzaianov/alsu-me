# Current Status

Status: project-state current repository state

## Project State

- Existing frontend app for the `alsu-me` personal website.
- The site is a single-page React experience with site chrome, hero, about, services, pricing, testimonials, contact, and back-to-top behavior.
- The README describes the product as a personal website for Alsu Karimova, a professional tutor, translator, and interpreter.

## Current Tooling Baseline

- Node.js `24.15.0` is pinned in `.nvmrc`; `package.json` allows Node `>=24.15.0 <25`.
- npm is the package manager; `package-lock.json` is present and npm `>=11` is required.
- Vite is the frontend build tool.
- React and React DOM are at major version 19.
- ESLint flat config is present in `eslint.config.js`.
- Prettier config is present in `.prettierrc` and enforces LF line endings.
- Husky and commitlint enforce commit-message checks through `.husky/commit-msg` and `commitlint.config.js`. [Reason why added: local commit-policy readiness is now enforced by repository-owned tooling.]
- Available scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run preview`
  - `npm run prepare`

## Current Repository State

- Source entrypoints are `src/main.jsx` and `src/app.jsx`.
- `src/app.jsx` keeps the critical site header, hero, and about sections eager, then lazy-loads the services, pricing, testimonials, and contact sections.
- UI source is organized by ownership: page sections live under `src/sections`, site chrome lives under `src/layout`, reusable primitives live under `src/shared/ui`, and app-level widgets live under `src/widgets`.
- Most UI files pair `component-name.jsx` with `component-name.module.css`.
- Ordinary frontend source filenames use lowercase kebab-case; React symbols remain `PascalCase`.
- Shared styling lives in `src/styles` and `src/index.css`.
- Images, fonts, and icons live under `src/assets`; public web assets live under `public`.
- Vercel Analytics is enabled in `src/app.jsx`.
- There is no configured test script in `package.json`.
- Project-support files now live under `.agents/project-files`.
- Repository line endings are defined by `.gitattributes` with LF for text files and binary handling for images/fonts.
