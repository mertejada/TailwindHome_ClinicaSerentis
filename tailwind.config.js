/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: { 
    extend: {
      colors: {
        'blue' : '#2d8797',
        'light-blue' : '#9CCBD3',
        'brown' : '#635B52',
        'dark-brown' : '#36322d',
        'grey' : '#C5C1BE',
        'whiteSoft' : '#FEFDFB',
        'black' : '#292929',
        screens : {
          //cambiar el tamaño de la pantalla
          sm: '320px',
          md: '800px',
          lg: '1200px',
          xl: '1550px',
        },
        borderRadius : {
          '4xl': '2rem',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

