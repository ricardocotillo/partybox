<template>
  <div class="py-2 bg-black">
    <img class="h-12 mx-auto" src="../../assets/lemondanger/logo-pb-danger.svg" alt="logo" />
  </div>
  <div class="pt-6 -mt-1 bg-center bg-no-repeat bg-cover min-h-screen-content md:pt-20" :style="{backgroundImage: 'url(/img/fondo.svg)'}">
    <!-- <div v-if="showDare" class="h-20 md:h-36"></div> -->
    <img v-if="!showDare" class="h-20 mx-auto md:h-36" src="../../assets/lemondanger/gira-la-ruleta.svg" alt="gira la ruleta" />
    <img v-show="showDare" class="mx-auto mt-8 w-72 md:w-96" src="../../assets/lemondanger/gato-danger.svg" alt="gato danger" />
    <img v-show="!showDare" class="mx-auto w-60 md:w-81" src="../../assets/lemondanger/gato-tranki.svg" alt="gato tranki" />
    <div class="grid grid-cols-1 grid-rows-1 mx-auto -mt-5 place-content-center place-items-center w-72 md:w-120 md:-mt-7" @click="showDare = false">
      <img
        ref="roulette"
        class="w-full col-span-1 col-start-1 row-span-1 row-start-1 transition-transform ease-roulette-out"
        src="../../assets/lemondanger/ruleta-de-castigos.svg"
        alt="ruleta de castigos"
        :class="rotating ? 'duration-4000' : 'duration-0'"
        :style="{transform: `rotate(-${angle}deg)`}"
      />
      <img
        class="z-10 w-24 col-span-1 col-start-1 row-span-1 row-start-1 -mt-4 cursor-pointer md:w-40"
        src="../../assets/lemondanger/girar.svg"
        alt="girar"
        @click="spin"
      />
      <transition
        enter-from-class="scale-0"
        enter-active-class="duration-500"
        enter-to-class="scale-100"
        leave-from-class="scale-100"
        leave-active-class="duration-500"
        leave-to-class="scale-0"
        @after-enter="showContent = true"
      >
        <div v-if="showDare" class="z-20 flex items-center w-full h-full col-span-1 col-start-1 row-span-1 row-start-1 bg-yellow-300 rounded-full cursor-pointer bg-opacity-80">
          <transition
            enter-from-class="opacity-0"
            enter-active-class="duration-500"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-active-class="duration-500"
            leave-to-class="opacity-0"
          >
            <div v-if="showContent" class="flex flex-col items-center w-full">
              <img class="w-32 md:w-52" src="../../assets/lemondanger/castigo.svg" alt="castigo" />
              <Number class="h-16 md:h-24" :num="dare" />
              <img class="w-32 md:w-52" src="../../assets/lemondanger/de-la-ruleta.svg" alt="de la ruleta" />
              <Castigo class="w-32 md:w-52" :num="dare" />
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useRoulette from '../../common/roulette'
import Number from './number.vue'
import Castigo from './castigo.vue'
import { slots } from '../../common'

const roulette = ref()

const { rotating, angle, spin, showDare, dare, showContent, } = useRoulette( roulette, slots )
</script>

<style></style>