<template>
  <main class="w-full py-8 overflow-y-auto bg-danger-amarillo h-dvh">
    <img class="mx-auto mb-11" src="../assets/lata/la_fiesta.svg" alt="la fiesta a tu manera" />
    <h3 class="mx-auto mb-6 text-2xl font-extrabold text-center uppercase w-82 font-bricolage-grotesque">Elige cómo quieres empezar a divertirte</h3>
    <div class="flex flex-col items-center gap-3">
      <a target="_blank" href="https://open.spotify.com/playlist/1loeQ4zSsEawYoaFmo5KAB?si=vphHST2BQKOPN0kbImScCA&pi=u-Zfy1deViSP2X" class="flex justify-center gap-3 px-5 py-6 text-2xl font-extrabold text-white uppercase bg-danger-negro w-70">
        Playlist
        <img src="../assets/spotify.svg" alt="spotify logo" />
      </a>
      <router-link to="/date/" class="flex justify-center gap-3 px-5 py-6 text-2xl font-extrabold text-white uppercase bg-danger-negro w-70">
        Zona de juegos
      </router-link>
    </div>
    <img class="mx-auto" src="../assets/lata/jarra_bomba.svg" alt="jarra y bomba" />
  </main>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { pageview } from 'vue-gtag'

const route = useRoute()

pageview({
    page_title: 'Links',
    page_location: window.location.href,
    page_path: route.path,
  })
</script>