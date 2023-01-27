<template>
  <section class="min-h-screen bg-black">
    <div class="grid">
      <picture class="w-full col-start-1 col-end-2 row-start-1 row-end-2 mx-auto">
        <source media="(min-width: 1200px)" srcset="../../assets/promociones/1200-fondo-datos.webp">
        <source media="(min-width: 768px)" srcset="../../assets/promociones/768-fondo-datos.webp">
        <img src="../../assets/promociones/576-fondo-datos.webp" alt="fondo verano danger">
      </picture>
      <div
        class="flex flex-col items-center col-start-1 col-end-2 row-start-1 row-end-2 gap-4 py-10"
        :class="{'h-screen justify-center py-0': premio == 3}"
      >
        <p v-if="code && [1, 2].includes(premio)" class="px-6 py-2 font-bold bg-white border-2 border-black">{{ code }}</p>
        <img v-if="premio == 1" class="max-w-xs" src="../../assets/promociones/ganaste-pc.svg" alt="ganaste pb" />
        <img v-else-if="premio == 2" class="max-w-xs" src="../../assets/promociones/ganaste-pb.svg" alt="ganaste pb" />
        <img v-else class="max-w-xs" src="../../assets/promociones/vd-sigue-participando.svg" alt="ganaste pb" />
        <img v-if="premio == 1" class="max-w-xs" src="../../assets/promociones/vd-cooler.webp" alt="cooler verano danger" />
        <img v-else-if="premio == 2" src="../../assets/promociones/vd-cajas.webp" alt="cajas partybox verano danger" />
        <img class="max-w-xs" v-if="[1, 2].includes(premio)" src="../../assets/promociones/reclamalo-en-caja.svg" alt="reclamalo en caja" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

  // props
  const props = defineProps({
    index: String,
  })
  const { index } = props
  const premio = Number.parseInt(index)
  
  // data
  const code = ref('')

  // methods
  const getCode = async () => {
    const data = localStorage.getItem('participant')
    const participant = JSON.parse(data)
    const formData = new FormData()
    formData.append('participant', participant.id)
    formData.append('reward', premio === 1 ? 'pc' : 'pb' )
    const res = await fetch('http://partybox.local/wp-json/promo/verano-danger/code', {
      method: 'POST',
      body: formData
    })

    const j = await res.json()
    if (res.status === 200) {
      code.value = j.code
    }
  }
  
  // created
  if ([1, 2].includes(premio)) {
    getCode()
  }
</script>