/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        black: "#0D0D0D",
        gray: {
          100: "#F5F5F5",
          900: "#1C1C1C",
        },
      },
      fontFamily: {
        luxury: ["Playfair Display", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
