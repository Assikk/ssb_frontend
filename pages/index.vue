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
        <div>
          <h1 style="font-size: 32px;color: #2e2e33;font-weight: 700;padding-bottom: 30px;">Рӯзҳои қабули мизоҷон</h1>
            <table class="table_daysofceos" style="border:1px solid #b3b6bc;border-radius:20px;width:100%">
              <tr>
                <th>№</th>
                <th>Ному насаб</th>
                <th>Мансаб</th>
                <th>Рӯзи қабул</th>
                <th>Вақти қабул</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Бобозода Ҳоқимшоҳ Ҷурахон</td>
                <td>Раиси Раёсат</td>
                <td>Чоршанбе <br> Шанбе</td>
                <td>09:00-11:00<br> 09:00-11:00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ғарибшозода Азизшо Қиматшо</td>
                <td>Муовини якуми Раиси Раёсат</td>
                <td>Сешанбе <br> Панҷшанбе</td>
                <td>09:00-11:00<br> 15:00-17:00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Муҳиддинзода Шуҳрат Фаридун</td>
                <td>Муовини Раиси Раёсат</td>
                <td>Душанбе <br> Ҷумъа</td>
                <td>15:00-17:00<br> 09:00-11:00</td>
              </tr>
            </table>
        </div>

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
export default {
  name: 'IndexPage',
  data() {
    return {
      filtered:[],
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
      vacancies: state => state.vacancy.vacancies
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
      get_vacancies: 'vacancy/get_vacancies'
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
    async get_gold() {
      let res = await this.$axios.get('currency-gold')
      console.log(res.data);
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
    // await this.get_gold()
  },


 }
</script>
