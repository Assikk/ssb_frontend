<template>
  <section v-if="vacancy" class="px-6 xl:px-0">
    <div class="flex flex-col gap-6 max-w-[846px] mx-auto pt-6">
      <h1 class="text-black-ssb font-medium text-2xl-1">
        {{vacancy.title}}
      </h1>
      <div class="flex items-center gap-10">
        <div>
          <h2 class="text-black-ssb font-medium text-base-2 mb-2">
            {{ $t('deadline') }}
          </h2>
          <p class="text-black text-sm-1">
            {{vacancy.dead_line}}
          </p>
        </div>
        <div>
          <h2 class="text-black-ssb font-medium text-base-2 mb-2">
            {{ $t('region') }}
          </h2>
          <p class="text-black text-sm-1">
            {{vacancy.region}}
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-black-ssb font-medium text-base-2 mb-2 font-bold">
          {{$t('responsibilities')}}
        </h2>
        <p class="text-sm-1 text-black">
          <span v-html="vacancy.description"></span>
          
        </p>
      </div>
      <!-- <div class="text-right hidden">
        <Button :primary="true" @click="openApplication">
          Подать заявку
        </Button>
      </div> -->
    </div>
  </section>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'SingleVacancy',
  computed: {
    ...mapState({
      vacancy: state => state.api.page
    })
  },
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplicationVacancy',
    }),
    ...mapActions({
      get_page: 'api/get_page'
    }),
    openApplication() {
      let payload = {
        status: true,
        title: this.vacancy.title
      }
      this.changeApplication(payload)
    },
    get_vacancy() {
      let payload = {
        request: `Vacancy/${this.$route.params.slug}/`,
        key: 'page',
        body: {}
      }
      this.get_page(payload)
    }
  },
  mounted() {
    this.get_vacancy()
  }
}
</script>
