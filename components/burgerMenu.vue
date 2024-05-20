<template>
  <button @click="$emit('click')">
    <span class="line block bg-black-ssb"></span>
    <span class="line block bg-black-ssb"></span>
    <span class="line block bg-black-ssb"></span>
  </button>
</template>
<script>
export default {
  name: 'Burger'
}
</script>
<style scoped>
.line {
  margin-block: 7px;
  height: 3px;
  width: 25px;
}
</style>
