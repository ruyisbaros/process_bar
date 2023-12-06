/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        dark_bg_1: "#111B21",
        dark_bg_2: "#202C33",
        dark_bg_3: "#182229",
        dark_bg_4: "#222E35",
        dark_bg_5: "#233138",
        dark_bg_6: "#101A20",
      },
    },
  },
  plugins: [],
};
