<template>
  <main class="py-8 bg-danger-amarillo w-full h-dvh overflow-y-auto">
    <img class="mx-auto mb-11" src="../assets/lata/la_fiesta.svg" alt="la fiesta a tu manera" />
    <h3 class="font-extrabold uppercase mx-auto text-2xl w-82 text-center font-bricolage-grotesque mb-6">Elige cómo quieres empezar a divertirte</h3>
    <div class="flex flex-col gap-3 items-center">
      <a target="_blank" href="https://open.spotify.com/playlist/1loeQ4zSsEawYoaFmo5KAB?si=vphHST2BQKOPN0kbImScCA&pi=u-Zfy1deViSP2X" class="bg-danger-negro text-white font-extrabold uppercase text-2xl flex gap-3 justify-center py-6 px-5 w-70">
        Playlist
        <img src="../assets/spotify.svg" alt="spotify logo" />
      </a>
      <router-link to="/date/" class="bg-danger-negro text-white font-extrabold uppercase text-2xl flex gap-3 justify-center py-6 px-5 w-70">
        Zona de juegos
      </router-link>
    </div>
    <img class="mx-auto" src="../assets/lata/jarra_bomba.svg" alt="jarra y bomba" />
  </main>
</template>
<script setup>
</script>