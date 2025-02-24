/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',  
    './components/**/*.{js,jsx,ts,tsx}',  
    './screens/**/*.{js,jsx,ts,tsx}'  // ✅ Add this line
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
