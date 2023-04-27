<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
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
      return 'bg-primary-300 text-primary-900 dark:bg-primary-900 dark:text-primary-100'
    case 'secondary':
      return 'bg-secondary-300 text-secondary-900 dark:bg-secondary-900 dark:text-secondary-100'
    case 'info':
      return 'bg-info-100 text-info-700 dark:bg-info-700 dark:text-info-100'
    case 'warning':
      return 'bg-warning-100 text-warning-700 dark:bg-warning-700 dark:text-info-100'
    case 'danger':
      return 'bg-danger-100 text-danger-700 dark:bg-danger-700 dark:text-danger-100'
    case 'success':
      return 'bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100'
    default:
      return 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-50'
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
