![MasterHead](./head.gif)

# ALSU.ME

## Description

### A personal website of Alsu Karimova - a professional tutor, translator & interpreter

### Features

- Compelling UI & Solid UX
- Major browser compatibility
- 3 Adaptive layouts + Responsiveness
- 6 sections
- Dynamic animated header
- Animations on scroll (\* no Safari support at the moment)
- Animated Hero section
- Animated CTA
- Animated infinite logos & testimonials
- Complex photo animations
- Micro animations

### Dependencies

- `Next.js` • `TypeScript`
- `React` • `CSS Modules` • `clsx`

## Installation & Execution

### Install

    git clone https://github.com/mirzaianov/alsu-me.git
    cd alsu-me
    nvm use 24.15.0
    corepack enable
    pnpm install

Supported toolchain: Node.js `24.15.0` LTS and pnpm `10.33.2`.

Vercel Analytics is configured in `app/layout.tsx`.

### Run in the development mode

    pnpm dev

Next.js will start the development server on [http://localhost:3000/](http://localhost:3000/)

## Building and Running for Production

    pnpm typecheck
    pnpm lint
    pnpm build
    pnpm preview

After `pnpm build`, `pnpm preview` serves the production build on [http://localhost:3000/](http://localhost:3000/)

## License

### MIT license

You can use the code, but I ask you do not copy this site without giving me credit.
