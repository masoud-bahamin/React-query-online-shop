/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"20px"
      },
      colors : {
        primary : "#A3C93C",
        dark:"#252021",
        light:"#E8E8E8",
        secondary : "#575650"
      }
    },
  },
  plugins: [],
}

