<template>
  <p class="text-black-ssb"
  :class="small ? 'text-sm-1 sm:text-base-1' : 'text-base-1'">
    <slot/>
  </p>
</template>
<script>
export default {
  name: 'TextBase-1BlackSSBComponent',
  props: ['small']
}
</script>
