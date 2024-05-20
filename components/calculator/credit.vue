<template>
<div>
  <div class="max-w-auto sm:max-w-[1280px] mx-0 sm:mx-auto bg-background p-6 sm:p-10 rounded-xl">
    <div v-if="credits.length > 0" class="flex flex-col lg:flex-row gap-6 lg:gap-[60px]">
      <div class="w-full lg:w-3/5 flex flex-col gap-8">
        <div>
          <TitlesXl-1Gray class="mb-2"> {{$t('credit.calculator.credits')}} </TitlesXl-1Gray>
          <select @change="changeProduct" v-model="activeCredit" class="w-full text-base-1 px-5 py-3 rounded outline-0">
            <option :value="credit" v-for="(credit, index) in credits" :key="index">{{credit.title}} ({{credit.percent}}%)</option>
          </select>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4">
            <TextsBase-1BlackSSB> {{$t('credit.calculator.amount')}}  </TextsBase-1BlackSSB>
            <div class="flex items-center gap-2 bg-white px-2 rounded-lg">
              <input
              type="number"
              v-model="activeAmount"
              class="py-3 px-5 text-black rounded-lg w-[100px] outline-0">
              <p>
                TJS
              </p>
            </div>
          </div>
          <input
            v-model="activeAmount"
            class="w-full text-black outline-0"
            :min="activeCredit.min_amount"
            :max="activeCredit.max_amount"
            step="1000"
            value="0"
            ref="rangeType"
            id="amountRange"
            type="range"
            @input="changeAmount($event.target.value, 'amountRange')"
          />
          <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
            <p>
              {{activeCredit.min_amount}}
            </p>
            <p class="hidden sm:block">
              {{activeCredit.max_amount / 2}}
            </p>
            <p>
              {{activeCredit.max_amount}}
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4">
            <TextsBase-1BlackSSB> {{$t('credit.calculator.duration')}}  </TextsBase-1BlackSSB>
            <div class="flex items-center gap-2 bg-white px-2 rounded-lg">
              <input
              type="number"
              v-model="activeTerm"
              class="py-3 px-5 text-black rounded-lg w-[100px] outline-0">
              <p>
                {{$t('credit.calculator.month')}}
              </p>
            </div>
          </div>
          <input
            v-model="activeTerm"
            class="w-full text-black outline-0"
            :min="0"
            :max="activeCredit.month"
            step="1"
            value="0"
            ref="rangeType"
            id="monthRange"
            type="range"
            @input="changeAmount($event.target.value, 'monthRange')"
          />
          <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
            <p>
              0
            </p>
            <p class="hidden sm:block">
              {{activeCredit.month / 2}}
            </p>
            <p>
              {{activeCredit.month}}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-2/5 flex flex-col gap-[46px]">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-sm-1 sm:text-base-1 text-black"> {{$t('credit.calculator.payment_month')}} </p>
            <p class="font-semibold text-xl-1 sm:text-2xl-1 text-primary">
              {{count}} сомони
            </p>
          </div>
          <Button :primary="true" :disabled="activeAmount == 0 || activeTerm == 0" @click="showSheduleCredit">
            {{$t('credit.calculator.schedule_repayment')}}
          </Button>
        </div>
        <div class="flex gap-4">
          <div class="w-1/2 md:w-auto">
            <p class="text-small-base-1 sm:text-base-1 text-black">
              {{$t('credit.calculator.need')}}
            </p>
            <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
              {{$t('credit.calculator.passport')}}
            </p>
          </div>
          <div class="w-1/2 md:w-auto">
            <p class="text-small-base-1 sm:text-base-1 text-black">
              {{$t('credit.calculator.approval')}}
            </p>
            <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
              +50% {{$t('credit.calculator.acceptance')}}
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-1/2 md:w-auto">
            <p class="text-small-base-1 sm:text-base-1 text-black">
              {{$t('credit.calculator.amount')}}
            </p>
            <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
              {{ activeAmount }} сомони
            </p>
          </div>
          <div class="w-1/2 md:w-auto">
            <p class="text-small-base-1 sm:text-base-1 text-black">
              {{$t('credit.calculator.duration')}}
            </p>
            <p class="text-base sm:text-xl-1 font-medium text-black-ssb">
              {{activeTerm}} {{$t('credit.calculator.month')}}
            </p>
          </div>
        </div>
        <Button :primary="true" class="!w-full" @click="openModal">
          {{ $t('credit.calculator.send') }}
        </Button>
      </div>
    </div>
    <p class="text-xl" v-else>
      {{$t('credit.calculator.warning')}}
    </p>
  </div>
  <transition name="fade">
    <Aplication v-if="isApplicationCredit"/>
  </transition>
