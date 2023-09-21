module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
module.exports = {
  // ... other configurations

  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4', // This is the default shade of teal
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
      },
    },
  },
  // ... other configurations
};
