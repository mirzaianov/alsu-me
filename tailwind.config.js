/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      mobile: '576px',
      // => @media (min-width: 576px) { ... }

      tablet: '992px',
      // => @media (min-width: 992px) { ... }
    },
  },
  plugins: [],
};
