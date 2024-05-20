<template>
  <div class="bg-white min-w-[142px] sm:min-w-[180px] py-3 px-5 text-black">
    <TextsBase-1Gray :small="true">
      <TitlesXl-1BlackSSB class="inline-block">{{amount}}</TitlesXl-1BlackSSB> {{text}}
    </TextsBase-1Gray>
  </div>
</template>
<script>
export default {
  name: 'InputCalculatorComponent',
  props: ['amount', 'text']
}
</script>
