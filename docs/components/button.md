---
layout: doc
title: Button
lang: en-CA
---
<script setup>
import StudiaButton from '../../src/components/StudiaButton.vue'
</script>

# Button

Studia has several button variants. Notes on use:
* Only one action variant should be present on a page (to avoid confusing users); all other buttons should be secondary, ghost, or unstyled

## Enabled
<StudiaButton variant="action" name="action">Action</StudiaButton>
<StudiaButton variant="secondary" name="secondary">Secondary</StudiaButton>
<StudiaButton variant="ghost" name="ghost">Ghost</StudiaButton>
<StudiaButton variant="outline-green" name="outline_green">Outline Green</StudiaButton>
<StudiaButton variant="outline-red" name="outline_red">Outline Red</StudiaButton>
<StudiaButton name="unstyled">Unstyled</StudiaButton>
```vue
<StudiaButton variant="action" name="action">Action</StudiaButton>
<StudiaButton variant="secondary" name="secondary">Secondary</StudiaButton>
<StudiaButton variant="ghost" name="ghost">Ghost</StudiaButton>
<StudiaButton variant="outline-green" name="outline_green">Outline Green</StudiaButton>
<StudiaButton variant="outline-red" name="outline_red">Outline Red</StudiaButton>
<StudiaButton name="unstyled">Unstyled</StudiaButton>
```

## Disabled
<StudiaButton variant="action" name="action" disabled>Action</StudiaButton>
<StudiaButton variant="secondary" name="secondary" disabled>Secondary</StudiaButton>
<StudiaButton variant="ghost" name="ghost" disabled>Ghost</StudiaButton>
<StudiaButton variant="outline-green" name="outline_green" disabled>Outline Green</StudiaButton>
<StudiaButton variant="outline-red" name="outline_red" disabled>Outline Red</StudiaButton>
<StudiaButton name="unstyled" disabled>Unstyled</StudiaButton>
```vue
<StudiaButton variant="action" name="action" disabled>Action</StudiaButton>
<StudiaButton variant="secondary" name="secondary" disabled>Secondary</StudiaButton>
<StudiaButton variant="ghost" name="ghost" disabled>Ghost</StudiaButton>
<StudiaButton variant="outline-green" name="outline_green" disabled>Outline Green</StudiaButton>
<StudiaButton variant="outline-red" name="outline_red" disabled>Outline Red</StudiaButton>
<StudiaButton name="unstyled" disabled>Unstyled</StudiaButton>
```

## Loading
<StudiaButton variant="action" name="action" loading>Action</StudiaButton>
<StudiaButton variant="secondary" name="secondary" loading>Secondary</StudiaButton>
<StudiaButton variant="ghost" name="ghost" loading>Ghost</StudiaButton>
<StudiaButton variant="outline-green" name="outline_green" loading>Outline Green</StudiaButton>
<StudiaButton variant="outline-red" name="outline_red" loading>Outline Red</StudiaButton>
<StudiaButton name="unstyled" loading>Unstyled</StudiaButton>
```vue
<StudiaButton variant="action" name="action" loading>Action</StudiaButton>
<StudiaButton variant="secondary" name="secondary" loading>Secondary</StudiaButton>
<StudiaButton variant="ghost" name="ghost" loading>Ghost</StudiaButton>
<StudiaButton variant="outline-green" name="outline_green" loading>Outline Green</StudiaButton>
<StudiaButton variant="outline-red" name="outline_red" loading>Outline Red</StudiaButton>
<StudiaButton name="unstyled" loading>Unstyled</StudiaButton>
```

## Usage
### Slots
| Slot      | Description |
|-----------|-------------|
| `default` | Button text |

### Props
| Prop       | Required | Description                                                                      |
|------------|----------|----------------------------------------------------------------------------------|
| `variant`  | Optional | One of `action`, `secondary`, `ghost`, `outline-green` or `outline-red`          |
| `disabled` | Optional | Boolean - if present, button will be disabled                                    |
| `loading`  | Optional | Boolean - if present, button will be disabled and loading icon will be displayed |
| `name`     | Optional |                                                                                  |

### Events
These buttons emit a `@submit` event