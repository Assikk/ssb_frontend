<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div class="absolute w-full h-full top-0 left-0 z-20" @click="show_sheduleCredit(false)"/>
    <div class="max-h-[90%] overflow-y-auto w-4/5 lg:w-1/2 rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible bg-background py-6 xl:py-10 px-6 xl:px-20 rounded-xl flex flex-col gap-6">
      <div class="flex items-center justify-between gap-4">
        <h1 class="flex-1 font-medium text-2xl text-center">{{$t('credit.schedule.title')}}</h1>
        <Button :primary="true" @click="downloadPDF">
          {{$t('credit.schedule.pdf')}}
        </Button>
      </div>
      <Table id="credit" :head="$t('credit.schedule.table.head')">
        <template #body>
          <tr v-for="item in body" :key="item.id">
            <td>
              <span>
                {{item.id}}
              </span>
            </td>
            <td>
              <span>
                {{item.date}}
              </span>
            </td>
            <td>
              <span>
                {{item.month_payment}}
              </span>
            </td>
            <td>
              <span>
                {{item.percent}}
              </span>
            </td>
            <td>
              <span>
                {{item.debt}}
              </span>
            </td>
            <td>
              <span>
                {{item.remains}}
              </span>
            </td>
          </tr>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import Table from '@/components/table.vue'
import moment from 'moment';
import html2canvas from 'html2canvas';
export default {
  name: "ApplicationScheduleCredit",
  components: {
    Table
  },
  computed: {
    ...mapState({
      period: state => state.credit.shedule_duration,
      amount: state => state.credit.shedule_amount,
      credit: state => state.credit.credit
    }),
    j2() {
      return this.percent / 12
    },
    k2() {
      return parseFloat((parseFloat(Math.pow((1 + this.j2), this.period).toFixed(9)) * this.j2).toFixed(9))
    },
    k3() {
      return parseFloat((parseFloat(Math.pow((1 + this.j2), this.period).toFixed(9)) - 1).toFixed(9))
    },
    l2() {
      return parseFloat(((this.amount * this.k2) / this.k3).toFixed(2))
    },
    percent() {
      return this.credit.percent / 100
    }
  },
  data() {
    return {
      body: []
    }
  },
  methods: {
    ...mapMutations({
      show_sheduleCredit: 'credit/SHOW_SHEDULECREDIT'
    }),
    init() {
      for (let i = 0; i < this.period; i++) {
        this.body.push({
          id: i + 1,
          date: moment().add(i, 'month').startOf('month').format('DD.MM.YYYY'),
          month_payment: this.l2
        })
        this.body.forEach((item, index) => {
          item.days = moment(item.date, 'DD.MM.YYYY').daysInMonth()
          if(index == 0) {
            item.percent = parseFloat((parseFloat(((this.amount * this.percent) / 360).toFixed(2)) * item.days).toFixed(2))
            item.debt = parseFloat(((item.month_payment - item.percent).toFixed(2))),
            item.remains = parseFloat((this.amount - item.debt).toFixed(2))
          } else {
            item.percent = parseFloat(((parseFloat(((this.body[index - 1].remains * this.percent) / 360).toFixed(2)) * item.days).toFixed(2)))
            item.debt = parseFloat(((item.month_payment - item.percent).toFixed(2))),
            item.remains = parseFloat((this.body[index - 1].remains - item.debt).toFixed(2))
          }
        })
      }
    },
    async downloadPDF() {
      const printableContent = document.getElementById('credit');
      try {
        const canvas = await html2canvas(printableContent);
        const imgData = canvas.toDataURL('image/png');
        const img = new Image();
        img.onload = function () {
          const printWindow = window.open('', '_blank');
          printWindow.document.write('<html><head><title>Print</title></head><body>');
          printWindow.document.write('<img src="' + img.src + '"/>');
          printWindow.document.write('</body></html>');
          printWindow.document.close();
          printWindow.onload = function () {
            printWindow.print();
            printWindow.close();
          };
        };
        img.src = imgData;
      } catch (error) {
        console.error('Error in html2canvas:', error);
      }
    }
  },
  mounted() {
    this.init()
  }
};
</script>
<style scoped>
.form {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
