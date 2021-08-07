const tailwindcssConfig = {
  // 'media' or false or 'class'
  darkMode: 'media',
  plugins: [],
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}

module.exports = tailwindcssConfig
