export const bgColor = (f) => {
  let pattern = {
    backgroundImage: 'url(/img/PATRON.svg)',
    backgroundRepeat: 'repeat',
    backgroundSize: '5rem'
  }
  switch (f) {
    case 'manzana':
      pattern.backgroundColor = ' #C9D22A'
      break
    case 'cherry':
      pattern.backgroundColor = '#C4224F'
      break
    case 'maracuya':
      pattern.backgroundColor = '#F4D334'
      break
    default:
      pattern = {
        background: 'url(/img/PATRON.svg) center / 5rem repeat, linear-gradient(180deg, rgba(255,124,0,1) 0%, rgba(255,75,47,1) 50%, rgba(245,67,89,1) 100%)'
      }
      break
  }
  return pattern
}

const manzana = ['02 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]
const maracuya = ['02 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '04 secos', '01 seco', '02 secos', '03 secos', '01 seco', '01 seco', '02 secos', '03 secos',]
const cherry = ['04 secos', '03 secos', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]
const pina = ['04 secos', '03 secos', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]
const lemondanger = ['02 secos', '03 secos', '02 secos', '03 secos', '02 secos', '02 secos', '03 secos', '04 secos', '02 secos', '03 secos', '02 secos', '03 secos', '02 secos', '03 secos', '03 secos', '03 secos']

export const secos = {
  manzana,
  maracuya,
  cherry,
  pina,
  lemondanger,
}

export const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]