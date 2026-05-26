# Next Steps

Status: project-state immediate recommendation

## Recommended Next Steps

- Manually visually review the extra-wide Services, Pricing, and Testimonials intro illustrations at `1921px+` to confirm the width cap removes visible upscaling without making the section rows feel underweighted.
- Manually visually review section navigation at mobile, tablet, ordinary desktop, and `1921px+`: direct `/` and legacy `/#hero` loads, direct section hash loads, hero nav click to page top with the URL normalized to `/`, downward section navigation, upward navigation with the dockbar visible, and the below-dockbar title gap.

## Immediate Goal

- Keep the current scope limited to KAN-152 extra-wide image clarity plus the existing responsive breakpoint, section anchor, and dockbar-aware scroll behavior QA; avoid unrelated content, dependency, or carousel changes.

## Open Questions

- Whether higher-resolution `2x` source illustrations should be sourced or generated for Services, Pricing, and Testimonials if retina sharpness is required beyond avoiding layout upscaling.
- Whether the controlled site-nav scroll behavior should later be extracted into a small reusable scroll utility if more non-nav hash handling is added.
