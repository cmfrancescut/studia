<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['info', 'warning', 'danger', 'success', 'primary', 'secondary'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'standard',
    validator(value) {
      return ['standard', 'small'].includes(value)
    }
  }
})

const style = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-300 text-primary-900'
    case 'secondary':
      return 'bg-secondary-300 text-secondary-900'
    case 'info':
      return 'bg-info-100 text-info-700'
    case 'warning':
      return 'bg-warning-100 text-warning-700'
    case 'danger':
      return 'bg-danger-100 text-danger-700'
    case 'success':
      return 'bg-success-100 text-success-700'
    default:
      return ''
  }
})
</script>
<style scoped>
@import '../style.css';
</style>
<template>
  <div
    v-if="props.size === 'standard'"
    class="flex inline-flex items-center justify-center rounded-md w-8 min-w-max m-1 py-3 px-1 h-4 text-xs"
    :class="style"
  >
    <div class="h-4 w-4 justify-self-start"><slot name="icon-left"></slot></div>
    <div class="place-self-center"><slot></slot></div>
    <div class="h-4 w-4 justify-self-end"><slot name="icon-right" class="h-6 w-6"></slot></div>
  </div>
  <div v-else class="flex inline-flex rounded-full w-3 h-3 m-1" :class="style"></div>
</template>
