<template>
  <section>
    <div class="main__container px-6 xl:px-0 pt-6">
      <div class="flex justify-between items-start flex-col sm:flex-row gap-2 sm:items-center">
        <Titles>
          {{$t('pages.news.title')}}
        </Titles>
        <NuxtLink :to="localePath(`/question?type=${4}`)" class="text-primary font-medium text-base-2">
          {{$t('pages.news.answer')}}
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <CardNews v-for="(item, index) in news" :key="index" :item="item" v-if="item.status === 1"/>
      </div>
      <Pagination v-show="false"/>
    </div>
  </section>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'NewsPage',
  computed: {
    ...mapState({
      news: state => state.api.news,
      language_id: state => state.language.language_id,
    })
  },
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_news() {
      let payload = {
        request: `News/?language_id=${this.language_id}`,
        key: 'news',
        body: []
      }
      this.get_page(payload)
    }
  },
  mounted() {
    this.get_news()
  }
}
</script>
