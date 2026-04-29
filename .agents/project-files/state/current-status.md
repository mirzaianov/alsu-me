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
- Available scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run preview`

## Current Repository State

- Source entrypoints are `src/main.jsx` and `src/App.jsx`.
- Components live under `src/components`; most components pair `Component.jsx` with `Component.module.css`.
- Shared styling lives in `src/styles` and `src/index.css`.
- Images, fonts, and icons live under `src/assets`; public web assets live under `public`.
- Vercel Analytics is enabled in `src/App.jsx`.
- There is no configured test script in `package.json`.
- Project-support files now live under `.agents/project-files`.

