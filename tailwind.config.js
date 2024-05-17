/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        customBlue: '#1C4980',
        customYellow:"#FFDD80",
        customOrange:"#FEC192",
        customGray:"#D9D9D9",
        customGrayText:"#6B6B6B",
        customBrightBlue:"#0073E6",
      },
      boxShadow: {
        bottom: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}