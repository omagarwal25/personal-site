/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["night"],
  },

  content: ["./src/{pages,components,layouts}/**/*.{js,ts,jsx,tsx,mdx,md}"],

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
