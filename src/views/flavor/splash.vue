<template>
  <div class="flex flex-col gap-4 xl:gap-18 justify-center items-center h-screen w-screen bg-cover bg-no-repeat bg-center" :style="{backgroundImage: 'url(/img/fondo.svg)'}">
    <img class="w-56 md:w-2/3 xl:w-1/4" src="../../assets/lemondanger/logo-pb-danger.svg" alt="partybox logo" />
    <div class="w-full flex flex-col items-center justify-center">
      <img class="w-72 relative -left-6 md:w-2/3 xl:w-1/3" src="../../assets/lemondanger/dinamita.svg" alt="dinamita" />
      <img class="w-56 -mt-20 relative -right-6 md:w-1/2 md:-mt-36 xl:w-1/4 xl:-mt-28" src="../../assets/lemondanger/cuidado-que-reviento.svg" alt="cuidado que reviento" />
    </div>
    <div class="flex w-full justify-between px-4 md:px-12 bottom-56 xl:absolute">
      <img class="w-16 relative top-10 md:w-28 xl:top-36" src="../../assets/lemondanger/zippo.svg" alt="zippo" />
      <img class="w-16 md:w-24" src="../../assets/lemondanger/lab.svg" alt="lab" />
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
</script>
<style></style>