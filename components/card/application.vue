<template>
  <div class="flex items-center gap-4 p-4 bg-white shadow-white/40 rounded-xl cursor-pointer"
  @click="$emit('click')">
    <img src="/image/applications/credit.png" v-if="application.id == 8" class="w-[50px] h-[50px] goRight">
    <img src="/image/applications/cards.png" v-if="application.id == 7" class="w-[50px] h-[50px] goRight">
    <img src="/image/applications/e-banking.png" v-if="application.id == 6" class="w-[50px] h-[50px] goRight">
    <img src="/image/applications/account.png" v-if="application.id == 5" class="w-[50px] h-[50px] goRight">
    <img src="/image/applications/support.png" v-if="application.id == 4" class="w-[50px] h-[50px] goRight">
    <p class="text-sm-1 text-light">
      {{application.name}}
    </p>
    <p class="hidden text-sm-1 text-light">
      {{application.email}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Application',
  props: ['application'],
}
</script>
