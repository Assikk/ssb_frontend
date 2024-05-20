<template>
  <section>
    <Banner :banner="banner" :button="banner.buttonOpenApplication.text" type="openApplication" />
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="mt-20">
        <Rule v-for="rule in rules" :key="rule.id" :rule="rule" class="mb-8" />
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <Document
            v-for="document in documents"
            :key="document.id"
            :document="document"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { locale } from "moment";
export default {
  name: "SafeOperation",
  data() {
    switch (localStorage.getItem("lang")) {
      case "ru":
        return {
          banner: {
            id: 1,
            type: "cards",
            title:
              "Саноатсодиротбанк предлагает Вам свои сейфовые ячейки",
            description: "Высочайший уровень безопасности для ваших ценностей.",
            image: "/image/safe.png",
            buttonOpenApplication: {
              text: "Отправить запрос",
            },
          },
          rules: [
            {
              id: 1,
              title: "",
              description:
                "Саноатсодиротбанк предлагает Вам свои сейфовые ячейки.<br>Сейфы Саноатсодиротбанка – это надежное и надежное место для вас. Выгодная возможность по доступной цене. ",
            },
          ],
          documents: [
            {
              id: 1,
              name: "Прайс-лист сейфовых ячеек ГУП БССТ 'Саноатодиротбанк'",
              size: "",
              link: "/documents/safe-operation.pdf",
              type: "pdf",
            },
          ],
        };
        break;
      case "en":
        return {
          banner: {
            id: 1,
            type: "cards",
            title:
              "Sanoatsodirotbank offers you its safe deposit boxes",
            description: "The highest level of security for your valuables.",
            image: "/image/safe.png",
            buttonOpenApplication: {
              text: "Submit an inquiry",
            },
          },
          rules: [
            {
              id: 1,
              title: "",
              description:
                "Sanoatsodirotbank offers you its safe deposit boxes.<br>Sanoatsodirotbank safes are a safe and secure place for you. A great opportunity at an affordable price.",
            },
          ],
          documents: [
            {
              id: 1,
              name: "Price list of safe deposit boxes SUE BSST 'Sanoatodirotbank'",
              size: "",
              link: "/documents/safe-operation.pdf",
              type: "pdf",
            },
          ],
        };
        break;
      default:
        return {
          banner: {
            id: 1,
            type: "cards",
            title:
              "Саноатсодиротбонк барои Шумо сандуқчаҳои сейфии худро пешниҳод менамояд",
            description: "Баландтарин дараҷаи амният барои арзишҳои Шумо",
            image: "/image/safe.png",
            buttonOpenApplication: {
              text: "Дархост фиристодан",
            },
          },
          rules: [
            {
              id: 1,
              title: "",
              description:
                "Саноатсодиротбонк барои Шумо сандуқчаҳои сейфии худро пешниҳод менамояд.<br>Сандуқчаҳои сейфии Саноатсодиротбонк макони амну безарар ва бо кафолати баланд барои Шумо пешниҳод мегарданд. Имконияти мусоид бо арзиши дастрас.<br> Баландтарин дараҷаи амният барои арзишҳои Шумо. ",
            },
          ],
          documents: [
            {
              id: 1,
              name: "Нархномаи сандуқчаҳои сейфии КВД БССТ “Саноатсодиротбонк”",
              size: "",
              link: "/documents/safe-operation.pdf",
              type: "pdf",
            },
            
          ],
        };
        break;
    }
  },

  mounted() {
    console.log(localStorage.getItem("lang"));
  },
};
</script>
