---
layout: doc
title: Skeletons
lang: en-CA
---

<script setup>
import StudiaSkeleton from '../../src/components/StudiaSkeleton.vue'
</script>

# Loading Skeleton
Loading skeletons can be substituted for content temporarily on long-loading pages to let the user know that the page is still loading data.

There are four sizes provided in three different configurations (a paragraph, a line, and a circle).

## Paragraph
<StudiaSkeleton variant="paragraph" size="lg"/>

```vue
<StudiaSkeleton variant="paragraph" size="lg"/>
```

## Line
<StudiaSkeleton variant="line" size="sm"/>
<StudiaSkeleton variant="line" size="md"/>
<StudiaSkeleton variant="line" size="lg"/>
<StudiaSkeleton variant="line" size="xl"/>

```vue
<StudiaSkeleton variant="line" size="sm"/>
<StudiaSkeleton variant="line" size="md"/>
<StudiaSkeleton variant="line" size="lg"/>
<StudiaSkeleton variant="line" size="xl"/>
```
## Circle
<StudiaSkeleton variant="circle" size="sm"/> 
<StudiaSkeleton variant="circle" size="md"/> 
<StudiaSkeleton variant="circle" size="lg"/> 
<StudiaSkeleton variant="circle" size="xl"/>

```vue
<StudiaSkeleton variant="circle" size="sm"/>
<StudiaSkeleton variant="circle" size="md"/>
<StudiaSkeleton variant="circle" size="lg"/>
<StudiaSkeleton variant="circle" size="xl"/>
```
## Usage
### Props
| Prop      | Required | Description                                                   |
|-----------|----------|---------------------------------------------------------------|
| `variant` | Required | One of `paragraph`, `line` (this is the default), or `circle` |
| `size`    | Optional | One of `sm`, `md` (this is the default), `lg`, or `xl`        |