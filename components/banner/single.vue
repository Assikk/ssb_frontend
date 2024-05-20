<template>
  <div class="relative overflow-hidden lg:overflow-auto w-full bg-[#FAE6EF]">
    <div class="p-6 lg:p-[50px]">
      <div class="md:w-[70%] w-full lg:w-1/2">
        <TitlesXl21BlackSSB class="mb-4" :small="true">
          Счёт как копилка, всегда выгодно
        </TitlesXl21BlackSSB>
        <TextsBase1BlackSSB :small="true" class="mb-8">
          Открой счёт с бесплатным обслуживанием на первые 5 месяца и копите не думая о комисии
        </TextsBase1BlackSSB>
        <Button :primary="true">
          Открыть счёт
        </Button>
      </div>
    </div>
    <img src="/image/14_percent.png" class="absolute md:block hidden -bottom-[10%] lg:bottom-0 -right-[10%] lg:right-0 w-[141px] lg:w-[273px] h-[130px] lg:h-[253px]" alt="pink image">
  </div>
</template>
<script>
export default {
  name: 'BannerSingle'
}
</script>
