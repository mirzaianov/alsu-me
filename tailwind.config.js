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
        slidewords: {
          '0%': {
            'margin-top': '-144px',
          },
          '45%': {
            'margin-top': '-144px',
          },
          '50%': {
            'margin-top': '-72px',
          },
          '95%': {
            'margin-top': '-72px',
          },
          '100%': {
            'margin-top': '0px',
          },
        },
        rotatefirstnote: {
          '0%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '5%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '10%': {
            transform: 'perspective(1000px) rotateX(180deg)',
          },
          '90%': {
            transform: 'perspective(1000px) rotateX(180deg)',
          },
          '95%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
        },
        rotatesecondnote: {
          '0%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
          '5%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
          '10%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '90%': {
            transform: 'perspective(1000px) rotateX(0deg)',
          },
          '95%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(-180deg)',
          },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        slides: 'slides 20s linear infinite',
        slidewords: 'slidewords 20s linear infinite',
        rotatefirstnote: 'rotatefirstnote 20s infinite ease-in-out',
        rotatesecondnote: 'rotatesecondnote 20s infinite ease-in-out',
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
