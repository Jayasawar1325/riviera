/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }, // Closing brace for fontFamily
    }, // Closing brace for extend
  }, // Closing brace for theme
  plugins: [],
}
