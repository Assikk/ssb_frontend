<template>
  <div class="flex gap-[9px] justify-center max-w-[270px] mx-auto">
    <Checkbox/>
    <p class="text-sm-1 text-black-ssb">
      Я согласен(-на) с условиями <span @click="goToPage" class="text-bllue cursor-pointer hover:border-b border-bllue">обработки персональных данных</span>
    </p>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Agreement',
  methods: {
    ...mapMutations({
      changeApplicationVacancy: 'application/changeApplicationVacancy'
    }),
    goToPage() {
      this.$router.push(this.localePath('/'))
      let payload = {
        status: false,
        title: null
      }
      this.changeApplicationVacancy(payload)
    }
  }
}
</script>
