module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        '1/12': '8.33%',
        '1/6': '16.66%',
      },
      spacing: {
        18: '4.5rem',
      },
      minHeight: {
        'w-screen': '100vw',
      },
      minWidth: {
        'h-screen': '100vh',
      },
      fontSize: {
        'sm-screen': '11rem',
        'md-screen': '14rem',
        'lg-screen': '10rem',
        'xl-screen': '17rem',
        '2xl-screen': '19rem',
      },
      backgroundSize: {
        16: '4rem',
        20: '5rem',
      },
      borderWidth: {
        25: '25px',
        75: '75px',
        100: '100px',
      },
      colors: {
        'primary-green': '#00993D',
        manzana: '#C9D22A',
        cherry: '#C4224F',
        maracuya: '#F4D334',
      },
      fontFamily: {
        watermelon: 'Watermelon',
        'trash-hand': 'Trashhand',
      },
      screens: {
        'short': { raw: '(min-height: 668px)' },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      transitionDuration: {
        0: '0ms',
        4000: '4000ms'
      },
      transitionTimingFunction: {
        'roulette-out': 'cubic-bezier(.17,.67,.38,.64)',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      }
    },
  },
  plugins: [],
}
