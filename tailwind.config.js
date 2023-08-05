const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        'greenQ': '#4a5d12',
        'brownQ': '#2d1910',
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
};
