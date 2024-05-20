<template>
  <div class="bg-white rounded-xl p-6 flex flex-col-reverse sm:flex-row gap-6 sm:gap-[28px]">
    <DomainAddressPageMapList class="w-1/3"/>
    <DomainAddressPageMapMain class="w-2/3"/>
  </div>
</template>
<script>
export default {
  name: 'AddressPageMapComponent'
}
</script>
<style scoped>
.map {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
}
</style>
