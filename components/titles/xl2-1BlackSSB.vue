<template>
  <p class=" font-medium text-black-ssb"
  :class="small ? 'text-base sm:text-2xl-1' : 'text-xl-1 sm:text-2xl-1'">
    <slot/>
  </p>
</template>
<script>
export default {
  name: 'Titles2Xl-1BlackSSBComponent',
  props: ['small']
}
</script>
