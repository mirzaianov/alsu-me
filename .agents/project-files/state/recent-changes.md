# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-05-01: Removed image preload from the shared SVG brand logo while keeping SVG optimization disabled. [Reason why added: `next/image` preload on the reusable logo emitted local dev browser warnings for an asset that is not the LCP target.]
- 2026-05-01: Rendered Vercel Analytics only for production builds and documented the behavior in project state. [Reason why added: local development should avoid the Analytics debug-script CSP warning while production deployments keep Web Analytics enabled.]
- 2026-05-01: Stopped tracking the generated `next-env.d.ts`, ignored it in Git, and made `pnpm typecheck` run `next typegen` before `tsc --noEmit`. [Reason why added: Next rewrites the generated route-types import differently across dev/build/typegen, so the generated file should not create Git churn.]
- 2026-05-01: Reworked the hero logo marquee from two independently animated rows into one animated track with duplicate flex rows, a logo-specific `-50%` keyframe token, and an assistive-tech-hidden duplicate. [Reason why added: the logo strip should loop continuously without the row reset gap while leaving the testimonial marquee animation unchanged.]
- 2026-05-01: Restored shared CSS animations after the Next.js migration by routing CSS Module animation declarations through global animation-name custom properties. [Reason why added: Next CSS Modules scoped direct keyframe names and broke runtime animation lookup.]
- 2026-05-01: Added strict App Router static guardrails for `/` and clarified production README wording around prebuilt static output served by the Next runtime. [Reason why added: the root route should remain statically prerendered in production without switching the deployment to static export.]
- 2026-04-30: Migrated the app from Vite React to Next.js App Router with root `app/` route files, route-local page/global CSS entrypoints, static `/` prerendering, Next metadata/font/image handling, client islands for browser-only behavior, updated scripts/dependencies, and refreshed docs. [Reason why added: KAN-110 changes the framework baseline while preserving the single-page product surface and matching the preferred Vercel-style route layout.]
- 2026-04-30: Migrated the Vite React app to strict TypeScript with `.ts`/`.tsx` source, typed Vite config, TypeScript-aware ESLint, `pnpm typecheck`, and PropTypes removal. [Reason why added: KAN-106 makes type checking a first-class project check while preserving current SPA behavior.]
- 2026-04-30: Migrated dependency management from npm to pnpm 10 with a pnpm lockfile, package-manager pin, install guard, updated Husky hook, README commands, and project-state docs. [Reason why added: KAN-107 makes pnpm the repository-owned package manager while preventing accidental npm installs.]
- 2026-04-30: Fixed site navigation tracking for lazy-loaded lower sections and adjusted the active-section observer threshold for tall sections. [Reason why added: header and footer nav state now remains aligned with section navigation after the lower page sections load asynchronously.]
