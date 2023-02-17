<template>
  <section class="min-h-screen bg-black">
    <div class="relative grid">
      <picture class="col-start-1 col-end-2 row-start-1 row-end-2">
        <source media="(min-width: 1200px)" srcset="../../assets/promociones/1200-fondo-datos.webp">
        <source media="(min-width: 768px)" srcset="../../assets/promociones/768-fondo-datos.webp">
        <img class="absolute w-full max-w-3xl -translate-x-1/2 left-1/2" src="../../assets/promociones/576-fondo-datos.webp" alt="promo verano danger" />
      </picture>
      <div
        class="z-10 flex flex-col items-center col-start-1 col-end-2 row-start-1 row-end-2 gap-4 py-4"
        :class="{'h-screen pt-40 py-0': reward == 3}"
      >
        <img v-if="reward == 1" class="max-w-xs" src="../../assets/promociones/ganaste-pc.svg" alt="ganaste pb" />
        <img v-else-if="reward == 2" class="max-w-xs" src="../../assets/promociones/ganaste-pb.svg" alt="ganaste pb" />
        <img v-else class="max-w-xs" src="../../assets/promociones/vd-sigue-participando.svg" alt="ganaste pb" />
        <img v-if="reward == 1" class="max-w-xs" src="../../assets/promociones/COOLER-CON-LUCES-Y-SOMBRAS.png" alt="cooler verano danger" />
        <img v-else-if="reward == 2" class="max-w-xs" src="../../assets/promociones/3-LEMON-DANGER.webp" alt="caja partybox verano danger" />
      </div>
    </div>
    <div class="container z-10 flex flex-col items-center col-start-1 col-end-2 row-start-1 row-end-2 gap-8 px-2 mx-auto lg:px-0">
      <img v-if="[1, 2].includes(reward)" class="w-56 md:w-72" src="../../assets/promociones/LANDING-22.svg" alt="revisa tu correo" />
      <img v-if="reward == 1" class="max-w-xl" src="../../assets/promociones/LANDING-23.svg" alt="texto ganador" />
      <img v-else-if="reward == 2" class="max-w-xl" src="../../assets/promociones/LANDING-24.svg" alt="texto ganador" />
    </div>
    <div class="h-28"></div>
  </section>
</template>
<script setup>
// props
const props = defineProps({
  index: String,
})
const { index } = props

// data
const baseUrl = 'https://cms.partybox.com.pe'
// const baseUrl = 'https://partybox.local'
const reward = Number.parseInt(index)

// methods
const getCode = async participant => {
  const formData = new FormData()
  formData.append('participant', participant.id)
  formData.append('reward', reward === 1 ? 'pc' : 'pb' )
  localStorage.removeItem('participant')
  const res = await fetch(`${baseUrl}/wp-json/promo/verano-danger/code`, {
    method: 'POST',
    body: formData
  })

  const j = await res.json()
}

// created
if ([1, 2].includes(reward)) {
  const data = localStorage.getItem('participant')
  const participant = JSON.parse(data)
  if (participant) getCode(participant)
} else {
  localStorage.removeItem('participant')
}
</script>