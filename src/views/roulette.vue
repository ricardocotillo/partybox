<template>
  <div ref="nav" class="relative w-full shadow-md lg:hidden" :class="appBarColor()">
    <img @click="changeLevel" class="absolute w-24 -translate-y-1/2 cursor-pointer top-1/2 left-2"
      src="../assets/boton_small.svg" alt="cambia de nivel" />
    <img class="w-24 py-4 mx-auto md:w-32 lg:pt-20" src="../assets/LOGO_PB.svg" alt="logo party box" />
  </div>
  <img v-if="store.state.mode == 'hot'"
    class="w-1/3 mx-auto my-3 md:mx-0 md:ml-auto md:mt-6 md:translate-y-16 md:hidden" src="../assets/NIVEL_HOT.svg"
    alt="nivel hot" />
  <img v-else class="w-1/2 mx-auto mt-3 mb-5 md:mx-0 md:my-auto md:ml-auto md:mt-6 md:translate-y-16 md:hidden"
    src="../assets/NIVEL_TRANKI.svg" alt="nivel tranki" />
  <div class="relative w-full">
    <div class="absolute flex items-start -left-18 -top-10 md:hidden">
      <img class="w-52 rotate-12" src="../assets/GATO.png" alt="gato" />
      <div class="relative -translate-x-16 translate-y-10">
        <img class="absolute" src="../assets/NUBE_DE_COMENTARIO.svg" alt="nube de comentario" />
        <p class="mt-4 ml-1 text-xl leading-4 text-center translate-x-2 font-trash-hand w-52">Gira la ruleta y
          escoge<br>castigo o trago</p>
      </div>
    </div>
    <div class="absolute items-center justify-between hidden w-full md:flex">
      <div class="flex items-start -translate-x-16 2xl:-translate-x-28">
        <img class="w-60 2xl:w-96 rotate-12" src="../assets/GATO.png" alt="gato" />
        <div class="relative -translate-x-16 translate-y-10 2xl:-translate-x-28 2xl:translate-y-20">
          <img class="absolute" src="../assets/NUBE_DE_COMENTARIO.svg" alt="nube de comentario" />
          <p
            class="mt-4 text-xl leading-4 text-center translate-x-2 font-trash-hand w-60 2xl:w-96 2xl:text-4xl 2xl:translate-x-6 2xl:mt-5">
            Gira la ruleta y escoge<br>castigo o trago</p>
        </div>
      </div>
      <img class="hidden w-48 mx-12 lg:block" src="../assets/LOGO_PB.svg" alt="logo party box" />
      <img v-if="store.state.mode == 'hot'" class="w-1/4 mr-5 lg:hidden" src="../assets/NIVEL_HOT.svg"
        alt="nivel hot" />
      <img v-else class="w-1/4 mr-5 lg:hidden" src="../assets/NIVEL_TRANKI.svg" alt="nivel tranki" />
    </div>
    <div class="h-20 md:h-56 lg:h-32"></div>
    <div ref="rouletteContainer" class="grid grid-cols-1 grid-rows-1 mx-auto w-80 md:w-2/3 lg:w-2/5 place-items-center"
      :style="{ height: rouletteContainerHeight }">
      <div @click="spin" class="relative z-10 col-start-1 col-end-2 row-start-1 row-end-2 cursor-pointer">
        <div
          class="absolute w-10 -translate-x-1/2 border-b-75 xl:border-b-100 border-x-25 border-x-transparent -top-1/2 left-1/2 -z-40"
          :class="store.state.flavor == 'cherry' || store.state.flavor == 'pina' ? 'border-b-black' : 'border-b-primary-green'">
        </div>
        <button
          class="w-20 h-20 text-3xl text-white border-4 border-white rounded-full shadow-xl cursor-pointer md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-44 2xl:h-44 md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-trash-hand"
          :class="store.state.flavor == 'cherry' || store.state.flavor == 'pina' ? 'bg-black' : 'bg-primary-green'"
          :disabled="rotating">
          Girar
        </button>
      </div>
      <img @load="update" ref="roulette" :src="rouletteImgSrc"
        class="w-full col-start-1 col-end-2 row-start-1 row-end-1 transition-transform ease-roulette-out"
        :class="rotating ? 'duration-4000' : 'duration-0'" alt="ruleta"
        :style="{ transform: `rotate(-${angle}deg)` }" />
      <transition enter-from-class="scale-0" enter-active-class="duration-500" enter-to-class="scale-100"
        leave-from-class="scale-100" leave-active-class="duration-500" leave-to-class="scale-0">
        <div v-if="showDare" class="z-20 col-start-1 col-end-1 row-start-1 row-end-1 rounded-full opacity-90"
          :class="store.state.mode == 'tranki' ? 'bg-white' : store.state.flavor == 'cherry' || store.state.flavor == 'pina' ? 'bg-black' : 'bg-primary-green'"
          :style="getSize()">
        </div>
      </transition>
      <transition enter-from-class="opacity-0" enter-active-class="duration-500 delay-500" enter-to-class="opacity-100"
        leave-from-class="opacity-100" leave-active-class="duration-500" leave-to-class="opacity-0">
        <div v-if="showDare" @click="showDare = false"
          class="z-30 grid grid-cols-1 col-start-1 col-end-2 row-start-1 row-end-2 grid-rows-10" :style="getSize()">
          <img class="w-2/3 row-start-1 row-end-2 mx-auto" v-if="store.state.mode == 'hot'"
            src="../assets/punishment/TEXTO_POP_UP_CASTIGO_BLANCO.svg" alt="castigo" />
          <img class="w-2/3 row-start-1 row-end-2 mx-auto" v-else
            src="../assets/punishment/TEXTO_POP_UP_CASTIGO_NEGRO.svg" alt="castigo" />
          <img class="h-full row-start-3 row-end-7 mx-auto translate-y-4" :src="numberImg"
            :alt="`numero de castigo ${dare}`" />
          <img class="w-2/3 row-start-7 mx-auto row-end-8" v-if="store.state.mode == 'hot'"
            src="../assets/punishment/delaruleta_blanco.svg" alt="de la ruleta" />
          <img class="w-2/3 row-start-7 mx-auto row-end-8" v-else src="../assets/punishment/delaruleta_negro.svg"
            alt="de la ruleta" />
          <div
            class="self-end w-1/2 mx-auto translate-y-4 bg-no-repeat bg-cover xl:w-3/5 2xl:w-1/2 row-start-9 row-end-10"
            :style="{ backgroundImage: `url(${dareBg})` }">
            <p class="pt-1 text-2xl text-center font-trash-hand md:text-4xl xl:text-5xl 2xl:text-6xl xl:pt-3 md:pt-2"
              :class="store.state.mode == 'hot' ? 'text-black' : 'text-white'">
              o Toma {{ punishment }}
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <div class="absolute items-center justify-between hidden w-full px-12 lg:flex bottom-5">
    <img v-if="store.state.mode == 'hot'" class="w-1/5 xl:w-1/6" src="../assets/NIVEL_HOT.svg" alt="nivel hot" />
    <img v-else class="w-1/5 xl:w-1/6" src="../assets/NIVEL_TRANKI.svg" alt="nivel tranki" />
    <div @click="changeLevel" class="relative cursor-pointer w-44 lg:w-56 xl:w-60">
      <img class="w-full" src="../assets/BOTON_CAMBIA_DE_NIVEL.svg" alt="cambia de nivel" />
      <p
        class="absolute block text-xl text-white left-10 xl:left-14 top-3 xl:top-4 font-trash-hand lg:text-3xl xl:text-3xl">
        Cambia de nivel</p>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { slots, secos } from '../common'

