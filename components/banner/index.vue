<template>
  <div class="bg-[#F3F4FC]">
    <div class="px-6 md:px-6 lg:px-0 max-w-[1275px] mx-auto py-16 flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-center justify-between">
      <div class="text-center md:text-left w-full md:w-4/6 md:pr-20">
        <h1 class="font-semibold text-2xl-1 sm:text-3xl-1 mb-3">
          <span v-html="banner.title"></span>
        </h1>
        <p class="text-base">
          {{banner.description}}
        </p>
        <div class="flex justify-center md:justify-start items-center gap-6">
          <Button v-if="type === 'openApplication'" :primary="true" class="!w-fit mt-8"
          @click="openApplication">
            {{button}}
          </Button>
          <Button v-if="banner.buttonSinglePage" :outlined="true" class="mt-8"
          @click="$router.push(localePath(banner.type) + `/${banner.id}?type=${$route.query.type}`)">
            {{banner.buttonSinglePage.text}}
          </Button>
        </div>
        <a v-if="banner.buttonDownload" :href="banner.buttonDownload.link">
          <Button :primary="true" class="mt-8 w-full md:w-auto">
            {{banner.buttonDownload.text}}
          </Button>
        </a>
        <NuxtLink :to="localePath(banner.buttonLink.link)" v-if="banner.buttonLink">
          <Button :primary="true" class="mt-8">
            {{banner.buttonLink.text}}
          </Button>
        </NuxtLink>
      </div>
      <div class="w-full md:w-2/6">
        <img :src="banner.image" :alt="banner.title" class="rounded-lg sm:w-auto mx-auto md:ml-auto md:mr-0">
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Banner',
  props: ['banner', 'button', 'type', 'product'],
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
    }),
    openApplication() {
      if(this.product == 'card' || this.product == 'credit' || this.product == 'deposit') {
        this.$emit('clickButton')
      } else {
        this.changeApplication(true)
        this.changeProduct(this.banner)
      }
    }
  }
}
</script>
