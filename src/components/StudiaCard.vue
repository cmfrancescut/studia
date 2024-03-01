<script setup>
</script>
<style scoped>
@import '../style.css';
</style>
<template>
  <div class="border border-1 border-gray-400 rounded-lg shadow-lg p-5 m-4 w-md min-w-sm max-w-md">
    <div
      class="prose max-w-none prose-slate prose-img:rounded-lg prose-p:mb-0 prose-img:mb-0 dark:prose-invert flex flex-col gap-0">
        <h3>
          <slot name="header"></slot>
        </h3>
        <p class="prose-a:text-primary-700 prose-a:no-underline prose-a:uppercase prose-a:hover:text-primary-500 prose-a:hover:underline prose-a:hover:uppercase">
          <slot></slot>
        </p>
        <p class="text-xs text-gray-500 prose-a:text-primary-700 prose-a:no-underline prose-a:uppercase prose-a:hover:text-primary-500 prose-a:hover:underline prose-a:hover:uppercase">
          <slot name="footer"></slot>
        </p>
    </div>
  </div>
</template>