/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mega": " #6BEFA3",
        "quina": "#8666EF",
        "lotofacil": "#DD7AC6",
        "timemania": " #5AAD7D",
        "lotomania": "#FFAB64",
        "diadesorte": "#BFAF83",
        "claro": "#C5DFFF",
        "escuro": "#061E3C",
        "hover": "#1057B0",
      },
      fontFamily:{
        inter: ["Inter", "sans-serif"],
        vast: ["Vast Shadow", "cursive"],
      },
      keyframes: {
        sino_kf: {
          "0%, 100%": {
            transform: "rotate(-10deg)"
          },
          "50%": {
            transform: "rotate(10deg)"
          }
        }
      },
      animation: {
        sino: "sino_kf 0.31s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
