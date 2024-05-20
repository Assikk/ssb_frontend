<template>
  <div class="w-full bg-white flex items-center justify-between rounded px-5 py-3">
    <input type="text" class="text-base-1 text-black outline-0" :placeholder="placeholder">
    <div class="relative">
      <div class="flex items-center gap-3 cursor-pointer"
      @click="isActive = !isActive">
        <TitlesXl1BlackSSB>
          {{currency}}
        </TitlesXl1BlackSSB>
        <img src="/image/arrows/red-outlined.svg" alt="Arrow Red Icon" class="w-6 h-6"
        :class="isActive ? 'rotate-180' : ''">
      </div>
      <transition name="fade">
        <ul v-if="isActive" class="w-full bg-white rounded absolute top-9 left-0 z-10">
          <li v-for="item in list" :key="item.id" class="py-3 text-center cursor-pointer hover:bg-primary-light hover:text-primary"
          @click="changeCurrency(item)">
            {{item.text}}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CurrencyInputComponent',
  props: ['placeholder', 'currency', 'list'],
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    changeCurrency(item) {
      this.isActive = false
      this.$emit('click', item)
    },
  },
}
</script>
