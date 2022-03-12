module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontSize: {
    //   'xs': '.75rem',
    //   'sm': '1rem',
    //   'tiny': '1rem',
    //   'base': '1.25rem',
    //   'lg': '1.5rem',
    //   'xl': '1.875rem',
    //   '2xl': '2rem',
    //   '3xl': '2.25rem',
    //   '4xl': '4rem',
    //   '5xl': '5rem',
    //   '6xl': '6rem',
    //   '7xl': '7rem',
    // },
    extend: {
      maxWidth: {
        '8': '8rem',
      },
      colors: {
        darkblue: {
          600: '#242735'
        },
        magic: {
          700: '#e0024b',
          600: '#ff0054',
          500: '#f5adc5',
          400: '#ff73a1'
        }
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"),],
}

