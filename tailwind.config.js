/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 4s linear ",
        fill: "fill 4s linear ",
      },
      keyframes: {
        glow: {
          "0%": { opacity: 0, color: "blue" },
          "100%": { opacity: 1, color: "green" },
        },
        fill: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
