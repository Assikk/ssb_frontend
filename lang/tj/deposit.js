const deposit = {
  deposits: 'Пасандозҳо',
  faqTitle: 'Муштарӣ бояд чиро донад ?',
  calculator: {
    title: 'Даромад аз пасандози Шумо',
    amount_month: 'Хароҷоти моҳона',
    period: 'Мӯҳлати пасандоз',
    month: 'моҳ',
    result: 'Натиҷа',
    total_amount: 'Ҷамъи маблағ',
    income: 'Даромад аз пасандоз',
    percent: 'Меъёр',
    somoni: 'сомони',
    schedule: 'Ҷадвал',
    send: 'Дархост фиристодан',
    warning: 'Натиҷаи ҳисобкунак тахминӣ буда, дастраси омма нест'
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
    title: 'Ҷадвали амонат',
    pdf: 'Pdf-ро зеркашӣ кунед',
    head: [
      {
        id: 1,
        name: "№"
      },
      {
        id: 2,
        name: 'Давраи пардохти фоизҳо'
      },
      {
        id: 3,
        name: 'Фоизҳои ҳисобшуда'
      },
      {
        id: 4,
        name: 'Маблағи асосӣ'
      }
    ],
  }
}
export default deposit
