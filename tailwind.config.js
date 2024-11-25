/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
  			blue: {
  				'100': '#4379EE',
  				'200': '#024CAA',
  				'300': '#2980B9',
  				DEFAULT: '#03346E'
  			}
      }
    },
  },
  plugins: [],
}

