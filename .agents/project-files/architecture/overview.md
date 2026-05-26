# Architecture Overview

## Runtime Shape

The app is a Next.js App Router single-page frontend. `app/layout.tsx` owns document metadata, local font loading, global CSS, Vercel Analytics, and portal roots. `app/page.tsx` composes the home page sections in order at `/`.

The route is statically prerendered by Next. Browser-dependent behavior is isolated in client components for header/nav state, Base UI mobile menu dialog behavior, hero CTA annotation, testimonial carousel/dialog behavior, shared CTA buttons, and the back-to-top widget.

## Component Structure

Frontend UI code is split by ownership:

- `component-name.tsx` for React implementation files
- `component-name.module.css` for component-local styles
- Page section React components live under `src/sections/<section-name>`
- Site chrome lives under `src/layout/<component-name>`
- Reusable primitives live under `src/shared/ui/<component-name>`
- App-level widgets live under `src/widgets/<widget-name>`
- Shared hooks in `src/hooks`
- Shared and feature-specific non-component utilities live in folders under `src/utils/<utility-area>`

React component symbols remain `PascalCase`; only ordinary source filenames use lowercase kebab-case.

Section anchor ids follow section concepts. The pricing and contact sections use `id="pricing"` and `id="contact"` for internal navigation targets.

## Styling

- CSS Modules are used for component and route-local styles.
- Styles follow a mobile-first approach: base rules target the smallest supported layout, with larger layouts layered through responsive overrides.
- The canonical viewport tiers are mobile at `max-width: 576px`, tablet from `577px` through `1060px`, desktop from `1061px`, and extra-wide from `1921px`.
- The matching container tokens live in `src/styles/vars.css`: `--container-mobile: 432px`, `--container-tablet: 720px`, `--container-desktop: 1300px`, `--container-wide: 1600px`, and `--container-extra-wide: 1920px`.
- Most responsive CSS should use the project ladder as mobile-first `min-width` queries at `577px`, `1061px`, and `1921px`; `max-width: 576px` is used where source selection or GSAP matchMedia needs an explicit mobile range. The back-to-top widget has an additional local `1761px` threshold for its own placement behavior.
- The global CSS entrypoint is `app/globals.css`; shared global tokens, base styles, and animations live in `src/styles`.
- Local Inter font files are loaded through `next/font/local` in `app/layout.tsx`.

## Interaction Primitives

- Base UI is the project's headless React primitive library for accessible client-side UI interactions such as dialogs and dismissible overlays.
- Keep Base UI usage scoped to interaction semantics and lifecycle behavior; visual motion still follows the CSS/GSAP animation boundary below.

## Animation

- GSAP is the project animation library for non-trivial JavaScript-driven animations.
- Use GSAP for continuous loops, responsive or measurement-based motion, sequencing, timeline control, and browser-sensitive transform behavior.
- CSS transitions and keyframes remain acceptable for simple hover states, small decorative effects, and static animations that do not need runtime measurement or timeline control.
- GSAP setup belongs in client components and should clean up timelines/inline styles through `gsap.context(...).revert()` or an equivalent teardown.
- Infinite marquees and carousel loops should use pixels per second as the source of truth, with timeline duration derived from measured loop width. This keeps content length and responsive layout changes from silently changing the intended motion pace.
- Horizontal marquee surfaces should share responsive speed targets where visual consistency matters. Current hero logo and testimonial carousel targets are 20px/s on mobile, 28px/s on tablet, and 44px/s on desktop.
- Autoplaying carousel content needs user control and motion restraint: respect reduced motion, pause when a user opens card content, and treat explicit pause/stop or hover/focus pause behavior as required before adding more moving testimonial surfaces.
- Animation performance rules: animate `transform`/`opacity` where possible, avoid `transition: all`, disable decorative loops for reduced-motion users, and reserve ScrollTrigger scrub for effects that truly need scroll-position progress.

## Assets

- Product images, testimonial photos, icons, and fonts live under `src/assets`.
- Browser and social assets live under `public`.
- Raster UI images are rendered through `next/image`; SVG logo/icon assets are kept as static assets and rendered deliberately through `next/image` with SVG optimization disabled per image.

## Build And Quality

- `pnpm typecheck` runs `tsc --noEmit` with the Next TypeScript plugin.
- `pnpm lint` runs ESLint flat config with Next Core Web Vitals, TypeScript, React, hooks, import, accessibility, and Prettier coverage.
- `pnpm build` runs a Next production build.
- No automated test runner is currently configured.