</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Aplication from '../application/credit.vue'
export default {
  name: "CreditCalculatorComponent",
  components: {
    Aplication
  },
  data() {
    return {
      min_term: 2,
      oldCustomerValue: false,
      creditMapped: [],
      calculationResult: 0,
      activeCredit: {},
      activeAmount: 0,
      activeTerm: 0,
      count: 0,
      error: false,
    };
  },
  mounted() {
    this.get_credits();
  },

  computed: {
    ...mapState({
      language_id: (state) => state.language.language_id,
      credits: (state) => state.api.credits,
      isApplicationCredit: (state) => state.application.isApplicationCredit,
    }),
  },

  methods: {
    ...mapActions({
      get_page: "api/get_page",
      error_alert: "alert/error_alert"
    }),
    changeProduct() {
      this.activeAmount = this.activeCredit.min_amount,
      this.activeTerm = 0
      this.clearRangeInput()
      this.count = 0
    },
    showSheduleCredit() {
      this.set_credit(this.activeCredit)
      this.set_duration(this.activeTerm)
      this.set_amount(this.activeAmount)
      this.show_sheduleCredit(true)
    },
    async get_credits() {
      let payload = {
        request: `Credit/?language_id=${this.language_id}`,
        key: "credits",
        body: [],
      };
      await this.get_page(payload);
      // let credits = this.credits.filter((item) => {
      //   return item.container_id == this.credit.container_id
      // })
      this.activeCredit = JSON.parse(JSON.stringify(this.credits))[0];
    },
    adjustRangeSliderColor() {
      var target = document.getElementById(this.$refs.rangeType.id);
      const min = target.min;
      const max = target.max;
      const val = target.value;
      target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    },

    ...mapMutations({
      openApplication: "application/changeApplication",
      change_state: 'application/change_state',
      show_sheduleCredit: 'credit/SHOW_SHEDULECREDIT',
      set_credit: 'credit/SET_CREDIT',
      set_duration: 'credit/SET_DURATION',
      set_amount: 'credit/SET_AMOUNT'
    }),
    change(item) {
      this.activeCredit = item;
      this.activeCredit.activeAmount = 0;
        this.activeCredit.activeTerm = 0;
        this.activeCredit.min_term = 2;
      this.calculationResult = 0;

      this.sliderRangeToZero();
    },
    calculatorCount() {
      // let percentageOfAmount = (this.activeAmount * ((this.activeCredit.percent) - this.oldCustomerValueDigit) / 100)
      // this.count = (
      //   (Number(this.activeAmount) + Number(percentageOfAmount)) /
      //   this.activeTerm
      // ).toFixed(2);
      // this.count = Math.abs(((this.activeAmount * (this.activeCredit.percent / (1 + this.activeCredit.percent) - this.activeTerm - 1)) / this.activeTerm).toFixed(2))
      this.count = (this.activeAmount * (((this.activeCredit.percent / 12 / 100) * (Math.pow((1 + (this.activeCredit.percent /12 / 100)), this.activeTerm))) / ((Math.pow((1 + (this.activeCredit.percent / 12 / 100)), this.activeTerm)) - 1))).toFixed(0)
    },
    // Showing alert if amount is not in min and max
    changeAmount(val, id) {
      // Adding value to based on the customer status
      if (this.oldCustomerValue) {
        this.oldCustomerValueDigit = 2;
      } else {
        this.oldCustomerValueDigit = 0;
      }

      // Per month payment calculation
      // this.percentageOfAmount =
      //   (val * (this.activeCredit.percent - this.oldCustomerValueDigit)) / 100;
      // this.totalCalculationResult =
      //   (val + Number(this.percentageOfAmount)) / this.activeCredit.activeTerm;
      // this.calculationResult = (
      //   (Number(val) + Number(this.percentageOfAmount)) /
      //   this.activeCredit.activeTerm
      // ).toFixed(2);

      // For adjusting range slider colors
      var target = document.getElementById(id);
      const min = target.min;
      const max = target.max;
      target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";

      // Checking the values
      // this.activeCredit.activeAmount = val;
      // if (
      //   this.activeCredit.activeAmount < this.activeCredit.min_amount ||
      //   this.activeCredit.activeAmount > this.activeCredit.max_amount
      // ) {
      //   this.error = true;

      // //Clear background of range slider if error exists
      //   var target = document.getElementById("amountRange");
      //   target.style.backgroundSize = 0;
      // } else {
      //   this.error = false;
      // }

      // Checking the values
      // this.activeAmount = val;
      // if (
      //   this.activeAmount < this.activeCredit.min_amount ||
      //   this.activeAmount > this.activeCredit.max_amount
      // ) {
      //   this.error = true;

      // //Clear background of range slider if error exists
      //   var target = document.getElementById("amountRange");
      //   target.style.backgroundSize = 0;
      // } else {
      //   this.error = false;
      // }
    },
    clearRangeInput() {
        let month = document.getElementById("monthRange");
        month.style.backgroundSize = 0;
        let amount = document.getElementById("amountRange");
        amount.style.backgroundSize = 0;
    },
    // Showing alert if term is not in min and max
    changeTerm(val) {
      // Adding value to based on the customer status
      if (this.oldCustomerValue) {
        this.oldCustomerValueDigit = 2;
      } else {
        this.oldCustomerValueDigit = 0;
      }

      // Per month payment calculation
      // this.percentageOfAmount = (val * (this.activeCredit.percent - this.oldCustomerValueDigit)) / 100;
      this.percentageOfAmount =
        (this.activeCredit.activeAmount *
          (this.activeCredit.percent - this.oldCustomerValueDigit)) /
        100;
      this.totalCalculationResult =
        (this.activeCredit.activeAmount + Number(this.percentageOfAmount)) /
        val;
      this.calculationResult = (
        (Number(this.activeCredit.activeAmount) +
          Number(this.percentageOfAmount)) /
        val
      ).toFixed(0);

      // For adjusting range slider colors
      var target = document.getElementById("termRange");
      const min = target.min;
      const max = target.max;
      target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";

      this.activeCredit.activeTerm = val;
      if ((this.activeCredit.activeTerm < 2) || (Number(this.activeCredit.activeTerm) > Number(this.activeCredit.max_term_subtitle))) {
        this.error = true;
        //Clear background of range slider if error exists
        var target = document.getElementById("termRange");

        if(this.activeCredit.activeTerm < 2){
         target.style.backgroundSize = 0;
        }else{
          target.style.backgroundSize = 100;
        }
      } else {
        this.error = false;
      }
    },
    openModal() {
      let payload = {
        key: 'isApplicationCredit',
        body: true
      }
      this.change_state(payload)
    },
    // Adding old cusomter status to the loan
    oldCustomer() {
      this.oldCustomerValue = !this.oldCustomerValue;
      this.calculationResult = 0;
      this.activeCredit.activeAmount = 0;
      this.activeCredit.activeTerm = 0;

      this.sliderRangeToZero();
    },

    sliderRangeToZero() {
      // For adjusting range slider colors after the toggle
      var target = document.getElementById("termRange");
      target.style.backgroundSize = 0;

      // For adjusting range slider colors
      var target = document.getElementById("amountRange");
      target.style.backgroundSize = 0;
    },
    clearCalculator() {
      this.activeAmount = 0
      this.activeTerm = 0
      this.clearRangeInput()
    }
  },
  watch: {
    activeAmount() {
      if(this.activeTerm > 0) {
        this.calculatorCount()
      }
    },
    activeTerm() {
      if(this.activeTerm > 0) {
        this.calculatorCount()
      } else this.count = 0
    },
  }
};
</script>

