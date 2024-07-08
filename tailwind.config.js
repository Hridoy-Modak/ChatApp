/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        secondary: '#11175D',
        primary: '#5F35F5',
      },
    },
  },
  plugins: [],
}