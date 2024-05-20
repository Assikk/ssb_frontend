<template>
  <nav class="nav py-4 lg:py-3 border-t-[1px] border-divider overflow-x-auto text-base">
    <ul class="flex items-center gap-6">
      <!-- {{ $t("headerListPage") }} -->
      <li v-for="(item, index) in list" :key="index" class="min-w-max">
        <NuxtLink :to="localePath(item.link)"
        :class="$route.path.endsWith(item.name) ? 'text-primary' : 'hover:text-primary'">
          {{item.text}}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['list'],
  
}
</script>
<style scoped>
.nav::-webkit-scrollbar {
      width: 0;
      height: 0;
}
</style>
