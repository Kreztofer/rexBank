/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#F942F6',
        dimWhite: 'rgba(255, 245, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        dimPink: 'rgba(252, 103, 250, 0.1)',
        pink: '#E22DE0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1500px',
    },
  },
  plugins: [],
};
