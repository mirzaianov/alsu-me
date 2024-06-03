/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(-30px, 30px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        slides: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        slideWords: {
          '0%': {
            'margin-top': '-144px',
          },
          '45%': {
            'margin-top': '-144px',
          },
          '48%': {
            'margin-top': '-72px',
          },
          '95%': {
            'margin-top': '-72px',
          },
          '98%': {
            'margin-top': '0px',
          },
          '100%': {
            'margin-top': '0px',
          },
        },
        rotateFirstNote: {
          '0%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '45%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
          '95%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(-360deg)',
          },
        },
        rotateSecondNote: {
          '0%': {
            transform: 'perspective(1000px) rotateX(180deg)',
          },
          '45%': {
            transform: 'perspective(1000px) rotateX(180deg)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '95%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
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
        walter: {
          '0%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(0px)' },
          '33%': { transform: 'translateY(-32px)' },
          '66%': { transform: 'translateY(-32px)' },
          '75%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        expandFromCorner: {
          '0%': { transform: 'scale(0) translate(100%, -100%)', opacity: '0' },
          '100%': { transform: 'scale(1) translate(0, 0)', opacity: '1' },
        },
        buttonPulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { opacity: '0.3' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
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
        pFadeIn: {
          '0%': { transform: 'translatex(80px)', opacity: '0' },
          '100%': { transform: 'none', opacity: '1' },
        },
        h2FadeIn: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        popUp: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        footerFadeIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        arrowBounce: {
          '0%': { transform: 'translateY(0)' },
          '33%': { transform: 'translateY(2px)' },
          '67%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(0)' },
        },
        dropdownOpen: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'none', opacity: '1' },
        },
        dropdownClose: {
          '0%': { transform: 'none', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        tada: 'tada 8s ease-in-out infinite',
        blob: 'blob 7s infinite',
        slides: 'slides 40s linear infinite',
        walter: 'walter 8s ease-in-out infinite',
        testimonials: 'slides 60s linear infinite',
        'slide-words': 'slideWords 20s linear infinite',
        'waving-hand': 'wavingHand 4s linear infinite',
        'waving-badge-3': 'wavindBadge 3s linear infinite',
        'waving-badge-4': 'wavindBadge 4s linear infinite',
        'rotate-first-note': 'rotateFirstNote 20s infinite',
        'rotate-second-note': 'rotateSecondNote 20s infinite',
        'expand-from-corner': 'expandFromCorner 0.3s ease-out backwards',
        'button-pulse': 'buttonPulse 1.2s ease infinite',
        'header-fade-in': 'headerFadeIn 0.7s 0.3s ease-in backwards',
        'logos-fade-in': 'logosFadeIn 0.7s 0.3s ease-in both',
        'hero-foto-fade-in': 'heroFotoFadeIn 0.5s 0.3s ease-in backwards',
        'hero-text-fade-in': 'heroTextFadeIn 0.5s 0.3s ease-in backwards',
        'p-fade-in': 'pFadeIn linear both',
        'pop-up': 'popUp linear both',
        'h2-fade-in': 'h2FadeIn linear both',
        'footer-fade-in': 'footerFadeIn linear both',
        'arrow-bounce': 'arrowBounce 1.5s linear infinite',
        'dropdown-open': 'dropdownOpen 0.3s ease-in forwards',
        'dropdown-close': 'dropdownClose 0.3s ease-out forwards',
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
      tablet: '576px',
      desktop: '992px',
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
