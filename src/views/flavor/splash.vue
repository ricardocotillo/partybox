<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-center bg-no-repeat bg-cover xl:gap-18" :style="{backgroundImage: 'url(/img/fondo.svg)'}">
    <img class="w-56 md:w-2/3 xl:w-1/4" src="../../assets/lemondanger/logo-pb-danger.svg" alt="partybox logo" />
    <div class="flex flex-col items-center justify-center w-full">
      <img class="relative w-72 -left-6 md:w-2/3 xl:w-1/3" src="../../assets/lemondanger/dinamita.svg" alt="dinamita" />
      <img class="relative w-56 -mt-20 -right-6 md:w-1/2 md:-mt-36 xl:w-1/4 xl:-mt-28" src="../../assets/lemondanger/cuidado-que-reviento.svg" alt="cuidado que reviento" />
    </div>
    <div class="flex justify-between w-full px-4 md:px-12 bottom-56 xl:absolute">
      <img class="relative w-16 top-10 md:w-28 xl:top-36" src="../../assets/lemondanger/zippo.svg" alt="zippo" />
      <img class="w-16 md:w-24" src="../../assets/lemondanger/lab.svg" alt="lab" />
    </div>
  </div>
  <!-- delete this popup once promo verano danger ends -->
  <div v-if="open" class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
    <div class="relative max-w-xs md:max-w-md">
      <button @click="close" class="absolute top-0 h-8 right-2 w-18"></button>
      <img src="../../assets/promociones/popup-veranodanger.jpg" alt="banner promo verano danger" />
      <button @click="redirect" class="absolute w-3/4 h-20 -translate-x-1/2 bottom-16 left-1/2 bg-opacity-30"></button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// router
const router = useRouter()
// setTimeout(() => router.push({name: 'flavor-roulette'}), 3000)

// Delete everythin after this line once promo verano danger ends
// data
const open = ref(true)

// methods
const close = () => {
  open.value = false
  setTimeout(() => router.push({name: 'flavor-roulette'}), 1000)
}

const redirect = () => {
  router.push({name: 'verano-danger'})
}
</script>
<style></style>