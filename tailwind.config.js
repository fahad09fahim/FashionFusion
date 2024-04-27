/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      color1:"#E6C744",
      color2:"#FFFFFF",
      silver:"#C2C8DA"
    },
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}
