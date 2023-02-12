<template>
  <div class="flex flex-col items-center justify-center h-screen" v-if="route.params.flavor != 'lemondanger'">
    <img class="w-2/3 mb-4 md:w-1/2 lg:w-1/4" src="../assets/JUEGALO.svg" alt="juegalo" />
    <img @click="click('hot')" v-show="!mode || mode == 'tranki'" class="w-1/2 cursor-pointer md:w-1/6" src="../assets/mode/BOTON_INACTIVO_HOT.svg" alt="hot" />
    <img @click="click('hot')" v-show="mode == 'hot'" class="w-1/2 cursor-pointer md:w-1/6" src="../assets/mode/BOTON_ACTIVO_HOT.svg" alt="hot" />
    <img class="w-1/12 my-5 md:w-10 lg:w-16" src="../assets/LETRA_O.svg" alt="letra o" />
    <img @click="click('tranki')" v-show="!mode || mode == 'hot'" class="w-1/2 cursor-pointer md:w-1/6" :src="trankiInactivoSrc" alt="tranki" />
    <img @click="click('tranki')" v-show="mode == 'tranki'" class="w-1/2 cursor-pointer md:w-1/6" src="../assets/mode/BOTON_ACTIVO_TRANKI.svg" alt="tranki" />
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = inject('store')
const mode = ref(null)

const trankiInactivoSrc = computed(() => new URL(`../assets/mode/${store.state.flavor}_tranki_inactivo.svg`, import.meta.url))

const click = (m) => {
  store.changeMode(m)
  mode.value = m
  setTimeout(() => router.push('roulette'), 500)
}
</script>

<style>
</style>