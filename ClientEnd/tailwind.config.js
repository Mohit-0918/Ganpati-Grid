/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-gray": '#f1f5f9',
        "theme-primary": "#071e22",
        "theme-primary-dark": "#1d7874",
      }
    },
    fontFamily: {
      'sans': 'Roboto, sans-serif',
    }
  },
  plugins: [],
}
