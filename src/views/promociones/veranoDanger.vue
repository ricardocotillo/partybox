<template>
  <div class="flex flex-col items-center min-h-screen bg-black">
    <picture class="w-full max-w-2xl mb-2">
      <source media="(min-width: 1200px)" srcset="../../assets/promociones/bg-1200.webp">
      <source media="(min-width: 768px)" srcset="../../assets/promociones/bg-768.webp">
      <img src="../../assets/promociones/bg-576.webp" alt="promo verano danger" />
    </picture>
    <form @submit.prevent="isAdult" class="flex flex-col">
      <label for="age" class="text-white cursor-pointer">
      <checkbox id="age" required class="mr-4 border-yellow-500 rounded-md hover:checked:border-yellow-500 checked:border-yellow-500" />
        Soy mayor de edad
      </label>
      <button class="px-3 py-1 mt-4 font-bold uppercase bg-yellow-500 rounded-md">Participar aquí</button>
    </form>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  import checkbox from '../../components/checkbox.vue'

  const router = useRouter()
  
  // methods
  const isAdult = e => {
    const form = e.target
    if (form.age.checked) router.push({name: 'verano-danger-registro'})
  }
</script>