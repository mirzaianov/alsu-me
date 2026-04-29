# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-04-29: Added lazy-load boundaries for non-critical lower page sections in `src/app.jsx` and kept ESLint source parsing on latest ECMAScript for dynamic imports. [Reason why added: the structure now follows Vercel React bundle-splitting guidance while keeping the first visible page path eager.]
- 2026-04-29: Added Husky and commitlint commit-message checks with locked dev dependencies, a commit-msg hook, and repository commitlint rules. [Reason why added: commit-policy readiness was missing, and commits now have local enforcement for allowed types, task-code scopes, 50-character headers, and uppercase subject starts.]
- 2026-04-29: Reorganized the flat component folder into `src/components/sections`, `src/components/layout`, and `src/components/ui`, then updated relative imports and project docs. [Reason why added: source layout now matches the single-page site structure without adding routing, aliases, or behavior changes.]
- 2026-04-29: Renamed React source, hook, utility, and CSS module files to lowercase kebab-case and updated imports/docs. [Reason why added: KAN-105 aligns repository filenames with the global project-builder frontend naming convention while preserving React symbols and runtime behavior.]
- 2026-04-29: Initialized canonical project-support docs under `.agents/project-files` and added root `AGENTS.md` plus local settings. [Reason why added: future agents need a stable read path for project state, product scope, and architecture before making KAN-105 changes.]
