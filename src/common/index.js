export const bgColor = (f) => {
  switch (f) {
    case 'manzana':
        return 'bg-manzana'
    case 'cherry':
        return 'bg-cherry'
    default:
        return 'bg-maracuya'
  }
}

const manzana = ['02 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]
const maracuya = ['02 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '04 secos', '01 seco', '02 secos', '03 secos', '01 seco', '01 seco', '02 secos', '03 secos',]
const cherry = ['04 secos', '03 secos', '02 secos', '03 secos', '03 secos', '01 secos', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos',]

export const secos = {
  manzana,
  maracuya,
  cherry,
}

export const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]