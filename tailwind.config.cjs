// tailwind.config.js
const hamburgers = require("tailwind-hamburgers");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "hsl(40 20% 97%)",
        foreground: "hsl(210 20% 15%)",
        bronze: "hsl(25 70% 50%)",
        luxurydark: "hsl(210 25% 12%)",
        secondary: "hsl(210 15% 25%)",
        muted: "hsl(210 10% 92%)",
        border: "hsl(210 15% 88%)",
      },
    },
  },
  plugins: [hamburgers],
};
