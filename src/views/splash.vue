<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <img class="w-1/3" src="../assets/CUIDADO.svg" alt="cuidado" />
    <img class="w-1/3" src="../assets/PAREZCO_SUAVE.svg" alt="cuidado" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
setTimeout(() => router.push('mode'), 3000)
</script>

<style>

</style>