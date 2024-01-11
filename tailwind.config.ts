import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/tsx/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": "475px",
      xs: "600px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        text: {
          DEFAULT: "#f3f4f6",
          50: "#f0f2f4",
          100: "#e2e4e9",
          200: "#c5cad3",
          300: "#a8afbd",
          400: "#8b94a7",
          500: "#6e7a91",
          600: "#586174",
          700: "#424957",
          800: "#2c313a",
          900: "#16181d",
          950: "#0b0c0f",
        },
        background: {
          DEFAULT: "#111827",
          50: "#edf0f7",
          100: "#dce2ef",
          200: "#b8c5e0",
          300: "#95a8d0",
          400: "#718ac1",
          500: "#4e6db1",
          600: "#3e578e",
          700: "#2f426a",
          800: "#1f2c47",
          900: "#101623",
          950: "#080b12",
        },
        primary: {
          DEFAULT: "#123c91",
          50: "#e8effc",
          100: "#d2dff9",
          200: "#a4bff4",
          300: "#779fee",
          400: "#497ee9",
          500: "#1c5ee3",
          600: "#164bb6",
          700: "#113988",
          800: "#0b265b",
          900: "#06132d",
          950: "#030917",
        },
        secondary: {
          DEFAULT: "#7499fd",
          50: "#e6ecff",
          100: "#cddafe",
          200: "#9bb5fd",
          300: "#6890fd",
          400: "#366bfc",
          500: "#0446fb",
          600: "#0338c9",
          700: "#022a97",
          800: "#021c64",
          900: "#010e32",
          950: "#000719",
        },
        accent: {
          DEFAULT: "#5435cb",
          50: "#eeebfa",
          100: "#dcd6f5",
          200: "#baaeea",
          300: "#9785e0",
          400: "#755dd5",
          500: "#5234cb",
          600: "#422aa2",
          700: "#311f7a",
          800: "#211551",
          900: "#100a29",
          950: "#080514",
        },
        green: "#1B998B",
        red: "#D7263D",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        show: {
          "0%": { opacity: "0", visibility: "visible" },
          "100%": { opacity: "100", zIndex: "50" },
        },
        hide: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0", display: "none", zIndex: "-50" },
        },
        lettersAnimation: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.4",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateY(-1000%) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-2px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(4px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-8px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(8px, 0, 0)",
          },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
        show: "show 500ms ease forwards",
        hide: "hide 500ms ease forwards",
        animatedLetters: "lettersAnimation 25s linear infinite",
        shake: "shake 1s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
