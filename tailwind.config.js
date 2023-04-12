const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.slate,
      primary: colors.cyan,
      secondary: colors.violet,
      warning: colors.amber,
      danger: colors.rose,
      success: colors.emerald,
      info: colors.cyan,
      white: colors.white,
      black: colors.black,
      yellow: colors.amber,
      purple: colors.violet,
      blue: colors.blue,
      red: colors.rose
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Cambria', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
