/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", './index.html'],
  theme: {
    extend: {
      colors: {
        customGreen: '#7AA65A'
      },
      fontFamily: {
        inter: 'Inter'
      },
      screens: {
        xsm: '360px',
      },
      backgroundImage: {
        highlightedProduct: "url('./assets/highlight-bg.svg')"
      }
    },
  },
  plugins: [],
}

