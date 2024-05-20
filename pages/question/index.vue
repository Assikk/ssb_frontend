<template>
  <section>
    <div class="main__container px-6 xl:px-0 pt-6">
      <div
        class="flex justify-between items-start flex-col sm:flex-row gap-2 sm:items-center"
      >
        <Titles> {{$t('pages.question.title')}} </Titles>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 my-10">
        <div
          class="flex flex-col gap-6 justify-start sm:justify-between p-8 sm:p-10 border-2 border-primary-light rounded-xl"
          :class="item.date ? 'min-h-fit sm:min-h-[326px]' : ''"
          v-for="item in answers"
          :key="item.id"
          v-if="item.status === 1"
        >
          <div>
            <p
              class="text-light font-medium text-xl-1 mb-4"
            >
              {{ item.question }}
            </p>
            <p
              class="text-light"
              :class="item.date ? 'text-xl-1' : 'text-sm-1'"
            >
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
      <Pagination v-show="false" />
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AnswersPage",
  computed: {
    ...mapState({
      answers: (state) => state.api.answers,
      language_id: (state) => state.language.language_id,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    get_answers() {
      let payload = {
        request: `Answer/?language_id=${this.language_id}`,
        key: "answers",
        body: [],
      };
      this.get_page(payload);
    },
  },
  mounted() {
    this.get_answers();
    console.log(this.language_id);
  },
};
</script>
