<template>
<div>
  <div class="max-w-auto sm:max-w-[1280px] mx-0 sm:mx-auto bg-background p-6 sm:p-10 rounded-xl">
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-[60px]">
      <div class="w-full lg:w-3/5 flex flex-col gap-8">
        <div>
          <div class="flex items-center justify-between gap-4">
            <TextsBase-1BlackSSB> {{$t('deposit.calculator.amount_month')}}  </TextsBase-1BlackSSB>
            <div class="flex items-center gap-2 bg-white px-2 rounded-lg">
              <input type="number" v-model="activeAmount"
              class="py-3 px-5 text-black rounded-lg w-[100px] outline-0">
              <p> TJS </p>
            </div>
          </div>
          <input
            v-model="activeAmount"
            class="w-full text-black outline-0"
            :min="deposit.tjs_min_amount"
            :max="100000"
            step="1000"
            value="0"
            ref="rangeType"
            id="amountRange"
            type="range"
            @input="changeAmount($event.target.value, 'amountRange')"
          />
          <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
            <p>
              {{deposit.tjs_min_amount}}
            </p>
            <p class="hidden sm:block">
              {{100000 / 2}}
            </p>
            <p>
              {{100000}}
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4">
            <TextsBase-1BlackSSB> {{$t('deposit.calculator.period')}}  </TextsBase-1BlackSSB>
            <div class="flex items-center gap-2 bg-white px-2 rounded-lg">
              <input
              type="number"
              v-model="activeTerm"
              class="py-3 px-5 text-black rounded-lg w-[100px] outline-0">
              <p>
                {{$t('deposit.calculator.month')}}
              </p>
            </div>
          </div>
          <input
            v-model="activeTerm"
            class="w-full text-black outline-0"
            :min="0"
            :max="deposit.term_in_month"
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
              {{deposit.term_in_month / 2}}
            </p>
            <p>
              {{deposit.term_in_month}}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/5 flex flex-col gap-5">
      <div class="flex gap-4 justify-between items-center">
        <TitlesXl2-1BlackSSB>
          {{$t('deposit.calculator.result')}}
        </TitlesXl2-1BlackSSB>
        <Button :primary="true" @click="showSheduleDeposit">
          {{$t('deposit.calculator.schedule')}}
        </Button>
      </div>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            {{$t('deposit.calculator.total_amount')}}
          </TextsBase1Gray>
          <TitlesXl2-1Primary>
            {{test}} {{$t('deposit.calculator.somoni')}}
          </TitlesXl2-1Primary>
        </div>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            {{$t('deposit.calculator.income')}}
          </TextsBase1Gray>
          <TextsXl-1BlackSSB>
            + {{test - activeAmount}} {{$t('deposit.calculator.somoni')}}
          </TextsXl-1BlackSSB>
        </div>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            {{$t('deposit.calculator.percent')}}
          </TextsBase1Gray>
          <TextsXl-1BlackSSB>
            {{deposit.annual_rate_subtitle}}
          </TextsXl-1BlackSSB>
        </div>
        <Button :primary="true" class="!w-full" @click="openApplication(true)">
          {{$t('deposit.calculator.send')}}
        </Button>
      </div>
    </div>
    <TextsBase-1Gray class="mt-8">
      {{$t('deposit.calculator.warning')}}
    </TextsBase-1Gray>
  </div>
  <transition name="fade">
    <Aplication v-if="isApplicationCredit"/>
  </transition>
</div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import Aplication from '../application/credit.vue'
export default {
  name: "CreditCalculatorComponent",
  props: {
    deposit: {}
  },
  components: {
    Aplication
  },
  data() {
    return {
      min_term: 2,
      oldCustomerValue: false,
      calculationResult: 0,
      activeCredit: {
      },
      activeAmount: 0,
      activeTerm: 0,
      count: 0,
      error: false,
    };
  },
  computed: {
    ...mapState({
      language_id: (state) => state.language.language_id,
      isApplicationCredit: (state) => state.application.isApplicationCredit
    }),
    test() {
      let numEl = String(this.deposit.annual_rate_subtitle).replace(/[^\d]/g, '')
      let test = 0
      let test2 = Math.round((this.activeAmount * numEl) / 12 * (this.activeTerm / 100))
      test = Math.round(Number(this.activeAmount) + (test2 - (test2 * (12 / 100))))
      return test
    }
  },
  methods: {
    // For adjusting range slider colors
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
      show_sheduleDeposit: 'deposit/SHOW_SHEDULEDEPOSIT',
      set_deposit: 'deposit/SET_DEPOSIT',
      set_amount: 'deposit/SET_AMOUNT',
      set_period: 'deposit/SET_PERIOD'
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
    },
    showSheduleDeposit() {
      this.set_deposit(this.deposit)
      this.set_amount(this.activeAmount)
      this.set_period(this.activeTerm)
      this.show_sheduleDeposit(true)
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
    }
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
