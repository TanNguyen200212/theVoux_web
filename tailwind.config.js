/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
   "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    color:{
      'Rose-600':'#e11d48',
      'Stone-600':'#57534e'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

