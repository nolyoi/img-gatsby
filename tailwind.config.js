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
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
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
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '9/10': '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
