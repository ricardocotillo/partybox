<template>
  <div class="grid min-h-screen bg-black">
    <picture class="col-start-1 col-end-2 row-start-1 row-end-2">
      <source media="(min-width: 1200px)" srcset="../../assets/promociones/1200-fondo-datos.webp">
      <source media="(min-width: 768px)" srcset="../../assets/promociones/768-fondo-datos.webp">
      <img class="w-full max-w-3xl mx-auto" src="../../assets/promociones/576-fondo-datos.webp" alt="promo verano danger" />
    </picture>
    <div class="container flex flex-col items-center col-start-1 col-end-2 row-start-1 row-end-2 gap-8 px-2 mx-auto mt-32 lg:px-0">
      <img class="w-48 md:w-72" src="../../assets/promociones/revisa-tu-correo.svg" alt="revisa tu correo" />
      <img v-if="reward == 1" class="max-w-xl" src="../../assets/promociones/texto-ganador-pc.svg" alt="texto ganador" />
      <img v-else class="max-w-xl" src="../../assets/promociones/texto-ganador-pb.svg" alt="texto ganador" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['index'])
const { index } = props
const reward = Number.parseInt(index)
</script>