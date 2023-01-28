<template>
  <section class="grid min-h-screen bg-black">
    <picture class="col-start-1 col-end-2 row-start-1 row-end-2">
      <source media="(min-width: 1200px)" srcset="../../assets/promociones/1200-fondo-datos.webp">
      <source media="(min-width: 768px)" srcset="../../assets/promociones/768-fondo-datos.webp">
      <img class="w-full max-w-5xl mx-auto" src="../../assets/promociones/576-fondo-datos.webp" alt="promo verano danger" />
    </picture>
    <div class="container col-start-1 col-end-2 row-start-1 row-end-2 px-2 py-10 mx-auto xl:px-0">
      <h1 class="text-3xl font-bold text-center text-white">Registro de datos personales</h1>
      <form ref="form" @submit.prevent="submit" action="" method="POST" class="flex flex-col items-center max-w-lg gap-4 mx-auto mt-10">
        <div class="flex items-center w-full gap-2">
          <label class="flex-shrink-0 text-white" for="full-name">Nombres y Apellidos:</label>
          <input required type="text" name="full_name" id="full-name" class="w-full px-2 py-1 leading-3 rounded-md flex-grow-1 focus:border-verano-danger focus:outline-none focus:ring-verano-danger" />
        </div>
        <div class="flex w-full gap-2">
          <div class="flex items-center w-full gap-2">
            <label class="flex-shrink-0 text-white" for="dni">DNI:</label>
            <input required type="text" name="dni" id="dni" class="w-full px-2 py-1 leading-3 rounded-md flex-grow-1 focus:border-verano-danger focus:outline-none focus:ring-verano-danger" />
          </div>
          <div class="flex items-center w-full gap-2">
            <label class="flex-shrink-0 text-white" for="phone">Cel:</label>
            <input required type="tel" name="phone" id="phone" class="w-full px-2 py-1 leading-3 rounded-md flex-grow-1 focus:border-verano-danger focus:outline-none focus:ring-verano-danger" />
          </div>
        </div>
        <div class="flex items-center w-full gap-2">
          <label class="flex-shrink-0 text-white" for="receipt-code">Número de boleta:</label>
          <input required type="text" name="receipt_code" id="receipt-code" class="w-full px-2 py-1 leading-3 rounded-md flex-grow-1 focus:border-verano-danger focus:outline-none focus:ring-verano-danger" />
        </div>
        <div class="flex items-center w-full gap-2">
          <label class="flex-shrink-0 text-white" for="email">Email:</label>
          <input required type="email" name="email" id="email" class="w-full px-2 py-1 leading-3 rounded-md flex-grow-1 focus:border-verano-danger focus:outline-none focus:ring-verano-danger" />
        </div>
        <input required ref="receipt" name="receipt" type="file" class="absolute -left-full" />
        <button @click="attach" class="px-4 py-1 font-bold uppercase rounded-sm bg-verano-danger" type="button">Adjunta boleta aquí</button>
        <div class="flex flex-col items-start gap-4">
          <label for="terms" class="text-white">
            <checkbox required id="terms" class="mr-4 rounded-md border-verano-danger hover:checked:border-verano-danger checked:border-verano-danger" />
            Acepto términos y condiciones
          </label>
          <label for="data" class="text-white">
            <checkbox required id="data" class="mr-4 rounded-md border-verano-danger hover:checked:border-verano-danger checked:border-verano-danger" />
            Acepto uso de mis datos personales
          </label>
        </div>
        <button class="px-4 py-1 mt-10 font-bold uppercase rounded-sm bg-verano-danger" type="submit">Regístrate</button>
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
  const getWinnersCount = async () => {
    const res = await fetch('https://cms.partybox.com.pe/wp-json/promo/verano-danger/winners')
    const j = await res.json()
    return j
  }

  const attach = () => {
    receipt.value.click()
  }

  const submit = async () => {
    const formData = new FormData(form.value)
    const res = await fetch('https://cms.partybox.com.pe/wp-json/promo/verano-danger/participants', {
      method: 'POST',
      body: formData,
    })
    const j = await res.json()
    if ([200, 201].includes(res.status)) {
      localStorage.setItem('participant', JSON.stringify(j))
      router.push({ name: 'verano-danger-ruleta' })
    } else {
      console.log(j)
    }
  }
  
</script>
<style></style>