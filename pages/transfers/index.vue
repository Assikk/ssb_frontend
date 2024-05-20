<template>
  <section class="main__container px-6 xl:px-0">
    <h1 class="font-semibold text-3xl-1 my-6">
      {{ $t("pages.transfers.title") }}
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <CardTransfer
        v-for="transfer in $t('pages.transfers.cards')"
        :key="transfer.id"
        :transfer="transfer"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: "Transfers",
};
</script>
