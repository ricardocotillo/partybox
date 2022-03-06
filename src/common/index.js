export const bgColor = (f) => {
  switch (f) {
    case 'manzana':
      return 'bg-manzana bg-partybox-pattern'
    case 'cherry':
      return 'bg-cherry bg-partybox-pattern'
    case 'maracuya':
      return 'bg-maracuya bg-partybox-pattern'
    default:
      return 'bg-pina-pattern'
  }
}

const manzana = ['02 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]
const maracuya = ['02 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '04 secos', '01 seco', '02 secos', '03 secos', '01 seco', '01 seco', '02 secos', '03 secos',]
const cherry = ['04 secos', '03 secos', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]
const pina = ['04 secos', '03 secos', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]

export const secos = {
  manzana,
  maracuya,
  cherry,
  pina,
}

export const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]