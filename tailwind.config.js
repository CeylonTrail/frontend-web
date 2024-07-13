/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  plugins: [],
 
  theme: {
    extend: {},
    colors: {
      primary: '#0F969C',
      secondary: '#6DA5C0',
      warning: '#D22C3C',
      white: '#FFFFFF',
      black: '#000000',
      primaryDark1: '#0C7075',
      primaryDark2: '#073E33',
      primaryDark3: '#05161A',
      secondaryDark1: '#294D61',
      warningLight: '#FC3A4E',
      SecondaryLight:"#E7E7E7"
    }
  },
}

