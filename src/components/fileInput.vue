<template>
  <input v-bind="$attrs" @change="onChange" ref="field" type="file" class="absolute -left-full" />
  <button @click="onClick" class="relative px-10 py-1" :class="btnClass" type="button">
    <i v-if="icon" class="absolute block -translate-y-1/2 lar la-image left-2 top-1/2"></i>
    {{ icon ? 'Remueve boleta' : 'Adjunta boleta aquí' }}
    <i v-if="icon" class="absolute block -translate-y-1/2 las la-times right-2 top-1/2"></i>
  </button>
</template>
<script setup>
import { ref } from 'vue'

// props
const props = defineProps(['btnClass', 'modelValue'])
const { btnClass } = props

// emits
const emit = defineEmits(['update:modelValue'])

// data
const field = ref()
const icon = ref(false)

// methods
const onClick = () => {
  if (icon.value) {
    field.value.value = null
    emit('update:modelValue', null)
    icon.value = false
  }
  else field.value.click()
}
const onChange = e => {
  console.log(e.target.files)
  icon.value = e.target.files.length
  let file = null
  if (icon.value) file = e.target.files[0]
  emit('update:modelValue', file)
}
</script>