<template>
  <div class="flex items-center bg-background rounded-[32px]">
    <img :src="advantage.img.src" :alt="advantage.img.alt" class="h-auto w-[138px] hidden sm:block">
    <img :src="advantage.mobile.src" :alt="advantage.mobile.alt" class="h-auto w-20 block sm:hidden">
    <div class=" flex flex-row sm:flex-col gap-2 items-center text-center px-6">
      <h1 class="font-semibold text-xl-1 sm:text-3xl-1">
        {{advantage.title}}
      </h1>
      <p class="text-sm-2 sm:text-base-1">
        {{advantage.description}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Advantage',
  props: ['advantage']
}
</script>
