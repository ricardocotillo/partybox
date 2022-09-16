<template>
  <div class="bg-black py-2">
    <img class="h-12 mx-auto" src="../../assets/lemondanger/logo-pb-danger.svg" alt="logo" />
  </div>
  <div class="min-h-screen-content bg-cover bg-no-repeat bg-center pt-6 md:pt-20" :style="{backgroundImage: 'url(/img/fondo.svg)'}">
    <!-- <div v-if="showDare" class="h-20 md:h-36"></div> -->
    <img v-if="!showDare" class="h-20 md:h-36 mx-auto" src="../../assets/lemondanger/gira-la-ruleta.svg" alt="gira la ruleta" />
    <img v-if="showDare" class="w-72 md:w-96 mx-auto" src="../../assets/lemondanger/gato-danger.svg" alt="gato danger" />
    <img v-else class="w-60 md:w-81 mx-auto" src="../../assets/lemondanger/gato-tranki.svg" alt="gato tranki" />
    <div class="grid grid-cols-1 grid-rows-1 place-content-center place-items-center w-60 mx-auto -mt-5 md:w-96 md:-mt-7">
      <img
        ref="roulette"
        class="w-full col-start-1 row-start-1 col-span-1 row-span-1 transition-transform ease-roulette-out"
        src="../../assets/lemondanger/ruleta-de-castigos.svg"
        alt="ruleta de castigos"
        :class="rotating ? 'duration-4000' : 'duration-0'"
        :style="{transform: `rotate(-${angle}deg)`}"
      />
      <img
        class="w-20 col-start-1 row-start-1 col-span-1 row-span-1 z-10 md:w-32"
        src="../../assets/lemondanger/girar.svg"
        alt="girar"
        @click="spin"
      />
      <div class="w-full h-full col-start-1 row-start-1 col-span-1 row-span-1 z-20 bg-yellow-300 rounded-full bg-opacity-80 flex items-center">
        <div class="w-full flex flex-col items-center">
          <img class="w-32" src="../../assets/lemondanger/castigo.svg" alt="castigo" />
          <Number class="h-16" :num="12" />
          <img class="w-32" src="../../assets/lemondanger/de-la-ruleta.svg" alt="de la ruleta" />
          <div class="w-32">
            <img class="w-full" src="../../assets/lemondanger/contenedor-gris.svg" alt="contenedor gris" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useRoulette from '../../common/roulette'
import Number from './number.vue'
const { rotating, angle, spin, roulette, showDare } = useRoulette()
</script>

<style></style>