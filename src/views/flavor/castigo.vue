<template>
  <div ref="parent" class="relative">
    <img class="w-full" src="../../assets/lemondanger/contenedor-gris.svg" alt="contenedor gris" />
    <p id="punishment" class="font-trash-hand text-black font-bold absolute inset-1 text-center w-full md:text-3xl">o toma {{ punishment }}</p>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { secos } from '../../common'
  const props = defineProps({
    num: Number,
  })

  const route = useRoute()

  const parent = ref('parent')
  const flavor = route.params.flavor
  const punishment = secos[flavor][props.num]
</script>