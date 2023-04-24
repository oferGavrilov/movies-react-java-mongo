module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html"
  ],
  theme: {
    fontFamily : {
      'raleway': ['Raleway', 'sans-serif']
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
