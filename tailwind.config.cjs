/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: {
          1: '#C02320',
          2: '#EE0035',
        },
        secondary: {
          1: '#515D6B',
          2: '#F9F9FA',
          3: '#F2F3F4',
          4: '#3D3D3DB2',
        },
        success: '#26CC7E'
      },
  },
  },
  plugins: [],
}
