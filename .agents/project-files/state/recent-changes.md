# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-05-05: Gave the back-to-top widget an explicit square inline/block size and prevented its arrow SVG from flex-shrinking. [Reason why added: iPadOS Safari could render the fixed control horizontally compressed when its size was inferred from `aspect-ratio`, padding, and SVG content.]
- 2026-05-05: Changed site navigation active-section detection from a 40% section visibility threshold to a viewport-center intersection band. [Reason why added: tall services and pricing sections on narrow mobile screens could never reach the old ratio threshold, so their mobile menu links did not receive the active underline.]
- 2026-05-05: Added explicit `width: auto` to height-constrained decorative image styles in services, pricing, testimonials, and contact sections. [Reason why added: `next/image` adds intrinsic width/height attributes, so height-only CSS could distort aspect ratios unless width remains automatic.]
- 2026-05-05: Raised raster `next/image` output to quality 100 and restored mobile-first hero/about portrait art direction with mobile defaults and tablet sources from `min-width: 577px`. [Reason why added: the KAN-110 migration replaced native `img` delivery with Next optimization defaults, recompressed images at quality 75, and initially lost the old responsive portrait source selection.]
- 2026-05-01: Removed image preload from the shared SVG brand logo while keeping SVG optimization disabled. [Reason why added: `next/image` preload on the reusable logo emitted local dev browser warnings for an asset that is not the LCP target.]
- 2026-05-01: Rendered Vercel Analytics only for production builds and documented the behavior in project state. [Reason why added: local development should avoid the Analytics debug-script CSP warning while production deployments keep Web Analytics enabled.]
- 2026-05-01: Stopped tracking the generated `next-env.d.ts`, ignored it in Git, and made `pnpm typecheck` run `next typegen` before `tsc --noEmit`. [Reason why added: Next rewrites the generated route-types import differently across dev/build/typegen, so the generated file should not create Git churn.]
- 2026-05-01: Reworked the hero logo marquee from two independently animated rows into one animated track with duplicate flex rows, a logo-specific `-50%` keyframe token, and an assistive-tech-hidden duplicate. [Reason why added: the logo strip should loop continuously without the row reset gap while leaving the testimonial marquee animation unchanged.]
- 2026-05-01: Restored shared CSS animations after the Next.js migration by routing CSS Module animation declarations through global animation-name custom properties. [Reason why added: Next CSS Modules scoped direct keyframe names and broke runtime animation lookup.]
- 2026-05-01: Added strict App Router static guardrails for `/` and clarified production README wording around prebuilt static output served by the Next runtime. [Reason why added: the root route should remain statically prerendered in production without switching the deployment to static export.]
