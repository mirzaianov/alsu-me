# Current Status

Status: project-state current repository state

## Project State

- Existing frontend app for the `alsu-me` personal website.
- The site is a single-page Next.js App Router experience with site chrome, hero, about, services, pricing, testimonials, contact, and back-to-top behavior.
- The README describes the product as a personal website for Alsu Karimova, a professional tutor, translator, and interpreter.

## Current Tooling Baseline

- Node.js `24.15.0` is pinned in `.nvmrc`; `package.json` allows Node `>=24.15.0`.
- pnpm is the package manager; `packageManager` pins `pnpm@11.0.0`, `package.json` requires pnpm `>=11.0.0`, and `pnpm-lock.yaml` is present. [Reason why added: package installs are now lockfile-owned by pnpm instead of npm.]
- A local `preinstall` guard in `scripts/ensure-pnpm.js` rejects non-pnpm installs and accepts pnpm lifecycles detected from the package-manager user agent, executable path, or Vercel's missing-user-agent install environment.
- Next.js is the frontend framework and production build tool, with `next.config.ts` typed by TypeScript. [Reason why added: KAN-110 migrated the app from Vite to Next.js while preserving the one-page route surface.]
- React and React DOM are at major version 19.
- GSAP is the project's JavaScript animation library for non-trivial motion, including continuous loops, measurement-based animation, sequencing, timeline control, and React lifecycle integration through `@gsap/react`. [Reason why added: the marquee needs responsive item-level wrapping without a visible duplicated-track reset seam on mobile browsers, and future animation work should not introduce competing animation libraries or ad hoc React GSAP patterns without a new decision.]
- App source is strict TypeScript, using `.ts`/`.tsx` files and Next-managed image/font/type declarations. [Reason why added: KAN-106 migrated source typing from PropTypes and JS/JSX to TypeScript, and KAN-110 replaced Vite client types with Next types.]
- `pnpm typecheck` runs `next typegen` before `tsc --noEmit`; `next-env.d.ts` is ignored because Next regenerates it for dev/build/typegen contexts. [Reason why added: Next 16 rewrites the generated route-types import between `.next/dev/types` and `.next/types`.]
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
- `app/page.tsx` composes the single `/` page in section order and exports static route guardrails so build-time prerendering fails loudly if request-time rendering is introduced. [Reason why added: production should keep the Next runtime while returning the root page from prebuilt static output.]
- Browser-dependent behavior is isolated in client components for header/nav state, mobile menu portals, hero CTA annotation, testimonials carousel/dialog behavior, shared CTA buttons, and the back-to-top widget.
- UI source is organized by ownership: page sections live under `src/sections`, site chrome lives under `src/layout`, reusable primitives live under `src/shared/ui`, and app-level widgets live under `src/widgets`.
- Most UI files pair `component-name.tsx` with `component-name.module.css`.
- Ordinary frontend source filenames use lowercase kebab-case; React symbols remain `PascalCase`.
- The global CSS entrypoint is `app/globals.css`; shared global styles live in `src/styles`, route-local styles live beside their route files, and local Inter font files are loaded through `next/font/local`.
- Styling follows a mobile-first approach: base styles target the smallest supported layout, with larger layouts layered through responsive overrides.
- `src/styles/animations.css` owns shared global keyframes and exposes animation-name custom properties for CSS Modules that need to reference those keyframes. [Reason why added: Next CSS Modules scope direct keyframe identifiers in module CSS, so shared animations must cross that boundary through explicit global tokens.]
- The hero logo marquee is a client component that renders one accessible set of logos and uses `@gsap/react`, `gsap.matchMedia()`, and a GSAP timeline to wrap individual logo items horizontally with width-aware `xPercent` transforms while respecting `prefers-reduced-motion`. [Reason why added: duplicated CSS tracks could show a shift or blink at the loop reset seam on Android Chrome and iPadOS Safari, and the timeline must rebuild cleanly across responsive breakpoint changes.]
- Images, fonts, and icons live under `src/assets`; public web assets live under `public`.
- Raster UI images render through `next/image` with `quality={100}` allowed by `next.config.ts`; the hero/about portraits use mobile assets as the default source and tablet assets from `min-width: 577px` through `getImageProps`/`picture` art direction. Height-constrained decorative images explicitly keep `width: auto` so Next's intrinsic image attributes do not distort aspect ratios. SVG logo/icon assets are rendered deliberately through `next/image` with per-image SVG optimization disabled, and the shared brand logo does not request image preload. [Reason why added: default Next image quality, lost mobile-first portrait source selection, and height-only CSS reduced visual fidelity after the KAN-110 migration.]
- Vercel Analytics is rendered from `app/layout.tsx` for production builds only, keeping the local dev CSP free of the Analytics debug-script warning. [Reason why added: the dev-only Vercel Analytics debug script is externally hosted and blocked by the project's local CSP.]
- There is no configured test script in `package.json`.
- Project-support files now live under `.agents/project-files`.
- Repository line endings are defined by `.gitattributes` with LF for text files and binary handling for images/fonts.
