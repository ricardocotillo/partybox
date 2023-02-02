<script setup>
import { computed, inject, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { bgColor } from './common'

const store = inject('store')
const route = useRoute()

const bg = ref(null)

const flavor = computed(() => {
  switch (route.query.flavor) {
      case 'manzanapecadora':
        return 'manzana'
      case 'maraculove':
        return 'maracuya'
      case 'cherrypasion':
        return 'cherry'
      case 'pinadembow':
        return 'pina'
      default:
        return null
    }
})

watch(flavor, newFlavor => {
  if (newFlavor) {
    store.changeFlavor(newFlavor)
    bg.value = bgColor(store.state.flavor)
  }
})

</script>

<template>
  <div
    class="relative min-h-screen overflow-hidden min-w-screen"
    :style= "bg"
  >
    <div
      v-if="route.path.includes('promo')"
      class="fixed bottom-0 flex items-center justify-between w-full gap-2 px-3 pb-5 bg-black"
    >
      <a
        target="_blank"
        href="https://cms.partybox.com.pe/app/uploads/2023/02/preguntas-frecuentes.pdf"
        download
        class="w-24"
      >
        <img src="./assets/promociones/btn-preguntas-frecuentes.svg" alt="preguntas frecuentes" />
      </a>
      <a
        target="_blank"
        href="https://cms.partybox.com.pe/app/uploads/2023/02/como-participar.pdf"
        download
        class="w-28"
      >
        <img src="./assets/promociones/btn-como-participar.svg" alt="como participar" />
      </a>
      <a
        target="_blank"
        href="https://wa.me/51993920507"
        class="flex items-center justify-center text-3xl text-white bg-green-500 rounded-full w-14 aspect-square"
      >
        <i class="lab la-whatsapp"></i>
      </a>
    </div>
    <router-view />
  </div>
</template>