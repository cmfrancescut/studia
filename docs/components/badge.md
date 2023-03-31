---
layout: doc
title: Badge
lang: en-CA
---
<script setup>
import StudiaBadge from '../../src/components/StudiaBadge.vue'
import { FireIcon } from "@heroicons/vue/24/outline"
</script>

# Badge

<StudiaBadge>Text</StudiaBadge>

<StudiaBadge><template #icon-left><FireIcon/></template>Text</StudiaBadge>

<StudiaBadge size="small">999+</StudiaBadge>

<StudiaBadge size="small">1</StudiaBadge>