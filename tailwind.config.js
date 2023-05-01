/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      backgroundImage: {
        main: "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/rick_morty_bg.png')"
      }
    }
  },
  plugins: []
};
