/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'], // overrides the default
      },
      colors:{
        background:"#080E2A",
        primary:"#F58020",
        neytral:{
          light:"#91A5CD",
          700:"#172040",
          600:"#212C4C",
          500:"#2E3A59",
          300:"#91A5CD"
        }
      }
  
    },
  },
  plugins: [],
}