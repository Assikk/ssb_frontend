<template>
  <section class="mt-6">
    <div
      class="flex flex-col gap-10"
      v-for="block in blocks"
      :key="block.id"
      :class="block.id % 2 === 1 ? 'bg-background' : 'bg-transparent'"
    >
      <div class="main__container px-6 xl:px-0">
        <div class="py-10">
          <SubTitle class="mb-4">
            {{ block.title }}
          </SubTitle>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-6"
          >
            <Document
              v-for="document in block.documents.slice().reverse()"
              :key="document.id"
              :document="document"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DocumentsPage",
  data() {
    switch (localStorage.getItem("lang")) {
      case "ru":
      return {
      blocks: [
        {
          id: 1,
          title: "Финансовые отчеты",
          documents: [
            {
              id: 1,
              name: "Финансовый отчет на 31.12.2020",
              size: "",
              link: "/documents/1-balance-12-2020.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Финансовый отчет на 31.03.2021",
              size: "",
              link: "/documents/1-balance-03-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Финансовый отчет на 30.06.2021",
              size: "",
              link: "/documents/1-balance-06-2021.pdf",
              type: "pdf",
            },
            {
              id: 4,
              name: "Финансовый отчет на 30.09.2021",
              size: "",
              link: "/documents/1-balance-09-2021.pdf",
              type: "pdf",
            },
            {
              id: 5,
              name: "Финансовый отчет на 31.12.2021",
              size: "",
              link: "/documents/1-balance-12-2021.pdf",
              type: "pdf",
            },
            {
              id: 6,
              name: "Финансовый отчет на 31.03.2022",
              size: "",
              link: "/documents/1-balance-03-2022.pdf",
              type: "pdf",
            },
            {
              id: 7,
              name: "Финансовый отчет на 30.06.2022",
              size: "",
              link: "/documents/1-balance-06-2022.pdf",
              type: "pdf",
            },
            {
              id: 8,
              name: "Финансовый отчет на 30.09.2022",
              size: "",
              link: "/documents/1-balance-09-2022.pdf",
              type: "pdf",
            },
            {
              id: 9,
              name: "Финансовый отчет на 31.12.2022",
              size: "",
              link: "/documents/1-balance-12-2022.pdf",
              type: "pdf",
            },
            {
              id: 10,
              name: "Баланс 31032023",
              size: "",
              link: "/documents/Баланс_310323(ru).pdf",
              type: "pdf",
            },
            {
              id: 11,
              name: "Баланс 30062023",
              size: "",
              link: "/documents/Баланс_30062023.pdf",
              type: "pdf",
            },
            {
              id: 12,
              name: "Баланс 30092023",
              size: "",
              link: "/documents/Баланс_30092023(ru).pdf",
              type: "pdf",
            },
            {
              id: 13,
              name: "Баланс 31122023",
              size: "",
              link: "/documents/Баланс_31122023.pdf",
              type: "pdf",
            },
            {
              id: 14,
              name: "Баланс 31032024",
              size: "",
              link: "/documents/Баланс_31032024.pdf",
              type: "pdf",
            },
          ],
        },
        {
          id: 2,
          title: "Аудиторский отчет",
          documents: [
            {
              id: 1,
              name: "Заключение независимого аудитора в 2020 году",
              size: "",
              link: "/documents/3-audit-2020.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Заключение независимого аудитора в 2021 году",
              size: "",
              link: "/documents/3-audit-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Финансовые отчеты внешнего аудита 2022",
              size: "",
              link: "/documents/Финансовые_отчеты_внешнего_аудита_2022.pdf",
              type: "pdf",
            },
          ],
        },
        {
          id: 3,
          title: "Приемлемые критерии",
          documents: [
            {
              id: 1,
              name: "Приемлемые тарифы на 31.03.2021",
              size: "",
              link: "/documents/2-standards-03-2021.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Приемлемые тарифы на 30.06.2021",
              size: "",
              link: "/documents/2-standards-06-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Приемлемые тарифы на 30.09.2021",
              size: "",
              link: "/documents/2-standards-09-2021.pdf",
              type: "pdf",
            },
            {
              id: 4,
              name: "Приемлемые тарифы на 31.12.2021",
              size: "",
              link: "/documents/2-standards-12-2021.pdf",
              type: "pdf",
            },
            {
              id: 5,
              name: "Приемлемые тарифы на 31.03.2022",
              size: "",
              link: "/documents/2-standards-03-2022.pdf",
              type: "pdf",
            },
            {
              id: 6,
              name: "Приемлемые тарифы на 30.06.2022",
              size: "",
              link: "/documents/2-standards-06-2022.pdf",
              type: "pdf",
            },
            {
              id: 7,
              name: "Приемлемые тарифы на 30.09.2022",
              size: "",
              link: "/documents/2-standards-09-2022.pdf",
              type: "pdf",
            },
            {
              id: 8,
              name: "Приемлемые тарифы на 30.12.2022",
              size: "",
              link: "/documents/2-standards-12-2022.pdf",
              type: "pdf",
            },
          ],
        },
      ],
    };
        break;
      case "en":
      return {
      blocks: [
        {
          id: 1,
          title: "Financial statements",
          documents: [
            {
              id: 1,
              name: "Financial report as of 31.12.2020",
              size: "",
              link: "/documents/1-balance-12-2020.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Financial report as of 31.03.2021",
              size: "",
              link: "/documents/1-balance-03-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Financial report as of 30.06.2021",
              size: "",
              link: "/documents/1-balance-06-2021.pdf",
              type: "pdf",
            },
            {
              id: 4,
              name: "Financial report as of 30.09.2021",
              size: "",
              link: "/documents/1-balance-09-2021.pdf",
              type: "pdf",
            },
            {
              id: 5,
              name: "Financial report as of 31.12.2021",
              size: "",
              link: "/documents/1-balance-12-2021.pdf",
              type: "pdf",
            },
            {
              id: 6,
              name: "Financial report as of 31.03.2022",
              size: "",
              link: "/documents/1-balance-03-2022.pdf",
              type: "pdf",
            },
            {
              id: 7,
              name: "Financial report as of 30.06.2022",
              size: "",
              link: "/documents/1-balance-06-2022.pdf",
              type: "pdf",
            },
            {
              id: 8,
              name: "Financial report as of 30.09.2022",
              size: "",
              link: "/documents/1-balance-09-2022.pdf",
              type: "pdf",
            },
            {
              id: 9,
              name: "Financial report as of 31.12.2022",
              size: "",
              link: "/documents/1-balance-12-2022.pdf",
              type: "pdf",
            },
            {
              id: 10,
              name: "Balance 31032023",
              size: "",
              link: "/documents/Баланс_310323(en).pdf",
              type: "pdf",
            },
            {
              id: 11,
              name: "Balance 30062023",
              size: "",
              link: "/documents/Balance_30062023.pdf",
              type: "pdf",
            },
            {
              id: 12,
              name: "Balance 30092023",
              size: "",
              link: "/documents/Balance_30092023(en).pdf",
              type: "pdf",
            },
            {
              id: 13,
              name: "Balance 31122023",
              size: "",
              link: "/documents/Balance_31122023.pdf",
              type: "pdf",
            },
            {
              id: 14,
              name: "Financial report as of 31.03.2024",
              size: "",
              link: "/documents/Balance_31032024.pdf",
              type: "pdf",
            },
          ],
        },
        {
          id: 2,
          title: "Audit report",
          documents: [
            {
              id: 1,
              name: "Conclusion of the independent auditor in 2020",
              size: "",
              link: "/documents/3-audit-2020.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Conclusion of the independent auditor in 2021",
              size: "",
              link: "/documents/3-audit-2021.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "External audit financial statements 2022",
              size: "",
              link: "/documents/External audit financial statements 2022.pdf",
              type: "pdf",
            },
          ],
        },
        {
          id: 3,
          title: "Acceptable criteria",
          documents: [
            {
              id: 1,
              name: "Acceptable rates as of 31.03.2021",
              size: "",
              link: "/documents/2-standards-03-2021.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Acceptable rates as of 30.06.2021",
              size: "",
              link: "/documents/2-standards-06-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Acceptable rates as of 30.09.2021",
              size: "",
              link: "/documents/2-standards-09-2021.pdf",
              type: "pdf",
            },
            {
              id: 4,
              name: "Acceptable rates as of 31.12.2021",
              size: "",
              link: "/documents/2-standards-12-2021.pdf",
              type: "pdf",
            },
            {
              id: 5,
              name: "Acceptable rates as of 31.03.2022",
              size: "",
              link: "/documents/2-standards-03-2022.pdf",
              type: "pdf",
            },
            {
              id: 6,
              name: "Acceptable rates as of 30.06.2022",
              size: "",
              link: "/documents/2-standards-06-2022.pdf",
              type: "pdf",
            },
            {
              id: 7,
              name: "Acceptable rates as of 30.09.2022",
              size: "",
              link: "/documents/2-standards-09-2022.pdf",
              type: "pdf",
            },
            {
              id: 8,
              name: "Acceptable rates as of 30.12.2022",
              size: "",
              link: "/documents/2-standards-12-2022.pdf",
              type: "pdf",
            },
          
          ],
        },
      ],
    };
        break;
      default:
      return {
      blocks: [
        {
          id: 1,
          title: "Ҳисоботҳои молиявӣ",
          documents: [
            {
              id: 1,
              name: "Тавозун ба санаи 31.12.2020",
              size: "",
              link: "/documents/1-balance-12-2020.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Тавозун ба санаи 31.03.2021",
              size: "",
              link: "/documents/1-balance-03-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Тавозун ба санаи 30.06.2021",
              size: "",
              link: "/documents/1-balance-06-2021.pdf",
              type: "pdf",
            },
            {
              id: 4,
              name: "Тавозун ба санаи 30.09.2021",
              size: "",
              link: "/documents/1-balance-09-2021.pdf",
              type: "pdf",
            },
            {
              id: 5,
              name: "Тавозун ба санаи 31.12.2021",
              size: "",
              link: "/documents/1-balance-12-2021.pdf",
              type: "pdf",
            },
            {
              id: 6,
              name: "Тавозун ба санаи 31.03.2022",
              size: "",
              link: "/documents/1-balance-03-2022.pdf",
              type: "pdf",
            },
            {
              id: 7,
              name: "Тавозун ба санаи 30.06.2022",
              size: "",
              link: "/documents/1-balance-06-2022.pdf",
              type: "pdf",
            },
            {
              id: 8,
              name: "Тавозун ба санаи 30.09.2022",
              size: "",
              link: "/documents/1-balance-09-2022.pdf",
              type: "pdf",
            },
            {
              id: 9,
              name: "Тавозун ба санаи 31.12.2022",
              size: "",
              link: "/documents/1-balance-12-2022.pdf",
              type: "pdf",
            },
            {
              id: 10,
              name: "Тавозун ба санаи 30062023",
              size: "",
              link: "/documents/Баланс_310323(tj).pdf",
              type: "pdf",
            },
            {
              id: 11,
              name: "Тавозун ба санаи 30062023",
              size: "",
              link: "/documents/Тавозун_30062023.pdf",
              type: "pdf",
            },
            {
              id: 12,
              name: "Тавозун ба санаи 30092023",
              size: "",
              link: "/documents/Тавозун_30092023(tj).pdf",
              type: "pdf",
            },
            {
              id: 13,
              name: "Тавозун ба санаи 31122023",
              size: "",
              link: "/documents/Тавозун_31122023.pdf",
              type: "pdf",
            },
            {
              id: 14,
              name: "Тавозун ба санаи 31032024",
              size: "",
              link: "/documents/Тавозун_31032024.pdf",
              type: "pdf",
            },
          ],
        },
        {
          id: 2,
          title: "Ҳисоботи аудиторӣ",
          documents: [

            {
              id: 1,
              name: "Хулосаи аудитори мустақил соли 2020",
              size: "",
              link: "/documents/3-audit-2020.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Хулосаи аудитори мустақил соли 2021",
              size: "",
              link: "/documents/3-audit-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Хулосаи аудитори мустақил соли 2022",
              size: "",
              link: "/documents/Хисоботи_молиявии_аудити_беруна_барои_соли_2022_КВД_БССТ_Саноатсодиротбонк.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Хулосаи аудитори мустақил соли 2023",
              size: "",
              link: "/documents/Хисоботи_аудитори_2023.pdf",
              type: "pdf",
            }
          ],
        },
        {
          id: 3,
          title: "Меъёрҳои мақбул",
          documents: [
            {
              id: 1,
              name: "Меъёрҳои мақбул ба санаи 31.03.2021",
              size: "",
              link: "/documents/2-standards-03-2021.pdf",
              type: "pdf",
            },
            {
              id: 2,
              name: "Меъёрҳои мақбул ба санаи 30.06.2021",
              size: "",
              link: "/documents/2-standards-06-2021.pdf",
              type: "pdf",
            },
            {
              id: 3,
              name: "Меъёрҳои мақбул ба санаи 30.09.2021",
              size: "",
              link: "/documents/2-standards-09-2021.pdf",
              type: "pdf",
            },
            {
              id: 4,
              name: "Меъёрҳои мақбул ба санаи 31.12.2021",
              size: "",
              link: "/documents/2-standards-12-2021.pdf",
              type: "pdf",
            },
            {
              id: 5,
              name: "Меъёрҳои мақбул ба санаи 31.03.2022",
              size: "",
              link: "/documents/2-standards-03-2022.pdf",
              type: "pdf",
            },
            {
              id: 6,
              name: "Меъёрҳои мақбул ба санаи 30.06.2022",
              size: "",
              link: "/documents/2-standards-06-2022.pdf",
              type: "pdf",
            },
            {
              id: 7,
              name: "Меъёрҳои мақбул ба санаи 30.09.2022",
              size: "",
              link: "/documents/2-standards-09-2022.pdf",
              type: "pdf",
            },
            {
              id: 8,
              name: "Меъёрҳои мақбул ба санаи 30.12.2022",
              size: "",
              link: "/documents/2-standards-12-2022.pdf",
              type: "pdf",
            },
            {
              id: 9,
              name: "Меъёрҳои мақбул",
              size: "",
              link: "/documents/Меъёрҳои мақбул (тоҷикӣ).pdf",
              type: "pdf",
            },
          ],
        },
      ],
    };
        break;
    }
  },
};
</script>
