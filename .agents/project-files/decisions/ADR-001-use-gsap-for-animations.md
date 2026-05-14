# ADR-001: Use GSAP For JavaScript Animations

## Status

Accepted

## Date

2026-05-05

## Context

The site uses CSS transitions and keyframes for simple visual effects, but the
hero logo marquee exposed browser-specific issues on Android Chrome and iPadOS
Safari when a duplicated CSS track reset at the loop boundary.

Continuous or width-aware animations need reliable timing, transform control,
and responsive measurement without rewriting animation loops by hand.

## Decision

Use GSAP as the project's JavaScript animation library.

CSS remains appropriate for simple hover states, transitions, and static
keyframes. Use GSAP when animation behavior depends on rendered measurements,
continuous looping, sequencing, timeline control, or browser-sensitive transform
handling.

Performance-sensitive animation rules:

- Prefer `transform` and `opacity` for both CSS and GSAP motion.
- Do not use `transition: all`; list the exact properties that should animate.
- Decorative CSS loops must respect `prefers-reduced-motion`.
- Use ScrollTrigger scrub only when animation progress must track scroll
  position. One-shot reveals should play once and then release temporary
  performance hints such as `will-change`.

## Alternatives Considered

### CSS Keyframes

- Pros: no runtime dependency, simple for static effects.
- Cons: duplicated-track marquees can expose reset seams and fractional-width
  artifacts on mobile browsers.
- Rejected for continuous responsive marquee behavior.

### Motion

- Pros: React-friendly API and good declarative ergonomics.
- Cons: its repeat loop still restarts transform animations for this marquee
  case, while GSAP documents a helper pattern specifically for seamless
  horizontal loops.
- Rejected for the logo marquee.

### Hand-Rolled `requestAnimationFrame`

- Pros: full control.
- Cons: more code, easier to freeze or overlap rows, and harder to maintain.
- Rejected in favor of a proven animation library.

## Consequences

- New non-trivial JavaScript animations should use GSAP before introducing a
  second animation library.
- Existing CSS animations do not need to be migrated unless they show real
  browser or maintenance issues.
- GSAP timeline setup belongs in client components and must clean up with
  `gsap.context(...).revert()` or equivalent teardown.
- Finite GSAP reveals should avoid permanent `will-change` and should prefer
  one-shot ScrollTrigger behavior unless the design needs continuous scroll
  progress.
