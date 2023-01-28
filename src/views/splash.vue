<template>
  <!-- <div class="flex flex-col items-center justify-center h-screen animate-wiggle">
    <img class="w-2/3 md:w-1/3" src="../assets/CUIDADO.svg" alt="cuidado" />
    <img class="w-2/3 md:w-1/3" src="../assets/PAREZCO_SUAVE.svg" alt="cuidado" />
  </div> -->
  <div class="flex items-center justify-center min-h-screen bg-black">
    <picture>
      <source media="(min-width: 1200px)" srcset="../assets/promociones/bg-1200.webp">
      <source media="(min-width: 768px)" srcset="../assets/promociones/bg-768.webp">
      <img class="w-full max-w-3xl mx-auto" src="../assets/promociones/bg-576.webp" alt="promo verano danger" />
    </picture>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
setTimeout(() => router.push({name: 'verano-danger'}), 3000)
</script>

<style>

</style>