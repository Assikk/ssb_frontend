<template>
    <section class="main__container px-6 xl:px-0">
      <div class="flex gap-4 items-center justify-between">
        <Titles class="font-semibold text-3xl-1 my-6">
          {{$t('deposit.deposits')}}
        </Titles>
        <div class="flex gap-4 items-center">
          <img src="/image/8060328.webp" alt="" class="w-10 h-10"/>
          <NuxtLink :to="localePath('/Deposit/faq')" class="text-xl font-semibold">
            {{$t('deposit.faqTitle')}}
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-6 my-6" v-if="deposits && deposits.length > 0">
        <CardProduct v-for="deposit in deposits" :key="deposit.id"
        :card="deposit"
        :list="deposits"
        type="Deposit"
        @clickSendRequest="openApplicationDeposit(deposit)"/>
      </div>
      <pagination v-show="false" />
      <ApplicationDeposit v-if="isApplicationDeposit"/>
    </section>
</template>
<script>
import ApplicationDeposit from '@/components/application/deposit.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Deposits',
  components: {
    ApplicationDeposit
  },
  head() {
    return {
      title: this.$t('deposit.deposits')
    }
  },
  data() {
    return {
      deposit: {}
    }
  },
  computed: {
    ...mapState({
      deposits: state => state.deposit.deposits,
      language_id: state => state.language.language_id,
      isApplicationDeposit: state => state.application.isApplicationDeposit
    })
  },
  methods: {
    ...mapMutations({
      change_state: 'application/change_state'
    }),
    ...mapActions({
      get_deposits: 'deposit/get_deposits'
    }),
    openApplicationDeposit(deposit) {
      this.deposit = deposit
      let payload = {
        key: 'isApplicationDeposit',
        body: true
      }
      this.change_state(payload)
    }
  },
  async mounted() {
    await this.get_deposits(this.language_id)
  }
}
</script>
