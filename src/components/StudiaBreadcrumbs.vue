<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  links: {
    type: Array,
    required: true
  },
  currentLocation: {
    type: String,
    required: true,
    default: ''
  },
  spacer: {
    type: String,
    required: false,
    default: 'chevron',
    validator(value) {
      return ['slash', 'chevron'].includes(value)
    }
  }
});
</script>
<style scoped>
@import '../style.css';
</style>
<template>
  <div class="flex flex-inline max-width-none">
    <div class="flex flex-inline" v-for="link in props.links" :key="link.link">
      <a class="text-base font-normal text-secondary-700 no-underline hover:underline hover:text-primary-500 dark:text-secondary-300 dark:hover:text-primary-300" :href="link.link">{{ link.text }}</a>
      <div v-if="spacer === 'chevron'">
        <ChevronRightIcon class="h-7 w-7 px-2 text-gray-900 dark:text-gray-300" />
      </div>
      <div v-else>
        <p class="px-2 text-base text-gray-900 dark:text-gray-300">/</p>
      </div>
    </div>
    <div class="not-prose text-base text-gray-700 dark:text-gray-300">{{ currentLocation }}</div>
  </div>
</template>