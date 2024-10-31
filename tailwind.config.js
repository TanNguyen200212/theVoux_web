/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.html",
    "./src/**/*.ts",
  ],
  theme: {
    extend: {},
    color: {
      "Rose-600": "#e11d48",
      "Stone-600": "#57534e",
    },
  },
  plugins: [require("flowbite/plugin")],
};
