<template>
  <div class="bg-black py-2">
    <img class="h-12 mx-auto" src="../../assets/lemondanger/logo-pb-danger.svg" alt="logo" />
  </div>
  <div class="min-h-screen-content bg-cover bg-no-repeat bg-center pt-6 md:pt-20" :style="{backgroundImage: 'url(/img/fondo.svg)'}">
    <!-- <div v-if="showDare" class="h-20 md:h-36"></div> -->
    <img v-if="!showDare" class="h-20 md:h-36 mx-auto" src="../../assets/lemondanger/gira-la-ruleta.svg" alt="gira la ruleta" />
    <img v-show="showDare" class="w-72 md:w-96 mx-auto mt-8" src="../../assets/lemondanger/gato-danger.svg" alt="gato danger" />
    <img v-show="!showDare" class="w-60 md:w-81 mx-auto" src="../../assets/lemondanger/gato-tranki.svg" alt="gato tranki" />
    <div class="grid grid-cols-1 grid-rows-1 place-content-center place-items-center w-60 mx-auto -mt-5 md:w-96 md:-mt-7" @click="showDare = false">
      <img
        ref="roulette"
        class="w-full col-start-1 row-start-1 col-span-1 row-span-1 transition-transform ease-roulette-out"
        src="../../assets/lemondanger/ruleta-de-castigos.svg"
        alt="ruleta de castigos"
        :class="rotating ? 'duration-4000' : 'duration-0'"
        :style="{transform: `rotate(-${angle}deg)`}"
      />
      <img
        class="w-20 col-start-1 row-start-1 col-span-1 row-span-1 z-10 md:w-32 cursor-pointer"
        src="../../assets/lemondanger/girar.svg"
        alt="girar"
        @click="spin"
      />
      <div v-if="showDare" class="w-full h-full col-start-1 row-start-1 col-span-1 row-span-1 z-20 bg-yellow-300 rounded-full bg-opacity-80 flex items-center cursor-pointer">
        <transition
          enter-from-class="opacity-0"
          enter-active-class="duration-500 delay-500"
          enter-to-class="opacity-100"
          leave-from-class="opacity-100"
          leave-active-class="duration-500"
          leave-to-class="opacity-0"
        >
          <div class="w-full flex flex-col items-center">
            <img class="w-32 md:w-52" src="../../assets/lemondanger/castigo.svg" alt="castigo" />
            <Number class="h-16 md:h-24" :num="dare" />
            <img class="w-32 md:w-52" src="../../assets/lemondanger/de-la-ruleta.svg" alt="de la ruleta" />
            <Castigo class="w-32 md:w-52" :num="dare" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import useRoulette from '../../common/roulette'
import Number from './number.vue'
import Castigo from './castigo.vue'
const { rotating, angle, spin, roulette, showDare, dare } = useRoulette()
</script>

<style></style>