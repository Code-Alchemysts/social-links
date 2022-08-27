module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        brand: {
          100: "#7DFF6B",
          200: "#0A8270",
          300: "#FAFAFA",
          400: "#747274",
          500: "#111111",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
