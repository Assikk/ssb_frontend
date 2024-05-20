<template>
  <button class="px-6 py-4 rounded font-medium cursor-pointer text-center text-base"
  :class="`${primary ? type.primary : ''} ${outlined ? type.outlined : ''} ${fixed ? type.fixed : ''} ${disabled ? type.disabled : ''}`"
  @click="$emit('click')"
  :disabled="disabled">
    <slot/>
    <svg v-if="arrow"
    class="fill-primary w-6 h-6 ">
      <use xlink:href="#arrow"></use>
    </svg>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: ['fixed', 'outlined', 'primary', 'arrow', 'disabled'],
  data() {
    return {
      type: {
        primary: 'link bg-primary text-white w-full sm:w-fit',
        outlined: 'flex justify-center sm:justify-start items-center gap-3 text-primary border border-primary hover:bg-primary-light',
        fixed: 'w-[181px]',
        disabled: 'disabled'
      }
    }
  }
}
</script>
<style scoped>
.link:hover {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) #FF1F1F;
}
.disabled {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) #FF1F1F;
  cursor: default;
}
</style>
