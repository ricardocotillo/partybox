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
    case 'pina':
      pattern = {
        background: 'url(/img/PATRON.svg) center / 5rem repeat, linear-gradient(180deg, rgba(255,124,0,1) 0%, rgba(255,75,47,1) 50%, rgba(245,67,89,1) 100%)'
      }
      break
    default:
      pattern.backgroundColor = '#000000'
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

export const hot = [
  'Beso de tres (El de al frente escoge el tercer integrante)',
  'Entrega tu cel al grupo y que estos suban una foto de tu galería a tus redes por 5 minutos.',
  'Sin mentir, ¿Quién fue tu peor ex?',
  '¿Buen sexo o buen amor? Publícalo',
  'Grita el nombre del mejor de tu ganado',
  'Mándale una foto de tu actual flac@ a tu ex y bórralo',
  'Sube tu peor foto en una historia de IG sin ocultar a nadie',
  'Grita que tienes la ropa interior con hueco',
  'Encontrando infieles, que revisen tu cel por 1 minuto',
  'Publica que volverás con tu ex y @mencionalo',
  'Susurra algo atrevido y sugerente al oído de otra persona.',
  'Último beso, ¿Con quién fue? Publícalo',
  'Mándale un selfie a tu mamá haciéndote el borracho',
  'Confiesa tu fantasía sexual',
  'Nuevo estado “Qué rico chapaba mi ex” y dejalo por 20 minutos',
  'Juega beso o cachetada con el de al frente',
]
export const tranqui = [
  'Inventa el tren “Suave porque trepo” y etiqueta a @PartyBox.Peru',
  'Yo le rogué amor a …. (Menciónalo en redes por 5 minutos)',
  'Lengua en la oreja al de tu izquierda',
  'Toma 3 secos y lee tu castigo al revés',
  'Grita SUUUU y súbelo a las redes',
  'Escoge un amig@ y dale un trago',
  'Improvisa y rapea para tus amigos',
  'Toma 1 seco si alguna vez atoraste un baño ageno', 
  'Llama a tu amiga, si no te contesta acabas de perder 10 soles',
  'Párate de manos contra la pared',
  '¡Te has ganado un apanado!',
  'Inventar como se dice que le tengo ganas a mi amig@ en ruso', 
  'Chapa con el hombre invisible y súbelo a tus redes',
  'Dale un seco a los ojos más bonitos del grupo (No vale tu flac@)',
  'Haz un playback y súbelo a tu IG por 2 horas. La mancha escoge la canción',
  'Haz 5 planchas con la boca llena de trago',
]
