<template>
  <div v-if="!isLoading">
    <!-- Start block Banner -->
    <Banner v-if="card !== null" :banner="card" button="Дархсот фиристодан" type="openApplication"
    product="card" @clickButton="openApplicationCard"/>
    <!-- End block Banner -->
    <div class="main__container px-4 xl:px-0">

      <div v-html="card.description2" class="mt-20"/>

      <!-- Start block Advantages -->
      <BlocksAdvantagesOutlined class="my-20" :advantages="advantages"/>
      <!-- End block Advantages -->

      <!-- Start block Banner -->
      <BannerOrder :banner="bannerOder" class="mt-[115px] mb-20"/>
      <!-- End block Banner -->

      <!-- Start block Calculator -->
        <!-- Start title Calculator -->
        <Titles class="text-left sm:text-center hidden">
          Рассчитайте кэшбэк по ССБ-Карте
        </Titles>
        <!-- End title Calculator -->
    </div>
    <div class="main__container sm:px-0 lg:px-4 xl:px-0 hidden">
      <CalculatorCard class="mt-10 mb-20" :card="card" v-if="card && card.length > 0" />
      <!-- End block Calculator -->
    </div>

    <!-- Start block Application -->
      <div class="bg-background mb-20">
        <div class="max-w-[737px] px-4 md:px-0 mx-auto py-6 sm:py-10">
          <div class="flex flex-col gap-6">
            <Titles class="text-center">
              Дархост гузошта, корти бонкиро аз Саноатсодиротбонк дастрас намоед
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>
            <Input label="Номер телефона" id="phoneNumber" v-model="form.phone"
            :error="$v.form.phone.$dirty && !$v.form.phone.required"
            :errorRequired="$v.form.phone.$dirty && !$v.form.phone.required"/>
            <div class="grid grid-cols-1 gap-4">
              <Input label="Срок карты" id="CardExpireDate" v-model="form.card_expire_date"/>
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
        <ApplicationCard v-if="isApplicationCard"/>
      </transition>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {required} from 'vuelidate/lib/validators'
import Input from '@/components/input/primary.vue'
import ApplicationCard from '@/components/application/card.vue'
export default {
  name: 'SinglePageCardComponent',
  components: {
    Input, ApplicationCard
  },
  data() {
    return {
      minAmount: null,
      banner: {
        id: 10,
        type: '/deposits',
        name: 'Получите 50 сомони с ССБ‑Картой',
        description: 'Закажите до 30 мая',
        img: {
          src: '/image/card.webp',
          alt: 'Card'
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
          title: 'Бесплатная',
          description: 'всегда, без условий',
          img: {
            src: '/image/advantages/outlined/card-green.png',
            alt: 'Card Green Icon'
          }
        },
        {
          id: 2,
          title: 'Снятие без комиссии',
          description: 'в любых банкоматах',
          img: {
            src: '/image/advantages/outlined/wallet-pink.png',
            alt: 'Wallet Pink Icon'
          }
        },
        {
          id: 3,
          title: 'Переводы без комиссии',
          description: 'в любые банки по номеру телефоны',
          img: {
            src: '/image/advantages/outlined/dollar-blue.png',
            alt: 'Card Green Icon'
          }
        },
      ],
      bannerOder: {
        background: 'bg-[#FFE2DC]',
        img: {
          src: '/image/Снимок(card).PNG',
          alt: 'Wallet Image'
        },
        title: 'Кортҳои пардохтии бонкиро аз Саноатсодиротбонк ройгон дастрас намоед',
        advantages: [
          {
            id: 1,
            text: 'Пардохти мол ва хизматрасонӣ дар корхонаҳои савдо ва хизматрасонӣ;'
          },
          {
            id: 2,
            text: 'Кортҳои миллӣ (пардохти миллӣ)-ба ҳамаи хоҳишмандон барои истифода намудан дохили ҷумҳурӣ, ҳамчунин амалӣ шудани лоиҳаҳои маош бо ташкилотҳои шакли моликияташон гуногун дода мешавад.'
          },
        ],
        description: 'Арзиши корт: Ройгон;'
      },
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
        phone: '',
        type: 'card',
        card_expire_date: "",
        card_type: 'VISA'
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
      phone: {required}
    }
  },
  computed: {
    ...mapState({
      card: state => state.card.card,
      isApplicationCard: state => state.application.isApplicationCard
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
      get_card: 'card/get_card'
    }),
    async sendApplication() {
      this.form.nameProduct = this.card.title
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
            phone: '',
            type: 'card',
            card_expire_date: "",
            card_type: 'VISA'
          }
        } catch(err) {
          this.disabledSend = false
          this.error_alert('Что-то пошло не так :(')
        }
      }
    },
    openApplicationCard() {
      let payload = {
        key: 'isApplicationCard',
        body: true
      }
      this.change_state(payload)
    }
  },
  async mounted() {
    await this.get_card(this.$route.params.slug)
    this.isLoading = false
  }
}
</script>
