# Architecture Overview

## Runtime Shape

The app is a Vite-built React single-page frontend. `src/main.jsx` mounts `App` into the root DOM node, and `src/app.jsx` composes the page sections in order.

## Component Structure

Frontend UI code is split by intent:

- `component-name.jsx` for React implementation files
- `component-name.module.css` for component-local styles
- Page sections live under `src/components/sections/<section-name>`
- Site chrome lives under `src/components/layout/<component-name>`
- Reusable primitives live under `src/components/ui/<component-name>`
- Shared hooks in `src/hooks`
- Shared utilities in `src/utils`

React component symbols remain `PascalCase`; only ordinary source filenames use lowercase kebab-case.

## Styling

- CSS Modules are used for component styles.
- Global tokens and base styles live in `src/styles` and `src/index.css`.
- Vite is configured to use Lightning CSS for CSS processing and CSS Modules behavior.

## Assets

- Product images, testimonial photos, icons, and fonts live under `src/assets`.
- Browser and social assets live under `public`.

## Build And Quality

- `npm run lint` runs ESLint with React, hooks, import, jsx-a11y, and Prettier integrations.
- `npm run build` runs the Vite production build.
- No automated test runner is currently configured.
