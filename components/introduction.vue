<template>
  <p class="text-sm-1 lg:text-base-1 text-dark"></p>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    switch (localStorage.getItem("lang")) {
      case "ru":
        return {
          detials:"Бо пахш кардани тугмаи <span @click='goToRulesCard' class='cursor-pointer text-bllue hover:border-b hover:border-bllue'>Apply'</span> тасдиқ мекунам, ки ман бо шартҳои барориши кортҳои дебетӣ ва коркарди маълумоти шахсиамро хондаам ва розӣ ҳастам."
        };
        break;
      case "en":
        break;
      default:
        break;
    }
  },
  name: "Introduction",
  methods: {
    ...mapMutations({
      changeApplication: "application/changeApplication",
    }),
    goToRulesCard() {
      this.$router.push(this.localePath("rules-card"));
      this.changeApplication(false);
    },
  },
};
</script>
