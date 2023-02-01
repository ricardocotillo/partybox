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
    <template v-if="route.path.includes('promo')">
      <a
        target="_blank"
        href="https://cms.partybox.com.pe/app/uploads/2023/02/Preguntas-Frecuentes.pdf"
        download
        class="fixed flex items-center justify-center text-3xl text-white rounded-full bottom-5 left-5 w-14 aspect-square"
      >
        <i class="lar la-question-circle"></i>
      </a>
      <a
        target="_blank"
        href="https://wa.me/51993920507"
        class="fixed flex items-center justify-center text-3xl text-white bg-green-500 rounded-full bottom-5 right-5 w-14 aspect-square"
      >
        <i class="lab la-whatsapp"></i>
      </a>
    </template>
    <router-view />
  </div>
</template>