<template>
  <section>
    <DomainSinglePageCredit/>
  </section>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'SinglePageCredit',
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_credit() {
      let payload = {
        request: `Credit/${this.$route.params.slug}/`,
        key: 'singlePage',
        body: {}
      }
      this.get_page(payload)
    }
  },
  mounted() {
    this.get_credit()
  }
}
</script>
