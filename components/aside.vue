<template>
  <nav class="aside pointer-events-none flex flex-row-reverse h-full fixed w-full top-0 left-0 z-50"
  :class="active ? 'activeAside' : 'defaultAside'">
    <div class="main absolute h-full left-0 top-0 w-full"
    :class="active ? '' : 'opacity-0'"></div>
    <div class="content relative flex flex-col h-full bg-white px-4">
      <div class="h-full">
        <div class="flex items-center justify-between py-5">
          <img src="/image/logo.svg" alt="Logo Icon" class="w-[96.5px] h-[33px]">
          <svg
          class="fill-gray w-8 h-8 ml-auto"
          @click="$emit('closeAside')">
            <use xlink:href="#cross"></use>
          </svg>
        </div>
        <div class="pb-2 py-6">
          <ul>
            <li v-for="item in $t('headerListPage')" :key="item.id"
            @click="$emit('changePage', item)"
            class="py-[6.5px]"
            :class="$route.query.type == item.id ? 'text-primary' : 'hover:text-primary'">
            <p class="py-3">
              {{item.text}}
            </p>
            </li>
          </ul>
        </div>
        <!-- <MobileLang
        @closeAside="$emit('closeAside')"/> -->
        <Lang/>
        <MobileSearch class="mt-2 mb-[38px]"
        @submit="submitSearch"
        v-model="value"/>
        <Button @click="visitedOnlineBanking" :primary="true" class="w-full">
          Интернет - банкинг
        </Button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ['active'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    submitSearch(value) {
      this.$router.push(this.localePath(`/search?q=${value}`))
      this.value = ''
      this.$emit('closeAside')
    },
    visitedOnlineBanking() {
      window.location.href = 'https://ibank.ssb.tj/v1/Login'
    },
  }
}
</script>
<style scoped>
.aside.defaultAside .content {
  transform: translateX(100%);
}
.main {
  transition: opacity .35s ease-in;
  background: rgba(51,51,51,.48);
}
.content {
  pointer-events: all;
  transition: transform .35s ease-in,left .35s ease-in;
  width: calc(100% - 44px);
  transform: translateX(0);
}
</style>
