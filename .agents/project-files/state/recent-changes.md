# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-04-30: Migrated dependency management from npm to pnpm 10 with a pnpm lockfile, package-manager pin, install guard, updated Husky hook, README commands, and project-state docs. [Reason why added: KAN-107 makes pnpm the repository-owned package manager while preventing accidental npm installs.]
- 2026-04-30: Fixed site navigation tracking for lazy-loaded lower sections and adjusted the active-section observer threshold for tall sections. [Reason why added: header and footer nav state now remains aligned with section navigation after the lower page sections load asynchronously.]
- 2026-04-29: Reworked UI source into ownership-first folders with renamed layout, section, and widget components plus updated pricing/contact anchors. [Reason why added: component ownership is clearer than the previous classification layout, and internal navigation now matches renamed section concepts.]
- 2026-04-29: Added repository LF line-ending policy through `.gitattributes`, ESLint, and Prettier configuration. [Reason why added: line endings are now project-owned instead of depending on each developer's Git autocrlf settings.]
- 2026-04-29: Added lazy-load boundaries for non-critical lower page sections in `src/app.jsx` and kept ESLint source parsing on latest ECMAScript for dynamic imports. [Reason why added: the structure now follows Vercel React bundle-splitting guidance while keeping the first visible page path eager.]
- 2026-04-29: Added Husky and commitlint commit-message checks with locked dev dependencies, a commit-msg hook, and repository commitlint rules. [Reason why added: commit-policy readiness was missing, and commits now have local enforcement for allowed types, task-code scopes, 50-character headers, and uppercase subject starts.]
- 2026-04-29: Renamed React source, hook, utility, and CSS module files to lowercase kebab-case and updated imports/docs. [Reason why added: KAN-105 aligns repository filenames with the global project-builder frontend naming convention while preserving React symbols and runtime behavior.]
- 2026-04-29: Initialized canonical project-support docs under `.agents/project-files` and added root `AGENTS.md` plus local settings. [Reason why added: future agents need a stable read path for project state, product scope, and architecture before making KAN-105 changes.]
