<script setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'

const store = inject('store')
const route = useRoute()

if (route.query.flavor) {
  store.changeFlavor(route.query.flavor)
}

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
  <div class="min-h-screen bg-20 bg-repeat min-w-screen overflow-hidden" :class="bgColor" style="background-image: url(img/PATRON.svg)">
    <router-view />
  </div>
</template>