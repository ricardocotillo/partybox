<template>
  <div class="flex flex-col items-center justify-center h-screen" v-if="route.params.flavor != 'lemondanger'">
    <img class="w-2/3 mb-4 md:w-1/2 lg:w-1/4" src="../assets/JUEGALO.svg" alt="juegalo" />
    <img @click="click('hot')" v-show="!mode || mode == 'tranki'" class="w-1/2 cursor-pointer md:w-1/6" src="../assets/mode/BOTON_INACTIVO_HOT.svg" alt="hot" />
    <img @click="click('hot')" v-show="mode == 'hot'" class="w-1/2 cursor-pointer md:w-1/6" src="../assets/mode/BOTON_ACTIVO_HOT.svg" alt="hot" />
    <img class="w-1/12 my-5 md:w-10 lg:w-16" src="../assets/LETRA_O.svg" alt="letra o" />
    <img @click="click('tranki')" v-show="!mode || mode == 'hot'" class="w-1/2 cursor-pointer md:w-1/6" :src="trankiInactivoSrc" alt="tranki" />
    <img @click="click('tranki')" v-show="mode == 'tranki'" class="w-1/2 cursor-pointer md:w-1/6" src="../assets/mode/BOTON_ACTIVO_TRANKI.svg" alt="tranki" />
  </div>
  <!-- delete this popup once promo verano danger ends -->
  <div v-if="open" class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
    <div class="relative max-w-xs md:max-w-md">
      <button @click="close" class="absolute top-0 h-8 right-2 w-18"></button>
      <img src="../assets/promociones/popup-veranodanger.jpg" alt="banner promo verano danger" />
      <button @click="redirect" class="absolute w-3/4 h-20 -translate-x-1/2 bottom-16 left-1/2 bg-opacity-30"></button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { event } from 'vue-gtag'

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

// delete this after promo ends
const open = ref(false)


const close = () => {
  event('close_popup_verano_danger', {
    event_category: 'click',
    event_label: 'close_popup_verano_danger'
  })
  open.value = false
}

const redirect = () => {
  event('click_popup_verano_danger', {
    event_category: 'click',
    event_label: 'click_popup_verano_danger'
  })
  open.value = false
  router.push({name: 'verano-danger'})
}

onMounted(() => {
  setTimeout(() => {
    if (open.value) {
      open.value = false
    }
  }, 5000)
})
// promo end
</script>

<style>
</style>