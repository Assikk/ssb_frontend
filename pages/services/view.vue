<template>
  <section class="main__container px-6 xl:px-0">
    <div
      class="border border-divider rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-6 mt-20"
    >
      <div class="w-full lg:w-1/6">
        <img
          :src="serviceDetails.img.src"
          class="hover:scale-110 duration-300 ease-in-out w-auto mx-auto"
        />
      </div>
      <div class="w-full lg:w-4/6">
        <h2 class="font-semibold text-xl-1 sm:text-2xl-1 mb-2">
          {{ serviceDetails.name }}
        </h2>
        <p class="text-sm-1 sm:text-base text-black mb-6">
        {{ serviceDetails.description2 }}
        </p>
        <ul class="list-disc ml-5">
          <li
            v-for="advantage in serviceDetails.advantages"
            :key="advantage.id"
          >
            {{ advantage.title }} ({{ advantage.description }})
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Cards",

  computed: {
    ...mapState({
      serviceDetails: (state) => state.application.serviceDetails,
    }),
  },
};
</script>
