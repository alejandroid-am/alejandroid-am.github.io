/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1B1C', /*Dark grey*/
        'secondary': '#F2F1F0', /*Lighr grey*/
        'accent': '#E13C30',  /*Red*/
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}