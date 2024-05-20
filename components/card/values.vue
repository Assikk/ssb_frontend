<template>
  <div class="p-6 flex gap-6 bg-background shadow-background/20 rounded-xl"
  :class="value.isReverse ? 'flex-row-reverse' : ''">
    <img :src="value.img.src" :alt="value.img.alt" class="w-20 h-20">
    <div>
      <h1 class="text-black-ssb text-xl-1 sm:text-2xl-1 font-medium mb-3">
        {{value.title}}
      </h1>
      <p class="text-black text-sm-2 sm:text-base-1">
        {{value.description}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardValue',
  props: ['value']
}
</script>
