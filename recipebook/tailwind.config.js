module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        licorice: ['Licorice', 'cursive'],
      },
      minHeight: {
        32: '8rem',
      },
      backgroundImage: {
        defaultrecipe: "url('../public/defaultrecipe.jpeg')",
      },
    },
  },
  plugins: [],
};
