<template>
  <section>
    <DomainSinglePageCredit v-if="!isLoading"/>
  </section>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'SinglePageCredit',
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    async get_credit() {
      let payload = {
        request: `Credit/${this.$route.params.slug}/`,
        key: 'singlePage',
        body: {}
      }
      this.get_page(payload)
    }
  },
  async mounted() {
    await this.get_credit()
    this.isLoading = false
  }
}
</script>
