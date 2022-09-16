<template>
  <div class="w-32 relative">
    <img class="w-full" src="../../assets/lemondanger/contenedor-gris.svg" alt="contenedor gris" />
    <p class="font-trash-hand text-black font-bold absolute inset-1 text-center">o toma {{ punishment }}</p>
  </div>
</template>
<script setup>
  import { useRoute } from 'vue-router'
  import { secos } from '../../common'
  const props = defineProps({
    num: Number,
  })

  const route = useRoute()

  const flavor = route.params.flavor
  const punishment = secos[flavor][props.num]
</script>