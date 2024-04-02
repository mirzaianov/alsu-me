/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      tablet: '576px',
      desktop: '992px',
    },
    fontSize: {
      'body-tight': [
        '16px',
        {
          lineHeight: '1.25rem',
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
          lineHeight: '1.25rem',
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
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      'button-large': [
        '24px',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      'heading-s': [
        '24px',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      'heading-s-upper': [
        '24px',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
          textTransform: 'uppercase',
        },
      ],
      'heading-m': [
        '32px',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      'heading-l': [
        '40px',
        {
          lineHeight: '1.25rem',
          fontWeight: '700',
        },
      ],
      'heading-xl': [
        '56px',
        {
          lineHeight: '1.25rem',
          fontWeight: '700',
        },
      ],
    },
  },
  plugins: [],
};
