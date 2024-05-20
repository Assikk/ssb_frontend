<template>
  <section class="main__container px-6 xl:px-0">
    <!-- {{$t('searchResult')}} Для {{$route.query.q}} -->
    <InputSearch class="my-10" @submit="submitSearch"
    v-model="value"/>
    <div class="flex items-center justify-between text-[#323856]">
      <h1 class="font-semibold text-xl-1 sm:text-3xl-1">
        Результаты поиска “ <span>{{value}}</span> ”

      </h1>
    </div>
    <div class="flex flex-col gap-5 my-10">
      <CardSearch v-for="result in searchResults" :key="result.id" :result="result"/>
    </div>
    <pagination v-show="false" />
  </section>
</template>
<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      value: '',
      searchResults: []
    }
  },
  methods: {
    async submitSearch() {
      this.$router.push(this.localePath(`/search?q=${this.value}`));
      await this.$axios.get(`https://webapi.ssb.tj/search/?q=${this.value}`).then(res =>{
        this.searchResults = res.data;
      })
    },
  },
  mounted() {
    console.log(this.$route.query.q);
    this.value = this.$route.query.q
    this.submitSearch()
  },
}
</script>
