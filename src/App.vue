<script setup>
import { computed, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

const store = inject('store')
const route = useRoute()

const flavor = computed(() => route.query.flavor)

watch(flavor, newFlavor => {
  store.changeFlavor(newFlavor)
})

const bgColor = computed(() => {
  switch (store.state.flavor) {
    case 'manzana':
        return 'bg-manzana'
    case 'cherry':
        return 'bg-cherry'
    default:
        return 'bg-maracuya'
  }
})
</script>

<template>
  <div class="min-h-screen bg-20 bg-repeat min-w-screen overflow-hidden" :class="bgColor" style="background-image: url(/img/PATRON.svg)">
    <router-view />
  </div>
</template>