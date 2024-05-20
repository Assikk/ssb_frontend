<template>
  <div class="relative z-100 overflow-hidden py-8 px-6 border border-[#E5E5E5] rounded-xl flex flex-col gap-8">
    <div class="h-32">
      <h1 class="font-semibold text-2xl-1 mb-2 truncate">
        {{product.title}}
      </h1>
      <p class="text-black text-base-1 description">
        {{product.description}}
      </p>
    </div>
    <div class="flex flex-col gap-6 h-36">
      <div>
        <p class="text-black text-sm font-semibold w-[70%]">
          {{product.annual_rate}}
        </p>
        <p class="text-black-ssb font-medium text-lg">
          {{product.annual_rate_subtitle}}
        </p>
      </div>
      <div>
        <p class="text-black text-sm font-semibold w-[70%]">
          {{product.get_credit}}
        </p>
        <p class="text-black-ssb font-medium text-lg">
          {{product.get_credit_subtitle}}
        </p>
      </div>
    </div>
    <Button @click="openLink(product)" :outlined="true" class="w-max">
      {{ $t('muff') }}
    </Button>
    <img :src="product.recommended_image" class="absolute bottom-0 h-[220px] w-auto right-0 goRight">
  </div>
</template>
<script>
export default {
  name: 'ProductPopular',
  props: ['product'],
  methods: {
    openLink(link){
      this.$router.push(`${link.type}/${link.id}`)
    }
  },
}
</script>
<style scoped>
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
