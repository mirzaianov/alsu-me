# Agent Instructions

## Project Context

This repository is `alsu-me`, a Vite + React single-page personal site for Alsu Karimova, a tutor, translator, and interpreter.

Before changing code, read:

1. `.agents/project-files/README.md`
2. `.agents/project-files/state/current-status.md`
3. `.agents/project-files/state/next-steps.md`
4. Any product or architecture file relevant to the task

## Tech Baseline

- Runtime: Node.js `24.15.0` from `.nvmrc`
- Package manager: npm, locked by `package-lock.json`
- Framework: Vite + React
- Styling: CSS Modules plus global CSS in `src/styles` and `src/index.css`
- Main checks:
  - `npm run lint`
  - `npm run build`

## Working Rules

- Preserve the existing component-per-section structure under `src/components`.
- Keep component symbols in PascalCase and hooks in `useCamelCase`.
- Keep app-owned styles in CSS Modules unless the style is genuinely global.
- Do not add routing, state libraries, test frameworks, deployment config, or new UI systems unless the task needs them.
- Do not read `.env` or local secret files unless the user explicitly asks.
- Treat `.agents/project-files/state` as the canonical project-state location.
