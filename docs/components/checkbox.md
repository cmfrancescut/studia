---
layout: doc
title: Checkbox
lang: en-CA
---
<script setup>
import StudiaCheckbox from '../../src/components/StudiaCheckbox.vue'

const singleCheckModel = []

</script>
# Checkbox
Studia offers checkboxes as either individual components or as a group.

## Single checkbox
<StudiaCheckbox v-model="singleCheckModel">Single checkbox</StudiaCheckbox>

```vue
<script setup>
    import { ref } from "vue";
    const model = ref([])
</script>

<template>
    <StudiaCheckbox v-model="model">Single checkbox</StudiaCheckbox>
</template>
```

## Checkbox group


## Usage
### Slots

### Props
