<template>
  <main class="bg-danger-amarillo py-8 h-dvh overflow-y-auto">
    <div class="mx-4 flex justify-between items-center mb-4">
      <button @click="goBack">
        <img src="../../../assets/lata/back.svg" alt="back button" />
      </button>
      <img class="w-22" src="../../../assets/new_logo.svg" alt="logo partybox" />
      <span class="w-14"></span>
    </div>
    <img class="mx-auto mb-4" src="../../../assets/lata/cowboy.svg" alt="cowboy" />
    <h3 class="font-extrabold text-2xl font-bricolage-grotesque uppercase mx-4 text-center mb-6">¿En qué plan quieres jugar hoy?</h3>
    <div class="flex flex-col gap-3 items-center mb-8">
      <router-link to="/lata-ruleta/hot/" class="bg-danger-negro text-white font-extrabold uppercase text-2xl flex gap-3 justify-center py-6 px-5 w-72">
        Plan hot
        <img src="../../../assets/plan_hot.svg" alt="plan hot" />
      </router-link>
      <router-link to="/lata-ruleta/tranqui/" class="bg-danger-negro text-white font-extrabold uppercase text-2xl flex gap-3 justify-center py-6 px-5 w-72">
        Plan tranqui
        <img src="../../../assets/plan_tranqui.svg" alt="plan tranqui" />
      </router-link>
    </div>
    <img class="mx-auto mb-6" src="../../../assets/lata/sparks.svg" alt="sparks" />
    <img class="w-full mb-9" src="../../../assets/nivel_de_alcohol.svg" alt="nivel de alcohol">
    <p class="text-xl text-danger-negro font-light tracking-wider uppercase mx-4 text-center">tomar bebidas alcohólicas en exceso es dañino</p>
  </main>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack =  () => router.go(-1)
</script>