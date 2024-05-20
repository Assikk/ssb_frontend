<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="my-6"> {{$t('pages.services.title')}} </Titles>
    <div class="flex flex-col gap-6 mb-6">
      <CardProduct
        v-for="card in $t('pages.services.cards')"
        :key="card.id"
        :card="card"
        :list="$t('pages.services.cards')"
        type="services"
      />
    </div>
    <pagination v-show="false" />
  </section>
</template>
<script>
export default {
  name: "Cards",
};
</script>
