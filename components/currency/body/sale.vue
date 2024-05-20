<template>
  <div class="w-full bg-background flex flex-col gap-6 rounded-xl p-4 sm:p-10">
    <div class="flex flex-col gap-2">
      <CurrencyTitleLight> Фурӯш</CurrencyTitleLight>
      <input
        ref="rameen"
        value="8989"
        type="text"
        class="text-base-1 text-black outline-0 h-10 rounded-md p-2"
        @keyup="tjsSale()"
        v-model="saleInput"
        placeholder="TJS"
      />
    </div>

    <div class="flex flex-col gap-2">
      <CurrencyTitleLight> Харидорӣ </CurrencyTitleLight>
      <div class="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
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
            class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <span v-if="loading">⏱️</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CurrencySaleComponent",
  data() {
    return {
      loading: false,
      saleInput: "",
      buyCurrencyType: "USD",
      buyCurrency: "",
      isActive: false,
      rates: [],
      currencyListTop: [
        {
          id: 1,
          text: "TJS",
        },
      ],
    };
  },

  methods: {
    buyCurrencyTypeChange(){
      this.saleInput = '',
      this.buyCurrency = ''
    },
    tjsSale() {
      this.loading = true;

      if (this.buyCurrencyType == "USD") {
        //  Getting NBT data from API
        axios
          .get("https://webapi.ssb.tj/currency")
          .then(
            (response) => (
              this.NBTrates = response.data.USD,
              this.buyCurrency = this.saleInput / this.NBTrates,
              this.loading = false
              ),
          );
      }
      if (this.buyCurrencyType == "RUB") {
        //  Getting NBT data from API
        axios
          .get("https://webapi.ssb.tj/currency")
          .then((response) => (
              this.NBTrates = response.data.RUB,
              this.buyCurrency = this.saleInput / this.NBTrates,
              this.loading = false
          ));
      }
      if (this.buyCurrencyType == "EUR") {
        //  Getting NBT data from API
        axios
          .get("https://webapi.ssb.tj/currency")
          .then((response) => (
            this.NBTrates = response.data.EUR,
            this.buyCurrency = this.saleInput / this.NBTrates,
            this.loading = false
          ));
      }
    },
  },

  mounted() {
    axios
      .get("https://webapi.ssb.tj/")
      .then((response) => (this.rates = response.data));
  },
};
</script>
