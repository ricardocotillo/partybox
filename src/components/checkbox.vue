<template >
  <input
    type="checkbox"
    class="w-6 h-6 bg-transparent border focus:ring-0 focus:checked:bg-transparent checked:bg-transparent hover:checked:bg-transparent"
  >
</template>
<script setup>
  const props = defineProps({
    
  })
</script>
<style>
  input:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23eab208' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  }
</style>