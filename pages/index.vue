<template>
  <div>
    <!-- Start block SLiders -->
    <Sliders :sliders="sliders"/>
    <!-- End block Sliders -->
    <div class="main__container px-6 xl:px-0">
      <BannerPresident class="my-20"/>
      <Titles v-if="popularProducts.length > 0">
        {{$t('pages.main.popularProductsTitle')}}
      </Titles>
      <div class="mt-10 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CardPopular v-for="product in popularProducts" :key="product.id" :product="product"/>
      </div>
    </div>
    <BannerMobile/>
    <div class="main__container px-6 xl:px-0" v-if="applications.length > 0">
      <div class="my-20">
        <Titles>
          {{$t('pages.main.applicationTitle')}}
        </Titles>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
          <CardApplication v-for="application in applications" :key="application.id"
          :application="application" @click="openApplication(application)"/>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <Titles class="main__container">
        {{$t('credit.calculator.title')}}
      </Titles>
    </div>
      <CalculatorCredit class="mt-4 sm:mt-10"/>
      <div class="main__container px-6 xl:px-0">
        <div class="my-20">
          <SlidersSingle/>
        </div>
        <div>
          <Titles>
            {{$t('currency.title')}}
          </Titles>
          <Currency class="mt-4"/>

          <!-- Начало блока курса золота -->
          <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mt-4 sm:mt-10">
            <Gold v-intersection-observer="{ handler: get_gold, once: true }"/>
            <img src="/image/gold.png" alt="">
          </div>
          <!-- Конец блока курса золота -->

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-20">
          <CardLink v-for="link in $t('pages.main.links').slice(0,3)" :key="link.id" :link="link" type="deafult"/>
        </div>
        <div v-if="news.length > 0">
          <Titles :url="'news?type=1'">
            {{$t('pages.main.newsTitle')}}
          </Titles>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            <CardNews v-for="item in news.slice(0,3)" :key="item.id" :item="item" type="deafult"/>
          </div>
        </div>

        <!-- Начало блока дней приема -->
        <div>
          <h1 class="font-semibold text-2xl-1 sm:text-3xl-1 mb-10">
            {{$t('reception.title')}}
          </h1>
          <Table :head="$t('reception.table.head')">
            <template #body>
              <tr v-for="item in $t('reception.table.body')" :key="item.id">
                <td>
                  <span>
                    {{item.id}}
                  </span>
                </td>
                <td>
                  <span>
                    {{item?.name}} {{item?.surname}} {{item?.patronymic}}
                  </span>
                </td>
                <td>
                  <span>
                    {{item.post}}
                  </span>
                </td>
                <td>
                  <div class="flex justify-center gap-2">
                    <span v-for="(day, index) in item.reception.days" :key="index">
                      {{day}}
                    </span>
                  </div>
                </td>
                <td>
                  <div class="flex flex-col gap-2">
                    <span v-for="(time, index) in item.reception.time" :key="index">
                      {{time}}
                    </span>
                  </div>
                </td>
              </tr>
            </template>
          </Table>
        </div>
        <!-- Конец блока дней приема -->

        <div class="my-20">
          <Titles>
            {{$t('pages.main.socialTitle')}}
          </Titles>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mt-10">
            <CardSocial v-for="item in social" :key="item.id" :item="item"/>
          </div>
        </div>
        <div>
          <Titles>
            {{$t('pages.main.linksTitle')}}
          </Titles>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          <CardLink v-for="link in $t('pages.main.links').slice(3,7)" :key="link.id" :link="link" type="useful"/>
          </div>
        </div>

        <!-- Начало блока вакансий -->
        <div class="mt-20" v-intersection-observer="{
          handler: get_vacancies,
          once: true
        }">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl-1 sm:text-3xl-1 font-semibold">
            {{$t('vacancy.vacancies')}}
          </h2>
          <Button @click="$router.push(localePath('/vacancy'))" :primary="true">
            {{$t('vacancy.allVacancies')}}
          </Button>
        </div>
          <div class="flex flex-col gap-6 mt-10">
            <CardVacancy v-for="item in vacancies.slice(0, 3)" :key="item.id"
            :item="item"
            :list="vacancies"/>
          </div>
        </div>
        <!-- Конец блока вакансий -->
      </div>
  </div>
</template>

