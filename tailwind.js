module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'smoke-light': 'rgba(0, 0, 0, 0.4)'
      },
      width: {
        '6/13': '47%'
      },
      theme: {
        inset: {
          2: '2%',
          3: '3%',
          5: '5%',
          25: '25%',
          50: '50%'
        }
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
