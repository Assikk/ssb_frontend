<template>
  <NuxtLink :to="localePath(`/?type=${1}`)">
    <img src="/image/logo.svg" alt="Logo" :class="className">
  </NuxtLink>
</template>
<script>
export default {
  name: 'Logo',
  props: ['className']
}
</script>
