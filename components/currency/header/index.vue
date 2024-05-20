<template>
  <div class="flex items-center justify-between">
    <CurrencyHeaderTab v-if="$route.path === '/'"/>
    <Titles v-else>
      Курс валют
    </Titles>
    <CurrencyTextBaseDarkGray class="hidden md:block">
    </CurrencyTextBaseDarkGray>
  </div>
</template>
<script>
export default {
  name: 'CurrencyHeaderComponent',
}
</script>
