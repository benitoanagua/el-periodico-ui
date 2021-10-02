const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      neutral: {
        50: "#FAFAF9",
        100: "#F5F5F4",
        200: "#E7E5E4",
        300: "#D6D3D1",
        400: "#A8A29E",
        500: "#78716C",
        600: "#57534E",
        700: "#44403C",
        800: "#292524",
        900: "#1C1917",
      },
      primary: {
        50: "#FFFEF0",
        100: "#FCFBED",
        200: "#F0EEE1",
        300: "#E3E0CF",
        400: "#D6CCA1",
        500: "#C9B777",
        600: "#A39058",
        700: "#7D6B3D",
        800: "#574726",
        900: "#302715",
      },
      accent: {
        50: "#FFF2E8",
        100: "#FFD8BF",
        200: "#FFBB96",
        300: "#FF9C6E",
        400: "#FF7A45",
        500: "#FA541C",
        600: "#D4380D",
        700: "#AD2102",
        800: "#871400",
        900: "#610B00",
      },
      secondary: {
        50: "#FFFBE6",
        100: "#FFF1B8",
        200: "#FFE58F",
        300: "#FFD666",
        400: "#FFC53D",
        500: "#FAAD14",
        600: "#D48806",
        700: "#AD6800",
        800: "#874D00",
        900: "#613400",
      },
      red: {
        light: "#FECACA",
        base: "#EF4444",
        dark: "#991B1B",
      },
      yellow: {
        light: "#FEF08A",
        base: "#EAB308",
        dark: "#854D0E",
      },
      green: {
        light: "#A7F3D0",
        base: "#10B981",
        dark: "#065F46",
      },
      blue: {
        light: "#BFDBFE",
        base: "#3B82F6",
        dark: "#1E40AF",
      },
      indigo: {
        light: "#C7D2FE",
        base: "#6366F1",
        dark: "#3730A3",
      },
      purple: {
        light: "#DDD6FE",
        base: "#8B5CF6",
        dark: "#5B21B6",
      },
      pink: {
        light: "#FBCFE8",
        base: "#EC4899",
        dark: "#9D174D",
      },
      logo: {
        kaki: "#C9B473",
        orange: "#FF8A00",
        garnet: "#8F2208",
      },
    },
    fontFamily: {
      serif: ["Caladea", "serif"],
      sans: ["Blinker", "sans-serif"],
      mono: ["PT Mono", "monospace"],
    },
    fontSize: {
      xs: ["0.75rem", "155%"],
      sm: ["0.875rem", "150%"],
      base: ["1rem", "145%"],
      lg: ["1.125rem", "140%"],
      xl: ["1.25rem", "135%"],
      "2xl": ["1.5rem", "130%"],
      "3xl": ["1.875rem", "125%"],
      "4xl": ["2rem", "120%"],
      "5xl": ["2.25rem", "115%"],
      "6xl": ["2.5rem", "110%"],
      "7xl": ["2.75rem", "105%"],
      "8xl": ["3rem", "100%"],
    },
  },
  variants: {
    extend: {
      ringColor: ["hover", "active"],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
