<template>
<div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
  <div class="fixed w-5/6 md:w-1/2 z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto bg-background rounded-xl px-6 md:px-[80px] py-6 md:py-[40px] flex flex-col gap-6">
    <svg class="fill-primary w-16 h-16 mx-auto">
      <use xlink:href="#done"></use>
    </svg>
    <h1 class="text-center font-medium text-2xl-1">
      Дархости Шумо бо муваффақият ирсол гардид!
    </h1>
    <Button :primary="true" class="w-[261px] mx-auto"
    @click="changeSuccess(false)">
      Ташаккур
    </Button>
  </div>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Success',
  methods: {
    ...mapMutations({
      changeSuccess: 'success/changeSuccess',
    }),
  }
}
</script>
<style scoped>
.form {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
