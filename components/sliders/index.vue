<template>
  <div v-if="sliders.length > 0" class="animate pt-16 px-[23px] xl:px-0 pb-[60px] xl:pb-[138px] overflow-visible"
    :style="{'background':sliders[id].bg_color }">
    <div class="relative main__container">
      <VueSlickCarousel :arrows="false" :dots="true" ref="carousel" v-bind="settings" @afterChange="onChange">
        <div class="h-auto xl:h-[400px] max-w-[1056px] mx-auto items-center !flex flex-col-reverse xl:flex-row gap-8 xl:gap-0"
          v-for="slider in sliders" :key="slider.id">

          <div class="w-full xl:w-1/2">
            <h1 class="text-2xl-1 xl:text-3xl-1 text-center xl:text-left font-semibold mb-4"
              :style="{'color':sliders[id].text_color }">
              {{slider.title}}
            </h1>
            <p class="text-center xl:text-left text-base mb-8 xl:mb-12" :style="{'color':sliders[id].text_color }">
              {{slider.description}}
            </p>
            <div class="flex justify-center flex-col sm:flex-row xl:justify-start items-center gap-6">
              <!-- <a :href="slider.action_link"> -->
                <!-- <Button @click="orderProduct(slider)" :primary="true">
                  {{slider.action_text}}
                </Button> -->
              <!-- </a> -->
              <a :href="slider.option_link ? slider.option_link : '/'">
                <Button class="w-full sm:w-auto" :outlined="true">
                  {{slider.option_text}}
                </Button>
              </a>
            </div>
          </div>
          <div class="w-full xl:w-1/2 transition ease-in-out delay-100  hover:scale-[1.03] duration-300">
            <img class="mx-auto max-w-[90%] sm:max-w-[600px] max-h-[400px] w-[600px] h-[200px] sm:h-[400px]" :src="slider.image" :alt="slider.title">
          </div>
        </div>
        <template #customPaging="name">
          <div class="whitespace-nowrap">
            {{sliders[name].title}}
          </div>
        </template>

      </VueSlickCarousel>
      <svg
        class="fill-primary xl:fill-black-ssb w-[28px] sm:w-[52px] h-[28px] sm:h-[52px] rotate-90 absolute top-1/4 xl:top-1/2 cursor-pointer"
        @click="$refs.carousel.prev()">
        <use xlink:href="#arrow" />
      </svg>
      <svg
        class="fill-primary xl:fill-black-ssb w-[28px] sm:w-[52px] h-[28px] sm:h-[52px] -rotate-90 absolute top-1/4 xl:top-1/2 right-0 cursor-pointer"
        @click="$refs.carousel.next()">
        <use xlink:href="#arrow" />
      </svg>
    </div>

  </div>
</template>



<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Slider',
  props: ['sliders'],
  data() {
    return {
      id: 0,
      settings: {
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        // speed: 1000,
        // fade: true
      },
    }
  },
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
      changeProduct: 'application/changeProduct',
      openList: 'application/openList',
    }),
    onChange(ind) {
      this.id = ind;
    },
    orderProduct(slider) {
      this.changeApplication(true)
      this.changeProduct(slider)
      this.openList(this.sliders)
    },
    goSinglePage(slider) {
      this.$router.push(this.localePath(slider.action_link) + `/${slider.id}?type=${this.$route.query.type}`)
    }
  },
}
</script>
<style scoped>
::v-deep .slick-dots {
  display: flex !important;
  justify-content: space-around;
  gap: 1.5rem;
  bottom: -100px
}

::v-deep .slick-dots li {
  background: white;
  padding: 1rem;
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  color: #909090;
  border-radius: 4px;
  opacity: 0.7;
}

::v-deep .slick-dots .slick-active {
  position: relative;
  background: #fff;
  color: black;
}

::v-deep .slick-dots .slick-active::after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  width: 100%;
  display: block;
  background: red;
  height: 1px;
  animation: progressBar 5s forwards linear alternate;
}

@media only screen and (max-width: 1280px) {
  ::v-deep .slick-dots {
    display: none !important;
  }
}

@keyframes progressBar {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}
.animate {
  transition: background 0.3s ease 0s;
}
</style>
