<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="closeApplication"/>
    <div class="bg-background rounded-xl px-6 sm:px-20 py-10 w-[90%] sm:w-full sm:max-w-[489px] fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible">
      <div class="w-auto sm:w-[330px] mx-auto">
        <h1 class="text-xl-1 text-black-ssb text-center font-medium mb-6">
          {{activeVacancy}}
        </h1>
        <div class="flex flex-col gap-3">
        <InputLabel
        :label="$t('familyName')"
        v-model="form.surname"/>
        <InputLabel
        :label="$t('name')"
        v-model="form.name"/>
        <InputLabel
        :label="$t('phone')"
        v-model="form.phone"/>
        <InputLabel
        :label="$t('email')"
        v-model="form.email"/>
        </div>
        <div class="flex flex-col gap-6 mt-6">
          <File/>
          <Agreement/>
          <Button :primary="true" class="!w-full">
            Подать заявку
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'VacancyForm',
  data() {
    return {
      form: {
        surname: '',
        name: '',
        phone: '',
        email: '',
        file: null
      }
    }
  },
  computed: {
    ...mapState({
      activeVacancy: state => state.application.activeVacancy
    })
  },
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplicationVacancy',
    }),
    closeApplication() {
      let payload = {
        status: false,
        title: null
      }
      this.changeApplication(payload)
    }
  }
}
</script>
<style scoped>
  .form {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
