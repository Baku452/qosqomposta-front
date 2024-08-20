const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '150': '150',
      },
      colors: {
        'yellowQ': {  
          DEFAULT: '#F2BE12',  
          '50': '#FCEEC0',  
          '100': '#FAE8AD',  
          '200': '#F8DE86',  
          '300': '#F6D35F',  
          '400': '#F4C939',  
          '500': '#ddad13e6',  
          '600': '#C1970B',  
          '700': '#8C6D08',  
          '800': '#574405',  
          '900': '#221A02'
        },
        'greenQ': {
          DEFAULT: '#4A5D12',
          '50': '#8EB223',
          '100': '#80A11F',
          '200': '#657F19',
          '300': '#4A5D12',
          '400': '#252E09',
          '500': '#000000',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000',
          '950': '#000000'
        },
   'brownQ': {  DEFAULT: '#2D1910',  50: '#78432B',  100: '#693A25',  200: '#4B2A1B',  300: '#2D1910',  400: '#040201',  500: '#000000',  600: '#000000',  700: '#000000',  800: '#000000',  900: '#000000',  950: '#000000'},
        'error': '#d01f12'
      },
      animation: {
        slideIn: 'slideIn 1.5s ease-in-out',
      },
      keyframes: {
        opacityAppear: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        wave: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1.5)' },
        },
      },
      fontFamily: {
        'sans': ['eveleth', ...defaultTheme.fontFamily.sans],
        paragraph: ['Isidora', 'sans'],
      },
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
  purge: false
};