<script>
import {mapState, mapActions,mapMutations} from 'vuex'
import Gold from '@/components/gold.vue'
import Table from '@/components/table.vue'
export default {
  name: 'IndexPage',
  components: {
    Gold,
    Table
  },
  data() {
    return {
      social: [
        {
          id: 1,
          image: {
            src: '/image/social/instagram.svg',
            alt: 'Instagram Icon'
          },
          text: 'Instagram',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://instagram.com/sanoatsodirotbonk_ssb'
          }
        },
        {
          id: 2,
          image: {
            src: '/image/social/telegram.svg',
            alt: 'Telegram Icon'
          },
          text: 'Телеграм',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://t.me/sanoatsodirotbonk'
          }
        },
        {
          id: 3,
          image: {
            src: '/image/social/facebook.svg',
            alt: 'Facebook Icon'
          },
          text: 'Facebook',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://www.facebook.com/sanoatsodirotbonk'
          }
        },
        {
          id: 4,
          image: {
            src: '/image/social/linkedin.svg',
            alt: 'Linkedln Icon'
          },
          text: 'Linkedln',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://ru.linkedin.com/'
          }
        },
        {
          id: 5,
          image: {
            src: '/image/social/twitter.svg',
            alt: 'Twitter Icon'
          },
          text: 'Twitter',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://twitter.com/?lang=ru'
          }
        },
        {
          id: 6,
          image: {
            src: '/image/social/vk.svg',
            alt: 'Вконтакте Icon'
          },
          text: 'Вконтакте',
          link: {
            text: '@sanoatsodirotbank',
            link: 'https://vk.com/'
          }
        },
      ],
    }
  },
  computed: {
    popularProducts(){
      return this.popularProductsState.filter(elem => elem.language_id === this.language_id).slice(0,4);
    },
    ...mapState({
      popularProductsState:state => state.api.popularProducts,
      language_id: state => state.language.language_id,
      sliders: state => state.api.sliders,
      news: state => state.api.news,
      applications: state => state.api.applications,
      vacancies: state => state.vacancy.vacancies,
    })
  },
  methods: {
    ...mapMutations({
      change_products:"api/changeProducts",
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
      change_state: 'application/change_state'
    }),
    ...mapActions({
      get_page: 'api/get_page',
      get_vacancies: 'vacancy/get_vacancies',
      get_gold: 'gold/get_gold'
    }),
    async get_sliders() {
      try {
        // let res = await this.$axios.get(`Slider/?language_id=${this.language_id}`)
        // console.log(res.data.results);
        let payload = {
          request: `Slider/?language_id=${this.language_id}`,
          key: 'sliders',
          body: []
        }
        await this.get_page(payload);
      } catch(err) {
        console.log(err);
      }
    },
    get_news() {
      let payload = {
        request: `News/?language_id=${this.language_id}`,
        key: 'news',
        body: []
      }
      this.get_page(payload)
    },
    get_applications() {
      let payload = {
        request: `Orders/?language_id=${this.language_id}`,
        key: 'applications',
        body: []
      }
      this.get_page(payload)
    },
    async get_recommandeds() {

      await this.$axios.get(`/Recommended/?language_id=${this.language_id}`).then(res =>{

        let card_recommended = [...res.data["card recommended"]];
        card_recommended.map(item =>{
          item.type = "Card";
          return{
            item
          }
        });


        let deposit_recommended = [...res.data["deposit recommended"]];
        deposit_recommended.map(item =>{
          item.type = "Deposit";
          return{
            item
          }
        });

        let credit_recommended = [...res.data["credit recommended"]];
        credit_recommended.map(item =>{
          item.type = "Credit";
          return{
            item
          }
        });

        this.change_products(
          [
        ...card_recommended,
        ...deposit_recommended,
        ...credit_recommended
        ]
        )
        // this.popularProducts =

      // this.popularProducts = this.popularProducts.filter(elem => elem.language_id === this.language_id).slice(0,4);

      })
    },
    openApplication(application) {
      if(application.id == 7) {
        let payload = {
          key: 'isApplicationCard',
          body: true
        }
        this.change_state(payload)
      } else this.changeApplication(true)
      this.changeProduct(application)
    }
  },
  async mounted() {
    await this.get_sliders()
    await this.get_news()
    await this.get_applications()
    await this.get_recommandeds()
  },
 }
</script>
