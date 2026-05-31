# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-05-31: Added responsive left/right CSS mask fades to the hero logo marquee and testimonials marquee. [Reason why added: the moving items should disappear softly at viewport edges across mobile, tablet, desktop, and extra-wide layouts without overlaying pointer-blocking elements.]
- 2026-05-31: Updated the pnpm build-script allowlist from `unrs-resolver@1.11.1` to `unrs-resolver@1.12.2`. [Reason why added: the lockfile now resolves `unrs-resolver@1.12.2`, so pnpm 11's strict build-script review rejected the package until the version-scoped approval matched.]
- 2026-05-31: Added delayed/eased pointer-hover pause handling for the hero logo marquee and testimonials marquee. [Reason why added: hover pause should feel less abrupt by waiting briefly, easing into the stop, and easing back out after the pointer leaves while preserving immediate focus/modal/offscreen pause semantics.]
- 2026-05-31: Updated the pnpm-only `preinstall` guard to accept Corepack's pnpm `.mjs` CLI entrypoint when the package-manager user agent is missing. [Reason why added: pnpm 11 is distributed as pure ESM, and Corepack may invoke `bin/pnpm.mjs`, which the previous guard misclassified as an unknown package manager.]
- 2026-05-28: Refined Hero activation threshold to match the IntersectionObserver's active zone (18vh). [Reason why added: To prevent the "Hero" link from becoming active too early when scrolling up, ensuring visual consistency with other section transitions.]
- 2026-05-28: Refactored dynamic URL hash synchronization to use a reactive side-effect on `activeLink`. [Reason why added: To ensure the address bar accurately reflects all sections, including short ones like About and Contacts, by syncing with the already-verified navbar indicator state.]
- 2026-05-28: Migrated all media queries to modern range syntax (`width >=`, `width <=`, and range syntax) across CSS modules and TypeScript files. [Reason why added: To align with modern CSS standards and improve code readability as per modern-web-guidance.]
- 2026-05-28: Fixed Prettier linting regressions in `testimonial-carousel.tsx` discovered during the final validation of the OKLCH color migration. [Reason why added: the codebase must remain compliant with the project's formatting standards after any manual or automatic changes.]
- 2026-05-27: Migrated the shared color system from HSLA/RGBA literals to OKLCH CSS custom properties, added alpha variants for existing overlay/gradient uses, and routed remaining direct color consumers through palette variables. [Reason why added: the code color representation should use OKLCH consistently while preserving the existing visual palette.]
- 2026-05-26: Changed the Hero nav target from `/#hero` to `/`, removed the synthetic page-top hero anchor, and kept backward compatibility by normalizing legacy `/#hero` visits back to `/` after scrolling to top. [Reason why added: the Hero nav item represents page home/top, while real hashes should be reserved for shareable in-page section deep links.]
