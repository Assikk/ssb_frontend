<template>
  <section>
    <Banner :banner="$t('pages.aboutBank.banner')" />
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="mt-20">
        <div v-html="$t('pages.aboutBank.description')" class="text-base"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutBank',
}
</script>
