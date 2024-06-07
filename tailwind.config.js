/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        springOrange: "#f2bd68",
        springBlue: "#342f42",
        springBlueLight: {
          100: "#dbd2f5",
          200: "#d6d0e1",
          300: "#635d72",
          400: "#4d4562",
        },
        springWhite: "#dbd2f5",
        springBluishWhite: "#bcb1dd",
        springGrayBlue: {
          100: "#dedce6",
          300: "#88809e",
        },
        springGreen: {
          100: "#d7e68a",
        },
        offWhite: "#ededf2",
      },
      screens: {
        "tablet-sm": "400px",
        "tablet-md": "480px",
        tablet: "520px",
        "tablet-lg": "760px",
        laptop: "1160px",
      },
      boxShadow: {
        navShadow: "0 4px 11px -1px rgb(0 0 0 / 8%)",
        cardShadow: "0px 4px 11px 1px #0000000a",
        popupShadow: "0px 1px 2px 1px #00000029",
        modalShadow: "0px -1px 4px 1px #22202838",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
