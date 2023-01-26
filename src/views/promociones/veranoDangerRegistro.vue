<template>
  <section class="h-screen bg-center bg-no-repeat bg-cover" style="background-image: url(/img/promociones/fondo-verano-danger.png)">
    <div class="container px-2 py-10 mx-auto xl:px-0">
      <h1 class="text-3xl font-bold text-center text-white">Registro de datos personales</h1>
      <form ref="form" @submit.prevent="submit" action="" method="POST" class="flex flex-col items-center max-w-lg gap-4 mx-auto mt-10">
        <div class="flex items-center w-full gap-2">
          <label class="flex-shrink-0 text-white" for="full-name">Nombres y Apellidos:</label>
          <input required type="text" name="full_name" id="full-name" class="w-full leading-3 rounded-sm flex-grow-1 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
        </div>
        <div class="flex gap-2">
          <div class="flex items-center w-full gap-2">
            <label class="flex-shrink-0 text-white" for="dni">DNI:</label>
            <input required type="text" name="dni" id="dni" class="w-full leading-3 rounded-sm flex-grow-1 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
          </div>
          <div class="flex items-center w-full gap-2">
            <label class="flex-shrink-0 text-white" for="phone">Cel:</label>
            <input required type="tel" name="phone" id="phone" class="w-full leading-3 rounded-sm flex-grow-1 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
          </div>
        </div>
        <div class="flex items-center w-full gap-2">
          <label class="flex-shrink-0 text-white" for="receipt-code">Número de boleta:</label>
          <input required type="text" name="receipt_code" id="receipt-code" class="w-full leading-3 rounded-sm flex-grow-1 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500" />
        </div>
        <input required ref="receipt" name="receipt" type="file" class="absolute -left-full" />
        <button @click="attach" class="px-4 py-1 font-bold uppercase bg-yellow-500 rounded-sm" type="button">Adjunta boleta aquí</button>
        <div class="flex flex-col items-start gap-4">
          <label for="terms" class="text-white">
            <checkbox required id="terms" class="mr-4 border-yellow-500 rounded-md hover:checked:border-yellow-500 checked:border-yellow-500" />
            Acepto términos y condiciones
          </label>
          <label for="data" class="text-white">
            <checkbox required id="data" class="mr-4 border-yellow-500 rounded-md hover:checked:border-yellow-500 checked:border-yellow-500" />
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
  import { useRouter } from 'vue-router'
  import checkbox from '../../components/checkbox.vue'

  const router = useRouter()
  const receipt = ref()
  const form = ref()

  // methods
  const attach = () => {
    receipt.value.click()
  }

  const submit = async () => {
    const formData = new FormData(form.value)
    const res = await fetch('http://partybox.local/wp-json/promo/verano-danger/participants', {
      method: 'POST',
      body: formData,
    })
    const j = await res.json()
    if (res.status === 201) {
      localStorage.setItem('participant', JSON.stringify(j))
      router.push({name: 'verano-danger-ruleta'})
    } else {
      console.log(j)
    }
  }
  
</script>
<style></style>