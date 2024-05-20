<template>
  <section>
    <Banner
      :banner="banner"
      :button="$t('sendRequest')"
      type="openApplication"
    />
    <div class="max-w-[846px] mx-auto px-6 lg:px-0">
      <div class="mt-20">
        <Rule v-for="rule in rules" :key="rule.id" :rule="rule" class="mb-8" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "InterBank-Lending",
  data() {
    switch (localStorage.getItem("lang")) {
      case "ru":
        return {
          banner: {
            title: "Межбанковские кредиты",
            description:
              "Возможность получения кредита в национальной валюте по доступным процентным ставкам",
            image: "/image/money.webp",
          },
          rules: [
            {
              id: 1,
              title: "КАПИТАЛ",
              description:
                "<strong>ЦЕЛЬ ПРЕДЛОЖЕНИЯ ПО КРЕДИТУ</strong> - Финансирование деятельности кредитно-финансовых организаций путем предоставления краткосрочных и среднесрочных кредитов;",
            },
            {
              id: 2,
              title: "",
              description:
                "<strong>ЦЕЛЕВАЯ ГРУППА</strong> - Кредитно-финансовые организации;",
            },
            {
              id: 3,
              title: "",
              description:
                "<strong>ОСНОВНЫЕ ПРЕИМУЩЕСТВА ПРОДУКТА:</strong><ul><li>•	Возможность получения кредита в национальной валюте;</li><li>•	Низкий процент по кредиту;</li><li>•	Низкий процент по кредиту;</li></ul>",
            },
            {
              id: 4,
              title: "",
              description:
                "<strong>ТРЕБОВАНИЯ К ЗАЕМЩИКУ:</strong> - Кредитная или финансовая организация, имеющая лицензию на кредитно-финансовую деятельность;",
            },
            {
              id: 5,
              title: "",
              description: "<strong>ВАЛЮТА КРЕДИТА</strong> - сомони",
            },
            {
              id: 6,
              title: "",
              description:
                "<strong>МИНИМАЛЬНАЯ СУММА КРЕДИТА</strong> - 500 000",
            },
            {
              id: 7,
              title: "",
              description:
                "<strong>ОКОНЧАТЕЛЬНАЯ СУММА КРЕДИТА </strong> - В пределах, установленных внутренними нормативными актами, с предоставлением недвижимого имущества, денег на счете в банке, депозита;",
            },
            {
              id: 8,
              title: "",
              description: "<strong>СРОК КРЕДИТА </strong> - до 2 лет.",
            },
          ],
        };
        break;
      case "en":
        return {
          banner: {
            title: "Interbank loans",
            description:
              "The possibility of obtaining a loan in national currency at affordable interest rates",
            image: "/image/money.webp",
          },
          rules: [
            {
              id: 1,
              title: "CAPITAL",
              description:
                "<strong>PURPOSE OF THE LOAN OFFER</strong> - Financing the activities of financial institutions by providing short-term and medium-term loans;",
            },
            {
              id: 2,
              title: "",
              description:
                "<strong>TARGET GROUP</strong> - Credit and financial institutions;",
            },
            {
              id: 3,
              title: "",
              description:
                "<strong>MAIN ADVANTAGES OF THE PRODUCT:</strong><ul><li>• Possibility of obtaining a loan in national currency;</li><li>• Low interest on the loan;</li><li>• Low interest on the loan ;</li></ul>",
            },
            {
              id: 4,
              title: "",
              description:
                "<strong>REQUIREMENTS FOR THE BORROWER:</strong> - A credit or financial organization that has a license for lending and financial activities;",
            },
            {
              id: 5,
              title: "",
              description: "<strong>LOAN CURRENCY</strong> - somoni",
            },
            {
              id: 6,
              title: "",
              description:
                "<strong>АНДОЗАИ  КАМТАРИНИ МАБЛАҒИ ҚАРЗ</strong> - 500 000",
            },
            {
              id: 7,
              title: "",
              description:
                "<strong>FINAL LOAN AMOUNT</strong> - Within the limits established by internal regulations, with the provision of real estate, money in a bank account, deposit;",
            },
            {
              id: 8,
              title: "",
              description: "<strong>LOAN TERM</strong> - up to 2 years.",
            },
          ],
        };
        break;
      default:
        return {
          banner: {
            title: "Қарзҳои байнибонкӣ",
            description:
              "Имконияти гирифтани қарз бо пули миллӣ ва фоизҳои дастрас",
            image: "/image/money.webp",
          },
          rules: [
            {
              id: 1,
              title: "САРМОЯ",
              description:
                "<strong>МАҚСАДИ ПЕШНИҲОДИ ҚАРЗ</strong> - Маблағгузорӣ намудани фаъолияти ташкилотҳои қарзӣ ва молиявӣ бо роҳи додани қарзҳои кутоҳмуҳлат ва миёнамуҳлат;",
            },
            {
              id: 2,
              title: "",
              description:
                "<strong>ГУРӮҲИ МАҚСАДНОК</strong> - Ташкилотҳои қарзӣ ва молиявӣ;",
            },
            {
              id: 3,
              title: "",
              description:
                "<strong>БАРТАРИЯТҲОИ АСОСИИ МАҲСУЛОТ:</strong><ul><li>•	Имконияти гирифтани қарз бо пули миллӣ;</li><li>•	Фоизи пасти қарз;</li><li>•	Дастрасии бардавом ба маблағи пулӣ;</li></ul>",
            },
            {
              id: 4,
              title: "",
              description:
                "<strong>ТАЛАБОТ БА ҚАРЗГИРАНДА </strong> - Ташкилоти қарзӣ ё молиявии дорои иҷозатномаи фаъолияти қарзӣ – молиявӣ;",
            },
            {
              id: 5,
              title: "",
              description: "<strong>АСЪОРИ ҚАРЗ</strong> - Сомонӣ",
            },
            {
              id: 6,
              title: "",
              description:
                "<strong>АНДОЗАИ  КАМТАРИНИ МАБЛАҒИ ҚАРЗ</strong> - 500 000",
            },
            {
              id: 7,
              title: "",
              description:
                "<strong>АНДОЗАИ НИҲОИИ МАБЛАҒИ ҚАРЗ </strong> - Дар доираи меъёри муқаррарнамудаи санадҳои меъёрии дохилӣ, бо таъмини молу мулки ғайриманқул, воситаҳои пулӣ дар ҳисоби бонкӣ, амонат;",
            },
            {
              id: 8,
              title: "",
              description: "<strong>МУҲЛАТИ ҚАРЗ </strong> - то 2 сол.",
            },
          ],
        };
        break;
    }
  },
};
</script>
