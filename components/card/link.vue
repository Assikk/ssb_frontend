<template>
  <a :href="link.link" target="_blank" class="w-full bg-background flex items-center gap-3 rounded-xl"
  :class="types[type]">
    <img :src="link.image.src" :alt="link.image.src" class="h-[60px] rounded-lg customZoom">
    <p class="text-center text-light">
      {{link.text}}
    </p>
  </a>
</template>
<script>
export default {
  name: 'LinkCardComponent',
  props: ['link', 'type'],
  data() {
    return {
      types: {
        deafult: 'px-[10.5px] py-[19px] text-base-1',
        useful: 'p-4 text-sm-2'
      }
    }
  }
}
</script>
