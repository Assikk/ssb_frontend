<template>
  <div class="relative overflow-auto sm:overflow-hidden w-full h-auto sm:h-[318px] py-10 px-4 sm:p-10 rounded-xl"
  :style="`background-color: ${banner.background}`">
    <div class="w-full sm:w-[70%] h-full flex flex-col justify-start sm:justify-between gap-6 sm:gap-0">
      <img :src="banner.img.src" alt="" class="block sm:hidden w-[232px] h-[256px] mx-auto">
      <div class="flex flex-col gap-3 sm:gap-4 w-[90%]">
        <p class="font-medium text-black-ssb title text-xl">
          {{banner.title}}
        </p>
        <TextsBase1Gray>
          {{banner.description}}
        </TextsBase1Gray>
      </div>
      <Button :outlined="true" v-on:click="changeMessage(banner.link)" class="w-full sm:w-fit">
        {{banner.button}}
      </Button>
    </div>
    <img :src="banner.img.src" alt="" class="hidden sm:block absolute -bottom-[0%] -right-[0%] w-60 h-60 customZoom">
  </div>
</template>
<script>
export default {
  name: 'LegalPersonBannerComponent',
  props: ['banner'],
  methods: {
        changeMessage(link) {
            window.open(link);
        }
    }
}
</script>
<style scoped>
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
