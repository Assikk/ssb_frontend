<template>
  <div class="w-fit md:w-[266px]">
    <img :src="item.img.src" :alt="item.img.alt" v-if="item.img" class="w-[120px] md:w-[150px] h-[120px] md:h-[150px] mx-auto rounded-xl object-cover">
    <div v-else class="relative w-[120px] md:w-[150px] h-[120px] md:h-[150px] bg-background mx-auto rounded-xl">
      <svg
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-gray w-[52px] h-[52px]">
        <use xlink:href="#profile"/>
      </svg>
    </div>
    <h2 class="text-black-ssb font-medium text-lg-1 md:text-2xl-1 mt-6 mb-3 text-center">
      {{item.name}}
    </h2>
    <p class="text-light text-sm-1 text-center">
      {{item.post}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'CardProfile',
  props: ['item']
}
</script>
