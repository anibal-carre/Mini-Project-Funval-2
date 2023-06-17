/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      serrat: ["Montserrat", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    colors: {
      gray: {
        10: "#333333",
        15: "#828282",
      },
      orange: {
        10: "#EB5757",
      },
    },
    extend: {},
  },
  plugins: [],
};
