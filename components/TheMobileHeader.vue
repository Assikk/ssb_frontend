<template>
  <header class="h-[41px] my-4 flex items-center justify-between text-base">
    <Logo
    className="w-[120px] h-[41px]"/>
    <BurgerMenu
    @click="isShowAside = !isShowAside"/>
    <Aside :active="isShowAside"
    @closeAside="closeAside"
    @changePage="changePage"/>
  </header>
</template>
<script>
export default {
  name: 'MobileHeader',
  data() {
    return {
      isShowAside: false,
    }
  },
  methods: {
    closeAside() {
      this.isShowAside = false
    },
    changePage(item) {
      this.closeAside()
      this.$emit('changePage', item)
    },
  }
}
</script>
