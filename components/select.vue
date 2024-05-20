<template>
  <div class="h-[70px]">
    <div
      class="relative bg-white px-5 py-3 rounded w-full text-base-1 placeholder:text-black text-black-ssb"
      :class="[
      {'error': error}
      ]"
    >
      <div
        @click="isShowList = !isShowList"
        class="flex justify-between items-center cursor-pointer"
      >
        <p>
          {{ active }}
        </p>
        <svg
          v-if="list.length > 0"
          class="fill-black-ssb w-6 h-6"
          :class="isShowList ? 'rotate-180' : ''"
        >
          <use xlink:href="#arrow"></use>
        </svg>
      </div>
      <ul
        v-if="isShowList"
        class="z-20 drop-shadow-xl absolute top-[3.2rem] left-0 bg-white py-3 rounded w-full"
      >
        <li
          v-for="item in list"
          :key="item.id"
          class="px-5 py-2 cursor-pointer hover:bg-primary-light hover:text-primary"
          @click="clickItem(item)"
        >
          {{ item.title }}
          {{ item.name }}
          <span v-if="item.percent != undefined">
            {{ ", " + item.percent + "%" }}</span
          >
        </li>
      </ul>
    </div>
    <p>
      <span class="text-sm text-[#ff0000] mt-1"
      v-if="errorRequired">
        Это поле обязателен для заполнения
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "Select",
  props: ["active", "list", 'error', 'errorRequired'],
  data() {
    return {
      isShowList: false,
    };
  },
  methods: {
    clickItem(item) {
      this.isShowList = false;
      this.$emit("click", item);
    },
  },
};
</script>
<style scoped>
.error {
  border: 1px solid #ff0000;
}
</style>
