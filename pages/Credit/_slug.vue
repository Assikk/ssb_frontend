<template>
  <div v-if="!isLoading">
    <!-- Start block Banner -->
    <Banner :banner="credit" :button="$t('credit.banner.button')" type="openApplication"
    product="credit" @clickButton="openApplicationCredit"/>
    <!-- End block Banner -->
    <div class="main__container px-4 xl:px-0">

      <!-- Start block Advantages -->
      <BlocksAdvantagesOutlined class="my-20" :item="credit"/>
      <!-- End block Advantages -->

      <div v-html="credit.description2"/>

      <!-- Start block Banner -->
      <BannerOrder :banner="$t('credit.bannerOrder')" class="mt-[115px] mb-20"/>
      <!-- End block Banner -->

      <!-- Start block Calculator -->
    </div>
    <div class="main__container sm:px-0 lg:px-4 xl:px-0">
      <Titles class="mt-20">
        {{$t('credit.calculator.title')}}
      </Titles>
      <CalculatorCard class="mt-10 mb-20 hidden" :card="credit"/>
      <CalculatorCredit class="my-4 sm:my-10" :container_id="credit.container_id"/>
      <!-- End block Calculator -->
    </div>

    <!-- Start block Application -->
      <div class="bg-background mb-20">
        <div class="max-w-[737px] px-4 md:px-0 mx-auto py-6 sm:py-10">
          <div class="flex flex-col gap-6">
            <Titles class="text-center">
              Барои гирифтани қарз дархост намоед
            </Titles>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="Фамилия" id="surname" v-model="form.surname" placeholder="Введите фамилию"
              :error="$v.form.surname.$dirty && !$v.form.surname.required"
              :errorRequired="$v.form.surname.$dirty && !$v.form.surname.required"/>
              <Input label="Имя" id="name" v-model="form.name" placeholder="Введите имя"
              :error="$v.form.name.$dirty && !$v.form.name.required"
              :errorRequired="$v.form.name.$dirty && !$v.form.name.required"/>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="Отчество" id="patronymic" v-model="form.patronymic" placeholder="Введите отчество"
              :error="$v.form.patronymic.$dirty && !$v.form.patronymic.required"
              :errorRequired="$v.form.patronymic.$dirty && !$v.form.patronymic.required"/>
               <div class="flex flex-col gap-2">
                <p>
                  Город
                </p>
                <Select
                :active="form.branch"
                :list="regions"
                @click="(item) => form.branch = item.name"
                :error="$v.form.branch.$dirty && !$v.form.branch.required"
                :errorRequired="$v.form.branch.$dirty && !$v.form.branch.required"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
                  for="file_input"
                  >Паспорт</label
                >
                <input
                  @change="(event) => form.file1 = event.target.files[0]"
                  class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
                  id="file_input"
                  required
                  type="file"
                  name="file"
                  accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
                  for="file_input"
                  >Рақами  РМА</label
                >
                <input
                  @change="(event) => form.file2 = event.target.files[0]"
                  class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  required
                  accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
                  name="file"
                />
              </div>

              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
                  for="file_input"
                  >Маълумотномаи музди маош</label
                >
                <input
                  @change="(event) => form.file3 = event.target.files[0]"
                  class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  required
                  accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
                  name="file"
                />
              </div>
            </div>
            <Input label="Номер телефона" id="phoneNumber" v-model="form.phone"
            :error="$v.form.phone.$dirty && !$v.form.phone.required"
            :errorRequired="$v.form.phone.$dirty && !$v.form.phone.required"/>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Сумма кредита" id="creditAmount" v-model="form.credit_amount"
              :error="$v.form.credit_amount.$dirty && !$v.form.credit_amount.required"
              :errorRequired="$v.form.credit_amount.$dirty && !$v.form.credit_amount.required"/>
              <Input label="Срок кредита" id="creditPeriod" v-model="form.credit_period"
              :error="$v.form.credit_period.$dirty && !$v.form.credit_period.required"
              :errorRequired="$v.form.credit_period.$dirty && !$v.form.credit_period.required"/>
            </div>
            <Input label="Причина кредита" id="reason" v-model="form.credit_purpose"/>
            <div class="flex items-center gap-4 flex-wrap">
              <Button :disabled="disabledSend" class="w-fit" :primary="true" @click="sendApplication">
                Дархост фиристодан
              </Button>
              <p>
                Бо пахш кардани тугма, ман ба коркарди маълумот розӣ ҳастам
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End block Application -->

      <!-- Start block Banner -->
      <div class="main__container px-4 xl:px-0">
        <div class="flex gap-6">
          <SlidersSingle/>
        </div>
      </div>
      <!-- End block Banner -->
      <transition name="fade">
        <ApplicationCredit v-if="isApplicationCredit"/>
      </transition>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {required} from 'vuelidate/lib/validators'
