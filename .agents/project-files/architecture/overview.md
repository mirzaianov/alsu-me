# Architecture Overview

## Runtime Shape

The app is a Vite-built React single-page frontend. `src/main.tsx` mounts `App` into the root DOM node, and `src/app.tsx` composes the page sections in order. The critical header, hero, and about sections render eagerly; lower page sections are lazy-loaded with static dynamic imports.

## Component Structure

Frontend UI code is split by ownership:

- `component-name.tsx` for React implementation files
- `component-name.module.css` for component-local styles
- Page sections and their private helpers live under `src/sections/<section-name>`
- Site chrome lives under `src/layout/<component-name>`
- Reusable primitives live under `src/shared/ui/<component-name>`
- App-level widgets live under `src/widgets/<widget-name>`
- Shared hooks in `src/hooks`
- Shared utilities in `src/utils`

React component symbols remain `PascalCase`; only ordinary source filenames use lowercase kebab-case.

Section anchor ids follow section concepts. The pricing and contact sections use `id="pricing"` and `id="contact"` for internal navigation targets.

## Styling

- CSS Modules are used for component styles.
- Global tokens and base styles live in `src/styles` and `src/index.css`.
- Vite is configured to use Lightning CSS for CSS processing and CSS Modules behavior.

## Assets

- Product images, testimonial photos, icons, and fonts live under `src/assets`.
- Browser and social assets live under `public`.

## Build And Quality

- `pnpm typecheck` runs `tsc -b` across the app and Vite config.
- `pnpm lint` runs ESLint with TypeScript, React, hooks, import, jsx-a11y, and Prettier integrations.
- `pnpm build` runs TypeScript project checks before the Vite production build.
- No automated test runner is currently configured.
