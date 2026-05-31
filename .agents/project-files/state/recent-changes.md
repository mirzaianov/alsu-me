# Recent Changes

Status: project-state recent implementation and documentation history

Keep only the 10 most recent entries.

## Entries

- 2026-05-31: Updated the pnpm build-script allowlist from `unrs-resolver@1.11.1` to `unrs-resolver@1.12.2`. [Reason why added: the lockfile now resolves `unrs-resolver@1.12.2`, so pnpm 11's strict build-script review rejected the package until the version-scoped approval matched.]
- 2026-05-31: Updated the pnpm-only `preinstall` guard to accept Corepack's pnpm `.mjs` CLI entrypoint when the package-manager user agent is missing. [Reason why added: pnpm 11 is distributed as pure ESM, and Corepack may invoke `bin/pnpm.mjs`, which the previous guard misclassified as an unknown package manager.]
- 2026-05-28: Refined Hero activation threshold to match the IntersectionObserver's active zone (18vh). [Reason why added: To prevent the "Hero" link from becoming active too early when scrolling up, ensuring visual consistency with other section transitions.]
- 2026-05-28: Refactored dynamic URL hash synchronization to use a reactive side-effect on `activeLink`. [Reason why added: To ensure the address bar accurately reflects all sections, including short ones like About and Contacts, by syncing with the already-verified navbar indicator state.]
- 2026-05-28: Migrated all media queries to modern range syntax (`width >=`, `width <=`, and range syntax) across CSS modules and TypeScript files. [Reason why added: To align with modern CSS standards and improve code readability as per modern-web-guidance.]
- 2026-05-28: Fixed Prettier linting regressions in `testimonial-carousel.tsx` discovered during the final validation of the OKLCH color migration. [Reason why added: the codebase must remain compliant with the project's formatting standards after any manual or automatic changes.]
- 2026-05-27: Migrated the shared color system from HSLA/RGBA literals to OKLCH CSS custom properties, added alpha variants for existing overlay/gradient uses, and routed remaining direct color consumers through palette variables. [Reason why added: the code color representation should use OKLCH consistently while preserving the existing visual palette.]
- 2026-05-26: Changed the Hero nav target from `/#hero` to `/`, removed the synthetic page-top hero anchor, and kept backward compatibility by normalizing legacy `/#hero` visits back to `/` after scrolling to top. [Reason why added: the Hero nav item represents page home/top, while real hashes should be reserved for shareable in-page section deep links.]
- 2026-05-26: Capped Services, Pricing, and Testimonials intro illustrations to their `368px` source width on `1921px+` screens and updated their Next image `sizes` hints to request the matching intrinsic candidate. [Reason why added: the section images looked soft on extra-large screens because the layout could render them wider than the available PNG source width.]
- 2026-05-26: Moved the canonical desktop breakpoint from `1061px` to `1161px`, documented the responsive ladder, aligned normal section `scroll-margin-top` with section vertical margins, added dockbar-aware controlled navigation offsets for upward/hash scrolling, and moved the `#hero` hash target to the true page top. [Reason why added: tablet layouts should persist through `1160px`, normal section anchors should land with predictable section spacing, upward navigation must account for the appearing dockbar, and `/#hero` should land at the top before hydration.]
