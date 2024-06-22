/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "theme-colors-color-01": "#38d2d9",
        "neutral-neutral-03": "#0f1224",
        "theme-colors-color-02": "#142249",
        darkgray: "rgba(150, 153, 147, 0.3)",
        "gray-400": "#98a2b3",
        lightgray: {
          "100": "rgba(208, 213, 221, 0.3)",
          "200": "rgba(208, 213, 221, 0.6)",
        },
        "gray-900": "#101828",
        "neutral-neutral-01": "#f5f6f4",
        steelblue: "#47547d",
        "neutral-neutral-02": "#282a3a",
        whitesmoke: "rgba(245, 246, 244, 0.3)",
        darkcyan: "#059ea6",
        darkslategray: {
          "100": "rgba(6, 59, 38, 0.3)",
          "200": "rgba(11, 51, 35, 0.1)",
          "300": "rgba(6, 59, 38, 0.1)",
          "400": "rgba(6, 59, 38, 0.2)",
        },
        palegreen: "rgba(207, 255, 146, 0.1)",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "gray-600": "#475467",
        gray1: {
          "100": "#0d0d0d",
          "200": "rgba(255, 255, 255, 0.25)",
        },
        "gray-500": "#667085",
        yellowgreen: "#abf266",
        "gray-100": "#f2f4f7",
        "theme-colors-color-03": "#ffeb69",
        saddlebrown: "rgba(83, 46, 7, 0.1)",
        "theme-colors-color-05": "#532e07",
        "theme-colors-color-04": "#ffc091",
        mediumseagreen: "#13b469",
      },
      spacing: {},
      fontFamily: {
        "body-16px-regular": "Inter",
        "dm-sans": "'DM Sans'",
        "sf-pro": "'SF Pro'",
      },
      borderRadius: {
        "9xl": "28px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      sm: "14px",
      "2xs": "11px",
      "3xs": "10px",
      "41xl": "60px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
