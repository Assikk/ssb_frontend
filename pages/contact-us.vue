<template>
  <section>
    <Banner :banner="banner" />
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="my-20">
        <h2 class="font-semibold text-2xl-1 text-black-ssb text-center mb-4">
          {{ contactUs }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardContact
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
          />
        </div>
      </div>
    </div>
    <div class="py-10 bg-background">
      <div class="px-6 lg:px-0">
        <ApplicationContactUs />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "contactUs",
  data() {
    switch (localStorage.getItem("lang")) {
      case "ru":
        return {
          contactUs: 'Связь с банком',
          banner: {
            title:
              "Если у вас есть какие-либо вопросы, связанные с деятельностью Саноатсодиротбанка, пожалуйста, свяжитесь с нами.",
            description: "",
            image: "/image/ssb.webp",
          },
          contacts: [
            {
              id: 1,
              application: "В приложении SSB - Mobile в раздел",
              description:
                "Заходите в «Профиль» → «Связь с банком» → «Звонок в банк» и оставайтесь на связи!",
            },
            {
              id: 2,
              mobile:
                "Свяжитесь с нами по телефону +992 (44) 630 51 08 или по короткому номеру 8855!",
              description: "Активны внутренние и международные звонки.",
            },
            {
              id: 3,
              mobile: "Свяжитесь с нами по телефону +992 37 23 337 09!",
              description:
                "Стоимость звонков зависит от вашего мобильного оператора!",
            },
          ],
        };
        break;
      case "en":
        return {
          contactUs: 'Иртибот бо Бонк',
          banner: {
            title:
              "Вобаста ба фаъолияти Саноатсодиротбонк суол доред пас бо мо дар тамос бошед.",
            description: "",
            image: "/image/ssb.webp",
          },
          contacts: [
            {
              id: 1,
              application: "Дар замимаи ССБ - Мобайл ба қисмати",
              description:
                "«Профиль» → «Связь с банком» → «Звонок в банк» даромада дар тамос бошед!",
            },
            {
              id: 2,
              mobile:
                "Ба рақами +992 (44) 630 51 08  ё рақами кӯтоҳи 8855 бо мо дар тамос бошед!",
              description: "Зангҳо дар дохил ва хориҷи кишвар фаъол мебошанд.",
            },
            {
              id: 3,
              mobile: "Ба рақами +992 37 23 337 09  бо мо дар тамос бошед!",
              description:
                "Пардохти ҳаққи зангҳо аз оператори мобилии Шумо вобаста аст!",
            },
          ],
        };
        break;
      default:
        return {
          contactUs: 'Иртибот бо Бонк',
          banner: {
            title:
              "Вобаста ба фаъолияти Саноатсодиротбонк суол доред пас бо мо дар тамос бошед.",
            description: "",
            image: "/image/ssb.webp",
          },
          contacts: [
            {
              id: 1,
              application: "Дар замимаи ССБ - Мобайл ба қисмати",
              description:
                "«Профиль» → «Связь с банком» → «Звонок в банк» даромада дар тамос бошед!",
            },
            {
              id: 2,
              mobile:
                "Ба рақами +992 (44) 630 51 08  ё рақами кӯтоҳи 8855 бо мо дар тамос бошед!",
              description: "Зангҳо дар дохил ва хориҷи кишвар фаъол мебошанд.",
            },
            {
              id: 3,
              mobile: "Ба рақами +992 37 23 337 09  бо мо дар тамос бошед!",
              description:
                "Пардохти ҳаққи зангҳо аз оператори мобилии Шумо вобаста аст!",
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
