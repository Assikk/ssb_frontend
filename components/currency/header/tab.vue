<template>
  <div class="w-full overflow-x-auto md:w-auto">
    <ul class="flex justify-between md:justify-start">
      <li @click="active = tab.id" v-for="tab in tabs" :key="tab.id" class="min-w-max w-full md:w-fit px-3 pb-3 border-b cursor-pointer"
      :class="active === tab.id ? 'border-primary text-primary' : 'text-black hover:text-primary border-gray hover:border-primary'">
        <CurrencyTextSm-gray class="!text-inherit">
          {{tab.text}}
        </CurrencyTextSm-gray>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CurrencyTabComponent',
  data() {
    return {
      active: 1,
      tabs: [
        {
          id: 1,
          text: 'Шахсони воқеӣ',
          api: 'NON_CASH',
        },
        {
          id: 2,
          text: 'Шахсони ҳуқуқӣ',
          api: 'Waiting for API',
        },
        {
          id: 3,
          text: 'Интиқоли маблағ',
          api: 'TRANSFER',
        },
        {
          id: 4,
          text: 'Кортҳо (шахсони воқеӣ)',
          api: 'CardTransfer',
        }
      ]
    }
  }
}
</script>
