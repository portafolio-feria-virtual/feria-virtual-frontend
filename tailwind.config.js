const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
