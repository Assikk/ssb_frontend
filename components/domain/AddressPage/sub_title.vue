<template>
  <p class="text-base sm:text-2xl-1 cursor-pointer" @click="$emit('click')">
    <slot/>
  </p>
</template>
<script>
export default {
  name: 'Titles2Xl-1BlackSSBComponent',
}
</script>
