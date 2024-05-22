const deposit = {
  deposits: 'Deposits',
  faqTitle: 'What does the client need to know ?',
  calculator: {
    title: 'Income from your savings',
    amount_month: 'Monthly expenses',
    period: 'Deposit period',
    month: 'month',
    result: 'Result',
    total_amount: 'The total amount',
    income: 'Income from savings',
    percent: 'Standard',
    somoni: 'somoni',
    schedule: 'Schedule',
    send: 'Send a request',
    warning: 'The result of the calculator is approximate and is not publicly available'
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
    title: 'Deposit schedule',
    pdf: 'Download PDF',
    head: [
      {
        id: 1,
        name: "№"
      },
      {
        id: 2,
        name: 'Interest payment period'
      },
      {
        id: 3,
        name: 'Accrued interest'
      },
      {
        id: 4,
        name: 'The main amount'
      }
    ],
  }
}
export default deposit
