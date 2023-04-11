<template>
  <div v-if="isFlavor" class="flex flex-col items-center justify-center h-screen animate-wiggle">
    <img class="w-2/3 md:w-1/3" src="../assets/CUIDADO.svg" alt="cuidado" />
    <img class="w-2/3 md:w-1/3" src="../assets/PAREZCO_SUAVE.svg" alt="cuidado" />
  </div>
  <div v-else class="relative flex items-center justify-center min-h-screen bg-black">
    <img class="w-full md:w-[40rem]" src="../assets/promociones/1.png" alt="promo verano danger finalizada" />
    <!-- <picture>
      <source media="(min-width: 1200px)" srcset="../assets/promociones/bg-1200.webp">
      <source media="(min-width: 768px)" srcset="../assets/promociones/bg-768.webp">
      <img class="w-full max-w-3xl mx-auto" src="../assets/promociones/bg-576.webp" alt="promo verano danger" />
    </picture> -->
    <a href="https://wa.me/51993920507" target="_blank" class="absolute w-28 bottom-20 aspect-square"></a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// data
const delay = 3000
const isFlavor = ref(false)

// created
if (Object.keys(route.query).length) {
  isFlavor.value = true
  setTimeout(() => router.push('mode'), delay)
} else {
  // setTimeout(() => router.push({name: 'verano-danger'}), delay)
}
</script>

<style>

</style>