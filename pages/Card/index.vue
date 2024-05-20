<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="my-6">
      {{ $t('cards') }}
    </Titles>
    <div class="flex flex-col gap-6 mb-6" v-if="cards && cards.length > 0">
      <CardProduct v-for="card in cards" :key="card.id"
      :card="card"
      :list="cards"
      type="Card"
      @clickSendRequest="openApplicationCard(card)"/>
    </div>
    <pagination v-show="false" />
    <transition name="fade">
      <ApplicationCard v-if="isApplicationCard"/>
    </transition>
    <div style="border:1px solid #b3b6bc; border-radius:10px; padding: 15px;">
      <span >
        <a href="../documents/Нархномаи Кортҳои бонкӣ.pdf" id="link_offerta"><img src="../../static/image/icon_offerta.png" width="120" height="120" alt="" style="">{{ $t('doc_card_visa') }}</a>
      </span>
    </div>
    <div style="border:1px solid #b3b6bc; border-radius:10px; padding: 15px;margin-top:10px;">
      <span >
        <a href="../documents/Кортҳои бонкӣ.pdf" id="link_offerta"><img src="../../static/image/icon_offerta.png" width="120" height="120" alt="" style="">{{ $t('doc_card_guide') }}</a>
      </span>
    </div>
    <div style="border:1px solid #b3b6bc; border-radius:10px; padding: 15px;margin-top:10px;">
      <span >
        <a href="../documents/Нархномаи хизматрасонӣ.pdf" id="link_offerta"><img src="../../static/image/icon_offerta.png" width="120" height="120" alt="" style="">{{ $t('doc_swift_rates') }}</a>
      </span>
    </div>
  </section>
</template>
<script>
import ApplicationCard from '@/components/application/card.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Cards',
  components: {
    ApplicationCard
  },
  computed: {
    ...mapState({
      cards: state => state.api.cards,
      language_id: state => state.language.language_id,
      isApplicationCard: state => state.application.isApplicationCard
    })
  },
  data() {
    return {
      card: {}
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'application/change_state'
    }),
    ...mapActions({
      get_page: 'api/get_page'
    }),
    get_cards() {
      let payload = {
        request: `Card/?language_id=${this.language_id}`,
        key: 'cards',
        body: []
      }
      this.get_page(payload)
    },
    openApplicationCard(card) {
      this.card = card
      let payload = {
        key: 'isApplicationCard',
        body: true
      }
      this.change_state(payload)
    }
  },
  async mounted() {
    this.get_cards()
  }
}
</script>
