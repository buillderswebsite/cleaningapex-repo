import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4B8A",
          50: "#E8EEF5",
          100: "#D1DDEB",
          200: "#A3BBD7",
          300: "#7599C3",
          400: "#4777AF",
          500: "#1B4B8A",
          600: "#163C6E",
          700: "#102D53",
          800: "#0B1E37",
          900: "#050F1C",
        },
        secondary: {
          DEFAULT: "#5BA3D9",
          50: "#EDF5FB",
          100: "#DBEBF7",
          200: "#B7D7EF",
          300: "#93C3E7",
          400: "#6FAFDF",
          500: "#5BA3D9",
          600: "#3A8BC9",
          700: "#2D6D9E",
          800: "#215073",
          900: "#143249",
        },
        accent: {
          DEFAULT: "#4CAF50",
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
