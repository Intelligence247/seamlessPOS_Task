/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#0973ff",
        primary_green: "#00b517",
      },
    },
  },
  plugins: [],
};
