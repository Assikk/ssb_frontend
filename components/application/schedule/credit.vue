<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div class="absolute w-full h-full top-0 left-0 z-20" @click="show_sheduleCredit(false)"/>
    <div class="h-[90%] overflow-y-auto w-4/5 lg:w-1/2 rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible bg-background py-6 xl:py-10 px-6 xl:px-20 rounded-xl flex flex-col gap-6">
      <h1 class="font-medium text-2xl text-center">График погашения на кредит</h1>
      <h2 v-if="Object.keys(credit).length == 0"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium">
        График погашения временно недоступен
      </h2>
      <table v-else>
        <thead>
          <tr>
            <th v-for="item in head" :key="item.id">
              <span>
                {{item.name}}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import moment from 'moment';
export default {
  name: "ApplicationScheduleCredit",
  computed: {
    ...mapState({
      credit: state => state.credit.credit,
      duration: state => state.credit.shedule_duration,
      amount: state => state.credit.shedule_amount
    }),
    year() {
      if(this.duration > 12) {
        return 365
      } else return 360
    }
  },
  data() {
    return {
      head: [
        {
          id: 1,
          name: "№"
        },
        {
          id: 2,
          name: 'Период выплаты процентов'
        },
        {
          id: 3,
          name: 'Начисленные проценты'
        },
        {
          id: 4,
          name: 'Основная сумма'
        }
      ],
      body: []
    }
  },
  methods: {
    ...mapMutations({
      show_sheduleCredit: 'credit/SHOW_SHEDULECREDIT'
    }),
    countFormula(days) {
      return Math.round((parseFloat(((Math.round(this.amount * (this.credit.percent / 100))) / this.year).toFixed(2))) * days)
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
table {
  width: 100%;
  border: 1px solid #e5e7eb;
}
thead {
  border-bottom: 1px solid #e5e7eb;
}
thead tr th {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.6px;
  text-align: start;
  border-radius: 8px 8px 0 0;
}
thead tr td {
  padding: 12px 24px;
}
tbody tr td {
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 14px;
  line-height: 20px;
  color: #1e3148;
}
</style>
