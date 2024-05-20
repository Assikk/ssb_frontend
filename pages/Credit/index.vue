<template>
  <section class="main__container px-6 xl:px-0">
    <div class="flex gap-4 items-center justify-between">
      <Titles class="font-semibold text-3xl-1 my-6">
        {{ $t("credit.credits") }}
      </Titles>
      <div class="flex gap-4 items-center">
        <img src="/image/8060328.webp" alt="" class="w-10 h-10"/>
        <NuxtLink :to="localePath('/Credit/faq')" class="text-xl font-semibold">
          {{ $t("credit.faqTitle") }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col gap-6 mb-6">
      <CardProduct
        v-for="credit in credits"
        :key="credit.id"
        :card="credit"
        :list="credits"
        type="credit"
        @clickSendRequest="openApplicationCredit(credit)"
      />
    </div>
    <pagination v-show="false" />
    <transition name="fade">
      <ApplicationCredit v-if="isApplicationCredit" />
    </transition>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ApplicationCredit from "@/components/application/credit.vue";
export default {
  name: "Credits",
  components: {
    ApplicationCredit,
  },
  head() {
    return {
      title: this.$t("credit.credits"),
    };
  },
  data() {
    return {
      credit: {},
    };
  },
  computed: {
    ...mapState({
      credits: (state) => state.credit.credits,
      language_id: (state) => state.language.language_id,
      isApplicationCredit: (state) => state.application.isApplicationCredit,
    }),
  },
  methods: {
    ...mapMutations({
      change_state: "application/change_state",
    }),
    ...mapActions({
      get_credits: "credit/get_credits",
    }),
    openApplicationCredit(credit) {
      this.credit = credit;
      let payload = {
        key: "isApplicationCredit",
        body: true,
      };
      this.change_state(payload);
    },
  },
  mounted() {
    this.get_credits({ language_id: this.language_id });
  },
};
</script>
