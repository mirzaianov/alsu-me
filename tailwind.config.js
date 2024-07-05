/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '25%': { transform: 'translate(-50%, 0%) scale(0.9)' },
          '50%': { transform: 'translate(-50%, 50%) scale(1.1)' },
          '75%': { transform: 'translate(0%, 50%) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(-100%, -100%) scale(1.1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
          '75%': { transform: 'translate(0%, 0%) scale(1.1)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '25%': { transform: 'translate(50%, 0%) scale(0.9)' },
          '50%': { transform: 'translate(50%, -50%) scale(1.1)' },
          '75%': { transform: 'translate(0%, -50%) scale(0.9)' },
        },
        slides: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideWords: {
          '0%': { 'margin-top': '-144px' },
          '45%': { 'margin-top': '-144px' },
          '48%': { 'margin-top': '-72px' },
          '95%': { 'margin-top': '-72px' },
          '98%': { 'margin-top': '0px' },
          '100%': { 'margin-top': '0px' },
        },
        slideWordsTablet: {
          '0%': { 'margin-top': '-200px' },
          '45%': { 'margin-top': '-200px' },
          '48%': { 'margin-top': '-100px' },
          '95%': { 'margin-top': '-100px' },
          '98%': { 'margin-top': '0px' },
          '100%': { 'margin-top': '0px' },
        },
        slideWordsDesktop: {
          '0%': { 'margin-top': '-280px' },
          '45%': { 'margin-top': '-280px' },
          '48%': { 'margin-top': '-140px' },
          '95%': { 'margin-top': '-140px' },
          '98%': { 'margin-top': '0px' },
          '100%': { 'margin-top': '0px' },
        },
        rotateFirstNote: {
          '0%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '45%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(-180deg)' },
          '95%': { transform: 'perspective(1000px) rotateX(-180deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(-360deg)' },
        },
        rotateSecondNote: {
          '0%': { transform: 'perspective(1000px) rotateX(180deg)' },
          '45%': { transform: 'perspective(1000px) rotateX(180deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '95%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(-180deg)' },
        },
        wavingHand: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'scale(1.2) rotate(-4.0deg)' },
          '50%': { transform: 'scale(1.2) rotate(10.0deg)' },
          '60%': { transform: 'scale(1) rotate(0.0deg)' },
          '100%': { transform: 'scale(1) rotate( 0.0deg)' },
        },
        wavindBadge: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(3px)' },
          '75%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(0)' },
        },
        tada: {
          '0%, 40%': { transform: 'scale(1) rotate(0deg)' },
          '45%': { transform: 'scale(1.1) rotate(-8deg)' },
          '47%': { transform: 'scale(1.1) rotate(8deg)' },
          '48%': { transform: 'scale(1.1) rotate(-5deg)' },
          '49%': { transform: 'scale(1.1) rotate(5deg)' },
          '50%': { transform: 'scale(1.1) rotate(-3deg)' },
          '51%': { transform: 'scale(1.1) rotate(3deg)' },
          '52%': { transform: 'scale(1.1) rotate(-2deg)' },
          '53%': { transform: 'scale(1.1) rotate(2deg)' },
          '54%': { transform: 'scale(1.1) rotate(-1deg)' },
          '55%': { transform: 'scale(1.1) rotate(1deg)' },
          '60%, 100%': { transform: 'scale(1) rotate(0deg)' },
        },
        headerFadeIn: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        logosFadeIn: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        heroFotoFadeIn: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        heroTextFadeIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        heroBg: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pFadeIn: {
          '0%': { transform: 'translateY(80px)', opacity: '0' },
          '100%': { transform: 'none', opacity: '1' },
        },
        arrowBounce: {
          '0%': { transform: 'translateY(0)' },
          '33%': { transform: 'translateY(2px)' },
          '67%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(0)' },
        },
        dropdownOpen: {
          '0%': { transform: 'translateX(110%)' },
          '100%': { transform: 'none' },
        },
        dropdownClose: {
          '0%': { transform: 'none' },
          '100%': { transform: 'translateX(110%)' },
        },
        imageFadeInRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '0.7' },
        },
        imageFadeInLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '0.7' },
        },
        expand1: {
          '0%': { transform: 'translate(-25%, 100%) rotate(5deg)' },
          '100%': { transform: 'none' },
        },
        expand2: {
          '0%': { transform: 'translate(0%, 25%) rotate(10deg)' },
          '100%': { transform: 'none' },
        },
        expand3: {
          '0%': { transform: 'translate(25%, -50%) rotate(15deg)' },
          '100%': { transform: 'none' },
        },
        expand4: {
          '0%': { transform: 'translate(50%, -100%) rotate(20deg)' },
          '100%': { transform: 'none' },
        },
        expand1Tablet: {
          '0%': { transform: 'translate(15%, 75%) rotate(5deg)' },
          '100%': { transform: 'none' },
        },
        expand2Tablet: {
          '0%': { transform: 'translate(-80%, 75%) rotate(10deg)' },
          '100%': { transform: 'none' },
        },
        expand3Tablet: {
          '0%': { transform: 'translate(100%, -100%) rotate(15deg)' },
          '100%': { transform: 'none' },
        },
        expand4Tablet: {
          '0%': { transform: 'translate(20%, -100%) rotate(20deg)' },
          '100%': { transform: 'none' },
        },
        expand1Desktop: {
          '0%': { transform: 'translateX(120%) rotate(5deg)' },
          '100%': { transform: 'none' },
        },
        expand2Desktop: {
          '0%': { transform: 'translateX(40%) rotate(10deg)' },
          '100%': { transform: 'none' },
        },
        expand3Desktop: {
          '0%': { transform: 'translateX(-50%) rotate(15deg)' },
          '100%': { transform: 'none' },
        },
        expand4Desktop: {
          '0%': { transform: 'translateX(-140%) rotate(20deg)' },
          '100%': { transform: 'none' },
        },
        cardLeftFadeIn: {
          '0%': { transform: 'translateY(10%) rotate(5deg)' },
          '100%': { transform: 'none' },
        },
        cardRightFadeIn: {
          '0%': { transform: 'translateY(10%) rotate(-5deg)' },
          '100%': { transform: 'none' },
        },
        shape1: {
          '0%, 100%': { transform: 'translate(-80%, -50%) scale(1)' },
          '50%': { transform: 'translate(-70%, -30%) scale(1.1)' },
        },
        shape2: {
          '0%, 100%': { transform: 'translate(5%, 5%) scale(1.1)' },
          '50%': { transform: 'translate(5%, -5%) scale(1.2)' },
        },
        shape3: {
          '0%, 100%': { transform: 'translate(100%, 50%) scale(1)' },
          '50%': { transform: 'translate(80%, 40%) scale(1.1)' },
        },
        ctaRotate: {
          '0%': { transform: 'none' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ctaBounce: {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'translateX(15%)' },
        },
        modalOpen: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'none' },
        },
        modalBgOpen: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        //
        tada: 'tada 8s ease-in-out infinite',
        //
        blob: 'blob 12s 2s ease-in-out infinite both',
        blob2: 'blob2 12s ease-in-out infinite both',
        blob3: 'blob3 12s 1s ease-in-out infinite both',
        'blob-tablet': 'blob 18s 3s ease-in-out infinite both',
        'blob2-tablet': 'blob2 18s ease-in-out infinite both',
        'blob3-tablet': 'blob3 18s 2s ease-in-out infinite both',
        'blob-desktop': 'blob 26s 5s ease-in-out infinite both',
        'blob2-desktop': 'blob2 26s ease-in-out infinite both',
        'blob3-desktop': 'blob3 26s 3s ease-in-out infinite both',
        //
        slides: 'slides 40s linear infinite',
        'slides-tablet': 'slides 60s linear infinite',
        //
        testimonials: 'slides 120s linear infinite',
        //
        'slide-words': 'slideWords 20s linear infinite',
        'slide-words-tablet': 'slideWordsTablet 20s linear infinite',
        'slide-words-desktop': 'slideWordsDesktop 20s linear infinite',
        //
        'header-fade-in': 'headerFadeIn 0.5s 0.2s ease-in backwards',
        'logos-fade-in': 'logosFadeIn 0.5s 0.2s ease-in both',
        'hero-foto-fade-in': 'heroFotoFadeIn 0.5s ease-in backwards',
        'hero-text-fade-in': 'heroTextFadeIn 0.5s ease-in backwards',
        'hero-bg': 'heroBg 0.5s 0.2s ease-in backwards',
        //
        'waving-hand': 'wavingHand 4s linear infinite',
        'waving-badge-3': 'wavindBadge 3s linear infinite',
        'waving-badge-4': 'wavindBadge 4s linear infinite',
        //
        'rotate-first-note': 'rotateFirstNote 20s infinite',
        'rotate-second-note': 'rotateSecondNote 20s infinite',
        //
        'p-fade-in': 'pFadeIn linear both',
        //
        'arrow-bounce': 'arrowBounce 1.5s linear infinite',
        //
        'dropdown-open': 'dropdownOpen 0.3s ease-in both',
        'dropdown-close': 'dropdownClose 0.3s ease-out both',
        //
        'image-fade-in-right': 'imageFadeInRight linear both',
        'image-fade-in-left': 'imageFadeInLeft linear both',
        //
        'expand-1': 'expand1 linear both',
        'expand-2': 'expand2 linear both',
        'expand-3': 'expand3 linear both',
        'expand-4': 'expand4 linear both',
        'expand-1-tablet': 'expand1Tablet linear both',
        'expand-2-tablet': 'expand2Tablet linear both',
        'expand-3-tablet': 'expand3Tablet linear both',
        'expand-4-tablet': 'expand4Tablet linear both',
        'expand-1-desktop': 'expand1Desktop linear both',
        'expand-2-desktop': 'expand2Desktop linear both',
        'expand-3-desktop': 'expand3Desktop linear both',
        'expand-4-desktop': 'expand4Desktop linear both',
        //
        'card-left-fade-in': 'cardLeftFadeIn linear both',
        'card-right-fade-in': 'cardRightFadeIn linear both',
        //
        'shape-1': 'shape1 5s ease-in-out infinite both',
        'shape-2': 'shape2 5s ease-in-out infinite both',
        'shape-3': 'shape3 5s 1.5s ease-in-out infinite both',
        //
        cta: 'ctaRotate 500ms ease-out backwards, ctaBounce 1500ms 500ms linear infinite',
        //
        'modal-open': 'modalOpen 0.3s ease-in',
        'modal-bg-open': 'modalBgOpen 0.3s ease-in',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      neutral: {
        0: 'hsla(0, 0%, 100%, 1)',
        70: 'hsla(213, 5%, 37%, 1)',
        90: 'hsla(219, 40%, 11%, 1)',
      },
      primary: {
        10: 'hsla(234, 86%, 57%, 1)',
        20: 'hsla(40, 100%, 55%, 1)',
        30: 'hsla(353, 100%, 65%, 1)',
        40: 'hsla(162, 77%, 76%, 1)',
        50: 'hsla(255, 62%, 72%, 1)',
      },
      secondary: {
        15: 'hsla(235, 85%, 95%, 1)',
        25: 'hsla(40, 100%, 75%, 1)',
        35: 'hsla(353, 100%, 81%, 1)',
        45: 'hsla(162, 76%, 87%, 1)',
        55: 'hsla(256, 61%, 94%, 1)',
      },
      text: {
        0: 'hsla(0, 0%, 100%, 1)',
        10: 'hsla(234, 86%, 57%, 1)',
        70: 'hsla(213, 5%, 37%, 1)',
        90: 'hsla(219, 40%, 11%, 1)',
      },
    },
    screens: {
      tablet: '577px',
      desktop: '1061px',
    },
    fontSize: {
      body: ['16px'],
      'body-tight': [
        '16px',
        {
          lineHeight: '1.25em',
        },
      ],
      'body-bold': [
        '16px',
        {
          fontWeight: '700',
        },
      ],
      'body-l': ['20px'],
      'body-l-tight': [
        '20px',
        {
          lineHeight: '1.25em',
        },
      ],
      'body-l-bold': [
        '20px',
        {
          fontWeight: '700',
        },
      ],
      button: [
        '16px',
        {
          lineHeight: '1.5em',
          fontWeight: '700',
        },
      ],
      'button-l': [
        '24px',
        {
          lineHeight: '1.5em',
          fontWeight: '700',
        },
      ],
      'heading-s': [
        '24px',
        {
          lineHeight: '1.5em',
          fontWeight: '700',
        },
      ],
      'heading-m': [
        '32px',
        {
          lineHeight: '1.5em',
          fontWeight: '700',
        },
      ],
      'heading-l': [
        '40px',
        {
          lineHeight: '1.25em',
          fontWeight: '700',
        },
      ],
      'heading-xl': [
        '56px',
        {
          lineHeight: '1.25em',
          fontWeight: '700',
        },
      ],
    },
  },
  plugins: [],
};
