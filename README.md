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

- `Vite`
- `React` • `Tailwind`

## Installation & Execution

### Install via Vite:

    git clone https://github.com/mirzaianov/alsu-me.git
    cd alsu-me
    npm install

### Create the .env file and add the following local variables:

- VITE_EMAIL=%your_email_address%
- VITE_GAT_KEY=%your_google_analytics_token% (if you use it)

You can remove Google Analytics from `index.html` with deleting code between `Google Tag Manager` comments.
You can remove Vercel Analytics from `App.jsx` with deleting the respective import and code between `Vercel Analytics` comments.

### Run in the development mode:

    npm run dev

Vite will start frontend server on http://localhost:5173/

## Building and Running for Production

    npm run build
    npm run preview

Vite will start frontend server on http://localhost:4173/

## Licence

### MIT license

You can use the code, but I ask you do not copy this site without giving me credit.

## Version History

- 1.0.0 First Release
