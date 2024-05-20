<template>
  <section v-if="sale" class="main__container px-6 xl:px-0">
    <Titles class="my-6">
      {{$t('pages.sale.title')}}
    </Titles>
    <p class="text-base-1 mb-6">
      {{$t('pages.sale.description')}}
    </p>
    <div class="hidden lg:grid grid-cols-[10%_15%_55%_20%] bg-white">
      <div v-for="(item, index) in $t('pages.sale.table.header')" :key="index" class="font-semibold text-xl-1 px-6 py-3">
        {{item.text}}
      </div>
    </div>
    <div class="grid grid-cols-none lg:grid-cols-[10%_15%_55%_20%] border border-divider rounded-xl lg:rounded-none lg:border-0 mb-6 lg:mb-0"
    :class="item.id % 2 === 1 ? 'lg:bg-background' : 'lg:bg-white'"
    v-for="item in sale" :key="item.id">
      <p class="hidden lg:block line">
        {{item.id}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.city}}
      </p>
      <p class="line bg-white lg:bg-transparent">
        {{item.title}}
      </p>
      <p class="line bg-background lg:bg-transparent rounded-xl lg:rounded-none">
        {{item.price}}
      </p>
    </div>
  </section>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'SalePage',
  computed: {
    ...mapState({
      sale: state => state.api.page,
      language_id: state => state.language.language_id,
    })
  },
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_sale() {
      let payload = {
        request: `Auction/?language_id=${this.language_id}`,
        key: 'page',
        body: []
      }
      this.get_page(payload)
    }
  },
  mounted() {
    this.get_sale()
  }
}
</script>
<style lang="postcss" scoped>
  .line{
    @apply text-sm-2 xl:text-base-1 px-6 py-4 lg:py-3
  }
</style>
