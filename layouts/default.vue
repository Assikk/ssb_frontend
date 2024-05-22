<template>
  <div class="main">
    <Icons />
    <div class="main__container px-6 xl:px-0 bg-white/70">
      <TheHeader
        class="hidden lg:block"
        :activePage="activePage"
        @changePage="changePage"
      />
      <TheMobileHeader class="block lg:hidden" @changePage="changePage" />
      <Navbar :list="activePage && activePage.child" class="w-full xl:w-4/5" />
    </div>
    <Nuxt class="pb-[60px] lg:pb-[120px]" />
    <MobileMenu class="block lg:hidden" @changePage="changePage" />
    <Footer class="hidden lg:block" @changePage="changePage" />
    <MobileFooter class="block lg:hidden mb-[65px]" @changePage="changePage" />
    <transition-group name="fade">
      <ApplicationDefault key="application" v-if="isApplication" />
      <Success key="success" v-if="isSuccess" />
      <ApplicationVacancy
        key="applicationVacancy"
        v-if="isApplicationVacancy"
      />
      <Alert key="alert" v-if="alert.isActive" />
      <ApplicationCard key="applicationCard" v-if="isApplicationCard" />
      <SheduleCredit key="credit" v-if="isShowSheduleCredit" />
      <SheduleDeposit key="deposit" v-if="isShowSheduleDeposit" />
    </transition-group>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Alert from "@/components/alert.vue";
import Icons from "@/components/icons.vue";
import SheduleCredit from "@/components/application/schedule/credit.vue";
import SheduleDeposit from "@/components/application/schedule/deposit.vue";
export default {
  name: "DefaultPage",
  components: {
    Alert,
    Icons,
    SheduleCredit,
    SheduleDeposit,
  },
  data() {
    return {
      activePage: {},
    };
  },
  computed: {
    ...mapState({
      isApplication: (state) => state.application.isApplication,
      isApplicationVacancy: (state) => state.application.isApplicationVacancy,
      active: (state) => state.application.active,
      isSuccess: (state) => state.success.isSuccess,
      alert: (state) => state.alert.alert,
      isApplicationCard: (state) => state.application.isApplicationCard,
      isShowSheduleCredit: (state) => state.credit.isShowSheduleCredit,
      isShowSheduleDeposit: (state) => state.deposit.isShowSheduleDeposit,
    }),
  },
  methods: {
    ...mapMutations({
      change_language: "language/CHANGE_LANGUAGE",
    }),
    changePage(item) {
      this.activePage = item;
      this.$router.push(this.localePath(item.link));
    },
  },
  created() {
    localStorage.setItem("lang", this.$i18n.locale);
    this.change_language();
  },
  mounted() {
    this.activePage = this.$t("headerListPage")[0];
    // this.activePage = this.$t('headerListPage').filter(item => item.url == this.$route.path)
    this.$router.push({ query: { type: this.activePage.id } });
  },
  watch: {
    $route(val) {
      if (val.query.type) {
        this.activePage = this.$t("headerListPage")[val.query.type - 1];
      }
      localStorage.setItem("lang", this.$i18n.locale);
      this.change_language();
    },
  },
};
</script>

<style>
.main__container {
  max-width: 1280px;
  margin: 0 auto;
}
.main {
  font-family: "arial", sans-serif;
}
/* Animation transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
