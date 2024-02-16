<template>
  <main class="bg-danger-amarillo h-dvh pt-16 pb-6 overflow-y-auto">
    <div class="relative">
      <img class="absolute -top-4 left-1/2 -translate-x-1/2" src="../assets/lata/sparks_2.svg" alt="sparks" />
      <img class="w-48 mx-auto" src="../assets/new_logo.svg" alt="partybox log" />
      <img class="-mt-4" src="../assets/patineta.svg" alt="chico en patineta" />
      <h3 class="font-bricolage-grotesque text-2xl font-extrabold uppercase w-82 block mx-auto text-center -mt-2 mb-6">¡Bienvenido!<br>ingresa tu fecha de nacimiento</h3>
    </div>
    <form @submit.prevent="validate" class="grid gap-2 gap-y-4 grid-cols-3 mb-14 justify-center w-80 mx-auto">
      <input class="w-full placeholder:text-white py-6 px-5 font-extrabold text-center text-2xl uppercase bg-danger-negro text-white" placeholder="DD" @change="formatDay" type="text" v-maska data-maska="##" v-model="day" name="day">
      <input class="w-full placeholder:text-white py-6 px-5 font-extrabold text-2xl uppercase bg-danger-negro text-white text-center" placeholder="MM" @change="formatMonth" type="text" name="month" v-maska data-maska="##" v-model="month">
      <input class="w-full placeholder:text-white py-6 px-5 font-extrabold text-2xl uppercase bg-danger-negro text-white text-center" placeholder="AA" type="text" name="year" v-model="year" v-maska data-maska="##">
      <button class="bg-danger-negro text-white font-extrabold uppercase text-xl flex gap-3 items-center justify-center py-2 px-4 w-full col-start-1 col-span-3">
        <i class="las la-save text-2xl"></i>
        Guardar
      </button>
    </form>
    <img class="mx-auto mb-8" src="../assets/lata/bomb_and_cat.svg" alt="bomba y gato" />
    <img class="w-full mb-9" src="../assets/nivel_de_alcohol.svg" alt="nivel de alcohol">
    <p class="text-xl text-danger-negro font-light tracking-wider uppercase mx-4 text-center">tomar bebidas alcohólicas en exceso es dañino</p>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { vMaska } from 'maska'
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
  const year = e.target.year.value
  console.log('hereeee')
  router.push({ name: 'links' })
}
</script>