import Input from '@/components/input/primary.vue'
import ApplicationCredit from '@/components/application/credit.vue'
export default {
  name: 'SinglePageCredit',
  components: {
    ApplicationCredit, Input
  },
  data() {
    return {
      regions: [
        {
          id: 1,
          name: "ш. Душанбе",
        },
        {
          id: 2,
          name: "ш. Хуҷанд",
        },
        {
          id: 3,
          name: "ш. Хорӯғ",
        },
        {
          id: 4,
          name: "ш. Бохтар",
        },
        {
          id: 5,
          name: "ш. Кӯлоб",
        },
        {
          id: 6,
          name: "н. Данғара",
        },
        {
          id: 7,
          name: "н. Рашт",
        },
        {
          id: 8,
          name: "ш. Истаравшан",
        },
        {
          id: 9,
          name: "ш. Турсунзода",
        },
        {
          id: 10,
          name: "н. Шаҳритуз",
        },
        {
          id: 11,
          name: "н. Фархор",
        },
      ],
      form: {
        surname: '',
        name: '',
        patronymic: '',
        branch: '',
        file1: '',
        file2: '',
        file3: '',
        phone: '',
        type: 'credit',
        credit_purpose: '',
        credit_amount: '',
        credit_period: '',
        credit_type: 'VISA'
      },
      disabledSend: false,
      isLoading: true
    }
  },
  validations: {
    form: {
      surname: {required},
      name: {required},
      patronymic: {required},
      branch: {required},
      phone: {required},
      credit_amount: {required},
      credit_period: {required}
    }
  },
  computed: {
    ...mapState({
      credit: state => state.credit.credit,
      isApplicationCredit: state => state.application.isApplicationCredit
    })
  },
  methods: {
    ...mapMutations({
      change_state: 'application/change_state',
      loading_alert: 'alert/LOADING_ALERT'
    }),
    ...mapActions({
      success_alert: 'alert/success_alert',
      error_alert: 'alert/error_alert',
      get_credit: 'credit/get_credit'
    }),
    openApplicationCredit() {
      let payload = {
        key: 'isApplicationCredit',
        body: true
      }
      this.change_state(payload)
    },
    async sendApplication() {
      this.form.nameProduct = this.credit.title
      let formData = new FormData()
      for(let i in this.form) {
        formData.append(i, this.form[i])
      }
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      if(!this.disabledSend) {
        this.disabledSend = true
        this.loading_alert()
        try {
          await this.$axios.post('https://webapi.ssb.tj/sendEmailContent/', formData)
          this.success_alert()
          this.form = {
            surname: '',
            name: '',
            patronymic: '',
            branch: '',
            file1: '',
            file2: '',
            file3: '',
            phone: '',
            type: 'credit',
            credit_amount: '',
            credit_period: '',
            credit_purpose: '',
            credit_type: 'VISA'
          }
        } catch(err) {
          this.disabledSend = false
          this.error_alert('Что-то пошло не так :(')
        }
      }
    },
  },
  async mounted() {
    await this.get_credit(this.$route.params.slug)
    this.isLoading = false
  }
}
</script>
