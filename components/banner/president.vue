<template>
  <section v-if="talks.length > 0" class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 p-4 md:p-6 border border-divider rounded-2xl">
    <div>
      <h1 class="font-semibold text-2xl-1 text-black-ssb">
        {{talks[0] && talks[0].title}}
      </h1>
      <p class="mt-2 mb-4 md:mb-[52px] text-black text-base-1">
        {{talks[0] && talks[0].content}}
      </p>
      <p class="text-right md:text-left text-black-ssb text-base">
        {{talks[0] && talks[0].author}}
      </p>
    </div>
    <img :src="talks[0] && talks[0].photo.replace('artesia.','')" class="w-full md:w-1/3 h-full rounded-lg">

  </section>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'PresidentBanner',
  data() {
    return {
      title: '',
      content: '',
      author: '',
      photo: '',
    }
  },


  computed: {
    ...mapState({
      talks: state => state.api.talks,
      language_id: state => state.language.language_id,
    })
  },
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_talks() {
      let payload = {
        request: `/Talk/?language_id=${this.language_id}`,
        key: 'talks',
        body: []
      }
      this.get_page(payload)
    },
  },
 async mounted() {
    this.get_talks()
  },

}
</script>
