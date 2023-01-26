<template>
  <section class="h-screen bg-black">
    <div class="container grid mx-auto">
      <img class="col-start-1 col-end-2 row-start-1 row-end-2" src="../../assets/promociones/576-fondo-datos.webp" alt="">
      <div class="col-start-1 col-end-2 row-start-1 row-end-2 mt-20">
        <div class="w-full max-w-xs mx-auto">
          <img src="../../assets/promociones/gira-ruleta-text.svg" alt="gira la ruleta" />
          <div class="relative">
            <img
              ref="roulette"
              src="../../assets/promociones/ruleta-verano-danger.svg"
              :class="rotating ? 'duration-4000' : 'duration-0'"
              :style="{transform: `rotate(-${angle}deg)`}"
              alt="ruleta verano danger"
            />
            <img @click="spin" class="absolute w-24 -translate-x-1/2 -translate-y-3/5 left-1/2 top-1/2" src="../../assets/promociones/verano-danger-girar.svg" alt="boton girar">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useRoulette from '../../common/roulette'
// data
const slots = [1, 2, 3]
const roulette = ref()
const router = useRouter()

const { rotating, angle, spin, showDare, dare, showContent, } = useRoulette( roulette, slots )

watchEffect(() => {
  router.push({name: 'verano-danger-resultado', params: {index: dare.value}})
})
</script>