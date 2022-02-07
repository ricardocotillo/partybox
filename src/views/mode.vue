<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <img class="w-2/3 md:w-1/2 lg:w-1/4" src="../assets/JUEGALO.svg" alt="juegalo" />
    <img @click="click('hot')" v-show="!mode || mode == 'tranki'" class="w-1/2 md:w-1/6 cursor-pointer" src="../assets/BOTON_INACTIVO_HOT.svg" alt="hot" />
    <img @click="click('hot')" v-show="mode == 'hot'" class="w-1/2 md:w-1/6 cursor-pointer" src="../assets/BOTON_ACTIVO_HOT.svg" alt="hot" />
    <img class="w-1/12 md:w-10 lg:w-16" src="../assets/LETRA_O.svg" alt="letra o" />
    <img @click="click('tranki')" v-show="!mode || mode == 'hot'" class="w-1/2 md:w-1/6 cursor-pointer" src="../assets/BOTON_INACTIVO_TRANKI.svg" alt="tranki" />
    <img @click="click('tranki')" v-show="mode == 'tranki'" class="w-1/2 md:w-1/6 cursor-pointer" src="../assets/BOTON_ACTIVO_TRANKI.svg" alt="tranki" />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = inject('store')

const mode = computed(() => store.state.mode)

const click = (m) => {
  store.changeMode(m)
  router.push('roulette')
}
</script>

<style>
</style>