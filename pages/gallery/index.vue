<template>

  <section class="overflow-hidden text-black-700 ">
    <div class="main__container px-6 xl:px-0 ">
      <div class="py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <Titles>
          {{$t('pages.gallery.title')}}
        </Titles>
        <div class="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-6 text-xl-1">
          <p class="cursor-pointer" :class="type === 'photo' ? 'text-black-ssb font-medium' : 'text-light'"
            @click="showPhotoTab">
            {{$t('pages.gallery.photo')}}
          </p>
          <p class="cursor-pointer" :class="type === 'video' ? 'text-black-ssb font-medium' : 'text-light'"
            @click="showVideoTab">
            {{$t('pages.gallery.video')}}
          </p>
        </div>
      </div>
      <div v-if="photoTab" class="container px-5 py-2 lg:pt-12 lg:px-5">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div v-for="item in photos" :key="item.id" class="flex flex-wrap md:w-1/4 w-1/1">
            <div class="w-full md:p-2 p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-md" @click="openModal"
                :src="item.image">
            </div>
          </div>
        </div>
      </div>

      <div v-if="videoTab" class="container px-5 py-2 lg:pt-12 lg:px-5">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div v-for="item in videos" :key="item.id" class="flex flex-wrap md:w-1/4 w-1/1">
            <div class="w-full p-2 md:p-2">
              <video @click="openVideoModal" :src="item.video" class="block object-cover object-center w-full h-full rounded-md">
                <source :src="item.video"
                  type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- photo viewer modal -->
    <div v-if="showMediaModal" @click="closeMediaModal">
      <div class="inherit">
        <div
          class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black w-full h-full bg-opacity-50 p-2">
          <img :src="src" alt="" class="bg-white p-2 rounded-md">
        </div>
      </div>
    </div>

    <!-- Video viewer modal -->
    <div v-if="showVideoModal" @click="closeVideoModal">
      <div class="inherit">
        <div
          class="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black w-full h-full bg-opacity-50 p-2">
          <video @click="openVideoModal" class="block object-cover object-center p-2 rounded-sm bg-white" controls>
            <source :src="src"
              type="video/mp4">
          </video>
        </div>
      </div>
    </div>




  </section>

</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'GalleryPage',
  data() {
    return {
      type: 'photo',
      src: '',
      showMediaModal: false,
      showVideoModal: false,
      photoTab: true,
      videoTab: false,
    }
  },

  computed: {
    // Computing data from API from vuex
    ...mapState({
      photos: state => state.api.photos,
      videos: state => state.api.videos,
    })
  },

  methods: {

    showPhotoTab() {
      this.photoTab = true;
      this.videoTab = false;
    },

    showVideoTab() {
      this.videoTab = true;
      this.photoTab = false;

    },

    // Getting data from API from vuex
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_photos() {
      let payload = {
        request: 'Photo/',
        key: 'photos',
        body: []
      }
      this.get_page(payload)
    },

    get_videos() {
      let payload = {
        request: 'Video/',
        key: 'videos',
        body: []
      }
      this.get_page(payload)
    },

    // Viewing single photo in modal
    openModal(e) {
      this.mediaForModal = e.target.getAttribute('src');
      this.src = this.mediaForModal;
      this.showMediaModal = true;
    },


    // Viewing single Video in modal
    openVideoModal(e) {
      this.videoForModal = e.target.getAttribute('src');
      this.src = this.videoForModal;
      this.showVideoModal = true;
    },


    // Closing single photo in modal
    closeMediaModal() {
      this.showMediaModal = !this.showMediaModal;
    },

    closeVideoModal() {
      this.showVideoModal = !this.showVideoModal;
    },
  },

  mounted() {
    // Showing received data in this component
    this.get_photos();
    this.get_videos();
  }
}
</script>
