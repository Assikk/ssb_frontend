<template>
  <div class="w-full h-full">
    <input class="bg-white px-5 py-3 rounded text-base-1 placeholder:text-black text-black-ssb outline-0 w-full"
    :class="error ? 'border border-primary' : 'border border-white'"
    :placeholder="placeholder"
    :type="type"
    :value="value"
    :required="required ? true : false"
    :pattern="pattern"
    @input="$emit('input', $event.target.value)">
    <span class="text-primary text-small-base">{{error}}</span>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: ['type', 'placeholder', 'value', 'required', 'pattern', 'error']
}
</script>
