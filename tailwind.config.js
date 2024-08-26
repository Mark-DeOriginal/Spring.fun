/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Light Mode */
        // Background
        BgPrimaryLight: "#ededf2",
        BgSecondaryLight: "#f2f0f3",
        BgAccentLight: "#d8d8df",
        // Button
        BtnPrimaryLight: "#5c5275",
        BtnSecondaryLight: "#dddae3",
        BtnAccentLight: "#e7e5ea",
        BtnHoverPrimaryLight: "#4d4562",
        BtnHoverSecondaryLight: "#d2cfda",
        BtnHoverAccentLight: "#dcdae1",
        BtnActiveBgLight: "#c8c3d1",
        // Input field
        InputBorderLight: "#c8c3d1",
        InputActiveBorderLight: "#9b95a7",
        // Text
        TxtPrimaryLight: "#504963",
        TxtSecondaryLight: "#736c83",
        TxtAccentLight: "#88809e",
        TxtAccentShyLight: "#9b97a5",
        // Border
        BorderLight: "#d6d0e1",

        GreenShadeLight: "#22c55e",
        RedShadeLight: "#f87171",

        /* Dark Mode */
        // Background
        BgPrimaryDark: "#342f42",
        BgSecondaryDark: "#353042",
        BgAccentDark: "#554f63",
        // Button
        BtnPrimaryDark: "#f2bd68",
        BtnSecondaryDark: "#433c54",
        BtnAccentDark: "#3e384f",
        BtnHoverPrimaryDark: "#f5c983",
        BtnHoverSecondaryDark: "#4d4562",
        BtnHoverAccentDark: "#463e58",
        BtnActiveBgDark: "#4d4562",
        // Input field
        InputBorderDark: "#4d4562",
        InputActiveBorderDark: "#6a6283",
        // Text
        TxtPrimaryDark: "#ededf2",
        TxtSecondaryDark: "#dbd2f5",
        TxtAccentDark: "#bcb1dd",
        TxtAccentShyDark: "#9a92af",
        // Border
        BorderDark: "#4d4562",

        BackdropColor: "#201e26c2",

        GreenShadeDark: "#4ade80",
        RedShadeDark: "#f87171",

        SpringOrange: "#f2bd68",
        SpringGreen: "#d7e68a",
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
