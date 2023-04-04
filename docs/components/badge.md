---
layout: doc
title: Badge
lang: en-CA
---
<script setup>
import StudiaBadge from '../../src/components/StudiaBadge.vue';
import { SunIcon } from "@heroicons/vue/24/outline";
</script>

# Badge

Badges are small labels generally positioned near larger elements and intended to draw attention to or provide additional information relating to that element.

Badges can have icons configured to appear to the left, right, or on both sides of text. Text content should be short (generally one word).

All variants can also be displayed as a "small" badge or dot without text or icons.

## Variants

<StudiaBadge variant="primary">Primary</StudiaBadge>
<StudiaBadge variant="secondary">Secondary</StudiaBadge>
<StudiaBadge variant="info">Info</StudiaBadge>
<StudiaBadge variant="success">Success</StudiaBadge>
<StudiaBadge variant="warning">Warning</StudiaBadge>
<StudiaBadge variant="danger">Danger</StudiaBadge>

```vue
<StudiaBadge variant="primary">Primary</StudiaBadge>
<StudiaBadge variant="secondary">Secondary</StudiaBadge>
<StudiaBadge variant="info">Info</StudiaBadge>
<StudiaBadge variant="success">Success</StudiaBadge>
<StudiaBadge variant="warning">Warning</StudiaBadge>
<StudiaBadge variant="danger">Danger</StudiaBadge>
```

## Icons

<StudiaBadge><template #icon-left><SunIcon/></template>Text</StudiaBadge>
<StudiaBadge variant="secondary"><template #icon-right><SunIcon/></template>Text</StudiaBadge>
<StudiaBadge variant="success"><template #icon-left><SunIcon/></template><template #icon-right><SunIcon/></template>Text</StudiaBadge>

```vue
<StudiaBadge>
  <template #icon-left>
    <SunIcon/>
  </template>
  Text
</StudiaBadge>
<StudiaBadge variant="secondary">
  <template #icon-right>
    <SunIcon/>
  </template>
  Text
</StudiaBadge>
<StudiaBadge variant="success">
  <template #icon-left>
    <SunIcon/>
  </template>
  <template #icon-right>
    <SunIcon/>
  </template>
  Text
</StudiaBadge>
```

## Small

<StudiaBadge size='small' variant="primary"/>
<StudiaBadge size='small' variant="secondary"/>
<StudiaBadge size='small' variant="info"/>
<StudiaBadge size='small' variant="success"/>
<StudiaBadge size='small' variant="warning"/>
<StudiaBadge size='small' variant="danger"/>

```vue
<StudiaBadge size='small' variant="primary"/>
<StudiaBadge size='small' variant="secondary"/>
<StudiaBadge size='small' variant="info"/>
<StudiaBadge size='small' variant="success"/>
<StudiaBadge size='small' variant="warning"/>
<StudiaBadge size='small' variant="danger"/>
```

## Usage

### Slots
These slots are only applicable for the 'standard' size of badge.

| Slot         | Description                              |
|--------------|------------------------------------------|
| `icon-left`  | Optional icon to appear on left of text  |
| `icon-right` | Optional icon to appear on right of text |
| `default`    | Badge text                               |

### Props
| Prop      | Required | Description                                                              |
|-----------|----------|--------------------------------------------------------------------------|
| `variant` | Optional | One of `primary`, `secondary`, `info`, `danger`, `warning`, or `success` |
| `size`    | Optional | One of `standard`, `small`                                               |
