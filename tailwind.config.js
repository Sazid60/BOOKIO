/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        play: ['"Play"', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'], 
        updock: ['"Updock"', 'cursive'],
      },
    },
  },
  plugins: [],
}
