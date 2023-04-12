---
layout: doc
title: Checkbox
lang: en-CA
---
<script setup>
import { ref } from "vue";
import StudiaCheckbox from "../../src/components/StudiaCheckbox.vue";

const singleCheckModel = ref([]);
const checkedCheckModel = ref(["checked"]);
const disabledCheckModel = ref([]);
const exampleGroupModel = ref([]);

const options = [  { name: "Cheddar", value: "cheddar", disabled: false},
  { name: "Mozzarella", value: "mozzarella", disabled: false },
  { name: "Blue Cheese", value: "blue", disabled: true },
  { name: "Havarti", value: "havarti", disabled: false },
  { name: "Gruyère", value: "gruyere", disabled: false }
];

</script>

# Checkbox

Studia offers checkboxes as individual components that can be enabled or disabled. When bound to the same view model,
they can be easily grouped together.

## Single checkbox

<StudiaCheckbox v-model="singleCheckModel" value="single">Single checkbox</StudiaCheckbox>
<StudiaCheckbox v-model="disabledCheckModel" value="disabled" disabled>Disabled checkbox</StudiaCheckbox>
<StudiaCheckbox v-model="checkedCheckModel" value="checked" disabled>Disabled checkbox (checked)</StudiaCheckbox>

```vue
<StudiaCheckbox v-model="singleCheckModel" value="single">Single checkbox</StudiaCheckbox>
<StudiaCheckbox v-model="disabledCheckModel" value="disabled" disabled>Disabled checkbox</StudiaCheckbox>
<StudiaCheckbox v-model="disabledCheckModel" value="disabled" disabled>Disabled checkbox (checked)</StudiaCheckbox>
```

## Checkbox Group

This is an example of a group of checkboxes, with their output provided above:

Current selections: {{ exampleGroupModel }}

Which cheese(s) did you want to eat?
<div v-for="opt in options">
    <StudiaCheckbox v-model="exampleGroupModel" :value="opt.value" :disabled="opt.disabled">{{ opt.name }}</StudiaCheckbox>
</div> 

```vue
<script setup>
import { ref } from "vue";

const exampleGroupModel = ref([]);

const options = [
  { name: "Cheddar", value: "cheddar", disabled: false},
  { name: "Mozzarella", value: "mozzarella", disabled: false },
  { name: "Blue Cheese", value: "blue", disabled: true },
  { name: "Havarti", value: "havarti", disabled: false },
  { name: "Gruyère", value: "gruyere", disabled: false }
];
</script>
<template>
  Current selections: {{ exampleGroupModel }}

  Which cheese(s) did you want to eat?
  <div v-for="opt in options">
    <StudiaCheckbox 
      v-model="exampleGroupModel" 
      :value="opt.value" 
      :disabled="opt.disabled"
    >
      {{ opt.name }}
    </StudiaCheckbox>
  </div>
</template>
```

## Usage

### Slots

| Slot      | Description                      |
|-----------|----------------------------------|
| `default` | Label for an individual checkbox |

### Props

| Prop       | Required | Description                                               |
|------------|----------|-----------------------------------------------------------|
| `v-model`  | Required | The view model associated with the checkbox(es), an array |
| `value`    | Required | The value of a particular checkbox                        |
| `disabled` | Optional | A boolean indicating if the checkbox is disabled          |
