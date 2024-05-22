<template>
<div class="flex flex-col gap-4">
  <h1 class="font-semibold text-2xl-1 sm:text-3xl-1">
    {{$t('gold.title')}}
  </h1>
  <Table :head="$t('gold.head')">
    <template #body>
      <tr v-for="(item, index) in gold" :key="index">
        <td>
          <span>
            {{item.id}}
          </span>
        </td>
        <td>
          <span>
            {{item.buy}}
          </span>
        </td>
        <td>
          <span>
            {{item.sell}}
          </span>
        </td>
      </tr>
    </template>
  </Table>
</div>
</template>
<script>
import {mapState} from 'vuex'
import Table from '@/components/table.vue'
export default {
  name: 'GoldComponent',
  components: {
    Table
  },
  computed: {
    ...mapState({
      gold: state => state.gold.gold
    })
  },
}
</script>
