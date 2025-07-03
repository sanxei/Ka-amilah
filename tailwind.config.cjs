// tailwind.config.js
const hamburgers = require('tailwind-hamburgers')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },},
  },
  plugins: [
    hamburgers,
  ],
}