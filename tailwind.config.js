/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        serif: ["Crimson Pro", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        "extra-light": 100,
      },
    },
  },
  plugins: [],
};
