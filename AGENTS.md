# Agent Instructions

## Project Context

This repository is `alsu-me`, a Next.js + React + TypeScript single-page personal site for Alsu Karimova, a tutor, translator, and interpreter.

Before changing code, read:

1. `.agents/project-files/README.md`
2. `.agents/project-files/state/current-status.md`
3. `.agents/project-files/state/next-steps.md`
4. Any product or architecture file relevant to the task

## Tech Baseline

- Runtime: Node.js `24.15.0` from `.nvmrc`
- Package manager: pnpm `10.33.2`, locked by `pnpm-lock.yaml`
- Framework: Next.js App Router + React
- Language: TypeScript for app source and Next config
- Styling: CSS Modules plus global CSS in `app/globals.css` and shared global style files in `src/styles`
- Main checks:
  - `pnpm typecheck`
  - `pnpm lint`
  - `pnpm build`

## Working Rules

- Preserve the ownership-first UI layout: page sections in `src/sections`, site chrome in `src/layout`, reusable primitives in `src/shared/ui`, and app-level widgets in `src/widgets`.
- Keep component symbols in PascalCase and hooks in `useCamelCase`.
- Keep app-owned styles in CSS Modules unless the style is genuinely global.
- Do not add extra routes, state libraries, test frameworks, deployment config, or new UI systems unless the task needs them.
- Do not read `.env` or local secret files unless the user explicitly asks.
- Treat `.agents/project-files/state` as the canonical project-state location.
