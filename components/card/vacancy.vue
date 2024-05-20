<template>
  <div class="border border-divider rounded-2xl p-6 sm:p-10">
    <div>
      <h2 class="font-semibold text-xl-1 sm:text-2xl-1 mb-2">
        {{item.title}}
      </h2>
      <div class="flex justify-between lg:justify-start flex-col md:flex-row gap-4 mb-6">
        <div class="w-full md:w-[230px]">
          <h3 class="text-medium text-base sm:text-base-2 mb-2 sm:mb-0">{{ $t('deadline') }}</h3>
          <p class="text-sm-1 text-black">
            {{item.dead_line}}
          </p>
        </div>
        <div class="w-full md:w-[230px]">
          <h3 class="text-medium text-base sm:text-base-2 mb-2 sm:mb-0">{{ $t('region') }}</h3>
          <p class="text-sm-1 text-black">
            {{item.region}}
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse sm:flex-row gap-6 sm:gap-0 items-center justify-between">
        <NuxtLink :to="localePath('/FAQ')" class="text-black text-base-1 text-right sm:text-left w-full sm:w-auto">
          {{$t('vacancy.card.question')}}
        </NuxtLink>
        <div class="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-4">
          <Button @click="$router.push(localePath('/vacancy') + `/${item.id}`)" :outlined="true">
            {{$t('vacancy.card.detail')}}
          </Button>
          <Button @click="openApplication" :primary="true">
            {{$t('vacancy.card.send')}}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CardVacancy',
  props: ['item', 'list'],
  methods: {
    ...mapMutations({
      changeApplicationVacancy: 'application/changeApplicationVacancy',
      changeProduct: 'application/changeProduct',
      openList: 'application/openList',
    }),
    openApplication() {
      const payload = {
        status: true,
        title: this.item.title
      }
      this.changeApplicationVacancy(payload)
      this.changeProduct(this.item)
      this.openList(this.list)
    },
  }
}
</script>
