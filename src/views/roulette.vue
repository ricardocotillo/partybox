<template>
  <div class="w-full shadow-md lg:hidden relative" :class="bgColor(store.state.flavor)">
    <img @click="changeLevel" class="block short:hidden w-24 top-1/2 -translate-y-1/2 cursor-pointer absolute left-2" src="../assets/boton_small.svg" alt="cambia de nivel" />
    <img class="w-24 md:w-32 mx-auto py-4 lg:pt-20" src="../assets/LOGO_PB.svg" alt="logo party box" />
  </div>
  <img v-if="store.state.mode == 'hot'" class="w-1/3 mx-auto my-3 md:mx-0 md:ml-auto md:mt-6 md:translate-y-16 md:hidden" src="../assets/NIVEL_HOT.svg" alt="nivel hot" />
  <img v-else class="w-1/2 mx-auto mt-3 mb-5 md:mx-0 md:my-auto md:ml-auto md:mt-6 md:translate-y-16 md:hidden" src="../assets/NIVEL_TRANKI.svg" alt="nivel tranki" />
  <div class="w-full relative">
    <div class="absolute -left-18 -top-10 flex items-start md:hidden">
      <img class="w-52 rotate-12" src="../assets/GATO.png" alt="gato" />
      <div class="-translate-x-16 translate-y-10 relative">
        <img class="absolute" src="../assets/NUBE_DE_COMENTARIO.svg" alt="nube de comentario" />
        <p class="font-trash-hand text-center w-52 mt-4 ml-1 translate-x-2 leading-4 text-xl">Gira la ruleta y escoge<br>castigo o trago</p>
      </div>
    </div>
    <div class="hidden md:flex w-full absolute justify-between items-center">
      <div class="-translate-x-16 2xl:-translate-x-28 flex items-start">
        <img class="w-60 2xl:w-96 rotate-12" src="../assets/GATO.png" alt="gato" />
        <div class="relative -translate-x-16 translate-y-10 2xl:-translate-x-28 2xl:translate-y-20">
          <img class="absolute" src="../assets/NUBE_DE_COMENTARIO.svg" alt="nube de comentario" />
          <p class="font-trash-hand text-center mt-4 translate-x-2 text-xl w-60 2xl:w-96 2xl:text-4xl 2xl:translate-x-6 2xl:mt-5 leading-4">Gira la ruleta y escoge<br>castigo o trago</p>
        </div>
      </div>
      <img class="w-48 mx-12 hidden lg:block" src="../assets/LOGO_PB.svg" alt="logo party box" />
      <img v-if="store.state.mode == 'hot'" class="w-1/4 lg:hidden mr-5" src="../assets/NIVEL_HOT.svg" alt="nivel hot" />
      <img v-else class="w-1/4 lg:hidden mr-5" src="../assets/NIVEL_TRANKI.svg" alt="nivel tranki" />
    </div>
    <div class="h-20 md:h-56 lg:h-32"></div>
    <div class="w-80 h-full mx-auto md:w-2/3 lg:w-2/5 grid grid-cols-1 grid-rows-1 place-items-center">
      <div @click="spin" class="row-start-1 row-end-2 col-start-1 col-end-2 cursor-pointer z-10 relative">
        <div class="w-10 border-b-75 xl:border-b-100 border-x-25 border-x-transparent border-b-primary-green absolute -top-1/2 left-1/2 -translate-x-1/2 -z-40"></div>
        <button
          class="shadow-xl w-20 h-20 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-44 2xl:h-44 text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-trash-hand bg-primary-green rounded-full border-4 border-white text-white cursor-pointer"
          :disabled="rotating"
        >
          Girar
        </button>
      </div>
      <img v-if="store.state.mode == 'hot'" class="w-full col-start-1 col-end-2 row-start-1 row-end-1 transition-transform ease-roulette-out duration-4000" src="../assets/RULETA_HOT.svg" alt="ruleta" :style="{transform: `rotate(-${angle}deg)`}" />
      <img v-else class="w-full col-start-1 col-end-2 row-start-1 row-end-1 transition-transform ease-roulette-out duration-4000" src="../assets/RULETA_TRANKI.svg" alt="ruleta" :style="{transform: `rotate(-${angle}deg)`}" />
      <transition
        enter-from-class="scale-0"
        enter-active-class="duration-500"
        enter-to-class="scale-100"
        leave-from-class="scale-100"
        leave-active-class="duration-500"
        leave-to-class="scale-0"
      >
        <div v-if="showDare" class="w-full rounded-full h-full col-start-1 col-end-1 row-start-1 row-end-1 z-20 opacity-90" :class="store.state.mode == 'hot' ? 'bg-primary-green' : 'bg-white'"></div>
      </transition>
      <transition
        enter-from-class="opacity-0"
        enter-active-class="duration-500 delay-500"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="duration-500"
        leave-to-class="opacity-0"
      >
        <div v-if="showDare" @click="showDare = false" class="w-full h-full max-h-full col-start-1 col-end-1 row-start-1 row-end-1 z-30 flex items-center justify-center cursor-pointer relative">
          <img class="w-2/3 mx-auto absolute top-5" v-if="store.state.mode == 'hot'" src="../assets/TEXTO_POP_UP_CASTIGO_BLANCO.svg" alt="castigo" />
          <img class="w-2/3 mx-auto absolute top-5" v-else src="../assets/TEXTO_POP_UP_CASTIGO_NEGRO.svg" alt="castigo" />
          <img class="h-1/3 absolute" :src="numberImg" :alt="`numero de castigo ${dare}`" />
          <div class="w-1/2 xl:w-3/5 2xl:w-1/2 bg-cover bg-no-repeat mt-8 absolute bottom-7 md:bottom-12" :style="{backgroundImage: `url(${dareBg})`}">
            <p class="font-trash-hand text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl xl:pt-3 text-center pt-1 md:pt-2" :class="store.state.mode == 'hot' ? 'text-black' : 'text-white'">o Toma {{ punishment }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <div @click="changeLevel" class="w-48 md:w-60 mx-auto mt-2 cursor-pointer hidden short:block short:lg:hidden absolute bottom-16 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-2">
    <img class="w-full" src="../assets/BOTON_CAMBIA_DE_NIVEL.svg" alt="cambia de nivel" />
    <p class="absolute left-10 md:left-14 top-3 md:top-4 font-trash-hand text-2xl scale-105 md:text-3xl block text-white">Cambia de nivel</p>
  </div>
  <div class="hidden lg:flex justify-between items-center px-12 absolute bottom-5 w-full">
    <img v-if="store.state.mode == 'hot'" class="w-1/5 xl:w-1/6" src="../assets/NIVEL_HOT.svg" alt="nivel hot" />
    <img v-else class="w-1/5 xl:w-1/6" src="../assets/NIVEL_TRANKI.svg" alt="nivel tranki" />
    <div @click="changeLevel" class="relative w-44 lg:w-56 xl:w-60 cursor-pointer">
      <img class="w-full" src="../assets/BOTON_CAMBIA_DE_NIVEL.svg" alt="cambia de nivel" />
      <p class="absolute left-10 xl:left-14 top-3 xl:top-4 font-trash-hand text-xl lg:text-3xl xl:text-3xl block text-white">Cambia de nivel</p>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { bgColor, punishments } from '../common'

// data
const store = inject('store')
const router = useRouter()

const showDare = ref(false)
const rotating = ref(false)

const clickingSound = new Audio(new URL('../assets/sound/RULETA.mp3', import.meta.url))
clickingSound.playbackRate = 1.1

const trench = 360 / punishments.slots.length
const angle = ref(0)
let delay = 0
let degs = 1
let start = 0
let end = 0
let step = 0.00000005
const rounds = 1.3
let sounded = 0

// computed
const p = computed(() => store.state.mode === 'hot' ? punishments.hot : punishments.tranki)

const dare = computed(() => {
  return punishments.slots[getIndex(angle.value)]
})

const punishment = computed(() => p.value[getIndex(angle.value)])

const dareBg = computed(() => store.state.mode == 'hot' ? new URL('../assets/FONDO_SECOS_BLANCO_HOT.svg', import.meta.url) : new URL('../assets/FONDO_SECOS_TRANKI.svg', import.meta.url))

const numberImg = computed(() => new URL(`../assets/numbers/${dare.value}${store.state.mode == 'hot' ? 'B' : ''}.svg`, import.meta.url))
// methods

const spin = () => {
  clickingSound.play()
  clickingSound.oncanplaythrough = () => console.log('hola')
  start = angle.value
  end = start + (360 * rounds) + Math.floor(Math.random() * 360)
  end = (end - (end % trench)) + (trench)
  angle.value = end
}

const getIndex = (angle) => {
  const index = Math.floor((angle + (trench/2)) / trench)
  return index < 16 ? index : 0
}

const changeLevel = () => {
  router.push('mode')
}

watch(angle, newAngle => {
  const rounded = Math.floor(newAngle / trench)
  if (rounded > sounded) {
    sounded++
    clickingSound.play()
  } 
})
</script>