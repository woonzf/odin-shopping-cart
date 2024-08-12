/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "dark": "#27272a",
        "light": "#f1f5f9",
      },
      "animation": {
        "slide-up-down": "slide-up-down 5s infinite",
      },
      "keyframes": {
        'slide-up-down': {
          '0%, 100%': { transform: 'translateY(100%)' },
          '20%, 90%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
