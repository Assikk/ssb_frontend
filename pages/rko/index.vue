<template>
  <section>
    <Banner
    :banner="$t('pages.rko.banner')"
    :button="$t('pages.rko.banner.button')"
    type="openApplication"/>
    <div class="max-w-[846px] mx-auto mt-[80px] px-6 lg:px-0">
      <h2 class="font-semibold text-2xl-1 mb-2">
        {{$t('pages.rko.listTitle')}}
      </h2>
      <div class="text-base mb-10">
        <ul class="list-disc pl-5">
          <li class="mb-2" v-for="item in $t('pages.rko.list')" :key="item.id">
            {{item.text}}
          </li>
        </ul>
        <p class="mt-6">
          {{$t('pages.rko.description')}}
        </p>
      </div>
      <h2 class="font-semibold text-2xl-1 mb-2">
        {{$t('pages.rko.documentsTitle')}}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
        <Document v-for="document in $t('pages.rko.documents')" :key="document.id" :document="document"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Rko',
}
</script>
