import { ref } from 'vue'
import { slots } from './index'

export default function useRoulette() {
  const rotating = ref(false)
  const angle = ref(0)
  const trench = 360 / slots.length
  let start = 0
  let end = 0
  const rounds = 1.3
  const spin = () => {
    rotating.value = true
    start = angle.value
    end = start + (360 * rounds) + Math.floor(Math.random() * 360)
    end = (end - (end % trench)) + (trench)
    angle.value = end
  }

  return {
    rotating,
    angle,
    trench,
    spin,
  }
}