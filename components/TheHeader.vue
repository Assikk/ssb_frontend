<template>
  <header class="text-black-ssb text-base">
    <SearchModal
    :isOpen="search.isOpen"
    @submit="submitForm"
    @close="closeSearch"
    v-model="search.value"/>
    <div class="h-[47px] flex items-center justify-between my-3">
      <div class="flex items-center gap-8">
        <!-- Logo Component -->
        <Logo
        className="w-[120px] h-[41px]"/>

        <!-- List pages -->
        <ul class="flex items-center gap-6">
          <li v-for="item in $t('headerListPage')" :key="item.id"
          class="list cursor-pointer"
          :class="$route.query.type == item.id ? 'text-primary' : 'hover:text-primary'"
          @click="$emit('changePage', item)">
            {{item.text}}
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-4">
        <!-- Search Icon -->
        <div class="relative w-5 h-5"
        @click="search.isOpen = !search.isOpen">
          <img src="/image/search.svg" alt="Search Icon" class="absolute left-2/4 top-2/4 w-[17px] h-[17px] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        </div>

        <!-- Lang Component -->
        <Lang/>


        <!-- Button Онлайн-банкинг -->
        <Button @click="visitedOnlineBanking" :fixed="true" :primary="true">
          {{$t('internetBanking')}}
        </Button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: ['activePage'],
  data() {
    return {
      search: {
        isOpen: false,
        value: ''
      },
    }
  },
  methods: {
    visitedOnlineBanking() {
      window.location.href = 'https://ibank.ssb.tj/v1/Login'
    },
    async submitForm(value) {
      this.$router.push(this.localePath(`/search?q=${value}`))
      this.search.value = ''
      this.search.isOpen = false;

    },
    closeSearch() {
      this.search.value = ''
      this.search.isOpen = false
    }
  },
  // watch:{
  //   "$route.query.type"(val){
  //     alert(val)
  //     this.$emit('changePage',this.$t(`headerListPage[1]`))
  //   }
  // }
}
</script>
<style scoped>
  @media screen and (min-width: 1024px) {
    .list {
      width: 25%;
      text-align: center;
    }
  }
  @media screen and (min-width: 1100px) {
    .list {
      width: auto;
      text-align: start;
    }
  }
</style>
