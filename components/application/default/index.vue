<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="changeApplication(false)"
    ></div>
    <div class="h-[90%] overflow-y-auto w-4/5 lg:w-1/2 rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible bg-background py-6 xl:py-10 px-6 xl:px-20 rounded-xl">
      <h1 class="text-center font-medium text-lg-1 lg:text-2xl-1">
        <span v-if="firstWordMainURL == 'deposits'">
        Барои гузоштани пасандоз дархост намоед
      </span>
      <span v-if="firstWordMainURL == 'credits'">
        Барои гирифтани қарз дархост намоед
      </span>
      <span v-if="firstWordMainURL == 'cards'">
        Барои гирфтани корт дархост намоед
      </span>
      </h1>
      <ApplicationDefaultBody :regions="regions"/>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Application',
  data() {
    return {
      value: '',
      type: '',
      firstWordMainURL: '',
      regions: [
        {
          id: 1,
          name: 'Регион 1'
        },
        {
          id: 2,
          name: 'Регион 2'
        },
        {
          id: 3,
          name: 'Регион 3'
        },
        {
          id: 4,
          name: 'Регион 4'
        },
        {
          id: 5,
          name: 'Регион 5'
        },
        {
          id: 6,
          name: 'Регион 6'
        },
      ],
    }
  },
  methods: {
    ...mapMutations({
      changeApplication: 'application/changeApplication',
    }),
  },

  mounted() {
    this.firstWordMainURL = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
    // this.type = this.$route.query.type
  },
}
</script>
<style scoped>
.form {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
