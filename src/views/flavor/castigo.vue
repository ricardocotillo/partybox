<template>
  <div ref="parent" class="relative">
    <img class="w-full" src="../../assets/lemondanger/contenedor-gris.svg" alt="contenedor gris" />
    <p id="punishment" class="absolute w-full font-bold text-center text-black font-trash-hand inset-1 md:text-3xl">
      o toma {{ punishment }}
    </p>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { secos } from '../../common'
const props = defineProps({
  num: Number,
})

const store = inject('store')
const route = useRoute()

const parent = ref('parent')
const flavor = route.params.flavor
const punishment = secos[store.state.mode][props.num]
</script>