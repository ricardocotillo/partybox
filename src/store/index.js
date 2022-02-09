import { reactive, readonly } from 'vue'
const state = reactive({
  flavor: localStorage.getItem('flavor') ?? 'manzana',
  mode: localStorage.getItem('mode'),
})

const changeFlavor = f => {
  localStorage.setItem('flavor', f)
  state.flavor = f
}

const changeMode = m => {
  localStorage.setItem('mode', m)
  state.mode = m
}

export default { state: readonly(state), changeFlavor, changeMode }