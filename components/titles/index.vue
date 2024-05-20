<template>
  <h1 class="font-semibold"
  :class="small ? 'text-xl-1 sm:text-3xl-1' : 'text-2xl-1 sm:text-3xl-1'">
    <a :href="url"><slot/></a>
  </h1>
</template>
<script>
export default {
  name: 'TitleComponent',
  props: ['small','url']
}
</script>
