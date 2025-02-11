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
  hot: ['01 seco', '01 seco', '01 seco', '01 seco', '01 seco', '02 secos', '02 secos', '02 secos', '02 secos', '02 secos', '02 secos', '03 secos', '03 secos', '03 secos', '03 secos', '03 secos'],
  tranqui: ['01 seco', '01 seco', '01 seco', '01 seco', '02 secos', '02 secos', '02 secos', '02 secos', '02 secos', '03 secos', '03 secos', '03 secos', '03 secos', '03 secos', '01 seco', '02 secos'],
}

export const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export const hot = [
  'Susurra algo atrevido en el oído de la persona que el grupo elija.',
  'Confiesa tu fantasía sexual',
  'Haz contacto visual sexy con alguien del grupo durante 30 segundos sin reírte.',
  'Simula gemidos por 15 segundos sin parar.',
  'Cuenta el lugar mas extraño donde lo harías',
  'Haz un baile sexy durante 30 segundos frente a todos.',
  'Cuenta con quien fue tu última vez y donde',
  'Muérdele suavemente el cuello o la oreja a alguien elegido por el grupo.',
  'Dale un masaje sensual de 1 minuto a alguien del grupo.',
  'Déjate vendar los ojos y permite que alguien te toque suavemente el cuerpo durante 30 segundos.',
  'Déjate lamer el dedo o la oreja por alguien que el grupo elija.',
  'Dale un beso sexy (en el lugar que prefiera) a una persona elegida por el grupo.',
  'Deja que alguien elija una parte de tu cuerpo para que te dé un beso.',
  'Ponte en las piernas de alguien y simula un baile sexy durante 30 segundos.',
  'Recrea una posición sensual elegida por el grupo con alguien por 30 segundos.',
  'Manda un audio erótico a alguien de tu ganado.',
]
export const tranqui = [
  'Habla durante 2 minutos imitando el acento que el grupo elija.',
  'Cuenta el chiste más malo que sepas, si nadie se ríe tomas otro shot.',
  'Haz un striptease a la lata de Party Box.',
  'Camina en línea recta mientras el grupo intenta hacerte reír. Si te ríes, tomas otro shot.',
  'Haz una confesión vergonzosa (real o inventada) sobre uno de tus amigos presentes.',
  'Demuestra un talento ridículo.',
  'Ponte de rodillas y hazle una declaración de amor dramática a alguien del grupo.',
  'Come algo de la mesa (limón, hielo, etc.) pero sin usar las manos.',
  'Haz una llamada fingiendo ser un vendedor de algo absurdo.',
  'Imita a alguien del grupo mientras los demás adivinan quién es.',
  'Intenta hacer reir al grupo con Party Box en la boca, si escupes o te ríes, otro shot.',
  'Imita a un personaje que tus amigos escojan por 10 segundos.',
  'El primero en tocarte reparte 3 shots de Party Box.',
  'Haz 10 flexiones con una lata de Party Box en la espalda sin dejarla caer.',
  'Haz un seco de Party Box con alguien que tu elijas.',
  'Escoge una canción de la playlist y bebe cada vez que se repita una palabra que escojas.',
]
