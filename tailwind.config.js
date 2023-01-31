/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '390px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'green-prim':'#71ff00',
      },
      backgroundImage: {
        'bg-gradient-prim': 'linear-gradient(318deg,rgba(128,128,128,1) -80%,  rgba(34,34,34,1) 55%);',
      }
    },
  },
  plugins: []
}
