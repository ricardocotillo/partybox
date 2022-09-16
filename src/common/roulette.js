import { ref, computed, onMounted } from 'vue'
import { slots } from './index'

export default function useRoulette() {
  const roulette = ref('roulette')
  const showDare = ref(false)
  const rotating = ref(false)
  const showContent = ref(false)
  const angle = ref(0)
  const trench = 360 / slots.length
  let start = 0
  let end = 0
  const rounds = 1.3

  const dare = computed(() => {
    return slots[getIndex(angle.value)]
  })

  const spin = () => {
    rotating.value = true
    start = angle.value
    end = start + (360 * rounds) + Math.floor(Math.random() * 360)
    end = (end - (end % trench)) + (trench)
    angle.value = end
  }

  const getIndex = (angle) => {
    const index = Math.floor((angle + (trench/2)) / trench)
    return index < 16 ? index : 0
  }

  onMounted(() => {
    roulette.value.addEventListener('transitionend', () => {
      rotating.value = false
      angle.value = angle.value % 360
      showDare.value = true
    })
  })

  return {
    rotating,
    angle,
    trench,
    spin,
    roulette,
    showDare,
    dare,
    showContent,
  }
}