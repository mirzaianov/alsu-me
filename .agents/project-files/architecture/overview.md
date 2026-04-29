# Architecture Overview

## Runtime Shape

The app is a Vite-built React single-page frontend. `src/main.jsx` mounts `App` into the root DOM node, and `src/App.jsx` composes the page sections in order.

## Component Structure

Page sections and reusable UI pieces live in `src/components`. The established convention is:

- `Component.jsx` for React implementation
- `Component.module.css` for component-local styles
- Shared hooks in `src/hooks`
- Shared utilities in `src/utils`

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
