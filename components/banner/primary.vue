<template>
  <div class="bg-background">
    <div class="main__container py-10 sm:py-20 flex flex-col-reverse sm:flex-row gap-10 sm:gap-6 px-6 xl:px-0">
      <div class="w-full sm:w-1/2 flex flex-col gap-4">
        <SubTitle class="!mb-0">
          {{banner.title}}
        </SubTitle>
        <div class="text-[#555555] text-base">
          <p class="mb-2">
            {{banner.list.title}}
          </p>
          <ul class="ml-5 flex flex-col gap-2">
            <li type="disc" v-for="item in banner.list.items" :key="item.id">
              {{item.text}}
            </li>
          </ul>
        </div>
        <Button @click="$emit('click')" :primary="true">
          {{banner.button}}
        </Button>
      </div>
      <div class="w-full sm:w-1/2">
        <img :src="banner.img.src" :alt="banner.img.alt" class="w-full h-full">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BannerPrimaryComponent',
  props: ['banner']
}
</script>
