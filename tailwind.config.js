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
        spin: {
          '0%': {
            transform: 'translateY(-112%)',
          },
          '5%': {
            transform: 'translateY(-112%)',
          },
          '50%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(-212%)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        slides: 'slides 20s linear infinite',
        spin: 'spin 6s infinite',
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
      'body-upper': [
        '16px',
        {
          textTransform: 'uppercase',
        },
      ],
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
          textTransform: 'uppercase',
        },
      ],
      'body-bold-striked': [
        '16px',
        {
          fontWeight: '700',
          textTransform: 'strikedthrough',
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
          textTransform: 'uppercase',
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
