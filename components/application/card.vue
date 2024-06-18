<template>
  <div class="form fixed top-0 left-0 w-full h-full z-20 visible opacity-100">
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="closeModal"
    ></div>
    <div
      class="h-[90%] overflow-y-auto w-4/5 lg:w-1/2 rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible bg-background py-6 xl:py-10 px-6 xl:px-20 rounded-xl flex flex-col gap-6"
    >
      <h1 class="font-medium text-2xl text-center">Заявка на карту</h1>
      <div class="flex flex-col gap-2">
        <p>Выберите карту</p>
        <Select
          :active="form.nameProduct"
          :list="cards"
          @click="(item) => (form.nameProduct = item.title)"
          :error="$v.form.nameProduct.$dirty && !$v.form.nameProduct.required"
          :errorRequired="
            $v.form.nameProduct.$dirty && !$v.form.nameProduct.required
          "
        />
      </div>
      <Input label="Срок карты" id="CardExpireDate" v-model="form.card_expire_date"/>
      <div class="grid grid-cols-2 gap-4">
        <Input
          label="Фамилия"
          id="surname"
          v-model="form.surname"
          placeholder="Введите фамилию"
          :error="$v.form.surname.$dirty && !$v.form.surname.required"
          :errorRequired="$v.form.surname.$dirty && !$v.form.surname.required"
        />
        <Input
          label="Имя"
          id="name"
          v-model="form.name"
          placeholder="Введите имя"
          :error="$v.form.name.$dirty && !$v.form.name.required"
          :errorRequired="$v.form.name.$dirty && !$v.form.name.required"
        />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <Input
          label="Отчество"
          id="patronymic"
          v-model="form.patronymic"
          placeholder="Введите отчество"
          :error="$v.form.patronymic.$dirty && !$v.form.patronymic.required"
          :errorRequired="
            $v.form.patronymic.$dirty && !$v.form.patronymic.required
          "
        />
        <div class="flex flex-col gap-2">
          <p>Город</p>
          <Select
            :active="form.branch"
            :list="regions"
            @click="(item) => (form.branch = item.name)"
            :error="$v.form.branch.$dirty && !$v.form.branch.required"
            :errorRequired="$v.form.branch.$dirty && !$v.form.branch.required"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            class="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-300"
            for="file_input"
            >Паспорт</label
          >
          <input
            @change="(event) => (form.file1 = event.target.files[0])"
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
            >Рақами РМА</label
          >
          <input
            @change="(event) => (form.file2 = event.target.files[0])"
            class="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-red-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            required
            accept="image/png, image/jpeg, image/jpg, application/pdf, .doc, .docx, '.xls, .xlsx"
            name="file"
          />
        </div>
      </div>
      <Input
        label="Номер телефона"
        id="phoneNumber"
        v-model="form.phone"
        :error="$v.form.phone.$dirty && !$v.form.phone.required"
        :errorRequired="$v.form.phone.$dirty && !$v.form.phone.required"
      />
      <div class="flex items-center gap-4 flex-wrap">
        <Button
          :disabled="disabledSend"
          class="w-fit"
          :primary="true"
          @click="sendApplication"
        >
          Дархост фиристодан
        </Button>
        <p>Бо пахш кардани тугма, ман ба коркарди маълумот розӣ ҳастам</p>
      </div>
    </div>
  </div>
</template>
<script>
import Input from "@/components/input/primary.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Application",
  components: {
    Input,
  },
  computed: {
    ...mapState({
      cards: (state) => state.api.cards,
      language_id: state => state.language.language_id,
    }),
  },
  data() {
    return {
      form: {
        nameProduct: "",
        surname: "",
        name: "",
        patronymic: "",
        branch: "",
        phone: "",
        file1: "",
        file2: "",
        type: "card",
        card_expire_date: "",
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
      disabledSend: false,
    };
  },
  validations: {
    form: {
      surname: { required },
      name: { required },
      patronymic: { required },
      branch: { required },
      phone: { required },
      nameProduct: {required},
    },
  },
  methods: {
    ...mapMutations({
      change_state: "application/change_state",
      loading_alert: "alert/LOADING_ALERT",
    }),
    ...mapActions({
      success_alert: "alert/success_alert",
      error_alert: "alert/error_alert",
      get_page: 'api/get_page'
    }),
    closeModal() {
      let payload = {
        key: "isApplicationCard",
        body: false,
      };
      this.change_state(payload);
    },
    async sendApplication() {
      let formData = new FormData()
      for(let i in this.form) {
        formData.append(i, this.form[i])
      }
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      if (!this.disabledSend) {
        this.disabledSend = true;
        this.loading_alert();
        try {
          await this.$axios.post(
            "https://webapi.ssb.tj/sendEmailContent/",
            formData
          );
          this.success_alert();
          this.closeModal();
        } catch (err) {
          this.disabledSend = false;
          this.error_alert("Что-то пошло не так :(");
        }
      }
    },
    get_cards() {
      let payload = {
        request: `Card/?language_id=${this.language_id}`,
        key: "cards",
        body: [],
      };
      this.get_page(payload);
    },
  },
  mounted() {
    this.get_cards();
  },
};
</script>
<style scoped>
.form {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
