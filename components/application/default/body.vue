<template>
  <div>
    <form
      @submit.prevent="example"
      enctype="multipart/form-data"
      class="flex flex-col gap-6 lg:gap-10 mt-10 mb-6 lg:mb-11"
    >
      <h1 class="font-bold">{{ active.name }}</h1>
      <Select
        v-if="active.title"
        :active="active.title"
        :list="list"
        @click="clickItem"
      />
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
        <!-- <ValidationProvider
          :rules="{ required: true}"
          v-slot="{ errors }"
          class="w-full sm:w-1/2 h-[70px] hidden"
        >
          <Input
            type="text"
            placeholder="Email*"
            v-model="product.email"
            :error="errors[0]"
          />
        </ValidationProvider> -->
        <ValidationProvider
          :rules="{ required: true}"
          v-slot="{ errors }"
          class="w-full sm:w-1/2 h-[70px]"
        >
          <Input
            type="text"
            placeholder="Насаб*"
            required
            v-model="product.surname"
            :error="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider
          :rules="{ required: true}"
          v-slot="{ errors }"
          class="w-full sm:w-1/2 h-[70px]"
        >
          <Input
            type="text"
            placeholder="Ном*"
            required
            v-model="product.name"
            :error="errors[0]"
          />
        </ValidationProvider>
      </div>
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
        <ValidationProvider
          :rules="{}"
          v-slot="{ errors }"
          class="w-full sm:w-1/2 h-[70px]"
        >
          <Input
            type="text"
            placeholder="Номи падар"
            required
            v-model="product.patronymic"
            :error="errors[0]"
          />
        </ValidationProvider>
        <Select
          :active="product.region.name"
          :list="regions"
          @click="(item) => (product.region = item)"
          class="w-full sm:w-1/2"
        />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div>
          <label
            class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
            for="file_input"
            >Паспорт</label
          >
          <input
            @change="onChangePassport"
            class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
            id="file_input"
            required
            type="file"
            name="file"
            accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
            for="file_input"
            >Рақами  РМА</label
          >
          <input
            @change="onChangeINN"
            class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            required
            accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
            name="file"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
            for="file_input"
            >Маълумотномаи музди маош</label
          >
          <input
            @change="onChangePay"
            class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            required
            accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
            name="file"
          />
        </div>
      </div>
      <ValidationProvider
        :rules="{ required: true, min: 9 }"
        v-slot="{ errors }"
        class="w-full h-[70px]"
      >
        <Input
          type="number"
          placeholder="Рақами телефон*"
          v-model="product.phone"
          :error="errors[0]"
        />
      </ValidationProvider>
      <div class="flex items-center gap-4 flex-wrap">
        <Button :disabled="disabledSave" class="w-fit" :primary="true" >
          Дархост фиристодан
        </Button>
        <p>
          Бо пахш кардани тугма, ман ба коркарди маълумот розӣ ҳастам
        </p>
      </div>
    </form>
    <!-- <Introduction /> -->
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ApplicationDefaultBodyComponent",
  data() {
    return {
      product: {
        passport:"",
        inn: "",
        pay: "",
        nameProduct: this.active,
        region: {
          name: "Минтақа*",
        },
        surname: null,
        name: null,
        patronymic: null,
        phone: null,
        card_type: 'VISA'
      },
      regions: [
        {
          id: 1,
          name: "ш. Душанбе",
        },
        {
          id: 2,
          name: "ш. Хуҷанд",
        },
        {
          id: 3,
          name: "ш. Хорӯғ",
        },
        {
          id: 4,
          name: "ш. Бохтар",
        },
        {
          id: 5,
          name: "ш. Кӯлоб",
        },
        {
          id: 6,
          name: "н. Данғара",
        },
        {
          id: 7,
          name: "н. Рашт",
        },
        {
          id: 8,
          name: "ш. Истаравшан",
        },
        {
          id: 9,
          name: "ш. Турсунзода",
        },
        {
          id: 10,
          name: "н. Шаҳритуз",
        },
        {
          id: 11,
          name: "н. Фархор",
        },
      ],
      disabledSave: false
    };
  },
  computed: {
    ...mapState({
      active: (state) => state.application.active,
      list: (state) => state.application.list,
    }),
  },
  methods: {

    onChangePassport(event) {
      this.product.passport = event.target.files[0]
    },
    onChangeINN() {
      this.product.inn = event.target.files[0]
    },
    onChangePay() {
      this.product.pay = event.target.files[0]
    },
    ...mapMutations({
      changeProduct: "application/changeProduct",
      changeApplication: "application/changeApplication",
      changeSuccess: "success/changeSuccess",
    }),
    clickItem(item) {
      this.changeProduct(item);
    },
    async example() {
      if(this.product.passport !== "" && this.product.name && this.product.inn && this.product.pay && this.product.phone && this.product.surname && this.product.patronymic){
      var formdata = new FormData();
      formdata.append("name",this.product.name);
      formdata.append("file1", this.product.passport);
      formdata.append("file2", this.product.inn);
      formdata.append("file3", this.product.pay);
      formdata.append("phone",this.product.phone );
      formdata.append("surname",this.product.surname );
      formdata.append("patronymic",this.product.patronymic );
      formdata.append("nameProduct", this.active.title ? this.active.title : this.active.name);
      if(!this.disabledSave) {
        this.disabledSave = true
        await this.$axios.post("https://webapi.ssb.tj/sendEmailContent/", formdata);
        // await this.$axios.post("http://127.0.0.1:8000/sendEmailContent",formdata);
        this.changeApplication(false), this.changeSuccess(true);
      }
      }else{
        this.disabledSave = false
        alert("Заполните все поля")
      }
    },
  },
  // mounted() {
  //   if(this.product.email = this.active.email == undefined){
  //     this.product.email = 'info@ssb.tj'
  //   }else{
  //     console.log(
  //       this.product.email = this.active.email
  //     );
  //   }
  // },
};
</script>
