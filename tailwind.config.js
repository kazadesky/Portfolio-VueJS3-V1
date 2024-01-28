/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenVue: "rgb(0, 189, 126)",
        hoverGreenVue: "rgb(0, 170, 115)"
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}

