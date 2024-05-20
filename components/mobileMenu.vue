<template>
  <div class="bg-background z-10 fixed bottom-0 w-full py-2 text-small-base text-black">
    <ul class="flex justify-around">
      <li v-for="(item, index) in $t('headerListPage')" :key="index"
      :class="$route.query.type == item.id ? 'text-primary fill-primary' : 'hover:text-primary fill-gray'"
      @click="$emit('changePage', item)">
        <svg
        class="fill-inherit w-5 h-5 mx-auto">
          <use :xlink:href="item.svg"></use>
        </svg>
        <p class="mt-[8.7px] text-center">
          {{item.mobileText}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MobileMenu'
}
</script>
