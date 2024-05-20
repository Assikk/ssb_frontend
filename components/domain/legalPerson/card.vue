<template>
  <div class="w-full">
    <div class="relative rounded-lg h-[148px]" :class="card.background">
      <img src="/image/bank.webp" alt="" class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1/2 h-full">
    </div>
    <TitlesXl2-1BlackSSB class="text-center mt-6 mb-[14px]">
      {{card.title}}
    </TitlesXl2-1BlackSSB>
    <TextsBase1Gray class="text-center">
      {{card.description}}
    </TextsBase1Gray>
    <Button :outlined="true" class="mt-6 w-full !justify-center">
      {{card.button}}
    </Button>
  </div>
</template>
<script>
export default {
  name: 'LegalPersonCardComponent',
  props: ['card']
}
</script>

