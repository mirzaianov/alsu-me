# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-05-13: Added animation-origin performance notes and aligned CSS/GSAP motion with them by removing `transition: all`, reducing decorative CSS loops for reduced-motion users, and changing the pricing sale badge to a one-shot ScrollTrigger reveal. [Reason why added: keeps simple animation in CSS while reserving scrubbed GSAP work for effects that need continuous scroll progress.]
- 2026-05-13: Added a seven-day pnpm `minimumReleaseAge` policy and narrowed build-script allowances to `sharp@0.34.5` and `unrs-resolver@1.11.1`. [Reason why added: improves supply-chain guardrails while keeping required native package install scripts available for fresh installs.]
- 2026-05-09: Made the pnpm preinstall guard accept pnpm lifecycles detected from `npm_execpath` and Vercel's missing-user-agent install environment. [Reason why added: Vercel Corepack installs can reach lifecycle scripts without a package-manager user-agent, causing the guard to fail during `pnpm install`.]
- 2026-05-05: Documented GSAP as the project animation library in architecture docs, README dependencies, and ADR-001. [Reason why added: future non-trivial JavaScript animation work should use one established animation library instead of re-litigating Motion, CSS-only loops, or hand-rolled frame loops.]
- 2026-05-05: Replaced the hero logo marquee's duplicated CSS track with a GSAP item-level seamless loop and removed the old logo-row component/keyframe. [Reason why added: Android Chrome and iPadOS Safari still showed visible loop-boundary artifacts with duplicated-track CSS animation.]
- 2026-05-05: Gave the back-to-top widget an explicit square inline/block size and prevented its arrow SVG from flex-shrinking. [Reason why added: iPadOS Safari could render the fixed control horizontally compressed when its size was inferred from `aspect-ratio`, padding, and SVG content.]
- 2026-05-05: Changed site navigation active-section detection from a 40% section visibility threshold to a viewport-center intersection band. [Reason why added: tall services and pricing sections on narrow mobile screens could never reach the old ratio threshold, so their mobile menu links did not receive the active underline.]
- 2026-05-05: Added explicit `width: auto` to height-constrained decorative image styles in services, pricing, testimonials, and contact sections. [Reason why added: `next/image` adds intrinsic width/height attributes, so height-only CSS could distort aspect ratios unless width remains automatic.]
