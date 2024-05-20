<template>
  <div v-if="item" class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:flex justify-center items-center">
    <BlocksAdvantagesOutlinedItem :title="item.annual_rate" :description="item.annual_rate_subtitle"
      :image="image1" />
    <BlocksAdvantagesOutlinedItem :title="item.get_credit" :description="item.get_credit_subtitle"
      :image="image2" />
    <BlocksAdvantagesOutlinedItem :title="item.max_term" :description="item.max_term_subtitle"
      :image="image3" />
  </div>
</template>
<script>
export default {
  name: 'OutlineAdvantagesComponent',
  props: ['item'],
  data() {
    return {
      image1: null,
      image2: null,
      image3: null,
    }
  },
  mounted() {
    var currentUrl = window.location.pathname;
    var rameen = currentUrl.includes('Credit');

    if (rameen) {
      this.image1 = "/image/advantages/outlined/card-green-credit.png";
      this.image2 = "/image/advantages/outlined/wallet-pink-credit.png";
      this.image3 = "/image/advantages/outlined/dollar-blue-credit.png";
    } else {
      this.image1 = "/image/advantages/outlined/card-green.png";
      this.image2 = "/image/advantages/outlined/wallet-pink.png";
      this.image3 = "/image/advantages/outlined/dollar-blue.png";
    }
  },
}
</script>
