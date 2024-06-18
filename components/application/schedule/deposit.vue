<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div class="absolute w-full h-full top-0 left-0 z-20" @click="show_sheduleDeposit(false)"/>
    <div class="max-h-[90%] overflow-y-auto w-4/5 lg:w-1/2 rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible bg-background py-6 xl:py-10 px-6 xl:px-20 rounded-xl flex flex-col gap-6">
      <div class="flex items-center justify-between gap-4">
        <h1 class="font-medium text-2xl text-center">{{$t('deposit.schedule.title')}}</h1>
        <Button :primary="true" @click="downloadPDF">
          {{$t('deposit.schedule.pdf')}}
        </Button>
      </div>
      <Table id="deposit" :head="$t('deposit.schedule.head')">
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
                {{item.percent}}
              </span>
            </td>
            <td>
              <span>
                {{amount}}
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
import moment from 'moment';
import Table from '@/components/table.vue'
import html2canvas from 'html2canvas';
export default {
  name: "ApplicationScheduleDeposit",
  components: {
    Table
  },
  computed: {
    ...mapState({
      deposit: state => state.deposit.deposit,
      duration: state => state.deposit.period,
      amount: state => state.deposit.amount
    }),
    year() {
      if(this.duration > 12) {
        return 365
      } else return 360
    },
    percent() {
      if(this.$route.params.slug == 6) {
        if(this.duration <= 12) {
          return 7
        } else return 8
      }
      if(this.$route.params.slug == 7) {
        if(this.duration <= 6) {
          return 1
        } else if(this.duration <= 9) {
          return 3
        } else if(this.duration <= 12) {
          return 7
        } else return 8
      }
      if(this.$route.params.slug == 9) {
        if(this.duration <= 6) {
          return 0
        } else if(this.duration <= 9) {
          return 1
        } else if(this.duration <= 12) {
          return 1.5
        } else return 4
      }
    },
  },
  data() {
    return {
      body: []
    }
  },
  methods: {
    ...mapMutations({
      show_sheduleDeposit: 'deposit/SHOW_SHEDULEDEPOSIT'
    }),
    countFormula(days) {
      // return Math.round((parseFloat(((Math.round(this.amount * (this.deposit.tjs_min_percent / 100))) / this.year).toFixed(2))) * days)
      return Math.round((parseFloat(((Math.round(this.amount * (this.percent / 100))) / this.year).toFixed(2))) * days)
    },
    init() {
      for (let i = 0; i < this.duration; i++) {
        this.body.push({
          date: moment().add(i + 1, 'month').startOf('month').format('DD.MM.YYYY')
        })
      }
      this.body.forEach((item, index) => {
        if(index == 0) {
          item.days = moment(item.date, 'DD.MM.YYYY').daysInMonth() - moment().date()
        } else item.days = moment(item.date, 'DD.MM.YYYY').daysInMonth()
        item.count = this.countFormula(item.days)
        item.percent = (item.count - (item.count * 0.12)).toFixed(2)
        item.id = index + 1
      })
      if(moment().date() > 1) {
        this.body.push({
          date: moment().add(this.body.length + 1, 'month').startOf('month').date(moment().date()).format('DD.MM.YYYY'),
          percent: (this.countFormula(moment().date()) - (this.countFormula(moment().date()) * 0.12)).toFixed(2),
          id: this.body.length + 1
        })
      }
    },
    async downloadPDF() {
      const printableContent = document.getElementById('deposit');
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
