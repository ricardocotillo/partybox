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
    class="min-h-screen min-w-screen overflow-hidden relative"
    :style= "bg"
  >
    <router-view />
  </div>
</template>