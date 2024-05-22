<template>
  <div class="main__container flex flex-col gap-6">
    <h2 class="text-2xl font-bold mt-6">
      {{$t('deposit.faq.title')}}
    </h2>
    <p class="font-medium text-lg">
      {{$t('deposit.faq.description')}}
    </p>
    <div class="flex flex-col gap-4"
    v-for="item in $t('deposit.faq.list')" :key="item.id">
      <div>
        <div class="flex items-center justify-between gap-4">
          <h3 class="text-lg font-semibold">
            {{item.title}}
          </h3>
          <svg :fill="item.isShow ? '#111827' : 'none'" :stroke="item.isShow ? 'none' : '#111827'" width="24" height="24" class="cursor-pointer min-w-[24px] min-h-[24px]"
          @click="openList(item)">
            <use :xlink:href="item.isShow ? '#cross' : '#plus'"></use>
          </svg>
        </div>
          <div class="pt-2" v-if="item.isShow">
            <p v-if="item.description">
              {{ item.description }}
            </p>
            <ul v-if="item.list" class="list-disc">
              <li v-for="val in item.list" :key="val.id">
                {{ val.name }}
              </li>
            </ul>
            <img v-if="item.image" :src="item.image.src" :alt="item.image.alt" class="mt-4">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqDepositPage',
  head() {
    return {
      title: this.$t('deposit.faqTitle')
    }
  },
  methods: {
    openList(item) {
      this.$t('deposit.faq.list').forEach((val) => {
        if(val.id == item.id) {
          val.isShow = !val.isShow
        } else val.isShow = false
      })
    }
  }
}
</script>
