/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecsa': {
          primary: '#9EB953',  // R158 G185 B83
          light: '#D9E1C7',    // Lighter shade for backgrounds
          dark: '#546A29',     // Darker shade for text/emphasis
          gray: {
            100: '#F5F5F5',
            200: '#E0E0E0',
            300: '#CCCCCC',
            400: '#999999',
            500: '#666666',
            600: '#333333',
          }
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        body: ['Open Sans', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'ecsa': '0 4px 6px rgba(158, 185, 83, 0.1)',
      },
      borderRadius: {
        'ecsa': '0.5rem',
      },
    },
  },
  plugins: [],
}