<template>
  <textarea
  class="bg-white px-5 py-3 rounded text-base-1 placeholder:text-black text-black-ssb outline-0 w-full" cols="30" rows="10"
  :placeholder="placeholder"
  :value="value"
  :required="required ? true : false"
  @input="$emit('input', $event.target.value)"/>
</template>
<script>
export default {
  name: 'TextArea',
  props: ['placeholder', 'value', 'required']
}
</script>
