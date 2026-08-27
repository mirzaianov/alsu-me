# Next Steps

Status: project-state immediate recommendation

## Recommended Next Steps

- Decide and implement the i18n route/content resolution model on top of `src/content/ru`, including the default-locale behavior for `/`, whether locale-prefixed routes such as `/ru` and `/en` are needed, and localized metadata generation. [Reason why added: the content extraction is now complete enough that i18n routing is the next structural dependency before any DB/CMS work.]
- Decide which content records truly need database or CMS editing after the i18n model is in place; likely candidates are testimonials, pricing/service packages, contact submissions, and booking-related data, while ordinary UI labels should stay in locale dictionaries. [Reason why added: moving all copy to a database would reduce type safety and make translation workflow harder without adding editing value.]
- Implement fluid scaling using the CSS `clamp()` function, starting with the typography and spacing tokens in `vars.css` to handle the `1921px+` transition more smoothly. [Reason why added: This will reduce the need for repetitive media query overrides at the extra-wide breakpoint.]
- Manually visually compare the OKLCH color-token migration against the previous palette on mobile, tablet, ordinary desktop, and `1921px+`, with extra attention to the Hero blobs, RoughNotation underline, floating header/menu surfaces, testimonial dialog backdrop, scrollbar colors, masks, and shared button states.
- After color parity is confirmed, continue the existing responsive QA for extra-wide Services, Pricing, and Testimonials intro illustrations plus section navigation/hash behavior.

## Immediate Goal

- Introduce i18n routing and locale-aware content resolution using the new `src/content/ru` boundary before adding DB/CMS storage.

## Open Questions

- Whether `/` should remain Russian permanently, redirect to `/ru`, or become locale-negotiated when an English locale is added.
- Whether testimonials, pricing/service packages, and contact/booking data must be editable without a code deploy.
- Whether any downstream browser-support policy requires fallback colors for OKLCH despite current Next/Turbopack build support.
- Whether higher-resolution `2x` source illustrations should be sourced or generated for Services, Pricing, and Testimonials if retina sharpness is required beyond avoiding layout upscaling.
- Whether the controlled site-nav scroll behavior should later be extracted into a small reusable scroll utility if more non-nav hash handling is added.
