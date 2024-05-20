<template>
  <section>
    <!-- Start block Banner -->
    <Banner :banner="deposit" v-if="deposit !== null" button="Дархсот фиристодан" type="openApplication"
    product="deposit" @clickButton="openApplicationDeposit"/>
    <!-- End block Banner -->
    <div class="main__container px-4 xl:px-0">
      <!-- Start block Advantages -->
      <BlocksAdvantagesOutlined class="mt-20" :item="deposit" v-if="deposit !== null" />
      <!-- End block Advantages -->
      <!-- Start block Banner -->
      <BannerOrder :banner="bannerOder" class="mt-[115px] mb-20"/>
      <!-- End block Banner -->
      <!-- Start block Calculator -->
        <!-- Start title Calculator -->
        <Titles class="text-left sm:text-center">
          Даромад аз пасандози Шумо
        </Titles>
        <!-- End title Calculator -->
      </div>
      <div class="main__container sm:px-0 lg:px-4 xl:px-0">
        <CalculatorDeposit class="mt-10 mb-20" :deposit="deposit" v-if="deposit !== null" />
        <!-- End block Calculator -->
      </div>

      <!-- Start block Application -->
      <div class="bg-background mb-20">
        <div class="max-w-[737px] px-4 md:px-0 mx-auto py-6 sm:py-10">
          <div class="flex flex-col gap-6">
            <Titles class="text-center">
              ТАРЗИ КУШОДАНИ  СУРАТҲИСОБ ДАР САНОАТСОДИРОТБОНК
            </Titles>
            <TextsBase1BlackSSB class="hidden sm:block text-center">
              Барои кушодани суратҳисоби пасандозӣ пеш аз ҳама мизоҷи Бонк шуда, онлайн ё ба Бонк ҳозир шуда, кортҳои ройгони дебетии ССБ  - ро дархост намоед.
            </TextsBase1BlackSSB>
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
              <Input label="Сумма депозита" id="depositAmount" v-model="form.deposit_amount"/>
              <Input label="Валюта дипозита" id="depositCurrency" v-model="form.deposit_currency"/>
            </div>
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
        <ApplicationDeposit v-if="isApplicationDeposit"/>
      </transition>
  </section>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {required} from 'vuelidate/lib/validators'
import Input from '@/components/input/primary.vue'
import ApplicationDeposit from '@/components/application/deposit.vue'
export default {
  name: 'SinglePageDepositComponent',
  components: {
    ApplicationDeposit, Input
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
      banner: {
        id: 10,
        type: '/deposits',
        name: 'ССБ-счёт',
        description: 'Максимальный доход с первого месяца',
        img: {
          src: '/image/coin.webp',
          alt: 'Coin'
        },
        buttonOpenApplication: {
          text: 'Открыть'
        },
        buttonSinglePage: {
          text: 'Муфассал'
        }
      },
      advantages: [
        {
          id: 1,
          title: 'Высокий доход',
          description: 'До 20% годовых с первого месяца',
          img: {
            src: '/image/advantages/outlined/card-green.png',
            alt: 'Card Green Icon'
          }
        },
        {
          id: 2,
          title: 'Деньги защищены',
          description: 'Средства застрахованы',
          img: {
            src: '/image/advantages/outlined/wallet-pink.png',
            alt: 'Card Green Icon'
          }
        },
        {
          id: 3,
          title: 'Пополнение и снятие',
          description: 'Пополнение и снятие со счёта в любое время',
          img: {
            src: '/image/advantages/outlined/dollar-blue.png',
            alt: 'Wallet Pink Icon'
          }
        },
      ],
      bannerOder: {
        background: 'bg-[#EAEDFA]',
        img: {
          src: '/image/bannerOrder/wallet.png',
          alt: 'Wallet Image'
        },
        title: 'Маҳсулоти пасандозии «Мӯҳлатнок»',
        // advantages: [
        //   {
        //     // id: 1,
        //     // text: ''
        //   },
        // ],
        description: 'Маҳсулоти амонатии "Мӯҳлатнок" ин имконияти ҳар моҳ то охири мӯҳлати пасандоз гирифтани фоизҳоро медиҳад. Маҳсулот на танҳо даромади иловагӣ, балки кафолати таъмини амнияти пулҳои Шуморо дар бонки давлатӣ имконият медиҳад. Дар Бонк Шумо имконият доред бо пули миллӣ ва асъори хориҷӣ пасандоз гузоред.'
      },
      form: {
        surname: '',
        name: '',
        patronymic: '',
        branch: '',
        file1: '',
        file2: '',
        file3: '',
        phone: '',
        type: 'deposit',
        deposit_amount: '',
        deposit_currency: '',
        deposit_type: 'default'
      },
      disabledSend: false
    }
  },
  validations: {
    form: {
      surname: {required},
      name: {required},
      patronymic: {required},
      branch: {required},
      phone: {required}
    }
  },
  computed: {
    ...mapState({
      deposit: state => state.api.page,
      isApplicationDeposit: state => state.application.isApplicationDeposit
    })
  },
  methods: {
    ...mapMutations({
      change_state: 'application/change_state',
      loading_alert: 'alert/LOADING_ALERT'
    }),
    ...mapActions({
      get_page: 'api/get_page',
      success_alert: 'alert/success_alert',
      error_alert: 'alert/error_alert'
    }),
    async get_deposit() {
      let payload = {
        request: `Deposit/${this.$route.params.slug}/`,
        key: 'page',
        body: {}
      }
      await this.get_page(payload)
    },
    openApplicationDeposit() {
      let payload = {
        key: 'isApplicationDeposit',
        body: true
      }
      this.change_state(payload)
    },
    async sendApplication() {
      let formData = new FormData()
      for(let i in this.form) {
        formData.append(i, this.form[i])
      }
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.form.nameProduct = this.deposit.title
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
            type: 'deposit'
          }
        } catch(err) {
          this.disabledSend = false
          this.error_alert('Что-то пошло не так :(')
        }
      }
    },
  },
  mounted() {
    this.get_deposit()
  }
}
</script>
