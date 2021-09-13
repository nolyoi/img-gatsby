const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      indigo: colors.indigo,
      green: colors.green,
      'orange': colors.orange,
      'blueGray': colors.blueGray,
    },
    extend: {
      fontFamily: {
        'marker': ['Mali', 'cursive'],
        'roboto': ['Montserrat', 'sans serif'],
        'sans': ['Hind', 'sans-serif']
      },
      boxShadow: {
        link: '0 -12px 0 0 rgba(178, 245, 234, .7) inset',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
