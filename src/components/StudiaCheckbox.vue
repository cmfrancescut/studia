<script setup>
import { nanoid } from "nanoid";
import { computed } from "vue";

const props = defineProps({
  modelValue: [Array, Boolean],
  value: String,
  disabled: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
})

const id = nanoid()

</script>
<style scoped>
@import '../style.css';
</style>
<template>
  <label class="flex flex-inline items-center">
  <input type="checkbox" :id="id" :value="value" :disabled="disabled"
         v-model="model"
         class="form-checkbox rounded border-gray-500 focus:ring focus:ring-2 focus:ring-offset-1 focus:ring-opacity-80 focus:ring-primary-500 text-primary-700 disabled:cursor-not-allowed disabled:border-opacity-50 disabled:text-opacity-50"/>
    <span class="ml-2"><slot></slot></span>
  </label>
</template>
