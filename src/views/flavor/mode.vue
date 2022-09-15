<template>
  <router-view></router-view>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(() => router.push({name: 'flavor-splash'}), 1000)
</script>
<style></style>