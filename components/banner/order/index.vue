<template>
  <div :class="banner.background" class="py-10 rounded-3xl px-4 lg:px-[109px]">
    <div class="flex flex-col lg:flex-row items-center gap-10 sm:gap-[50px]">
      <img :src="banner.img.src" :alt="banner.img.alt" class="w-[276px] sm:w-[384px]">
      <div class="flex flex-col gap-3 sm:gap-4">
        <BannerOrderTitle>
          {{banner.title}}
        </BannerOrderTitle>
        <TextsBase-Light>
          {{banner.description}}
        </TextsBase-Light>
        <ul class="flex flex-col gap-4">
          <li class="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:inline-block before:align-middle before:bg-[#003BCD] before:rounded-full"
          v-for="advantage in banner.advantages" :key="advantage.id">
            <TextsBase-Light class="w-full inline-block">
              {{advantage.text}}
            </TextsBase-Light>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-end w-full mt-6 md:mt-8">
      <Button :primary="true" @click="openApplication">
        {{$t('credit.bannerOrder.orderButton')}}
      </Button>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'OrderBannerComponent',
  props: ['banner'],
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
    }),
    openApplication() {
      this.changeApplication(true)
      this.changeProduct(this.banner)
    }
  },
}
</script>
