<template>
  <section class="grid min-h-screen bg-black">
    <picture class="col-start-1 col-end-2 row-start-1 row-end-2">
      <source media="(min-width: 1200px)" srcset="../../assets/promociones/1200-fondo-datos.webp">
      <source media="(min-width: 768px)" srcset="../../assets/promociones/768-fondo-datos.webp">
      <img class="w-full max-w-3xl mx-auto" src="../../assets/promociones/576-fondo-datos.webp" alt="promo verano danger" />
    </picture>
    <div class="container col-start-1 col-end-2 row-start-1 row-end-2 px-2 py-10 mx-auto xl:px-0">
      <h1 class="text-2xl font-bold text-center text-white">Registro de datos personales</h1>
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
        <FileInput accept="image/*" v-model="file" required name="receipt" id="receipt" btnClass="font-bold uppercase rounded-sm bg-verano-danger" />
        <div class="flex flex-col items-start gap-4">
          <label for="terms" class="text-white">
            <Checkbox required id="terms" class="mr-4 rounded-md border-verano-danger hover:checked:border-verano-danger checked:border-verano-danger" />
            Acepto <RouterLink to="/promo/verano-danger/terminos" class="text-verano-danger">Términos y condiciones</RouterLink>
          </label>
          <label for="data" class="text-white">
            <Checkbox required id="data" class="mr-4 rounded-md border-verano-danger hover:checked:border-verano-danger checked:border-verano-danger" />
            Acepto el uso del tratamiento de datos personales
          </label>
        </div>
        <button :disabled="loading" @click="validate" class="relative px-6 py-1 mt-10 font-bold uppercase rounded-sm bg-verano-danger" type="submit">
          <i v-if="loading" class="absolute las la-circle-notch left-1 top-1/4 la-spin"></i>
          Regístrate
        </button>
      </form>
    </div>
    <div class="h-28"></div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import validator from 'validator'
import { event, pageview } from 'vue-gtag'
import Checkbox from '../../components/checkbox.vue'
import FileInput from '../../components/fileInput.vue'

const router = useRouter()

//data
// const baseUrl = 'http://partybox.local'
const baseUrl = 'https://cms.partybox.com.pe'
const form = ref()
const loading = ref(false)
const file = ref(null)

// created
router.push('/')

// methods
const validate = () => {
  if (!form.value.receipt.value) {
    toast.warn('Por favor adjunta una boleta', {autoClose: 1000})
  }
}

const submit = async () => {
  loading.value = true
  const fullName = form.value.full_name.value
  const dni = form.value.dni.value
  const phone = form.value.phone.value
  const fnIsLength = fullName.split(' ').length >= 2
  const dniIsNumeric = validator.isNumeric(dni)
  const dniIsLength = validator.isLength(dni, {min: 8, max: 8})
  const phoneIsNumeric = validator.isNumeric(phone)
  const phoneIsLength = validator.isLength(phone, {min: 9, max:9})

  if (!fnIsLength) {
    toast.warn('Por favor, ingresa tu nombre y apellido')
  }

  if (!dniIsNumeric) {
    toast.warn('Por favor, ingrese un número de DNI válido')
  }
  
  if (!dniIsLength) {
    toast.warn('El número de DNI debe ser de exactamente 8 dígitos')
  }

  if (!phoneIsNumeric) {
    toast.warn('Por favor, ingrese un celular válido. Todos los caracteres deben ser númericos.')
  }

  if (!phoneIsLength) {
    toast.warn('El número de celular debe ser de exactamente 9 dígitos')
  }

  if (!fnIsLength || !dniIsNumeric || !dniIsLength || !phoneIsNumeric || !phoneIsLength) {
    loading.value = false
    return
  }

  toast.info('Estamos procesando tu información.', {autoClose: 6000})
  const formData = new FormData(form.value)
  const res = await fetch(`${baseUrl}/wp-json/promo/verano-danger/participants`, {
    method: 'POST',
    body: formData,
  })
  const j = await res.json()
  loading.value = false
  if ([200, 201].includes(res.status)) {
    localStorage.setItem('participant', JSON.stringify(j))
    event('registro_verano_danger', {
      event_category: 'formulario',
      event_label: 'registro_verano_danger'
    })
    router.push({ name: 'verano-danger-ruleta' })
  } else {
    console.log(j)
  }
}
</script>