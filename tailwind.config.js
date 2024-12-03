/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#4379EE",
          200: "#024CAA",
          300: "#2980B9",
          DEFAULT: "#03346E",
        },
        yellowLight: "#f6e58d",
        orangeDark: "#f0932b",
      },
      boxShadow: {
        activeblue: "0 6px #03346E",
        pressedblue: "0 2px #03346E",
        activegray: "0 6px #4B5563",
        pressedgray: "0 2px #4B5563",
      },
      fontFamily: {
        awesome: ["FontAwesome"],
      },
    },
  },
  plugins: [],
}

