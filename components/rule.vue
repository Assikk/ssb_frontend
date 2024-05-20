<template>
  <div>
    <h2 class="font-semibold text-2xl-1 mb-2">
      {{rule.title}}
    </h2>
    <p class="text-base">
      <span v-html="rule.description"></span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Rule',
  props: ['rule']
}
</script>
