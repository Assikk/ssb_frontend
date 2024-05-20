<template>
  <p class="text-black" :class="small ? 'text-sm-1 sm:text-base-1' : 'text-base-1'">
    <!-- В проекте имеется два вида текста с таким размером. Один в мобильном имеет размер sm-1 а другой нет. Для этого создан props small -->
    <slot/>
  </p>
</template>
<script>
export default {
  name: 'TextBase-1GrayComponent',
  props: ['small']
}
</script>
