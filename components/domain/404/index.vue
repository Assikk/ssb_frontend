<template>
  <div class="main__container px-6 xl:px-0">
    <div class="max-w-[847px] mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-[76px] pt-10 md:pt-20">
      <div>
        <Titles :small="true">
          Страница не найдена
        </Titles>
        <TextsXl-1-DarkLight class="mt-3 mb-6">
          Ой! Страницы, которую вы ищете, не существует. Возможно, она была перемещена или удалена.
        </TextsXl-1-DarkLight>
        <Button :primary="true" @click="$router.push(localePath('/'))">
          Перейти на главную
        </Button>
      </div>
      <img src="/image/404.webp" alt="404 Error Image" class="w-[272px] sm:w-[360px] h-[200px] sm:h-[265px]">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error404Component'
}
</script>
