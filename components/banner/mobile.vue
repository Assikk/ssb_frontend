<template>
  <div class="bg-[#29293D] text-white" id="mobile-application-download">
    <div class="main__container flex flex-col md:flex-row px-6 md:px-0 items-center gap-0 lg:gap-[60px] py-[52px]">
      <div class="w-full md:w-1/2">
        <img
          src="/image/mobile.webp"
          alt="Mobile"
          class="w-full h-full customZoom"
        />
      </div>
      <div class="w-full md:w-[430px] flex flex-col gap-8">
        <h1 class="font-semibold text-2xl-1">
          {{$t('bannerMobile.title')}}
        </h1>
        <p class="text-base-1" v-html="$t('bannerMobile.description')">
        </p>
        <div class="flex items-center gap-3">
          <a
            target="_blank"
            :href="item.link"
            v-for="item in $t('bannerMobile.links')"
            :key="item.id"
          >
            <img id="img_download"
              :src="item.image.src"
              :alt="item.image.alt"
              class="w-[160px] h-[50px] customZoom"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MobileBanner",
};
</script>
