<template>
  <main class="bg-danger-amarillo py-8 h-dvh overflow-y-auto">
    <div class="mx-4 flex justify-between items-center mb-4">
      <button>
        <img src="../../../assets/lata/back.svg" alt="back button" />
      </button>
      <img class="w-22" src="../../../assets/new_logo.svg" alt="logo partybox" />
      <span class="w-14"></span>
    </div>
    <img class="mx-auto" src="../../../assets/lata/plan_hot.svg" alt="plan hot" />
    <div class="-mt-4 w-83 h-83 mx-auto relative mb-6">
      <div v-if="showDare" class="w-83 h-83 rounded-full bg-danger-rosado bg-opacity-95 border-6 border-danger-negro absolute z-20 flex justify-center items-center text-center text-3xl font-bricolage-grotesque uppercase font-extrabold">
        <p class="mx-12">Mándale una foto de tu actual a tu ex y bórralo</p>
      </div>
      <img @click="spin" class="absolute top-28 left-1/2 -translate-x-1/2 z-10" src="../../../assets/lata/boton.svg" alt="boton girar" />
      <img
        ref="roulette"
        src="../../../assets/lata/ruleta_hot.svg"
        alt="ruleta hot"
        class="transition-transform ease-roulette-out mx-auto"
        :class="rotating ? 'duration-4000' : 'duration-0'"
        :style="{transform: `rotate(-${angle}deg)`}"
      />
    </div>
    <div v-if="showDare" class="flex justify-center mb-7">
      <button @click="restart" class="px-6 py-2 bg-danger-negro text-white font-extrabold uppercase font-bricolage-grotesque">
        Volver a jugar
      </button>
    </div>
    <h3 v-else class="uppercase font-extrabold mx-4 text-center font-bricolage-grotesque text-2xl mb-7">gira la ruleta y escoge castigo o shot</h3>
    <img class="w-full mb-9" src="../../../assets/nivel_de_alcohol.svg" alt="nivel de alcohol">
    <p class="text-xl text-danger-negro font-light tracking-wider uppercase mx-4 text-center">tomar bebidas alcohólicas en exceso es dañino</p>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useRoulette from '../../../common/roulette'
import { slots } from '../../../common'

const route = useRoute()
const roulette = ref()

const { rotating, angle, spin, showDare, dare, showContent, } = useRoulette( roulette, slots )
const restart = () => {
  showDare.value = false
}
</script>