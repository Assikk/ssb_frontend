<template>
  <section>
    <Banner :banner="$t('pages.history.banner')" />
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="mt-20">
        <h2 class="font-semibold text-2xl-1 mb-2">{{$t('pages.history.title')}}</h2>
        <div class="flex flex-col gap-5">
          <p class="text-base" v-for="(item, index) in $t('pages.history.list')" :key="index">
            {{item}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HistoryPage',
}
</script>
