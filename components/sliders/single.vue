<template>
  <div v-if="slides && slides.length > 0">
    <VueSlickCarousel v-bind="settings">
      <div v-for="slide in slides" :key="slide.id">
        <div
          class="relative overflow-hidden lg:overflow-hidden w-full bg-[#FAE6EF] h-[350px]"
        >
          <div class="p-6 lg:p-[50px]">
            <div class="md:w-[70%] w-full lg:w-1/2">
              <TitlesXl21BlackSSB class="mb-4 font-semibold" :small="true">
                {{ slide.title }}
              </TitlesXl21BlackSSB>
              <TextsBase1BlackSSB :small="true" class="mb-8">
                {{ slide.content }}
              </TextsBase1BlackSSB>
              <Button
                class="bottom-10 absolute"
                @click="openLink(slide.link)"
                :primary="true"
              >
                {{$t('readMore')}}
              </Button>
            </div>
          </div>
          <img
            :src="slide.photo"
            class="absolute md:block -bottom-[10%] lg:bottom-0 -right-[10%] lg:right-0 w-[141px] lg:w-[273px] goRight"
            alt="pink image"
          />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "SliderSingle",
  data() {
    return {
      slides:[],
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 2,
        responsive:[
        {
      "breakpoint": 500,
      "settings": {
        speed: 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
      }
    }
     ],
      },
    };
  },
  computed:{
    ...mapState({
      language_id: state => state.language.language_id,
    })
  },

  methods: {
    openLink(link) {
      window.location.href = link;
    },
    async getSliders() {
      await this.$axios.get(`/SliderAdvertisement/?language_id=${this.language_id}`).then((res) => {
        this.slides = res.data.results;
      });
    },
  },
  mounted() {
    this.getSliders();
  },
};
</script>
<style scoped>
::v-deep .slick-track {
  display: flex !important;
  gap: 1.5rem !important;
}

::v-deep .slick-dots {
  bottom: -35px !important;
}

::v-deep .slick-dots li {
  width: 52px;
  height: 3px;
  border-radius: 30px;
  background: #d2d2d3;
}

::v-deep .slick-dots .slick-active {
  background: #ff1f1f;
}

::v-deep .slick-dots li button:before {
  opacity: 0 !important;
}

::v-deep .slick-dots li .slick-active button:before {
  opacity: 0 !important;
}
@media only screen and (max-width: 800px) {
  img {
    display: block !important;
    bottom: 0 !important;
  }
  button{
    width: 40% !important;
  }
}
</style>
