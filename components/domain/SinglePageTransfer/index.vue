<template>
  <div>
    <!-- Start block Banner -->
    <Banner :banner="banner"/>
    <!-- End block Banner -->
    <div class="max-w-[846px] mx-auto px-6 md:px-0">
      <div class="mt-20 mb-10">
        <Rule v-for="rule in rules" :key="rule.id" :rule="rule" class="mb-8"/>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6">
        <Document v-for="document in documents" :key="document.id" :document="document"/>
      </div>
      <span v-html="options"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SinglePageTransferComponent',
  props: ['descriptionTitle'],
  data() {
    return {
      title: this.$route.query.title,
      description: this.$route.query.description,
      options: this.$route.query.options,
      image: this.$route.query.image,
      banner: {
        id: 10,
        type: '/deposits',
        title: this.$route.query.title,
        image: this.$route.query.image,

      },
      rules: [
        {
          id: 1,
          description: this.$route.query.description,
        },
      ],
    }
  }
}
</script>
