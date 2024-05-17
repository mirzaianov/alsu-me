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
        'slide-words': {
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
        'rotate-first-note': {
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
        'rotate-second-note': {
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
        'waving-hand': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'scale(1.2) rotate(-4.0deg)' },
          '50%': { transform: 'scale(1.2) rotate(10.0deg)' },
          '60%': { transform: 'scale(1) rotate(0.0deg)' },
          '100%': { transform: 'scale(1) rotate( 0.0deg)' },
        },
        'wavind-badge': {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(3px)' },
          '75%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(0)' },
        },
        tada: {
          '0%, 40%': { transform: 'scale(1) rotate(0deg)' },
          '45%': { transform: 'scale(1.1) rotate(-8deg)' },
          '47%': { transform: 'scale(1.1) rotate(8deg)' },
          '49%': { transform: 'scale(1.1) rotate(-5deg)' },
          '51%': { transform: 'scale(1.1) rotate(5deg)' },
          '53%': { transform: 'scale(1.1) rotate(-2deg)' },
          '55%': { transform: 'scale(1.1) rotate(2deg)' },
          '60%, 100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        slides: 'slides 20s linear infinite',
        testimonials: 'slides 60s linear infinite',
        'slide-words': 'slide-words 20s linear infinite',
        'rotate-first-note': 'rotate-first-note 20s infinite',
        'rotate-second-note': 'rotate-second-note 20s infinite',
        'waving-hand': 'waving-hand 4s linear infinite',
        'wavind-badge-3': 'wavind-badge 3s linear infinite',
        'wavind-badge-4': 'wavind-badge 4s linear infinite',
        tada: 'tada 8s ease-in-out infinite',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
    screens: {
      tablet: '576px',
      desktop: '992px',
    },
    fontSize: {
      'body-tight': [
        '16px',
        {
          lineHeight: '1.25em',
        },
      ],
      'body-upper': ['16px'],
      'body-bold': [
        '16px',
        {
          fontWeight: '700',
        },
      ],
      'body-bold-upper': [
        '16px',
        {
          fontWeight: '700',
        },
      ],
      'body-bold-striked': [
        '16px',
        {
          fontWeight: '700',
        },
      ],
      // 'body-bold-under': [
      //   '16px',
      //   {
      //     fontWeight: '700',
      //     textTransform: 'underline',
      //   },
      // ],
      'body-large': ['20px', {}],
      'body-large-tight': [
        '20px',
        {
          lineHeight: '1.25em',
        },
      ],
      'body-large-bold': [
        '20px',
        {
          fontWeight: '700',
        },
      ],
      // 'body-large-bold-under': [
      //   '20px',
      //   {
      //     fontWeight: '700',
      //     textTransform: 'underline',
      //   },
      // ],
      button: [
        '16px',
        {
          lineHeight: '1.5em',
          fontWeight: '700',
        },
      ],
      'button-large': [
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
      'heading-s-upper': [
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
