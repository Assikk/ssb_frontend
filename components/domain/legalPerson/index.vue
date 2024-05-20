<template>
  <div>
    <!-- Start block Slider -->
    <Sliders :sliders="sliders" />
    <!-- End block Slider -->

    <div class="main__container px-4 xl:px-0">
      <!-- Start block support businness -->
      <div>
        <Titles class="my-20"> {{$t('pages.legalPerson.title')}} </Titles>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DomainLegalPersonBanner
            v-for="banner in $t('pages.legalPerson.cards')"
            :key="banner.id"
            :banner="banner"
          />
        </div>
      </div>
      <!-- End block suppor businness -->
    </div>

    <!-- Start block Calculator -->
    <div class="my-20">
      <div class="main__container px-4 xl:px-0">
        <Titles class="mb-10"> {{ $t('credit.calculator.title') }} </Titles>
      </div>
      <div class="main__container px-0 sm:px-4 xl:px-0">
        <CalculatorCredit />
      </div>
    </div>
    <!-- End block Calculator -->

    <!-- Start block banners -->
    <div class="main__container px-4 xl:px-0">
      <SlidersSingle />
      <!-- End block banners -->

      <!-- Start block Currency -->
      <Currency class="my-20" />
      <!-- End block Currency -->

      <!-- Start block Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <CardLink
          v-for="link in $t('pages.legalPerson.links').slice(0,3)"
          :key="link.id"
          :link="link"
          type="deafult"
        />
      </div>
      <!-- End block Links -->

      <!-- Start block News -->
      <div class="my-20">
        <div>
          <Titles> {{$t('pages.legalPerson.newsTitle')}} </Titles>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          <CardNews
            v-for="item in news.slice(0, 3)"
            :key="item.id"
            :item="item"
            type="deafult"
          />
        </div>
      </div>
      <!-- End block News -->

      <!-- Start block Social Links -->
      <Titles> {{$t('pages.legalPerson.socialTitle')}} </Titles>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mt-10"
      >
        <CardSocial v-for="item in social" :key="item.id" :item="item" />
      </div>
      <!-- End block Social Links -->

      <!-- Start block Links -->
      <div class="mt-20">
        <Titles> {{$t('pages.legalPerson.linksTitle')}} </Titles>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10"
        >
          <CardLink
            v-for="link in $t('pages.legalPerson.links').slice(3,7)"
            :key="link.id"
            :link="link"
            type="useful"
          />
        </div>
      </div>
      <!-- End block Links -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LegalPersonComponent",
  data() {
    return {
      social: [
        {
          id: 1,
          image: {
            src: "/image/social/instagram.svg",
            alt: "Instagram Icon",
          },
          text: "Instagram",
          link: {
            text: "@sanoatsodirotbank",
            link: "https://www.instagram.com/",
          },
        },
        {
          id: 2,
          image: {
            src: "/image/social/telegram.svg",
            alt: "Telegram Icon",
          },
          text: "Телеграм",
          link: {
            text: "@sanoatsodirotbank",
            link: "https://web.telegram.org/",
          },
        },
        {
          id: 3,
          image: {
            src: "/image/social/facebook.svg",
            alt: "Facebook Icon",
          },
          text: "Facebook",
          link: {
            text: "@sanoatsodirotbank",
            link: "https://www.facebook.com/sanoatsodirotbonk/  ",
          },
        },
        {
          id: 4,
          image: {
            src: "/image/social/linkedin.svg",
            alt: "Linkedln Icon",
          },
          text: "Linkedln",
          link: {
            text: "@sanoatsodirotbank",
            link: "https://ru.linkedin.com/",
          },
        },
        {
          id: 5,
          image: {
            src: "/image/social/twitter.svg",
            alt: "Twitter Icon",
          },
          text: "Twitter",
          link: {
            text: "@sanoatsodirotbank",
            link: "https://twitter.com/?lang=ru",
          },
        },
        {
          id: 6,
          image: {
            src: "/image/social/vk.svg",
            alt: "Вконтакте Icon",
          },
          text: "Вконтакте",
          link: {
            text: "@sanoatsodirotbank",
            link: "https://vk.com/",
          },
        },
      ],
    }
  },

  computed: {
    ...mapState({
      sliders: (state) => state.api.sliders,
      news: (state) => state.api.news,
      language_id: (state) => state.language.language_id,
    }),
  },

  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    get_sliders() {
      let payload = {
        request: `Slider/?language_id=${this.language_id}`,
        key: "sliders",
        body: [],
      };
      this.get_page(payload);
    },
    get_news() {
      let payload = {
        request: `News/?language_id=${this.language_id}`,
        key: "news",
        body: [],
      };
      this.get_page(payload);
    },
  },
  mounted() {
    this.get_sliders();
    this.get_news();
  },
};
</script>
