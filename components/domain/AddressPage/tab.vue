<template>
  <div>
    <div class="flex items-center gap-6">
      <div v-for="tab in tabs" :key="tab.id">
        <span class="cursor-pointer" @click.prevent="showAddress(tab.id)">{{ tab.text }}</span>
      </div>
    </div>
    
    <DomainAddressPageMap />

  </div>
</template>
<script>
export default {
  name: 'AddressPageTabComponent',
  data() {
    return {
      activeTab: 1,
      tabs: [
        {
          id: 1,
          text: 'Офисы'
        },
        {
          id: 2,
          text: 'Банкоматы'
        },
        {
          id: 3,
          text: 'POS терминалы'
        }
      ]
    }
  },
}
</script>
