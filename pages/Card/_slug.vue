<template>
  <section>
    <DomainSinglePageCard/>
  </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'SingplePageCards',
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    async get_card() {
      let payload = {
        request: `Card/${this.$route.params.slug}/`,
        key: 'page',
        body: {}
      }
      this.get_page(payload)
    }
  },
   mounted() {
    this.get_card();
  },
}
</script>
