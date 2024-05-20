<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="mt-6 mb-8">
      {{$t('pages.correspondence.title')}}
    </Titles>
    <div class="hidden lg:grid grid-cols-[8%_10%_27%_13%_20%_22%]">
      <div v-for="(item, index) in $t('pages.correspondence.table.header')" :key="index" :class="`font-medium text-xl-1 px-6 py-3 bg-${item.color}`">
        {{item.text}}
      </div>
    </div>
    <div class="grid grid-cols-none lg:grid-cols-[8%_10%_27%_11%_20%_24%] border border-divider rounded-xl lg:rounded-none lg:border-0 mb-6 lg:mb-0"
    :class="item.id % 2 === 1 ? 'lg:bg-background' : 'lg:bg-white'"
    v-for="item in $t('pages.correspondence.table.body')" :key="item.id">
      <p class="hidden lg:block line">
        {{item.id}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.country}}
      </p>
      <p class="line bg-white lg:bg-transparent">
        {{item.nameBank}}
      </p>
      <p class="line bg-background lg:bg-transparent">
        <span v-html="item.currency"></span>
      </p>
      <p class="line bg-white lg:bg-transparent">
        {{item.numberScore}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.requisites}}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Correspondence',
}
</script>
<style lang="postcss" scoped>
  .line{
    @apply text-sm-2 xl:text-base-1 px-6 py-4 lg:py-3
  }
</style>
