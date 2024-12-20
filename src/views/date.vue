<template>
  <main class="pt-16 pb-6 overflow-y-auto bg-danger-amarillo h-dvh">
    <div class="relative">
      <img class="absolute -translate-x-1/2 -top-4 left-1/2" src="../assets/lata/sparks_2.svg" alt="sparks" />
      <img class="w-48 mx-auto" src="../assets/new_logo.svg" alt="partybox log" />
      <img class="-mt-4" src="../assets/patineta.svg" alt="chico en patineta" />
      <h3 class="block mx-auto mb-6 -mt-2 text-2xl font-extrabold text-center uppercase font-bricolage-grotesque w-82">¡Bienvenido!<br>ingresa tu fecha de nacimiento</h3>
    </div>
    <form @submit.prevent="validate" class="grid justify-center grid-cols-3 gap-2 mx-auto gap-y-4 mb-14 w-80">
      <input required class="w-full px-5 py-6 text-2xl font-extrabold text-center text-white uppercase placeholder:text-white bg-danger-negro" placeholder="DD" @change="formatDay" type="text" v-maska data-maska="##" v-model="day" name="day">
      <input required class="w-full px-5 py-6 text-2xl font-extrabold text-center text-white uppercase placeholder:text-white bg-danger-negro" placeholder="MM" @change="formatMonth" type="text" name="month" v-maska data-maska="##" v-model="month">
      <input required class="w-full px-5 py-6 text-2xl font-extrabold text-center text-white uppercase placeholder:text-white bg-danger-negro" placeholder="AA" type="text" name="year" v-model="year" v-maska data-maska="##">
      <button class="flex items-center justify-center w-full col-span-3 col-start-1 gap-3 px-4 py-2 text-xl font-extrabold text-white uppercase bg-danger-negro">
        <i class="text-2xl las la-save"></i>
        Guardar
      </button>
    </form>
    <img class="mx-auto mb-8" src="../assets/lata/bomb_and_cat.svg" alt="bomba y gato" />
    <img class="w-full mb-9" src="../assets/nivel_de_alcohol.svg" alt="nivel de alcohol">
    <p class="mx-4 text-xl font-light tracking-wider text-center uppercase text-danger-negro">tomar bebidas alcohólicas en exceso es dañino</p>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { vMaska } from 'maska/vue'
const day = ref(null)
const month = ref(null)
const year = ref(null)
const router = useRouter()

const formatDay = e => {
  if (Number(e.target.value) <= 0) {
    e.target.value = 1
  }
  if (e.target.value.length === 1) {
    e.target.value = `0${e.target.value}`
    return
  }
  if (Number(e.target.value) > 31) {
    e.target.value = 31
    return
  }
}

const formatMonth = e => {
  if (Number(e.target.value) <= 0) {
    e.target.value = 1
  }
  if (e.target.value.length === 1) {
    e.target.value = `0${e.target.value}`
    return
  }
  if (Number(e.target.value) > 12) {
    e.target.value = 12
    return
  }
}

const validate = e => {
  const day = e.target.day.value
  const month = e.target.month.value
  let year = e.target.year.value
  if (year >= 40) {
    year = Number(`19${year}`)
  } else {
    year = Number(`20${year}`)
  }
  const currentDate = new Date()
  const thenDate = new Date(`${year + 18}-${month}-${day}`)
  const ok = thenDate.getTime() < currentDate.getTime()
  if (ok) {
    document.cookie = 'over18=true'
    router.push({ name: 'lata-mode' })
  }
}
</script>