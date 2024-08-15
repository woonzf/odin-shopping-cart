/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "monserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        "theme": "#ffedd5",
        "dark": "#27272a",
        "light": "#f1f5f9",
      },
      animation: {
        "slide-up": "slide-up 2s 1",
        "slide-rtl-infinite": "slide-rtl 5s infinite",
        "disappear": "disappear 750ms 1s 1 forwards",
        "appear": "disappear 750ms reverse forwards",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-rtl": {
          "0%": { transform: "translateX(100%)" },
          "20%, 90%": { transform: "translateY(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "disappear": {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0" },
        },
      }
    },
  },
  plugins: [],
}
