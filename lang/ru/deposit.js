const deposit = {
  deposits: 'Депозиты',
  faqTitle: 'Что нужно знать клиенту ?',
  faq: {
    title: 'Что нужно знать клиенту, перед тем как взять кредит в банке?',
    description: 'Кредит – финансовый инструмент удобный и очень нужный. Но необходимо помнить, что кредит – это большая ответственность. Поэтому постарайтесь чётко оценивать свои возможности по платежеспособности. Рассчитывайте только на постоянный источник дохода. Если вы приняли решение о получении кредита посетите банк или свяжитесь с ним. Контакты банка можно найти на официальном сайте.',
    list: [
      {
        id: 1,
        title: 'Не стесняйтесь задавать вопросы сотруднику банка:',
        isShow: false,
        list: [
          {
            id: 1,
            name: 'Какую сумму можно получить?'
          },
          {
            id: 2,
            name: 'Каков размер ежемесячного платежа? '
          },
          {
            id: 3,
            name: 'Уточните процентную ставку '
          },
          {
            id: 4,
            name: 'Как производится выплата кредита?'
          },
          {
            id: 5,
            name: 'В какие сроки?'
          }
        ]
      },
      {
        id: 2,
        title: 'Штрафные санкции, предусмотренные банком в случае нарушения условий кредитного договора (просрочка):',
        isShow: false,
        description: 'В случае частичного или полного неисполнения Заёмщиком своих обязательств по настоящему Договору, Банк имеет право предоставить справку в «Бюро кредитных историй» как мера ответственности о Заёмщике. Если выручка от продажи заложенного имущества недостаточна для удовлетворения требований Банка, Банк вправе потребовать другое имущество Заёмщика для покрытия недостающей суммы денег без использования преимущественного права в соответствии с законодательством Республики Таджикистан.'
      },
      {
        id: 3,
        title: 'Ба меъери солонаи самараноки қарз диққат диҳед.',
        description: 'Ин маблағи умумии ҳамаи пардохтҳое мебошад, ки қарзгир тибқи шартномаи қарзӣ пардохт мекунад.',
        isShow: false,
        image: {
          src: '/image/credit/faq/1.png',
          alt: '1.png'
        }
      }
    ]
  },
}
export default deposit