<template>
  <section v-if="form" class="main__container px-6 xl:px-0">
    <div
      class="border border-divider rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-6 mt-20"
    >
      <div class="w-full lg:w-1/6">
        <img
          :src="form.img.src"
          class="hover:scale-110 duration-300 ease-in-out w-auto mx-auto"
        />
      </div>
      <div class="w-full lg:w-4/6">
        <h2 class="font-semibold text-xl-1 sm:text-2xl-1 mb-2">
          {{ form.title }}
        </h2>
        <p class="text-sm-1 sm:text-base text-black mb-6">
        {{ form.description }}
        </p>
        <ul class="list-disc ml-5">
          <li
            v-for="advantage in form.advantages"
            :key="advantage.id"
            v-show="advantage.title"
          >
            {{ advantage.title ? advantage.title : '' }} {{ advantage.description ? `(${advantage.description})` : '' }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SingleServicePage',
  computed: {
    form() {
      let form = {}
      form = this.$t('pages.services.cards').filter((item) => {
        return item.id == this.$route.params.slug
      })[0]
      return form
    }
  },
}
</script>
