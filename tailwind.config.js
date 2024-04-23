/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ff6501",
        secondary: "#653332",
      },
      borderColor: {
        primary: "#ff6501",
      },
      textColor: {
        primary: "#ff6501",
        secondary: "#653332",
      },
    },
  },
  plugins: [],
};
