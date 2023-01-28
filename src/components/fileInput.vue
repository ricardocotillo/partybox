<template>
  <input v-bind="$attrs" @change="onChange" ref="field" type="file" class="absolute -left-full" />
  <button @click="onClick" class="relative px-10 py-1" :class="btnClass" type="button">
    <i v-if="icon" class="absolute block -translate-y-1/2 lar la-image left-2 top-1/2"></i>
    Adjunta boleta aquí
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
  field.value.click()
}
const onChange = e => {
  icon.value = e.target.files.length
  if (!icon.value) return

  const file = e.target.files[0]
  emit('update:modelValue', file)
}
</script>