<style scoped>
input[type="checkbox"].ios8-switch {
  position: absolute;
  margin: 8px 0 0 16px;
}

input[type="checkbox"].ios8-switch + label {
  position: relative;
  padding: 0 0 0 50px;
}

input[type="checkbox"].ios8-switch + label:before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 40px;
  /* x*5 */
  height: 24px;
  /* x*3 */
  border-radius: 16px;
  /* x*2 */
  background: #fff;
  border: 1px solid #d9d9d9;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

input[type="checkbox"].ios8-switch + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0px;
  top: 0px;
  width: 24px;
  /* x*3 */
  height: 24px;
  /* x*3 */
  border-radius: 16px;
  /* x*2 */
  background: #fff;
  border: 1px solid #d9d9d9;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

input[type="checkbox"].ios8-switch + label:hover:after {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

input[type="checkbox"].ios8-switch:checked + label:after {
  margin-left: 16px;
}

input[type="checkbox"].ios8-switch:checked + label:before {
  background: #ff4500;
}
</style>

<style>
input {
  display: inline-block;
  vertical-align: middle;
  font-size: 1em;
  font-family: Arial, sans-serif;
}

/* input[type="range"]:focus,
input[type="number"]:focus {
  box-shadow: 0 0 3px 1px #4b81dd;
  outline: none;
} */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#ff4500, #ff4500);
  background-size: 0% 100%;
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #ff0200;
}

input[type="range"]::-moz-range-thumb:hover {
  background: #ff0200;
}

input[type="range"]::-ms-thumb:hover {
  background: #ff0200;
}

/* Input Track */
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>
