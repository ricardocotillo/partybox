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

export const punishments = {
  slots: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  hot: ['02 secos', '01 seco', '02 secos', '03 secos', '03 secos', '01 seco', '02 secos', '03 secos', '04 secos', '01 seco', '02 secos', '03 secos', '01 seco', '01 seco', '02 secos', '03 secos',],
  tranki: ['02 secos', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos', 'medio seco', '01 seco', '02 secos', '03 secos'],
}