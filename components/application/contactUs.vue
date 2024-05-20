<template>
  <div class="flex flex-col gap-6 max-w-[737px] mx-auto">
    <Titles> {{ mutualContact }} </Titles>
    <div class="flex flex-col sm:flex-row items-center gap-6">
      <Input type="text" :placeholder="$t('familyName')" v-model="contact.surname" />
      <Input type="text" :placeholder="$t('name')" v-model="contact.name" />
    </div>
    <Input type="text" :placeholder="$t('phone')" v-model="contact.phone" />
    <Input
      type="text"
      :placeholder="$t('email')"
      v-model="contact.email"
    />
    <TextArea :placeholder="$t('information')" v-model="contact.comment" />
    <Button :primary="true" @click="changeSuccess(true)">
      {{ $t("sendRequest") }}
    </Button>
    <Introduction class="text-center" />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "ContactUsForm",
  data() {
    switch (localStorage.getItem("lang")) {
      case "ru":
        return {
          mutualContact: "Взаимное общение",
          contact: {
            surname: "",
            name: "",
            phone: "",
            email: "",
            comment: "",
          },
        };
        break;
      case "en":
        return {
          mutualContact: "Алоқаи мутақобила",
          contact: {
            surname: "",
            name: "",
            phone: "",
            email: "",
            comment: "",
          },
        };
        break;
      default:
        return {
          mutualContact: "Алоқаи мутақобила",
          contact: {
            surname: "",
            name: "",
            phone: "",
            email: "",
            comment: "",
          },
        };
        break;
    }
  },
  methods: {
    ...mapMutations({
      changeSuccess: "success/changeSuccess",
    }),
  },
};
</script>
