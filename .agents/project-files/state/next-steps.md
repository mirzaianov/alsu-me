# Next Steps

Status: project-state immediate recommendation

## Recommended Next Steps

- Implement fluid scaling using the CSS `clamp()` function, starting with the typography and spacing tokens in `vars.css` to handle the `1921px+` transition more smoothly. [Reason why added: This will reduce the need for repetitive media query overrides at the extra-wide breakpoint.]
- Manually visually compare the OKLCH color-token migration against the previous palette on mobile, tablet, ordinary desktop, and `1921px+`, with extra attention to the Hero blobs, RoughNotation underline, floating header/menu surfaces, testimonial dialog backdrop, scrollbar colors, masks, and shared button states.
- After color parity is confirmed, continue the existing responsive QA for extra-wide Services, Pricing, and Testimonials intro illustrations plus section navigation/hash behavior.

## Immediate Goal

- Complete the modern-web-guidance improvements, starting with fluid scaling (`clamp()`) to simplify the responsive architecture.

## Open Questions

- Whether any downstream browser-support policy requires fallback colors for OKLCH despite current Next/Turbopack build support.
- Whether higher-resolution `2x` source illustrations should be sourced or generated for Services, Pricing, and Testimonials if retina sharpness is required beyond avoiding layout upscaling.
- Whether the controlled site-nav scroll behavior should later be extracted into a small reusable scroll utility if more non-nav hash handling is added.
