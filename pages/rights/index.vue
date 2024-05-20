<template>
  <section>
    <Banner :banner="$t('pages.rights.banner')" />
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="mt-20">
        <h2 class="font-semibold text-2xl-1 mb-2">{{$t('pages.rights.title')}}</h2>
        <div class="flex flex-col gap-5">
          <p class="text-base" v-for="(item, index) in $t('pages.rights.list')" :key="index">
            {{item}}
          </p>
        </div>
        <h2 class="font-semibold text-2xl-1 mt-4 mb-2">{{$t('pages.rights.rulesTitle')}}</h2>
        <div class="flex flex-col gap-5">
          <p class="text-base" v-for="(item, index) in $t('pages.rights.rules')" :key="index">
            {{item}}
          </p>
        </div>
        <h2 class="font-semibold text-2xl-1 mt-4 mb-2">{{$t('pages.rights.lamentTitle')}}</h2>
        <div class="flex flex-col gap-5">
          <p class="text-base" v-for="(item, index) in $t('pages.rights.lament')" :key="index">
            {{item}}
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <p class="text-base" v-for="(item, index) in $t('pages.rights.other')" :key="index">
            {{item}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'RightsPage'
}
</script>
