<template>
  <div class="flex flex-col lg:flex-row gap-6">
    <div class="w-full sm:w-1/2">
      <div class="w-full overflow-x-auto md:w-auto">
        <ul class="flex justify-between md:justify-start">
          <li
            @click="
              active = tab.id;
              changeTabData(tab.id);
            "
            v-for="tab in $t('currency.tabs')"
            :key="tab.id"
            class="min-w-max w-full md:w-fit px-3 pb-3 border-b cursor-pointer"
            :class="
              active === tab.id
                ? 'border-primary text-primary'
                : 'text-black hover:text-primary border-gray hover:border-primary'
            "
          >
            <CurrencyTextSm-gray class="!text-inherit">
              {{ tab.text }}
            </CurrencyTextSm-gray>
          </li>
        </ul>
      </div>

      <div class="w-full bg-background rounded-xl mt-2 p-4 sm:p-10 grid grid-cols-3 sm:grid-cols-4 justify-items-center gap-[19px]">
        <div class="main_block">
          <div class="block_item_one">
            <div class="opacity-0 w-6 sm:w-8 h-6 sm:h-8"></div>
            <CurrencyTextSmDarkGray> {{$t('currency.currency')}} </CurrencyTextSmDarkGray>
          </div>
          <div class="block_item_one">
            <img
              src="/image/flags/america.svg"
              alt="America Flag Icon"
              class="w-6 sm:w-8 h-6 sm:h-8"
            />
            <div>
              <CurrencyTitleDark class="mb-1"> USD </CurrencyTitleDark>
              <CurrencyTextSmDarkGray> Долл. США </CurrencyTextSmDarkGray>
            </div>
          </div>
          <div class="block_item_one">
            <img
              src="/image/flags/europe.svg"
              alt="Europe Flag Icon"
              class="w-6 sm:w-8 h-6 sm:h-8"
            />
            <div>
              <CurrencyTitleDark class="mb-1"> EUR </CurrencyTitleDark>
              <CurrencyTextSmDarkGray> Евро </CurrencyTextSmDarkGray>
            </div>
          </div>
          <div class="block_item_one">
            <img
              src="/image/flags/russia.svg"
              alt="Russia Flag Icon"
              class="w-6 sm:w-8 h-6 sm:h-8"
            />
            <div>
              <CurrencyTitleDark class="mb-1"> RUB </CurrencyTitleDark>
              <CurrencyTextSmDarkGray> Росс. Рубль </CurrencyTextSmDarkGray>
            </div>
          </div>
        </div>
        <div class="hidden sm:flex flex-col gap-[19px] w-max">
          <CurrencyTextSmDarkGray class="title"> {{$t('currency.bmt')}} </CurrencyTextSmDarkGray>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              {{ NBTrates.USD }}
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/green.svg"
                alt="Green Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              {{ NBTrates.EUR }}
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/red.svg"
                alt="Red Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              {{ NBTrates.RUB }}
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/red.svg"
                alt="Red Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
        </div>
        <div class="main_block">
          <CurrencyTextSmDarkGray class="title">
            {{$t('currency.purchase')}}
          </CurrencyTextSmDarkGray>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              <span ref="USD_buy">{{ SSBRealPersoncurrency.USD_buy }}</span>
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/green.svg"
                alt="Green Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              <span ref="EUR_buy">{{ SSBRealPersoncurrency.EUR_buy }}</span>
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/red.svg"
                alt="Red Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              <span ref="RUB_buy">{{ SSBRealPersoncurrency.RUB_buy }}</span>
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/red.svg"
                alt="Red Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
        </div>
        <div class="main_block">
          <CurrencyTextSmDarkGray class="title"> {{$t('currency.sale')}} </CurrencyTextSmDarkGray>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              <span ref="USD_sale">{{ SSBRealPersoncurrency.USD_sell }}</span>
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/green.svg"
                alt="Green Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              <span ref="EUR_sale">{{ SSBRealPersoncurrency.EUR_sell }}</span>
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/red.svg"
                alt="Red Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
          <div class="block_item_second">
            <CurrencyTitleDark class="w-4/5">
              <span ref="RUB_sale">{{ SSBRealPersoncurrency.RUB_sell }}</span>
            </CurrencyTitleDark>
            <div class="w-1/5">
              <img
                src="/image/arrows/red.svg"
                alt="Red Arrow"
                class="min-w-[1rem] min-h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-1/2 bg-background flex flex-col gap-6 rounded-xl p-4 sm:p-10">
      <div class="flex flex-col gap-2">
        <CurrencyTitleLight> {{$t('currency.sale')}} </CurrencyTitleLight>
        <div class="relative mt-1 rounded-md shadow-sm">
          <input
            type="number"
            name="price"
            @keyup="saleCurrencyChange()"
            v-model="saleCurrency"
            id="price"
            class="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 h-10 sm:text-sm"
            placeholder="0.00"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">Currency</label>
            <select
              id="currency"
              name="currency"
              v-model="saleCurrencyType"
              @change="saleCurrencyTypeChange()"
              class="h-full rounded-md border-transparent bg-transparent mx-5 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="TJS">TJS</option>
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>
        <span v-if="loading">⏱️</span>
      </div>

      <div class="flex flex-col gap-2">
        <CurrencyTitleLight> {{$t('currency.purchase')}} </CurrencyTitleLight>
        <div class="relative mt-1 rounded-md shadow-sm">
          <input
            type="number"
            value="2222"
            name="price"
            @keyup="buyCurrencyChange()"
            v-model="buyCurrency"
            id="price"
            class="block w-full rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 focus:ring-indigo-500 h-10 sm:text-sm"
            placeholder="0.00"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">Currency</label>
            <select
              v-model="buyCurrencyType"
              @change="buyCurrencyTypeChange()"
              id="currency"
              name="currency"
              class="h-full rounded-md border-transparent bg-transparent mx-5 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option>
              <option value="TJS">TJS</option>
            </select>
          </div>
        </div>
        <span v-if="loading">⏱️</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CurrencyBodyInfoComponent",

  data() {
    return {
      // Calculator Data
      loading: false,
      saleCurrency: "",
      buyCurrencyType: "USD",
      saleCurrencyType: "TJS",
      buyCurrency: "",
      isActive: false,
      rates: [],

      // Rate Data
      NBTrates: [],
      SSBRealPersoncurrency: [],
      SSBTransfercurrency: [],
      posts: [],

      active: 1,
    };
  },

  methods: {
    async changeTabData(id) {
      (this.saleCurrency = ""), (this.buyCurrency = "");
      if (id == 3) {
        //  Getting SSBTransfercurrency data from API
        this.SSBRealPersoncurrency = []
        await axios
          .get("https://webapi.ssb.tj/SSBTransfercurrency")
          .then((response) => (this.SSBRealPersoncurrency = response.data));
      }
      if (id == 1) {
        //  Getting SSBTransfercurrency data from API
        this.SSBRealPersoncurrency = []
        await axios
          .get("https://webapi.ssb.tj/SSBRealPersoncurrency")
          .then((response) => (this.SSBRealPersoncurrency = response.data));
      }
      if (id == 2) {
        //  Getting SSBTransfercurrency data from API
        this.SSBRealPersoncurrency = []
        await axios
          .get("https://webapi.ssb.tj/SSBLegalPersoncurrency")
          .then((response) => (this.SSBRealPersoncurrency = response.data));
      }
      if (id == 4) {
        //  Getting SSBTransfercurrency data from API
        this.SSBRealPersoncurrency = []
        await axios
          .get("https://webapi.ssb.tj/SSBCardcurrency")
          .then((response) => (this.SSBRealPersoncurrency = response.data));
      }
    },
    buyCurrencyTypeChange() {
      (this.saleCurrency = ""), (this.buyCurrency = "");
    },
    saleCurrencyTypeChange() {
      (this.saleCurrency = ""), (this.buyCurrency = "");
    },
    saleCurrencyChange() {
      this.USD_RATE = this.$refs.USD_buy.textContent;
      this.EUR_RATE = this.$refs.EUR_buy.textContent;
      this.RUB_RATE = this.$refs.RUB_buy.textContent;

      // Sale currecnt TJS
      if (this.buyCurrencyType == "USD" & this.saleCurrencyType == "TJS") {
        this.buyCurrency = Math.round((this.saleCurrency / this.USD_RATE)*100)/100
      }
      if (this.buyCurrencyType == "RUB" & this.saleCurrencyType == "TJS") {
        this.buyCurrency = Math.round((this.saleCurrency / this.RUB_RATE)*100)/100
      }
      if (this.buyCurrencyType == "EUR" & this.saleCurrencyType == "TJS") {
        this.buyCurrency = Math.round((this.saleCurrency / this.EUR_RATE)*100)/100
      }

      // Sale currecnt USD
      if (this.buyCurrencyType == "TJS" & this.saleCurrencyType == "USD") {
        this.buyCurrency = (this.$refs.USD_buy.textContent * this.saleCurrency).toFixed(4);
      }
      if (this.buyCurrencyType == "RUB" & this.saleCurrencyType == "USD") {
        this.buyCurrency = (this.saleCurrency * this.$refs.USD_buy.textContent / this.$refs.RUB_buy.textContent).toFixed(4);
      }
      if (this.buyCurrencyType == "EUR" & this.saleCurrencyType == "USD") {
        this.buyCurrency = ((Number(this.$refs.USD_buy.textContent) / Number(this.$refs.EUR_buy.textContent)) * this.saleCurrency).toFixed(4);
      }

      // Sale currecnt EUR
      if (this.buyCurrencyType == "TJS" & this.saleCurrencyType == "EUR") {
        this.buyCurrency = (this.$refs.EUR_buy.textContent * this.saleCurrency).toFixed(4);
      }
      if (this.buyCurrencyType == "RUB" & this.saleCurrencyType == "EUR") {
        this.buyCurrency = (this.saleCurrency * this.$refs.EUR_buy.textContent / this.$refs.RUB_buy.textContent).toFixed(4);
      }
      if (this.buyCurrencyType == "USD" & this.saleCurrencyType == "EUR") {
        this.buyCurrency = ((Number(this.$refs.EUR_buy.textContent)) / Number(this.$refs.USD_buy.textContent) * this.saleCurrency).toFixed(4);
      }

       // Sale currecnt RUB
       if (this.buyCurrencyType == "TJS" & this.saleCurrencyType == "RUB") {
        this.buyCurrency = (this.$refs.RUB_buy.textContent * this.saleCurrency).toFixed(4);
      }
      if (this.buyCurrencyType == "EUR" & this.saleCurrencyType == "RUB") {
        this.buyCurrency = ((Number(this.$refs.RUB_buy.textContent)) / Number(this.$refs.EUR_buy.textContent) * this.saleCurrency).toFixed(4);
      }
      if (this.buyCurrencyType == "USD" & this.saleCurrencyType == "RUB") {
        this.buyCurrency = ((Number(this.$refs.RUB_buy.textContent)) / Number(this.$refs.USD_buy.textContent) * this.saleCurrency).toFixed(4);
      }

      // Same currencies
      if (this.buyCurrencyType == this.saleCurrencyType) {
        this.buyCurrency = this.saleCurrency
      }
    },
    buyCurrencyChange() {
      this.USD_RATE = this.$refs.USD_sale.textContent;
      this.EUR_RATE = this.$refs.EUR_sale.textContent;
      this.RUB_RATE = this.$refs.RUB_sale.textContent;

      // Sale currecnt TJS
      if (this.saleCurrencyType == "USD" & this.buyCurrencyType == "TJS") {
        this.saleCurrency = Math.round((this.buyCurrency / this.USD_RATE)*100)/100
      }
      if (this.saleCurrencyType == "RUB" & this.buyCurrencyType == "TJS") {
        this.saleCurrency = Math.round((this.buyCurrency / this.RUB_RATE)*100)/100
      }
      if (this.saleCurrencyType == "EUR" & this.buyCurrencyType == "TJS") {
        this.saleCurrency = Math.round((this.buyCurrency / this.EUR_RATE)*100)/100
      }

      // Sale currecnt USD
      if (this.saleCurrencyType == "TJS" & this.buyCurrencyType == "USD") {
        this.saleCurrency = (this.$refs.USD_sale.textContent * this.buyCurrency).toFixed(4);
      }
      if (this.saleCurrencyType == "RUB" & this.buyCurrencyType == "USD") {
        this.saleCurrency = (this.buyCurrency * this.$refs.USD_sale.textContent / this.$refs.RUB_sale.textContent).toFixed(4);
      }
      if (this.saleCurrencyType == "EUR" & this.buyCurrencyType == "USD") {
        this.saleCurrency = ((Number(this.$refs.USD_sale.textContent) / Number(this.$refs.EUR_sale.textContent)) * this.buyCurrency).toFixed(4);
      }

      // Sale currecnt EUR
      if (this.saleCurrencyType == "TJS" & this.buyCurrencyType == "EUR") {
        this.saleCurrency = (this.$refs.EUR_sale.textContent * this.buyCurrency).toFixed(4);
      }
      if (this.saleCurrencyType == "RUB" & this.buyCurrencyType == "EUR") {
        this.saleCurrency = (this.buyCurrency * this.$refs.EUR_sale.textContent / this.$refs.RUB_sale.textContent).toFixed(4);
      }
      if (this.saleCurrencyType == "USD" & this.buyCurrencyType == "EUR") {
        this.saleCurrency = ((Number(this.$refs.EUR_sale.textContent)) / Number(this.$refs.USD_sale.textContent) * this.buyCurrency).toFixed(4);
      }

       // Sale currecnt RUB
       if (this.saleCurrencyType == "TJS" & this.buyCurrencyType == "RUB") {
        this.saleCurrency = (this.$refs.RUB_sale.textContent * this.buyCurrency).toFixed(4);
      }
      if (this.saleCurrencyType == "EUR" & this.buyCurrencyType == "RUB") {
        this.saleCurrency = ((Number(this.$refs.RUB_sale.textContent)) / Number(this.$refs.EUR_sale.textContent) * this.buyCurrency).toFixed(4);
      }
      if (this.saleCurrencyType == "USD" & this.buyCurrencyType == "RUB") {
        this.saleCurrency = ((Number(this.$refs.RUB_sale.textContent)) / Number(this.$refs.USD_sale.textContent) * this.buyCurrency).toFixed(4);
      }

      // Same currencies
      if (this.buyCurrencyType == this.saleCurrencyType) {
        this.buyCurrency = this.saleCurrency
      }
    },
  },

  mounted() {
    //  Getting NBT data from API
    axios
      .get("https://webapi.ssb.tj/currency")
      .then((response) => (this.NBTrates = response.data));

    //  Getting SSBRealPersoncurrency data from API
    axios
      .get("https://webapi.ssb.tj/SSBRealPersoncurrency")
      .then((response) => (this.SSBRealPersoncurrency = response.data));
  },
};
</script>

<style lang="postcss" scoped>
.main_block {
  @apply flex flex-col gap-[19px] w-max;
}

.block_item_one {
  @apply flex items-center gap-3 sm:gap-4;
}

.block_item_second {
  @apply flex items-center gap-1 h-[37px] sm:h-[44px];
}

.title {
  @apply flex items-center h-6 sm:h-8;
}
</style>
