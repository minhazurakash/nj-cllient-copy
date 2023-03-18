/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        300: '300px',
      },
      width: {
        300: '300px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lite"],
  },
};

