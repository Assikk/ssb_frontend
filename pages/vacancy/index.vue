<template>
  <section v-if="vacancy">
    <div class="main__container px-6 xl:px-0 pt-6">
      <Titles class="mb-6">
        {{$t('vacancy.vacancies')}}
      </Titles>
      <div class="flex flex-col gap-6 mb-6">
        <CardVacancy v-for="item in vacancy"  :key="item.id"
        :item="item"
        :list="vacancy"/>
      </div>
    </div>
    <transition name="fade">
      <ApplicationVacancy v-if="isApplicationVacancy"/>
    </transition>
  </section>
</template>
<script>
import {mapState, mapActions} from 'vuex';
import moment from 'moment';
import ApplicationVacancy from '~/components/application/vacancy.vue'
export default {
  name: 'VacancyPage',
  components: {
    ApplicationVacancy
  },
  computed: {
    ...mapState({
      vacancy: state => state.api.page,
      isApplicationVacancy: state => state.application.isApplicationVacancy
    })
  },
  methods: {
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_vacancy() {
      let payload = {
        request: 'Vacancy/',
        key: 'page',
        body: []
      }
      this.get_page(payload)
    },

    // Fomatting Date
    moment: function (date) {
      return moment(date);
    }

  },

  filters: {
    moment: function (date) {
      return moment(date).format('YYYY-MM-DD');
    }
  },

  mounted() {
    this.get_vacancy();
  }
}
</script>
