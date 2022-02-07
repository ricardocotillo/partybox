<script setup>
import { computed, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
import { bgColor } from './common'

const store = inject('store')
const route = useRoute()

const flavor = computed(() => route.query.flavor)

watch(flavor, newFlavor => {
  store.changeFlavor(newFlavor)
})

</script>

<template>
  <div class="min-h-screen bg-20 bg-repeat min-w-screen overflow-hidden" :class="bgColor(store.state.flavor)" style="background-image: url(/img/PATRON.svg)">
    <router-view />
  </div>
</template>