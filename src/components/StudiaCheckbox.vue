<script setup>
import {nanoid} from "nanoid";
import {computed} from "vue";

const props = defineProps({
  modelValue: [Array, Boolean],
  value: String,
  label: String,
  checked: {
    type: Boolean,
    default: false
  },
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
  <input type="checkbox" :id="id" :value="value" :disabled="disabled"
         v-model="model"
         class="rounded border-gray-500 mr-2 focus:ring focus:ring-1 focus:ring-opacity-80 focus:ring-primary-500 accent-primary-500"/>
  <label :for="id">
    <slot></slot>
  </label>
</template>
