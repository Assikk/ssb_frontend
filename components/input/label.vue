<template>
  <div class="flex flex-col gap-[5px] text-black-ssb text-sm-1">
    <label :for="label">{{label}}</label>
    <input type="text" :value="value" @input="fillValue" :id="label" class="h-[44px] outline-0 px-2 opacity-40 border border-black-ssb rounded-md">
  </div>
</template>
<script>
export default {
  name: 'LabelInput',
  props: ['label', 'value'],
  methods: {
    fillValue(event) {
      this.$emit("input", event.target.value);
    }
  }
}
</script>
