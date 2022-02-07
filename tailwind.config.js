module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'sm-screen': '10rem',
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
      }
    },
  },
  plugins: [],
}
