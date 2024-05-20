<template>
  <div>
    <Banner :banner="banner"/>
    <div class="max-w-[846px] mx-auto mt-20 px-6 lg:px-0">
      <ul class="flex flex-col gap-6">
        <li v-for="item in faq" :key="item.id">
          <Faq :faq="item"
          :activeFaq="activeFaq"
          @click="openAnswer(item)"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'FaqPage',
  data() {
    return {
      banner: {
        title: 'Саволи иловагӣ доред?',
        description: 'Имконияти гирифтани қарз бо пули миллӣ ва фоизҳои дастрас',
        image: '/image/question.webp'
      },
      activeFaq: null,
    }
  },
  computed: {
    ...mapState({
      faq: state => state.api.page
    })
  },
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_faq() {
      let payload = {
        request: 'Answer/',
        key: 'page',
        body: []
      }
      this.get_page(payload)
    },
    openAnswer(item) {
      if(item.id === this.activeFaq) {
        this.activeFaq = null
      } else {
        this.activeFaq = item.id
      }
    }
  },
  mounted() {
    this.get_faq()
  }
}
</script>
