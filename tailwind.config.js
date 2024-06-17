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
            transform: 'translate(-25px, 25px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        blobTablet: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(-25px, 25px) scale(1.1)',
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
        slideWordsTablet: {
          '0%': {
            'margin-top': '-200px',
          },
          '45%': {
            'margin-top': '-200px',
          },
          '48%': {
            'margin-top': '-100px',
          },
          '95%': {
            'margin-top': '-100px',
          },
          '98%': {
            'margin-top': '0px',
          },
          '100%': {
            'margin-top': '0px',
          },
        },
        slideWordsDesktop: {
          '0%': {
            'margin-top': '-280px',
          },
          '45%': {
            'margin-top': '-280px',
          },
          '48%': {
            'margin-top': '-140px',
          },
          '95%': {
            'margin-top': '-140px',
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
        heroFotoFadeIn: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        heroTextFadeIn: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
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
      },
      animation: {
        tada: 'tada 8s ease-in-out infinite',
        blob: 'blob 8s infinite',
        'blob-tablet': 'blobTablet 8s infinite',
        slides: 'slides 60s linear infinite',
        'slides-tablet': 'slides 60s linear infinite',
        testimonials: 'slides 60s linear infinite',
        'slide-words': 'slideWords 20s linear infinite',
        'slide-words-tablet': 'slideWordsTablet 20s linear infinite',
        'slide-words-desktop': 'slideWordsDesktop 20s linear infinite',
        'waving-hand': 'wavingHand 4s linear infinite',
        'waving-badge-3': 'wavindBadge 3s linear infinite',
        'waving-badge-4': 'wavindBadge 4s linear infinite',
        'rotate-first-note': 'rotateFirstNote 20s infinite',
        'rotate-second-note': 'rotateSecondNote 20s infinite',
        'hero-foto-fade-in': 'heroFotoFadeIn 0.5s 0.3s ease-in backwards',
        'hero-text-fade-in': 'heroTextFadeIn 0.5s 0.3s ease-in backwards',
        'p-fade-in': 'pFadeIn linear both',
        'arrow-bounce': 'arrowBounce 1.5s linear infinite',
        'dropdown-open': 'dropdownOpen 0.3s ease-in both',
        'dropdown-close': 'dropdownClose 0.3s ease-out both',
        'image-fade-in-right': 'imageFadeInRight linear both',
        'image-fade-in-left': 'imageFadeInLeft linear both',
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