// data
const store = inject('store')
const router = useRouter()
const rouletteContainerHeight = ref('auto')

// refs
const showDare = ref(false)
const rotating = ref(false)
const roulette = ref('roulette')
const rouletteContainer = ref('rouletteContainer')

const trench = 360 / slots.length
const angle = ref(0)
let start = 0
let end = 0
const rounds = 1.3

// computed
const p = computed(() => secos[store.state.mode])

const dare = computed(() => {
  return slots[getIndex(angle.value)]
})

const punishment = computed(() => {
  return p.value[getIndex(angle.value)]
})

const dareBg = computed(() => {
  const src = store.state.mode == 'hot'
    ? new URL('../assets/punishment/seco_hot.svg', import.meta.url)
    : store.state.flavor === 'cherry'
      ? new URL('../assets/punishment/seco_tranki_cherry.svg', import.meta.url)
      : new URL('../assets/punishment/seco_tranki.svg', import.meta.url)
  return src
})

const numberImg = computed(() => new URL(`../assets/numbers/${dare.value}${store.state.mode == 'hot' ? 'B' : ''}.svg`, import.meta.url))

const rouletteImgSrc = computed(() => new URL(`../assets/roulettes/${store.state.flavor}/${store.state.mode}.svg`, import.meta.url))

// methods
const spin = () => {
  rotating.value = true
  start = angle.value
  end = start + (360 * rounds) + Math.floor(Math.random() * 360)
  end = (end - (end % trench)) + (trench)
  angle.value = end
}

const getIndex = (angle) => {
  const index = Math.floor((angle + (trench / 2)) / trench)
  return index < 16 ? index : 0
}

const changeLevel = () => {
  router.push('mode')
}

const update = () => {
  const bottom = rouletteContainer.value.getBoundingClientRect().bottom
  let height = rouletteContainer.value.offsetHeight + document.body.clientHeight - bottom
  rouletteContainerHeight.value = `${height}px`
}

const getSize = () => {
  const size = {
    height: `${roulette.value.offsetHeight}px`,
    width: `${roulette.value.offsetWidth}px`,
  }
  return size
}

const appBarColor = () => {
  switch (store.state.flavor) {
    case 'manzana':
      return 'bg-manzana'
    case 'cherry':
      return 'bg-cherry'
    case 'maracuya':
      return 'bg-maracuya'
    default:
      return 'bg-naranja-light'
  }
}

// hooks
onMounted(() => {
  roulette.value.addEventListener('transitionend', e => {
    rotating.value = false
    angle.value = angle.value % 360
    showDare.value = true
  })
})
</script>