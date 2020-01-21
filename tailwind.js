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
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
