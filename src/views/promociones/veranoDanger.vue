<template>
  <div class="flex flex-col items-center min-h-screen bg-black lg:justify-center">
    <picture>
      <source media="(min-width: 1200px)" srcset="../../assets/promociones/bg-1200.webp">
      <source media="(min-width: 768px)" srcset="../../assets/promociones/bg-768.webp">
      <img class="w-full max-w-5xl mb-2" src="../../assets/promociones/bg-576.webp" alt="promo verano danger" />
    </picture>
    <form @submit.prevent="isAdult" class="flex flex-col">
      <label for="age" class="text-white cursor-pointer">
      <checkbox id="age" required class="mr-4 rounded-md border-verano-danger hover:checked:border-verano-danger checked:border-verano-danger" />
        Soy mayor de edad
      </label>
      <button class="px-3 py-1 mt-4 font-bold uppercase rounded-md bg-verano-danger">Participar aquí</button>
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