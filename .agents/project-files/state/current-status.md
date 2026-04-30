# Current Status

Status: project-state current repository state

## Project State

- Existing frontend app for the `alsu-me` personal website.
- The site is a single-page Next.js App Router experience with site chrome, hero, about, services, pricing, testimonials, contact, and back-to-top behavior.
- The README describes the product as a personal website for Alsu Karimova, a professional tutor, translator, and interpreter.

## Current Tooling Baseline

- Node.js `24.15.0` is pinned in `.nvmrc`; `package.json` allows Node `>=24.15.0 <25`.
- pnpm is the package manager; `packageManager` pins `pnpm@10.33.2`, `package.json` requires pnpm `>=10.33.2 <11`, and `pnpm-lock.yaml` is present. [Reason why added: package installs are now lockfile-owned by pnpm instead of npm.]
- A local `preinstall` guard in `scripts/ensure-pnpm.js` rejects non-pnpm installs.
- Next.js is the frontend framework and production build tool, with `next.config.ts` typed by TypeScript. [Reason why added: KAN-110 migrated the app from Vite to Next.js while preserving the one-page route surface.]
- React and React DOM are at major version 19.
- App source is strict TypeScript, using `.ts`/`.tsx` files and Next-managed image/font/type declarations. [Reason why added: KAN-106 migrated source typing from PropTypes and JS/JSX to TypeScript, and KAN-110 replaced Vite client types with Next types.]
- ESLint flat config is present in `eslint.config.js` with Next Core Web Vitals, TypeScript, React, hooks, import/accessibility, and Prettier coverage.
- Prettier config is present in `.prettierrc` and enforces LF line endings.
- Husky and commitlint enforce commit-message checks through `.husky/commit-msg` and `commitlint.config.js`. [Reason why added: local commit-policy readiness is now enforced by repository-owned tooling.]
- Available scripts:
  - `pnpm dev`
  - `pnpm typecheck`
  - `pnpm build`
  - `pnpm lint`
  - `pnpm preview`
  - `pnpm start`
  - `pnpm prepare`
  - `pnpm run preinstall`

## Current Repository State

- Next App Router entrypoints are `app/layout.tsx` and `app/page.tsx`.
- `app/page.tsx` composes the single `/` page in section order; browser-dependent behavior is isolated in client components for header/nav state, mobile menu portals, hero CTA annotation, testimonials carousel/dialog behavior, shared CTA buttons, and the back-to-top widget.
- UI source is organized by ownership: page sections live under `src/sections`, site chrome lives under `src/layout`, reusable primitives live under `src/shared/ui`, and app-level widgets live under `src/widgets`.
- Most UI files pair `component-name.tsx` with `component-name.module.css`.
- Ordinary frontend source filenames use lowercase kebab-case; React symbols remain `PascalCase`.
- The global CSS entrypoint is `app/globals.css`; shared global styles live in `src/styles`, route-local styles live beside their route files, and local Inter font files are loaded through `next/font/local`.
- Images, fonts, and icons live under `src/assets`; public web assets live under `public`.
- Raster UI images render through `next/image`; SVG logo/icon assets are rendered deliberately through `next/image` with per-image SVG optimization disabled.
- Vercel Analytics is enabled in `app/layout.tsx`.
- There is no configured test script in `package.json`.
- Project-support files now live under `.agents/project-files`.
- Repository line endings are defined by `.gitattributes` with LF for text files and binary handling for images/fonts.
