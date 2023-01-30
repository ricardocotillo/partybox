<template>
  <div v-if="isFlavor" class="flex flex-col items-center justify-center h-screen animate-wiggle">
    <img class="w-2/3 md:w-1/3" src="../assets/CUIDADO.svg" alt="cuidado" />
    <img class="w-2/3 md:w-1/3" src="../assets/PAREZCO_SUAVE.svg" alt="cuidado" />
  </div>
  <div v-else class="flex items-center justify-center min-h-screen bg-black">
    <picture>
      <source media="(min-width: 1200px)" srcset="../assets/promociones/bg-1200.webp">
      <source media="(min-width: 768px)" srcset="../assets/promociones/bg-768.webp">
      <img class="w-full max-w-3xl mx-auto" src="../assets/promociones/bg-576.webp" alt="promo verano danger" />
    </picture>
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
  setTimeout(() => router.push({name: 'verano-danger'}), delay)
}
</script>

<style>

</style>