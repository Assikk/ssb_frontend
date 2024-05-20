<script>
export default {
  name: "SearchModal",
  props: ["isOpen", "value"],

  methods: {
    fillValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<template>
  <div>
    <div class="overlay fixed top-0 left-0 w-full h-screen cursor-pointer z-[100] duration-300" @click="() => $emit('close')" :class="isOpen ? 'visible opacity-100' : 'invisible opacity-0'"/>
    <div class="fixed left-1/2 z-[100] duration-300 w-6/12 md:w-4/12 transform -translate-x-1/2 -translate-y-1/2"
    :class="isOpen ? 'visible opacity-100 top-[15%]' : 'invisible opacity-0 top-[30%]'">
      <div class="absolute left-4 top-4 w-4 fill-[#8b8b8b]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
        </svg>
      </div>
      <input
        @keypress.enter="() => $emit('submit', value)"
        :value="value"
        @input="fillValue"
        type="text"
        :placeholder="$t('search')"
        class="outline-0 rounded bg-[#f2f2f2] border-0 w-full py-4 pl-11 pr-5"
      />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.4);
}
</style>
