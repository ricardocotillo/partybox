<script setup>
import { computed, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
import { bgColor } from './common'

const store = inject('store')
const route = useRoute()

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
  }
})

</script>

<template>
  <div
    class="min-h-screen bg-20 bg-repeat min-w-screen overflow-hidden relative"
    :class="bgColor(store.state.flavor)"
  >
    <router-view />
  </div>
</template>