<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    required: true,
    default: "line",
    validator(value) {
      return ["circle", "paragraph", "line"].includes(value);
    }
  },
  size: {
    type: String,
    validator(value) {
      return ["sm", "md", "lg", "xl"].includes(value);
    }
  }
});

const style = computed(() => {
  switch (props.variant) {
    case "circle":
      switch (props.size) {
        case "sm":
          return "h-9 w-9 rounded-full";
        case "lg":
          return "h-16 w-16 rounded-full";
        case "xl":
          return "h-20 w-20 rounded-full";
        case "md":
        default:
          return "h-12 w-12 rounded-full";
      }
    case "line":
    case "paragraph":
    default:
      switch (props.size) {
        case "sm":
          return "h-5 w-1/4 rounded-lg";
        case "lg":
          return "h-5 w-3/4 rounded-lg";
        case "xl":
          return "h-5 w-full rounded-lg";
        case "md":
        default:
          return "h-5 w-2/4 rounded-lg";
      }
  }
});

</script>

<style scoped>
@import '../style.css';
</style>

<template>
  <div v-if="props.variant === 'paragraph'">
    <div class="flex flex-col">
      <div class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" :class="style" />
      <div class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" :class="style" />
      <div class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" :class="style" />
      <div class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" :class="style" />
      <div class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" :class="style" />
    </div>
  </div>
  <div v-if="props.variant === 'circle'" class="flex inline-flex">
    <div :class="style" class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" />
  </div>
  <div v-else class="flex inline-flex w-full">
    <div :class="style" class="animate-pulse bg-gray-300 dark:bg-gray-700 py-2 my-2" />
  </div>
</template>