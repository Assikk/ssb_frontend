const deposit = {
  deposits: 'Депозиты',
  faqTitle: 'Что нужно знать клиенту ?',
  calculator: {
    title: 'Доход от ваших сбережений',
    amount_month: 'Ежемесячные расходы',
    period: 'Срок депозита',
    month: 'месяц',
    result: 'Результат',
    total_amount: 'Общая сумма',
    income: 'Доход от сбережений',
    percent: 'Норма',
    somoni: 'сомони',
    schedule: 'График',
    send: 'Отправить заявку',
    warning: 'Результат калькулятора является приблизительным и не является общедоступным'
  },
  faq: {
    title: 'Пеш аз пасандоз мондан  дар  бонк муштарӣ бояд чиро донад?',
    description: '',
    list: [
      {
        id: 1,
        title: 'ТАРТИБИ ҲИСОБИ ФОИЗҲО ВА МӮҲЛАТИ ПАРДОХТ',
        description: 'Ҳисоб намудани фоизҳои пасандозҳои мӯхлатнок бо баҳисобгирии шумораи рӯзҳои тақвимии сол (360 ё 365/366) ба роҳ монда мешавад:',
        list: [
          {
            id: 1,
            name: '360 рӯз дар як сол агар пасандоз ба мӯҳлати то 1 (як) соли пурра қабул карда шуда бошад;'
          },
          {
            id: 2,
            name: '365/366 рӯз дар як сол агар пасандоз ба мӯҳлати зиёда аз 1 (як) сол қабул карда шуда бошад.'
          }
        ],
        isShow: false,
        image: {
          src: '/image/deposit/faq/1.jpg'
        }
      },
      {
        id: 2,
        title: 'ЭЪЛОН ДАР БОРАИ АНДОЗ АЗ ДАРОМАДИ ФОИЗӢ',
        isShow: false,
        description: 'Мувофиқи қонунгузории андози Ҷумҳурии Тоҷикистон, фоизҳое, ки резидент ё муассисаи доимии ғайрирезидент ё аз номи чунин муассиса месупоранд, ба андозаи 12 % аз маблағи даромаде, ки манбаъи он дар Ҷумҳурии Тоҷикистон гирифта шуда бошад, андоз ситонида мешавад.'
      },
      {
        id: 3,
        title: 'КАФОЛАТИ БОНК БАРОИ МИЗОҶ ДАР САМТИ БАРГАРДОНИДАНИ ПАСАНДОЗҲО ',
        description: 'Мувофиқи банди 87-и Оинномаи корхонаи воҳиди давлатии бонки саноативу содиротии Тоҷикистон"Саноатсодиротбонк" ҳангоми муфлис (ғайри қобили пардохт) эътироф гардидани Бонк, Муассис баргардонидани маблағҳои пасандозии шахсони вокеию ҳуқуқиро кафолат медиҳад ва ин пасандозҳоро бо талаби амонатгузорон бармегардонад.',
        isShow: false,
      }
    ]
  },
  schedule: {
    title: 'График депозита',
    pdf: 'Скачать PDF',
    head: [
      {
        id: 1,
        name: "№"
      },
      {
        id: 2,
        name: 'Период выплаты процентов'
      },
      {
        id: 3,
        name: 'Начисленные проценты'
      },
      {
        id: 4,
        name: 'Основная сумма'
      }
    ],
  }
}
export default deposit
