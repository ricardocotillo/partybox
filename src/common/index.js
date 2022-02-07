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