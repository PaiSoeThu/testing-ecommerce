/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "roboto" : 'Noto Serif Vithkuqi'
      },
      colors : {
        "primary" : "#0f0e17",
        "secondary" : "#a7a9be",
        "tertiary" : "#ff8906"
      }
    },
  },
  plugins: [],
}

