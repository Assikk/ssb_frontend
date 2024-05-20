<template>
  <section>
    <Banner :banner="$t('pages.ssbMobile.banner')" />
    <div class="max-w-[1062px] mx-auto py-20 px-6 lg:px-0">
      <Titles class="text-center mb-6"> {{$t('pages.ssbMobile.title')}} </Titles>
      <div
        class="grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <CardAdvantage
          v-for="advantage in $t('pages.ssbMobile.advantages')"
          :key="advantage.id"
          :advantage="advantage"
        />
      </div>
      <div
        class="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <CardAdvantage
          v-for="advantage in $t('pages.ssbMobile.advantages').slice(0, 3)"
          :key="advantage.id"
          :advantage="advantage"
        />
      </div>
      <div class="hidden lg:flex gap-10 mt-10 justify-center">
        <CardAdvantage
          class="max-w-[327px]"
          v-for="advantage in $t('pages.ssbMobile.advantages').slice(3, 5)"
          :key="advantage.id"
          :advantage="advantage"
        />
      </div>
    </div>
    <BannerMobile />
    <div class="mt-0 lg:mt-20">
      <div class="bg-[#FBFBFB] lg:bg-background">
        <div
          class="flex flex-col-reverse lg:flex-row gap-8 lg:gap-[82px] justify-between items-center main__container px-6 xl:px-0 py-[60px] lg:py-10"
        >
          <div class="flex items-center gap-[9px] bg-white p-3 lg:p-10">
            <img
              src="/image/star.svg"
              alt="Star Icon"
              class="block lg:hidden w-10 h-10"
            />
            <div>
              <h1 class="text-black-ssb text-xl-1 sm:text-2xl-1 mb-2 sm:mb-3">
                {{ $t('pages.ssbMobile.application.title') }}
              </h1>
              <p class="text-light text-sm-2 sm:text-base-1">
                {{ $t('pages.ssbMobile.application.description') }}
              </p>
            </div>
          </div>
          <img
            src="/image/phone.webp"
            alt="Phone"
            class="w-[253px] lg:w-[295px] h-[510px] lg:h-[594px]"
          />
        </div>
      </div>
   
    </div>
   
  </section>
</template>
<script>
export default {
  name: "SSB-mobile",
};
</script>
