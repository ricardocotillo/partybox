import { reactive, readonly } from 'vue'
const state = reactive({
  flavor: 'manzana',
  mode: null,
})

const changeFlavor = f => {
  state.flavor = f
}

const changeMode = m => {
  state.mode = m
}

export default { state: readonly(state), changeFlavor, changeMode }