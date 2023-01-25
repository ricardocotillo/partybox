<template>
  <section class="h-screen bg-center bg-no-repeat bg-cover" style="background-image: url(/img/promociones/fondo-verano-danger.png)">
    <div class="container px-2 py-10 mx-auto xl:px-0">
      <h1 class="text-3xl font-bold text-center text-white">Registro de datos personales</h1>
      <form ref="form" @submit.prevent="submit" action="" method="POST" class="flex flex-col items-center max-w-lg gap-4 mx-auto mt-10">
        <div class="flex items-center w-full gap-4">
          <label class="flex-shrink-0 text-white" for="fullname">Nombres y Apellidos:</label>
          <input type="text" name="fullname" id="fullname" class="w-full flex-grow-1" />
        </div>
        <div class="flex items-center w-full gap-4">
          <label class="flex-shrink-0 text-white" for="dni">DNI:</label>
          <input type="text" name="dni" id="dni" class="w-full flex-grow-1" />
        </div>
        <div class="flex items-center w-full gap-4">
          <label class="flex-shrink-0 text-white" for="fullname">Teléfono:</label>
          <input type="tel" name="phone" id="phone" class="w-full flex-grow-1" />
        </div>
        <div class="flex items-center w-full gap-4">
          <label class="flex-shrink-0 text-white" for="fullname">Número de boleta:</label>
          <input type="text" name="receipt" id="receipt" class="w-full flex-grow-1" />
        </div>
        <input ref="receipt" type="file" class="hidden" />
        <button @click="attach" class="px-4 py-1 font-bold uppercase bg-yellow-500 rounded-sm" type="button">Adjunta boleta aquí</button>
        <div class="flex flex-col items-start gap-4">
          <label for="terms" class="text-white">
            <checkbox id="terms" class="mr-4 border-yellow-500 rounded-md hover:checked:border-yellow-500 checked:border-yellow-500" />
            Acepto términos y condiciones
          </label>
          <label for="terms" class="text-white">
            <checkbox id="data" class="mr-4 border-yellow-500 rounded-md hover:checked:border-yellow-500 checked:border-yellow-500" />
            Acepto uso de mis datos personales
          </label>
        </div>
        <button class="px-4 py-1 mt-10 font-bold uppercase bg-yellow-500 rounded-sm" type="submit">Regístrate</button>
      </form>
    </div>
  </section>
</template>
<script setup>
  import { ref } from 'vue'
  import checkbox from '../../components/checkbox.vue'

  const receipt = ref()
  const form = ref()

  // methods
  const attach = () => {
    receipt.value.click()
  }

  const submit = () => {
    const formData = new FormData(form.value)
  }
  
</script>
<style></style>