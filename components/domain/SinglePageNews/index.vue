<template>
  <div class="max-w-[856px] mx-auto pt-10 px-6 lg:px-0">
    <TitlesXl21BlackSSB class="mb-10">
      {{ news.title }}
    </TitlesXl21BlackSSB>
    <h2 class="font-semibold text-2xl-1">
      {{ news.description }}
    </h2>
    <TextsBase1Gray class="mt-5 text-gray">
      {{ news.date }}
    </TextsBase1Gray>
    <p class="text-base mt-10" v-html="news.full_descriptions"></p>

    <div class="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10 h-48">
      <div
        v-for="item in newsImages"
        :key="item.id"
        v-show="item.container_id == news.container_id"
        class="drop-shadow shadow-lg"
      >
        <div class="w-full bg-cover">
          <img
            alt="gallery"
            class="absolute bottom-0 block object-cover object-center w-full h-full rounded-md"
            @click="openModal"
            :src="item.image"
          />
        </div>
      </div>
    </div>

    <!-- photo viewer modal -->
    <div v-if="showMediaModal" @click="closeMediaModal">
      <div class="inherit">
        <div
          class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black w-full h-full bg-opacity-50 p-2"
        >
          <img :src="src" alt="" class="w-[1025px] h-[50%] sm:h-auto max-h-[95%] bg-white p-2 rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SinglePageNewsComponent",
  data() {
    return {
      showMediaModal: false,
    };
  },
  computed: {
    ...mapState({
      news: (state) => state.api.new,
      newsImages: (state) => state.api.newsImages,
      language_id: state => state.language.language_id,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    async get_news() {
      let payload = {
        request: `/News/${this.$route.params.slug}/`,
        key: "new",
        body: {},
      };
      await this.get_page(payload);
    },
    async get_newsImages() {
      let payload = {
        request: "NewsImages/",
        key: "newsImages",
        body: [],
      };
      await this.get_page(payload);
    },

    // Viewing single photo in modal
    openModal(e) {
      this.mediaForModal = e.target.getAttribute("src");
      this.src = this.mediaForModal;
      this.showMediaModal = true;
    },

    // Closing single photo in modal
    closeMediaModal() {
      this.showMediaModal = !this.showMediaModal;
    },
  },
  async mounted() {
    await this.get_news();
    await this.get_newsImages();
  },
};
</script>
