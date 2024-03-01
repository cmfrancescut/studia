---
layout: doc
title: Breadcrumbs
lang: en-CA
---
<script setup>
import StudiaBreadcrumbs from '../../src/components/StudiaBreadcrumbs.vue'

const links = [{
link: '#',
text: 'Home'
 },
{
link: '#',
text: 'Link 1'
},
{
link: '#',
text: 'Link 2'
}]

</script>

# Breadcrumbs

Breadcrumbs are used to provide navigation that gives users an idea of the path they have already followed to reach the
webpage they are currently viewing. This allows users to more easily backtrack within the web application, rather than
relying on the 'back' button.

## With chevron spacer

<StudiaBreadcrumbs :links="links" currentLocation="Current Location"/>

```vue
<script setup>
const links = [
  {
    link: '#',
    text: 'Home'
  },
  {
    link: '#',
    text: 'Link 1'
  },
  {
    link: '#',
    text: 'Link 2'
  }
]
</script>

<StudiaBreadcrumbs :links="links" currentLocation="Current Location"/>
```

## With slash spacer

<StudiaBreadcrumbs :links="links" currentLocation="Current Location" spacer="slash"/>

```vue
<script setup>
const links = [
  {
    link: '#',
    text: 'Home'
  },
  {
    link: '#',
    text: 'Link 1'
  },
  {
    link: '#',
    text: 'Link 2'
  }
]
</script>

<StudiaBreadcrumbs :links="links" currentLocation="Current Location" spacer="slash"/>
```
## Usage
### Props
| Prop              | Required | Description                                                                                                                    |
|-------------------|----------|--------------------------------------------------------------------------------------------------------------------------------|
| `links`           | Required | An array of JSON objects tracing the links back through the user's path. The JSON objects must be: `{ link: link, text: Text}` |
| `currentLocation` | Required | The text to refer to the current location                                                                                      |
| `spacer`          | Optional | The type of spacer that should be present; default is chevron, options are `slash` and `chevron`                                |