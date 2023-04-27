<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator(value) {
      return ['action', 'secondary', 'ghost', 'outline-red', 'outline-green'].includes(value)
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['submit'])
const style = computed(() => {
  switch (props.variant) {
    case 'action':
      return 'border border-1 border-primary-500 bg-primary-500 text-white hover:bg-primary-700 hover:border-primary-700 disabled:hover:bg-primary-500 disabled:hover:opacity-75 disabled:hover:border-primary-500'
    case 'secondary':
      return 'border border-1 border-secondary-500 bg-secondary-500 text-white hover:bg-secondary-700 hover:border-secondary-700 disabled:hover:bg-secondary-500 disabled:hover:opacity-75 disabled:hover:border-secondary-500'
    case 'ghost':
      return 'bg-transparent hover:underline disabled:text-gray-400 disabled:hover:no-underline'
    case 'outline-green':
      return 'border border-1 border-success-600 text-success-600 bg-none hover:bg-success-600 hover:text-white disabled:border-opacity-75 disabled:hover:bg-opacity-0 disabled:hover:text-opacity-75 disabled:hover:text-success-600'
    case 'outline-red':
      return 'border border-1 border-danger-600 text-danger-600 bg-none hover:bg-danger-600 hover:text-white disabled:border-opacity-75 disabled:hover:bg-opacity-0 disabled:hover:text-opacity-75 disabled:hover:text-danger-600'
    default:
      return 'border border-1 border-gray-500 hover:bg-gray-300 disabled:border-opacity-75 disabled:hover:text-opacity-75 disabled:hover:bg-opacity-0'
  }
})

const isDisabled = computed(() => {
  return (props?.disabled || props?.loading) ?? false
})

function buttonClick() {
  emit('submit')
}
</script>

<style scoped>
@import '../style.css';
</style>

<template>
  <button
    @click="buttonClick()"
    class="rounded m-2 p-2 disabled:opacity-75 disabled:text-opacity-75 disabled:cursor-not-allowed"
    :class="style"
    :disabled="isDisabled"
    :name="name"
  >
    <div class="flex flex-row items-center">
      <svg
        class="h-5 w-5 mr-2 motion-safe:animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        v-if="loading"
      >
        <circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <slot></slot>
    </div>
  </button>
</template>
