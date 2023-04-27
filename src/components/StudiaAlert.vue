<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    validator(value) {
      return ['info', 'warning', 'danger', 'success'].includes(value)
    }
  },
  dismissable: {
    type: Boolean,
    default: false
  }
})

const visible = ref(true)
const style = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'bg-info-100 border-info-500 text-info-700 dark:bg-info-800 dark:text-info-100 dark:border-info-800'
    case 'warning':
      return 'bg-warning-100 border-warning-500 text-warning-700 dark:bg-warning-800 dark:text-warning-100 dark:border-warning-800'
    case 'danger':
      return 'bg-danger-100 border-danger-500 text-danger-700 dark:bg-danger-800 dark:text-danger-100 dark:border-danger-800'
    case 'success':
      return 'bg-success-100 border-success-500 text-success-700 dark:bg-success-800 dark:text-success-100 dark:border-success-800'
    default:
      return 'bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-800'
  }
})

function toggleVisibility() {
  visible.value = !visible.value
}
</script>
<style scoped>
@import '../style.css';
</style>
<template>
  <div v-if="visible">
    <div class="flex flex-col p-4 m-4 gap-y-2 border border-1 rounded not-prose" :class="style">
      <div class="flex flex-row">
        <div class="font-bold uppercase w-[99%] max-h-6">
          <slot name="title"></slot>
        </div>
        <div v-if="props.dismissable">
          <button @click="toggleVisibility">
            <XMarkIcon class="h-6 w-6 pl-0" />
          </button>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
