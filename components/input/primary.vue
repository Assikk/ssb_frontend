<template>
  <div :class="label ? 'flex flex-col' : ''">
    <label :for="id" class="mb-2">
      {{label}}
    </label>
    <input :type="type"
    :id="id"
    :disabled="disabled"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="py-3 px-5 text-black rounded-lg outline-0 bg-white"
    :class="[
    {'error': error}
    ]">
    <p class="text-sm text-[#ff0000] mt-1">
      <span v-if="errorRequired">
        Это поле обязателен для заполнения
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'PrimaryInputComponent',
  props: {
    id: {},
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {},
    error: {
      type: Boolean,
      default: false
    },
    errorRequired: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.error {
  border: 1px solid #ff0000;
}
</style>
