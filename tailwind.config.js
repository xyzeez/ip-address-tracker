/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      gray: {
        600: 'hsl(0, 0%, 59%)',
        900: 'hsl(0, 0%, 17%)',
      },
    },
    extend: {},
  },
  plugins: [],
};
