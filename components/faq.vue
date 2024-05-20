<template>
  <div class="px-7 py-[18px] bg-background rounded-lg">
    <div class="flex items-center justify-between cursor-pointer"
    @click="$emit('click')">
      <h1 class="font-semibold text-base-2">
        {{faq.question}}
      </h1>
      <svg
      class="fill-black-ssb w-6 h-6"
      :class="activeFaq === faq.id ? 'rotate-180' : ''">
        <use xlink:href="#arrow"></use>
      </svg>
    </div>
    <p class="mt-3 text-black text-base-1" v-if="activeFaq === faq.id">
      {{faq.answer}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'FAQComponent',
  props: ['faq', 'activeFaq'],
}
</script>
