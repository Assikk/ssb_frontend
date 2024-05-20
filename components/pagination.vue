<template>
  <ul class="flex gap-3 items-center justify-end">
    <li class="relative w-[40px] sm:w-12 h-[40px] sm:h-12 border border-primary rounded cursor-pointer"
    @click="activePage !== 1 ? activePage-- : ''">
      <svg
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-primary w-6 h-6 rotate-90">
        <use xlink:href="#arrow"></use>
      </svg>
    </li>
    <li class="w-[40px] sm:w-12 h-[40px] sm:h-12 rounded font-medium text-base-2 relative cursor-pointer"
    :class="activePage === item.id ? 'bg-primary text-white' : 'bg-primary-light text-primary'"
    v-for="item in pagination" :key="item.number"
    @click="activePage = item.id">
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {{item.number}}
      </p>
    </li>
    <li class="relative w-[40px] sm:w-12 h-[40px] sm:h-12 border border-primary rounded cursor-pointer"
    @click="activePage !== 5 ? activePage++ : ''">
      <svg
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-primary w-6 h-6 rotate-[270deg]">
        <use xlink:href="#arrow"></use>
      </svg>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Pagination',
  data() {
    return {
      activePage: 1,
      pagination: [
        {
          id: 1,
          number: 1
        },
        {
          id: 2,
          number: 2
        },
        {
          id: 3,
          number: 3
        },
        {
          id: 4,
          number: 4
        },
        {
          id: 5,
          number: 5
        },
      ]
    }
  }
}
</script>
