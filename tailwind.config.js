const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        100: '100',
        150: '150',
      },
      colors: {
        yellowQ: {
          DEFAULT: '#F2BE12',
          50: '#FCEEC0',
          100: '#FAE8AD',
          200: '#F8DE86',
          300: '#F6D35F',
          400: '#F4C939',
          500: '#ddad13e6',
          600: '#C1970B',
          700: '#8C6D08',
          800: '#574405',
          900: '#221A02',
        },
        greenQ: {
          DEFAULT: '#4A5D12',
          50: '#E0F0B1',
          100: '#D9EDA0',
          200: '#CCE67E',
          300: '#BEDF5C',
          400: '#B0D939',
          500: '#9CC426',
          600: '#80A11F',
          700: '#657F19',
          800: '#4A5D12',
          900: '#252E09',
          950: '#121604',
        },
        brownQ: {
          DEFAULT: '#2D1910',
          50: '#D9AB96',
          100: '#D49F86',
          200: '#C98668',
          300: '#BF6E4A',
          400: '#A55C3B',
          500: '#874B30',
          600: '#693A25',
          700: '#4B2A1B',
          800: '#2D1910',
          900: '#040201',
          950: '#000000',
        },
        error: '#d01f12',
      },
      animation: {
        slideIn: 'slideIn 1.5s ease-in-out',
      },
      keyframes: {
        opacityAppear: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        wave: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1.5)' },
        },
      },
      fontFamily: {
        sans: ['eveleth', ...defaultTheme.fontFamily.sans],
        titles: ['eveleth', 'sans'],
        paragraph: ['Isidora', 'sans'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  purge: false,
};
