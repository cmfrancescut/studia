<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['info', 'warning', 'danger', 'success', 'primary', 'secondary'].includes(value)
    },
  },
  size: {
    type: String,
    default: 'standard',
    validator(value) {
      return ['small', 'standard'].includes(value)
    }
  }
})

</script>
<style scoped>
@import '../style.css';

</style>
<template>
  <div v-if="props.size === 'small'"
       class="flex items-center justify-center border border-1 rounded-full m-4 p-1 h-6 w-6 min-w-max text-xs">
    <slot></slot>
  </div>
  <div v-else class="flex items-center justify-center border border-1 rounded-lg w-20 min-w-max m-4 p-1 h-7 text-sm">
    <div class="h-6 w-6 justify-self-start"><slot name="icon-left"></slot></div>
    <slot></slot>
    <slot name="icon-right" class="h-6 w-6"></slot>
  </div>
</template>