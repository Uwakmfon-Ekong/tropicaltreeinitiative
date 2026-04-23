import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#1a3a2a",
          mid: "#2d6a4f",
          light: "#40916c",
          pale: "#d8f3dc",
          accent: "#74c69d",
          bright: "#52b788",
        },
        earth: {
          DEFAULT: "#a67c52",
          light: "#f4ede4",
        },
        cream: "#faf7f2",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
