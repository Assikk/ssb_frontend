<template>
  <div class="flex items-center gap-[14px]">
    <input type="text"
    placeholder="Поиск"
    class="p-2 outline-0 border border-gray rounded w-full"
    @input="fillValue"
    :value="value"
    @keypress.enter="$emit('submit', value)">
    <img src="/image/search.svg" alt="Search Icon" class="w-5 h-5"
    @click="$emit('submit', value)">
  </div>
</template>
<script>
export default {
  name: 'MobileSearch',
  props: ['value'],
  methods: {
    fillValue(event) {
      this.$emit("input", event.target.value);
    }
  }
}
</script>
