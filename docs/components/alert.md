---
layout: doc
title: Alert
lang: en-CA
---
<script setup>
import StudiaAlert from '../../src/components/StudiaAlert.vue'
</script>

# Alert

Alerts are used to call out important information or provide a user with feedback via a dismissable banner.

## Variants
<StudiaAlert dismissable>
<template #title>Unstyled</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="info" dismissable>
<template #title>
  Info
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="warning" dismissable>
<template #title>
  Warning
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="danger" dismissable>
<template #title>
  Danger
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="success" dismissable>
<template #title>
  Success
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

```vue
<StudiaAlert dismissable>
<template #title>Unstyled</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="info" dismissable>
<template #title>
  Info
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="warning" dismissable>
<template #title>
  Warning
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="danger" dismissable>
<template #title>
  Danger
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert variant="success" dismissable>
<template #title>
  Success
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

<StudiaAlert>
```
## Non-dismissable Alert
<StudiaAlert>
<template #title>
  Non-dismissable alert
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

```vue
<StudiaAlert>
<template #title>
  Non-dismissable alert
</template>
The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>
```
## Alert without a header
<StudiaAlert>
Alert without a header.

The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>

```vue
<StudiaAlert>
Alert without a header.

The Lady of the Lake, her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. That is why I am your king.
</StudiaAlert>
```

## Usage
### Slots
| Slot      | Description                           |
|-----------|---------------------------------------|
| `title`   | Optional title at top of alert banner |
| `default` | Content of alert banner               |

### Props
| Prop          | Required | Description                                         |
|---------------|----------|-----------------------------------------------------|
| `variant`     | Optional | One of `info`, `danger`, `warning`, or `success`    |
| `dismissable` | Optional | Boolean - if present, alert banner can be dismissed |
