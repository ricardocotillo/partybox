<template>
  <img :src="src" :alt="`castigo ${num}`">
</template>
<script setup>
  const props = defineProps({
    num: Number
  })
  const src = new URL(`../../assets/lemondanger/${props.num}.svg`, import.meta.url)
</script>