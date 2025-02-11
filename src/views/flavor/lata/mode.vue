<template>
  <main class="py-8 overflow-y-auto bg-danger-amarillo h-dvh">
    <div class="flex items-center justify-between mx-4 mb-4">
      <button @click="goBack">
        <img src="../../../assets/lata/back.svg" alt="back button" />
      </button>
      <img class="w-22" src="../../../assets/new_logo.svg" alt="logo partybox" />
      <span class="w-14"></span>
    </div>
    <img class="mx-auto mb-4" src="../../../assets/lata/cowboy.svg" alt="cowboy" />
    <h3 class="mx-4 mb-6 text-2xl font-extrabold text-center uppercase font-bricolage-grotesque">¿En qué plan quieres
      jugar hoy?</h3>
    <div class="flex flex-col items-center gap-3 mb-8">
      <router-link to="/lata-ruleta/hot/"
        class="flex justify-center gap-3 px-5 py-6 text-2xl font-extrabold text-white uppercase bg-danger-negro w-72">
        Plan danger
        <img src="../../../assets/plan_hot.svg" alt="plan danger" />
      </router-link>
      <router-link to="/lata-ruleta/tranqui/"
        class="flex justify-center gap-3 px-5 py-6 text-2xl font-extrabold text-white uppercase bg-danger-negro w-72">
        Plan chill
        <img src="../../../assets/plan_tranqui.svg" alt="plan chill" />
      </router-link>
    </div>
    <img class="mx-auto mb-6" src="../../../assets/lata/sparks.svg" alt="sparks" />
    <img class="w-full mb-9" src="../../../assets/nivel_de_alcohol.svg" alt="nivel de alcohol">
    <p class="mx-4 text-xl font-light tracking-wider text-center uppercase text-danger-negro">tomar bebidas alcohólicas
      en exceso es dañino</p>
  </main>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => router.go(-1)
</script>