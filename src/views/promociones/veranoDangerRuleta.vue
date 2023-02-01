<template>
  <section class="h-screen bg-black">
    <div class="container grid mx-auto">
      <picture class="col-start-1 col-end-2 row-start-1 row-end-2">
        <source media="(min-width: 1200px)" srcset="../../assets/promociones/1200-fondo-datos.webp">
        <source media="(min-width: 768px)" srcset="../../assets/promociones/768-fondo-datos.webp">
        <img class="w-full max-w-3xl mx-auto" src="../../assets/promociones/576-fondo-datos.webp" alt="promo verano danger" />
      </picture>
      <div class="col-start-1 col-end-2 row-start-1 row-end-2 mt-20">
        <div class="w-full max-w-xs mx-auto">
          <img src="../../assets/promociones/gira-ruleta-text.svg" alt="gira la ruleta" />
          <div v-show="slots.length > 1" class="relative">
            <img
              ref="roulette"
              src="../../assets/promociones/ruleta.webp"
              :class="rotating ? 'duration-4000' : 'duration-0'"
              :style="{transform: `rotate(-${angle}deg)`}"
              alt="ruleta verano danger"
            />
            <img @click="spin" class="absolute w-24 -translate-x-1/2 -translate-y-3/5 left-1/2 top-1/2" src="../../assets/promociones/verano-danger-girar.svg" alt="boton girar">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { ref, watchEffect, onMounted, computed } from 'vue'
  import { useRouter } from 'vue-router'

  // data
  const baseUrl = 'https://cms.partybox.com.pe'
  // const baseUrl = 'https://partybox.local'
  const slots = ref([3])
  const angle = ref(0)
  const reward = ref(null)
  const rotating = ref(false)
  const showReward = ref(false)
  const roulette = ref()
  const router = useRouter()
  const participant = JSON.parse(localStorage.getItem('participant') || '{}')
  console.log(participant)
  const chances = participant.receipts?.filter(r => !r.played).length
  let timesPlayed = 0

  // methods
  const getWinnersCount = async () => {
    const res = await fetch(`${baseUrl}/wp-json/promo/verano-danger/winners`)
    const j = await res.json()
    return j
  }

  const spin = () => {
    const randIndex = Math.floor(Math.random() * slots.value.length)
    const target = slots.value[randIndex]
    reward.value = target
    rotating.value = true
    angle.value = ((target - 1) * 120) + (2  * 360)
  }

  // created
  if (!participant.id) router.push({name: 'verano-danger-registro'})
  getWinnersCount()
    .then(winners => {
      slots.value = Array.from({length: 50})
      winners.pc || participant.pc_code ? slots.value[0] = 3 : slots.value[0] = 1 
      winners.pb || participant.pb_code ? slots.value[1] = 3 : slots.value[1] = 2
      slots.value = slots.value.fill(3, 2, 50)
    })
  
  // mounted
  onMounted(() => {
    roulette.value.addEventListener('transitionend', () => {
      rotating.value = false
      angle.value = angle.value % 360
      const formData = new FormData()
      formData.append('participant', participant.id)
      fetch(`${baseUrl}/wp-json/promo/verano-danger/played`, {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('participant', JSON.stringify(data))
          showReward.value = true
          timesPlayed += 1
          if (showReward.value && ([1, 2].includes(reward.value) || timesPlayed >= chances)) {
            router.push({name: 'verano-danger-resultado', params: {index: reward.value}})
          }
        })
    })
  })
</script>