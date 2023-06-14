/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#2b3743',
        light: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
