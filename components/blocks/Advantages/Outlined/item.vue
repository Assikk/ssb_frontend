<template>
  <div class="flex items-center gap-6">
    <img :src="image" :alt="title" class="w-[72px] sm:w-[85px] h-[72px] sm:h-[85px]">
    <div class="flex flex-col gap-[6px]">
      <TitlesXl-1BlackSSB>
        {{title}}
      </TitlesXl-1BlackSSB>
      <TextsBase-1Gray :small="true">
        {{description}}
      </TextsBase-1Gray>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemOutlineAdvantageComponent',
  props: ['title', 'description', 'image']
}
</script>
