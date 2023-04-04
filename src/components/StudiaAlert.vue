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
      return 'bg-info-100 border-info-500 text-info-700'
    case 'warning':
      return 'bg-warning-100 border-warning-500 text-warning-700'
    case 'danger':
      return 'bg-danger-100 border-danger-500 text-danger-700'
    case 'success':
      return 'bg-success-100 border-success-500 text-success-700'
    default:
      return 'bg-gray-50 text-gray-700'
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
    <div class="flex flex-col p-4 m-4 gap-y-2 border border-1 rounded" :class="style">
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
