import vacancy from './tj/vacancy'
import credit from './tj/credit'
import deposit from './tj/deposit'
import gold from './tj/gold'
import reception from './tj/reception'
export default {
  vacancy: vacancy,
  credit: credit,
  deposit: deposit,
  gold: gold,
  reception: reception,
  advtg:'БАРТАРИЯТ',
  msn:'РИСОЛАТ',
  msn_text:'Рисолати Бонк - татбиқи сиёсати давлатӣ дар самти дастгирии молиявӣ барои рушди иқтидори истеҳсолӣ, мусоидат намудан ба содироти молу маҳсулоти саноатӣ ва истеҳсоли маҳсулотҳои воридотивазкунанда дар ҷумҳурӣ буда, орзу, ҳадаф ва талаботҳои муштариёни мо асоси фаъолияти моро ташкил медиҳад.',
  vls_about:'АРЗИШҲО',
  // Personal name
  name: 'Ном',
  familyName: 'Насаб',
  phone: 'Телефон',
  email: 'Почтаи электрони',
  muff: 'Муфассал',
  // Vacancies
  region: 'вилоят',
  deadline: 'Мӯҳлати дархост',
  responsibilities: 'Вазифаҳои асосӣ:',

  //Cards
  doc_card_visa:'Нархномаи Кортҳои бонкии Visa',
  doc_card_guide:'Тартиби пешниҳоди хизматрасонии Кортҳои бонкӣ',
  doc_swift_rates:'Нархномаи хизматрасони тариқи SWIFT',

  //Сохтор
  res_doc:'Қарорҳо ва оинномаи бонк',

  // Titles
  internetBanking: 'Интернет-банкинг',
  recommandedProducts: 'Махсулоти дастрас',
  requests: 'Дархостхо',
  loanCalculator: 'Хисобкунаки карзи',
  bankPermenentMember:'Узви доимии бонк',
  approvalRequest: 'Ичозат талаб кунед',
  sendRequest: 'Пешниходи дархост',
  readMore: 'Муфассал',
  exchangeRate: 'Курби пул',
  realPersons: 'Шахсони вокеи' ,
  legalEntities: 'Шахсони хукуки',
  moneyTransfer: 'Интиколи пул',
  cards: 'Кортхо',
  currency: 'Асъор',
  BMT: 'НБТ',
  buy: 'Харид',
  sell: 'Фуруш',
  dollar: 'Доллари ИМА',
  euro: 'ЕВРО',
  ruble: 'Рубли руссия',
  calculatorError: 'Маблағ ва моҳ бояд байни ҳадди аққал ва ҳадди аксар бошад.',
  SSB: 'Саноатсодиротбонк',

  information: 'Маълумот',
  addressDetails: '734018, Ҷумҳурии Тоҷикистон, ш. Душанбе, хиёбони С.Широзӣ 21 Н/М: 20402972016551, РМА: 020039715, БИТ: 350101655',

  //Deposit page
  minimumAmount: 'Маблаги хадди акал',
  termDeposit: 'Мухлати пасандоз',

  //Credit page
  interestRateAnnual: 'Меъёри фоиз (солона)',
  maximumLoanAmount: 'Маблаги максималии карз',

  //Sales page
  saleProperty: 'Фуруши амвол',
  salePropertyDetail: 'Барои маълумоти бештар бо телефонҳои +992 (44) -630-51-15, +992 (44) -630-21-62.',
  number: 'Не',
  regionsRepublic: 'Вилоятхои республика',
  price: 'Нарх',

  //Gallery
  gallery: 'Галерея',
  photo: 'Сурат',
  video: 'Видео',

  ourLocation: 'Мо дар ин чо',
  office: 'Офис',
  ATM: 'Банкомат',
  POS: 'ПОС терминалҳо',



  // Old Data
  search: 'Ҷустуҷӯ',
  searchResult: 'Натиҷаҳои ҷустуҷӯ',
  subscribe: 'Обуна шудан',
  yourAddress: 'Суроғаи шумо',
  headerListPage: [
    {
      id: 1,
      link: `/?type=${1}`,
      svg: '#onePerson',
      text: 'Ба шахсони воқеӣ',
      mobileText: 'Воқеӣ',
      child: [
        {
          link: `/Deposit?type=${1}`,
          name: 'deposits',
          text: 'Пасандоз'
        },
        {
          link: `/Credit?type=${1}`,
          name: 'credits',
          text: 'Қарзҳо'
        },
        {
          link: `/transfers?type=${1}`,
          name: 'transfers',
          text: 'Интиқоли маблағҳо'
        },
        {
          link: `/Card?type=${1}`,
          name: 'cards',
          text: 'Кортҳо'
        },
        {
          link: `/rko?type=${1}`,
          name: 'rko',
          text: 'Хизматрасонии хазинавӣ'
        },
        {
          link: `/safe-operations?type=${1}`,
          name: 'safe-operations',
          text: 'Амалиётҳои сейфӣ'
        },
        {
          link: `/SSB-mobile?type=${1}`,
          name: 'SSB-mobile',
          text: 'ССБ мобайл'
        },
      ]
    },
    {
      id: 2,
      link: `/legal-person?type=${2}`,
      svg: '#twoPerson',
      text: 'Ба шахсони ҳуқуқӣ',
      mobileText: 'Ҳуқуқӣ',
      child: [
        {
          link: `/Deposit?type=${2}`,
          name: 'deposits',
          text: 'Пасандоз'
        },
        {
          link: `/Credit?type=${2}`,
          name: 'credits',
          text: 'Қарзҳо'
        },
        {
          link: `/rko?type=${2}`,
          name: 'rko',
          text: 'Хизматрасонии хазинавӣ'
        },
        {
          link: `/services?type=${2}`,
          name: 'services',
          text: 'Хизматрасониҳо'
        },
        {
          link: `/SSB-mobile?type=${2}`,
          name: 'SSB-mobile',
          text: 'ССБ мобайл'
        },
      ]
    },
    {
      id: 3,
      link: `/correspondence?type=${3}`,
      svg: '#dollar',
      text: 'Ба ташкилотҳои молиявӣ',
      mobileText: 'Таш. молияви',
      child: [
        {
          link: `/correspondence?type=${3}`,
          name: 'correspondence',
          text: 'Муносибатҳои муросилотӣ'
        },
        {
          link: `/sale?type=${3}`,
          name: 'sale',
          text: 'Фурӯши амвол'
        },
        {
          link: `/interbank-lending?type=${3}`,
          name: 'interbank-lending',
          text: 'Қарзҳои байнибонкӣ'
        },
        {
          link: `/organization-documents?type=${3}`,
          name: 'services',
          text: 'Ҳуҷҷатҳо'
        },
      ]
    },
    {
      id: 4,
      link: `/about?type=${4}`,
      svg: '#home',
      text: 'Дар бораи мо',
      mobileText: 'Дар бораи мо',
      child: [
        {
          link: `/about-bank?type=${4}`,
          name: 'about-bank',
          text: 'Дар бораи бонк'
        },
        {
          link: `/documents?type=${4}`,
          name: 'documents',
          text: 'Ҳисоботҳо'
        },
        {
          link: `/history?type=${4}`,
          name: 'history',
          text: 'Таърихи бонк'
        },
        {
          link: `/news?type=${4}`,
          name: 'press-center',
          text: 'Маркази матбуот'
        },
        {
          link: `/head?type=${4}`,
          name: 'head',
          text: 'Роҳбарият'
        },
        {
          link: `/structure?type=${4}`,
          name: 'structure',
          text: 'Сохтор'
        },
        {
          link: `/gallery?type=${4}`,
          name: 'gallery',
          text: 'Галерея'
        },
        {
          link: `/addresses?type=${4}`,
          name: 'addresses',
          text: 'Суроғаҳо'
        },
        {
          link: `/rights?type=${4}`,
          name: 'rights',
          text: 'Ҳуқуқҳои муштарӣ'
        },
      ]
    },
    {
      id: 5,
      link: `/rights?type=${4}`,
      svg: '#home',
      text: 'Ҳуқуқҳои муштарӣ',
      mobileText: 'Ҳуқуқҳои муштарӣ',
    },
  ],
  advantages: [
    {
      id: 1,
      title: '',
      description: 'Кафолати давлатӣ',
      img: {
        src: '/image/advantages/1.png',
        alt: 'Person Icon'
      },
      mobile: {
        src: '/image/advantages/1.png',
        alt: 'Person Icon'
      }
    },
    {
      id: 2,
      title: '',
      description: 'Фоизҳои дастрас',
      img: {
        src: '/image/advantages/2.png',
        alt: 'Wallet Icon'
      },
      mobile: {
        src: '/image/advantages/2.png',
        alt: 'Wallet Icon'
      }
    },
    {
      id: 3,
      title: '',
      description: 'Пешниҳоди қарз бо пули миллӣ',
      img: {
        src: '/image/advantages/3.png',
        alt: 'Done Icon'
      },
      mobile: {
        src: '/image/advantages/3.png',
        alt: 'Done Icon'
      }
    },
    {
      id: 4,
      title: '',
      description: 'Муҳлати кӯтоҳи баррасии дархостҳо',
      img: {
        src: '/image/advantages/4.png',
        alt: 'Centre Icon'
      },
      mobile: {
        src: '/image/advantages/4.png',
        alt: 'Centre Icon'
      }
    },
    {
      id: 5,
      title: '',
      description: 'Қарзҳо аз 1 то 5 сол',
      img: {
        src: '/image/advantages/5.png',
        alt: 'Filial Icon'
      },
      mobile: {
        src: '/image/advantages/5.png',
        alt: 'Filial Icon'
      }
    },
  ],
  values: [
    {
      id: 1,
      isReverse: false,
      img: {
        src: '/image/values/1.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Арзишҳои мо пеш аз ҳама авлавияти муштарӣ, рушди пайваста, ростқавлӣ ва фасоднопазирӣ дар фаъолияти корӣ мебошад.'
    },
    {
      id: 2,
      isReverse: true,
      img: {
        src: '/image/values/2.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Авлавияти муштарӣ.  Мо ба ормонҳои муштариёни худ эҳтиром мегузорем, бо дарки талабот ва риояи оини баробарӣ ба онҳо саривақт, босифат ва мукаммал хизмат мерасонем.'
    },
    {
      id: 3,
      isReverse: false,
      img: {
        src: '/image/values/3.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Рушди пайваста. Тамоми саъю кӯшиши мо баҳри худтакмилдиҳӣ, эҷодкорӣ,  навоварӣ ва ҷустуҷуи доимии воситаю имкониятҳои беҳтарини фаъолияти пурсамари Бонк равона карда мешаванд.'
    },
    {
      id: 4,
      isReverse: true,
      img: {
        src: '/image/values/4.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Ростқавлӣ ва фасоднопазирӣ. Фаъолияти мо дар асоси принсипҳои ростқавлӣ, фасоднопазирӣ ва таъмини шаффофият дар муносибат бо ҳамкорон ва муштариён ба роҳ монда мешавад.'
    },
  ],
  footer: {
    pages: [
      {
        id: 1,
        name: 'Бонк',
        classWidth: 'w-[27%]'
      },
      {
        id: 2,
        name: 'Хизматрасониҳо',
        classWidth: 'w-[27%]',
        showChild: false,
        child: [
          {
            id: 1,
            link: `/?type=${1}`,
            text: 'Ба шахсони воқеӣ',
            child: [
              {
                link: `/Deposit?type=${1}`,
                name: 'deposits',
                text: 'Пасандоз'
              },
              {
                link: `/Credit?type=${1}`,
                name: 'credits',
                text: 'Қарзҳо'
              },
              {
                link: `/transfers?type=${1}`,
                name: 'transfers',
                text: 'Интиқоли маблағҳо'
              },
              {
                link: `/Card?type=${1}`,
                name: 'cards',
                text: 'Кортҳо'
              },
              {
                link: `/rko?type=${1}`,
                name: 'rko',
                text: 'Хизматрасонии хазинавӣ'
              },
              {
                link: `/safe-operations?type=${1}`,
                name: 'safe-operations',
                text: 'Амалиётҳои сейфӣ'
              },
              {
                link: `/SSB-mobile?type=${1}`,
                name: 'SSB-mobile',
                text: 'ССБ мобайл'
              },
            ]
          },
          {
            id: 2,
            link: `/legal-person?type=${2}`,
            text: 'Ба шахсони ҳуқуқӣ',
            child: [
              {
                link: `/Deposit?type=${2}`,
                name: 'deposits',
                text: 'Пасандоз'
              },
              {
                link: `/Credit?type=${2}`,
                name: 'credits',
                text: 'Қарзҳо'
              },
              {
                link: `/rko?type=${2}`,
                name: 'rko',
                text: 'Хизматрасонии хазинавӣ'
              },
              {
                link: `/services?type=${2}`,
                name: 'services',
                text: 'Хизматрасониҳо'
              },
              {
                link: `/SSB-mobile?type=${2}`,
                name: 'SSB-mobile',
                text: 'ССБ мобайл'
              },
            ]
          },
          {
            /*----financial-organization?type=${3}---*/
            id: 3,
            link: `/correspondence?type=${3}`,
            text: 'Ба ташкилотҳои молиявӣ',
            child: [
              {
                link: `/correspondence?type=${3}`,
                name: 'correspondence',
                text: 'Муносибатҳои муросилотӣ'
              },
              {
                link: `/sale?type=${3}`,
                name: 'sale',
                text: 'Фурӯши амвол'
              },
              {
                link: `/interbank-lending?type=${3}`,
                name: 'interbank-lending',
                text: 'Қарзҳои байнибонкӣ'
              },
              {
                link: `/services?type=${3}`,
                name: 'services',
                text: 'Хизматрасониҳо'
              },
            ]
          },
          {
            id: 4,
            link: `/about?type=${4}`,
            text: 'Дар бораи мо',
            child: [
              {
                link: `/about-bank?type=${4}`,
                name: 'about-bank',
                text: 'Дар бораи бонк'
              },
              {
                link: `/documents?type=${4}`,
                name: 'documents',
                text: 'Ҳисоботҳо'
              },
              {
                link: `/history?type=${4}`,
                name: 'history',
                text: 'Таърихи бонк'
              },
              {
                link: `/press-center?type=${4}`,
                name: 'press-center',
                text: 'Маркази матбуот'
              },
              {
                link: `/head?type=${4}`,
                name: 'head',
                text: 'Роҳбарият'
              },
              {
                link: `/structure?type=${4}`,
                name: 'structure',
                text: 'Сохтор'
              },
              {
                link: `/gallery?type=${4}`,
                name: 'gallery',
                text: 'Галерея'
              },
              {
                link: `/addresses?type=${4}`,
                name: 'addresses',
                text: 'Суроғаҳо'
              }
            ]
          },
        ]
      },
      {
        id: 3,
        name: 'Эълонҳо',
        classWidth: 'w-[19%]',
        showChild: false,
        child: [
          {
            text: 'Вазифаҳои холӣ',
            link: '/vacancy'
          },
          {
            text: 'Тендерҳо',
            link: '/tenders'
          },
          {
            text: 'Фурӯши амвол',
            link: '/sale'
          },
          {
            text: 'Хабарҳо',
            link: '/news'
          },
          {
            text: 'Тамос',
            link: '/contact-us'
          },
        ],
      },
      {
        id: 4,
        name: 'Ба мо обуна шавед',
        classWidth: 'w-[27%]',
        child: 'Бо обуна шудан ба хабарномаи мо, Шумо аз тозатарин иқдомҳои Бонк воқиф хоҳед шуд.'
      },
    ],
    phones: [
      {
        text: 'Рӯзҳои корӣ: Душанбе то ҷумъа аз 08:00 то 17:00 <br> Шанбе: аз 09:00 то 12:00 "Рӯзи қабули шаҳрвандон".<br> Якшанбе: рӯзи истироҳат',
        phone: "Вақти кор",
      },
      {
        text: "Барои зангҳо аз ҳар гӯшаи ҷаҳон",
        phone: "+992 44 601 40 40",
      },

      {
        text: "Телефони боварии Бонки Миллии Тоҷикистон",
        phone: "+992 44 600 15 20",
      },
      {
        text: "Барои зангҳо дар дохили Тоҷикистон",
        phone: "8855",
      },
    ],
    manuals: [
      {
        name: "Стратегияи миллии рушди Ҷумҳурии Тоҷикистон барои давраи то соли 2030",
        link: "/documents/1- Стратегияи_миллии_рушди_Чумхурии_Точикистон_барои_давраи_то_соли.pdf",
      },
      {
        name: "Стратегияи миллии фарогирии молиявии Ҷумҳурии Тоҷикистон барои солҳои 2022 - 2026",
        link: "/documents/2- Стратегияи_миллии_фарогирии_молиявии_Чумхурии_Точикистон_барои_солхои.pdf",
      },
      {
        name: "Барномаи миёнамуҳлати рушди Ҷумҳурии Тоҷикистон барои солҳои 2016 - 2020",
        link: "/documents/3 - Барномаи_миёнамухлати_рушди_Чумхурии_Точикистон_барои_солхои_2016.pdf",
      },
    ],
  },
  currency: {
    title: 'Қурби асъор',
    tabs: [
      {
        id: 1,
        text: "Шахсони воқеӣ",
        api: "NON_CASH",
      },
      {
        id: 2,
        text: "Шахсони ҳуқуқӣ",
        api: "Waiting for API",
      },
      {
        id: 3,
        text: "Интиқоли маблағ",
        api: "TRANSFER",
      },
      {
        id: 4,
        text: "Кортҳо (шахсони воқеӣ)",
        api: "CardTransfer",
      },
    ],
    currency: 'Асъор',
    bmt: 'БМТ',
    purchase: 'Харидорӣ',
    sale: 'Фурӯш'
  },
  bannerMobile: {
    title: 'Замимаи “ССБ Мобайл” аз Саноатсодиротбонк',
    description: 'Пардохти қарз ва фоизи он, қабули маблағҳои пасандозҳо, интиқол ба ҳамаи кортҳои миллӣ ва кортҳои Россия, интиқол ба ҳамёнҳои электронии бонкҳои Тоҷикистон ва хориҷи кишвар, пардохти хизматрасониҳои коммуналӣ, маблағи интернет провайдерҳо, маблағҳои алоқаи мобилӣ, маблағи ТВ, радио ва дигар хизматрасониҳо дар замимаи “ССБ Мобайл”.<br><br>“ССБ Мобайл” - ро боргирӣ (скачать) намуда, тамоми хизматрасониҳоро тавассути замимаи мазкур онлайн пардохт намоед.',
    links: [
      {
        id: 1,
        image: {
          src: "/image/googlePlay.webp",
          alt: "Google Play",
        },
        link: "https://play.google.com/store/apps/details?id=tj.itservice.ssb&hl=ru&gl=US",
      },
      {
        id: 2,
        image: {
          src: "/image/appStore.webp",
          alt: "App Store",
        },
        link: "https://apps.apple.com/ru/app/%D1%81%D1%81%D0%B1-%D0%BC%D0%BE%D0%B1%D0%B0%D0%B9%D0%BB/id1596065618",
      },
      {
        id: 3,
        image: {
          src: "/image/apk.png",
          alt: "APK",
        },
        link: "/apk/ССБ Мобайл_1.0.0.11_apkcombo.com.apk",
      },
    ],
  },
  pages: {
    main: {
      links: [
        {
          id: 1,
          text: 'Солҳои 2022-2026 «Солҳои рушди саноат»',
          image: {
            src: '/image/links/rushdisanoat_tj.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/category/umuri-bonkdor/'
        },
        {
          id: 2,
          text: 'Паёмҳо ва суханрониҳои Асосгузори сулҳу ваҳдати миллӣ – Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон Эмомалӣ Раҳмон',
          image: {
            src: '/image/emblem.webp',
            alt: 'President Image'
          },
          link: 'http://www.president.tj/taxonomy/term/5/68'
        },
        {
          id: 3,
          text: '35 – солагии Истиқлолияти давлатии Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/links/35soliistiqloliyat.png',
            alt: 'Emblem Image'
          },
          link: 'https://khovar.tj/category/27-solagii-isti-loliyat/'
        },
        {
          id: 4,
          text: 'Сомонаи расмии Президенти Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://president.tj/'
        },
        {
          id: 5,
          text: 'Бонки миллии Тоҷикистон',
          image: {
            src: '/image/links/bank.jpg',
            alt: 'Bank Image'
          },
          link: 'https://nbt.tj/'
        },
        {
          id: 6,
          text: 'Агентии Миллии Иттилоотии Тоҷикистон',
          image: {
            src: '/image/links/hovar.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/'
        },
        {
          id: 7,
          text: 'Вазорати молияи Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://minfin.tj/'
        },
      ],
      linksTitle: 'Пайвандҳои муфид',
      applicationTitle: 'Дархостҳо',
      newsTitle: 'Хабарҳо',
      socialTitle: 'Мо дар шабакаҳои иҷтимоӣ',
      popularProductsTitle: 'Маҳсулоти дастрас'
    },
    organizationDocuments: {
      title: 'Ҳуҷҷатҳо',
      title2:'Сиёсати зидди коррупсия',
      title3:'Тарофаҳо'
    },
    legalPerson: {
      title: 'Ҷиҳати рушди соҳибкорӣ ва тиҷорат',
      cards: [
        {
          id: 1,
          background: "#EDF7FD",
          title: "Қарз барои рушди истеҳсолот ва афзоиш додани ҳаҷми истеҳсоли маҳсулот",
          description: "",
          img: {
            src: "/image/legalPerson/14_new_resized2.png",
            alt: "bank Image",
          },
          button: "Муфассал",
          link: "https://ssb.tj/Credit/13?type=1",
        },
        {
          id: 2,
          background: "#ECEBFE",
          title: "Маблағгузории шахсони ҳуқуқӣ ва соҳибкорони инфиродӣ барои пардохти боҷҳои гумрукӣ ва пардохтҳои ба онҳо баробаркардашуда",
          description: "",
          img: {
            src: "/image/legalPerson/favri(optimized)_resized.png",
            alt: "bank Image",
          },
          button: "Муфассал",
          link: "http://ssb.tj/Credit?type=2",
        },
        {
          id: 3,
          background: "#EEEFF6",
          title: "Идоракунии ҳисобҳо тавассути Интернет-банкинг осон ва қулай аст.",
          description: "",
          img: {
            src: "/image/legalPerson/e-banking(resized).png",
            alt: "bank Image",
          },
          button: "Муфассал",
          link: "https://ibank.ssb.tj/v1/Login",
        },
        {
          id: 4,
          background: "#EFF8FB",
          title: "Рушди соҳибкорӣ – хариду фурӯши молу маҳсулот, хизматрасонӣ, иҷрои кор, сохтмон, ба даст овардани биноҳо, иншооти дигар, воситаҳои асосӣ (асбобҳо ва мошинҳо, мошинҳо), барои оғоз ё васеъ намудани фаъолияти соҳибкорӣ.",
          description: "",
          img: {
            src: "/image/legalPerson/ssb_sohibkori_resized.png",
            alt: "bank Image",
          },
          button: "Муфассал",
          link: "https://ssb.tj/Credit/5?type=1",
        },
      ],
      links: [
        {
          id: 1,
          text: 'Солҳои 2022-2026 «Солҳои рушди саноат»',
          image: {
            src: '/image/links/rushdisanoat_tj.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/category/umuri-bonkdor/'
        },
        {
          id: 2,
          text: 'Паёмҳо ва суханрониҳои Асосгузори сулҳу ваҳдати миллӣ – Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон Эмомалӣ Раҳмон',
          image: {
            src: '/image/emblem.webp',
            alt: 'President Image'
          },
          link: 'http://www.president.tj/taxonomy/term/5/68'
        },
        {
          id: 3,
          text: '35 – солагии Истиқлолияти давлатии Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/links/35soliistiqloliyat.png',
            alt: 'Emblem Image'
          },
          link: 'https://khovar.tj/category/27-solagii-isti-loliyat/'
        },
        {
          id: 4,
          text: 'Сомонаи расмии Президенти Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://president.tj/'
        },
        {
          id: 5,
          text: 'Бонки миллии Тоҷикистон',
          image: {
            src: '/image/links/bank.jpg',
            alt: 'Bank Image'
          },
          link: 'https://nbt.tj/'
        },
        {
          id: 6,
          text: 'Агентии Миллии Иттилоотии Тоҷикистон',
          image: {
            src: '/image/links/hovar.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/'
        },
        {
          id: 7,
          text: 'Вазорати молияи Ҷумҳурии Тоҷикистон',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://minfin.tj/'
        },
      ],
      linksTitle: 'Пайвандҳои муфид',
      newsTitle: 'Хабарҳо',
      socialTitle: 'Мо дар шабакаҳои иҷтимоӣ'
    },
    rko: {
      banner: {
        title: 'Хизматрасонии хазинавӣ',
        description: 'Саноатсодиротбонк ҳамаи намуди хизматрасониҳои хазинавиро пешниҳод менамояд',
        image: '/image/hazinavi_records1.png',
        button: 'Дархсот фиристодан'
      },
      listTitle: 'Саноатсодиротбонк ҳамаи намуди хизматрасониҳои хазинавиро пешниҳод менамояд, аз ҷумла:',
      list: [
        {
          id: 1,
          text: 'кушодан ва пешбурдани суратҳисобҳо бо асъори миллӣ ва хориҷӣ барои резидентҳо ва ғайрирезидентҳои Ҷумҳурии Тоҷикистон;',
        },
        {
          id: 2,
          text: 'интиқоли маблағҳои мизоҷон аз суратҳисобҳои онҳо;'
        },
        {
          id: 3,
          text: 'додани маблағи нақд аз суратҳисобҳо;'
        },
        {
          id: 4,
          text: 'пешниҳод намудани ахборот оиди гузаронидани амалиётҳо аз рӯи суратҳисоб;'
        },
        {
          id: 5,
          text: 'қабул ва ворид намудани маблағи нақд ба суратҳисобҳо;'
        },
        {
          id: 6,
          text: 'инкассатсиякунонии маблағҳо ва ирсоли чизҳои қимматбаҳо;'
        }
      ],
      description: 'Мо кафолати зуд гузаронидани пардохтҳои Шумо дар вақти кӯтоҳтарин дар толори амалиётиамонро медиҳем, ки мутахассисон хизматрасонии лозимӣ ва инчунин маслиҳати муфидро метавонанд пешниҳод намоянд.',
      documentsTitle: 'Тарофаҳо оиди ҳаққи хизматрасонии бонкӣ аз рӯи Нархномаи хизматрасонии КВД БССТ "Саноатсодиротбонк"',
      documents: [
        {
          id: 1,
          name: 'Тарофаҳо оиди ҳаққи хизматрасонии бонкӣ аз рӯи Нархномаи хизматрасонии КВД БССТ "Саноатсодиротбонк"',
          size: '',
          link: '/documents/rko.pdf',
          type: 'pdf'
        },
      ]
    },
    transfers: {
      title: 'Интиқоли маблағҳо',
      cards: [
        // {
        //   id: 1,
        //   img: {
        //     src: "/image/transfers/1.png",
        //     alt: "Contact",
        //   },
        //   type: "transfers",
        //   title: "CONTACT",
        //   description:
        //     "Низоми CONTACT шабакаи калони хизматрасониро дар тамоми ҷаҳон доро буда, ба Шумо имкон медиҳад, ки пулро дар саросари ҷаҳон интиқол диҳед ва пардохт кунед.",
        //   options: [
        //     "1- Асъори интиқол: Рубли Русия, доллари ИМА, ЕВРО<br>2- Ҳаққи хизматрасонӣ: аз 1% ва инчунин вобаста аз маблағ ва кишвар<br>3- Ҳаққи хизматрасонӣ: барои интиколҳои воридотӣ 0%<br>4- Телефон барои маълумот",
        //   ],
        // },
        {
          id: 2,
          img: {
            src: "/image/transfers/2.png",
            alt: "Contact",
          },
          type: "transfers",
          title: "Юнистрим",
          description:
            "Низоми пардохти байналхалқии интиқоли пули “Юнистрим” яке аз низомҳои бонуфуз дар Россия ва кишварҳои ИДМ (СНГ) мебошад",
          options: [
            "1.	Ин низоми интиқолӣ дар аксари кишварҳои ҷаҳон амал мекунад;<br>2.	Асъори интиқол: рубли Россия, доллари ИМА ва ЕВРО;<br>3.	Суръати гузаронидани интиқоли маблағ - аз 5 дақиқа;<br>4.	Ҳаққи хизматрасонӣ: аз 0,5% то 1,5% инчунин вобаста аз маблағ ва кишвар;",
          ],
        },
        {
          id: 3,
          img: {
            src: "/image/transfers/3.png",
            alt: "Contact",
          },
          type: "transfers",
          title: "Зудрас",
          description:
            "Низоми дохилибонкии интиқоли пулии “Зудрас” танҳо дар дохили Ҷумҳурии Тоҷикистон ва танҳо тавассути КВД БССТ “Саноатсодиротбонк” сурат мегирад, ва дар тамоми гӯшаву канори Тоҷикистон, вилоятҳо ва минтақаҳо, шаҳру ноҳияҳо байни филиалу марказҳои хизматрасонии бонк амал менамояд.",
          options: [
            "1.	Маблағи интиқол: пули миллӣ-сомонӣ;<br>2.	Ҳаққи хизматрасонӣ: ҳангоми пардохти маблағҳои интиқолӣ ба шахсони воқеӣ ҳаққи хизматрасонӣ ситонида намешавад;<br>3.	Ҳаққи хизматрасонӣ ҳангоми интиқоли дохилии маблағҳои шахсони воқеӣ дар дохили ҷумҳурӣ аз як минтақа ба дигар минтақа тавассути воҳидҳои сохтории КВД БССТ “Саноатсодиротбонк”<br>4.	Аз маблағи интиқол 0,5% сомонӣ.5.	Телефон барои маълумот: ",
          ],
        },
      ]
    },
    services: {
      title: 'Хизматрасониҳо',
      cards: [
        {
          id: 1,
          img: {
            src: "/image/salary_project.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Пешниҳоди варақаи музди меҳнат",
          description:"Ташкилоту муассисаҳо дар доираи лоиҳаи музди маош аз Саноатсодиротбонк ба як қатор манфиатҳо бархурдор мешаванд. Корти пардохтӣ (ҳам корти миллӣ ва ҳам корти байналмилалӣ) ба кормандони ташкилоту муассисаҳо ройгон пешниҳод карда мешаванд. Ҳангоми истифодаи замимаи мобилии ССБ Мобайл низ ба иштироккунандагони лоиҳаи мазкур як қатор сабукиҳо пешбинӣ карда шудааст. Инчунин, ба ин ташкилоту муассисаҳо барномаи хизматрасонии фосилавии Интернет-бонкинг ройгон насб карда мешавад. Гирифтани пули нақд аз таҷҳизотҳои терминалии бонк ва шарикони он бе пардохти ҳақи хизматрасонӣ амалӣ карда мешавад.",
          link: "services/view",
          advantages: [
            {
              id: 1,
              title: "",
              description: "",
            },
            {
              id: 2,
              title: "",
              description: "",
            },
            {
              id: 3,
              title: "",
              description: "",
            },
          ],
        },
        {
          id: 2,
          img: {
            src: "/image/bank_warranty.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Кафолатҳои бонкӣ",
          description: "Саноатсодиротбонк ба муштариён - шахсони ҳуқуқӣ ва соҳибкорони инфиродӣ кафолати бонкиро ҳамчун таъмини иҷрои уҳдадориҳои худ дар назди шарикони онҳо пешниҳод менамояд. Бо дархости худ муштарӣ метавонад бо бонк Шартнома оид ба додани кафолатҳои бонкӣ баста, тибқи он дар доираи лимити барои ӯ дар Шартнома муқарраршуда ҳуқуқ дорад намудҳои зерини кафолатҳои бонкиро гирад:",
          link: "",
          advantages: [
            {
              id: 1,
              title: "Барои иштирок дар озмуни тендер",
              description: "",
            },
            {
              id: 2,
              title: "Барои пардохти уҳдадориҳо аз рӯи пардохтҳои гумрукӣ",
              description: "",
            },
            {
              id: 3,
              title: "Кафолати иҷрои корҳо",
              description: "",
            },
            {
              id: 4,
              title: "Бекор кардани кафолат то фарорасии муҳлати амали он",
              description: "",
            },
          ],
        },
        {
          id: 3,
          img: {
            src: "/image/akkreditiv1.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Аккредитив",
          description: "",
          link: "",
          advantages: [
            {
              id: 1,
              title: "",
              description: "",
            },
            {
              id: 2,
              title: "",
              description: "",
            },
            {
              id: 1,
              title: "",
              description: "",
            },
          ],
        },
        {
          id: 4,
          img: {
            src: "/image/inkassator_resized.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Хизматрасониҳои Ҳамлу нақл",
          description: "",
          link: "",
          advantages: [
            {
              id: 1,
              title: "",
              description: "",
            },
            {
              id: 2,
              title: "",
              description: "",
            },
            {
              id: 1,
              title: "",
              description: "",
            },
          ],
        },
        {
          id: 5,
          img: {
            src: "/image/safe.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Амалиётҳои сейфӣ",
          description: "",
          link: "/safe-operations",
          advantages: [
            {
              id: 1,
              title: "",
              description: "",
            },
            {
              id: 2,
              title: "",
              description: "",
            },
            {
              id: 1,
              title: "",
              description: "",
            },
          ],
        },
      ],
    },
    ssbMobile: {
      banner: {
        title: "Замимаи “ССБ Мобайл” аз Саноатсодиротбонк",
        description: "Беҳтарин барномаи бонкинги-мобилӣ",
        image: "/image/ssb_mobile.png",
        buttonDownload: {
          text: "Боргирӣ",
          scroll: true,
          link: "/SSB-mobile?type=1#mobile-application-download",
        },
      },
      title: 'Хизматрасонӣ',
      advantages: [
        {
          id: 1,
          description: "Интиқол ба ҳамаи кортҳои пардохтии миллӣ ва кортҳои Россия",
          img: {
            src: "/image/advantages/person.png",
            alt: "Person Icon",
          },
          mobile: {
            src: "/image/advantages/person-mobile.webp",
            alt: "Person Icon",
          },
        },
        {
          id: 2,
          description: "Интиқол ба ҳамёнҳои электронии бонкҳои Тоҷикистон ва хориҷи кишвар",
          img: {
            src: "/image/advantages/wallet.png",
            alt: "Wallet Icon",
          },
          mobile: {
            src: "/image/advantages/wallet-mobile.webp",
            alt: "Wallet Icon",
          },
        },
        {
          id: 3,
          description: "Ҳамкориҳои бонкӣ",
          img: {
            src: "/image/advantages/done.png",
            alt: "Done Icon",
          },
          mobile: {
            src: "/image/advantages/done-mobile.webp",
            alt: "Done Icon",
          },
        },
        {
          id: 4,
          description: "Пардохти маблағи интернет-провайдерҳо",
          img: {
            src: "/image/advantages/centre.png",
            alt: "Centre Icon",
          },
          mobile: {
            src: "/image/advantages/centre-mobile.webp",
            alt: "Centre Icon",
          },
        },
        {
          id: 5,
          description: "Дигар хизматрасониҳо",
          img: {
            src: "/image/advantages/filial.png",
            alt: "Filial Icon",
          },
          mobile: {
            src: "/image/advantages/filial-mobile.webp",
            alt: "Filial Icon",
          },
        },
      ],
      application: {
        title: '“ССБ Мобайл” - ро боргирӣ (скачать) намуда, тамоми хизматрасониҳоро тавассути замимаи мазкур онлайн пардохт намоед.',
        description: 'Пардохти қарз ва фоизи он; Қабули маблағҳои пасандозҳо; Интиқол ба ҳамаи кортҳои пардохтии миллӣ ва кортҳои Россия; Интиқол ба ҳамёнҳои электронии бонкҳои Тоҷикистон ва хориҷи кишвар; Пардохти хизматрасониҳои коммуналӣ; Маблағи интернет-провайдерҳо; Маблағҳои алоқаи мобилӣ; Маблағи ТВ, радио ва дигар хизматрасониҳо дар замимаи “ССБ Мобайл”.'
      }
    },
    correspondence: {
      title: 'Муносибатҳои муросилотӣ',
      table: {
        header: [
          {
            text: '№',
            color: 'white'
          },
          {
            text: 'Кишвар',
            color: 'white'
          },
          {
            text: 'Номи Бонк',
            color: 'white'
          },
          {
            text: 'Асъор',
            color: 'white'
          },
          {
            text: 'Суратҳисоб',
            color: 'white'
          },
          {
            text: 'Суроға',
            color: 'white'
          },
        ],
        body: [
          {
            id: 1,
            country: 'Русия',
            nameBank: 'Бонки байнидавлатӣ',
            currency: 'USD <br> EUR <br> RUB',
            numberScore: '30111840000000000061 30111978600000000061 30111810700000000061',
            requisites: 'Суроғаи ҷойгиршавӣ / суроғаи почта: 115162 Москва, ст. Шухова, 15; телефон/факс: +7 (495) 954-9258, 954-4354, Telex 914790 ISBNK RU, E-mail: isbnk@isbnk.ru РИН 9909400764, KPP 774763001, PSRN 914702, код 1059702. Рамзи ТҶ: 00010263 BIC 044525362 Свифт: INEARUMMAXXX',
            background: 'background'
          },
          {
            id: 2,
            country: 'Узбекистон',
            nameBank: 'Ҷамъияти саҳҳомии «Бонки миллии корҳои иқтисодии хориҷии Ҷумҳурии Узбекистон»',
            currency: 'USD <br> EUR',
            numberScore: '21002840000090235001 21002978900090235001',
            requisites: '100084, Ҷумҳурии Ӯзбекистон, Тошканд, хиёбони Амир Темур, 101; тел. +998 78-147-15-70 МФО 00450; РМА 200836354; Свифт: NBFAUZ2X'
          },
          {
            id: 3,
            country: 'Туркия',
            nameBank: 'Aktif Yatırım Bankası A.Ş.',
            currency: 'USD <br> EUR <br> CNY',
            numberScore: 'TR150014300000000014203702 TR340014300000000014203748 TR550014300000000014203758',
            requisites: 'Aktif Bank Genel Müdürlük Esentepe Mahallesi Kore Şehitleri Caddesi No: 8/1 Şişli 34394 İstanbul T. 0212 340 80 00 F. 0212 340 88 79 SWIFT: CAYTTISXXX'
          },
        ]
      }
    },
    sale: {
      title: 'Фурӯши амвол',
      description: 'Барои маълумоти бештар ба рақамҳои +992 (44 ) -630-51-15,  +992 (44 )-630-21-62  дар тамос бошед.',
      table: {
        header: [
          {
            text: '№'
          },
          {
            text: 'Минтақаҳои ҷумҳурӣ'
          },
          {
            text: 'Амволи гарав'
          },
          {
            text: 'Нарх'
          },
        ],
      }
    },
    history: {
      banner: {
        title: 'Саноатсодиротбонк',
        description: 'Имконияти гирифтани қарз бо пули миллӣ ва фоизҳои дастрас',
        image: '/image/bank_history.png'
      },
      title: 'АЗ ОҒОЗ ТО БА ИМРӮЗИ САНОАТСОДИРОТБОНК!',
      list: [
        '1. Бо Қарори Ҳукумати Ҷумҳурии Тоҷикистон аз 5 феврали соли 2013 №34 Муассисаи давлатии «Фонди дастгирии соҳибкорӣ» дар назди Кумитаи давлатии сармоягузорӣ ва идораи амволи давлатии Ҷумҳурии Тоҷикистон таъсис дода шуд.',
        '2. Бо Қарори Ҳукумати Ҷумҳурии Тоҷикистон аз 14 феврали соли 2015 №62 шакли ташкилию ҳуқуқии Муассисаи давлатии “Фонди дастгирии соҳибкорӣ” тағйир дода шуда, ба Муассисаи давлатии “Фонди дастгирии соҳибкории назди Ҳукумати Ҷумҳурии Тоҷикистон” табдил дода шуд.',
        '3. Бо Қарори Ҳукумати Ҷумҳурии Тоҷикистон аз 25 июни соли 2020 №390 Муассисаи давлатии "Фонди дастгирии соҳибкории назди Ҳукумати Ҷумҳурии Тоҷикистон" ба корхонаи воҳиди давлатии бонки саноативу содиротии Тоҷикистон "Саноатсодиротбонк" табдил дода шуд.',
        'Санаи 23-уми октябри соли 2020 КВД БССТ “Саноатсодиротбонк” соҳиби иҷозатномаи БМТ №0000126 гардид, ки масъулияти Бонк назди мизоҷонаш зиёдтар шуда, моро барои хизмати софдилона ва одилона даъват менамояд. КВД БССТ “Саноатсодиротбонк” таҳти шиори “Ҳадафи мо муваффақияти Шумо” фаъолияти худро оғоз намуда, мавқеашро ҳамчун бонки давлатӣ дар бозори байнибонкӣ устувор менамояд.',
        'Айни ҳол, дар Бонк хизматрасониҳои қабули пасандоз, интиқоли маблағ, кортҳои пардохтӣ, кушодани суратҳисоб, пешниҳоди қарзҳо, амалиётҳои сейфӣ, амалиётҳои ҳисоббаробаркунӣ, ва иваз намудани пулҳои фарсуда барои шахсони воқеӣ ва ҳуқуқӣ фаъол мебошанд.',
        'Ҷиҳати равнақ додани фаъолияти Бонк ва хизматрасонӣ намудан ба мизоҷони минтақаҳои кишвар солҳои 2021-2022 филиалҳои Бонк дар шаҳри Хуҷанди вилояти Суғд, шаҳрҳои Бохтар, Кӯлоб, Данғараи вилояти Хатлон, шаҳри Хоруғи Вилояти Мухтори Кӯҳистони Бадахшон ва маркази хизматрасонии бонкӣ дар ноҳияи Рашт ба фаъолият оғоз намуданд.'
      ]
    },
    news: {
      title: 'Хабарҳо',
      answer: 'Ба пахши ҷавобҳо гузаред'
    },
    structure: {
      title: 'Сохтор'
    },
    gallery: {
      title: 'Галерея',
      photo: 'Суратҳо',
      video: 'Видео'
    },
    addresses: {
      title: 'Мо дар ин ҷо ҳастем',
      tabs: [
        {
          id: 1,
          text: "Идораҳо",
        },
        {
          id: 2,
          text: "Банкоматҳо",
        },
        {
          id: 3,
          text: "Терминалҳои POS",
        },
      ],
    },
    question: {
      title: 'Ба пахши ҷавобҳо гузаред'
    },
    head: {
      title: 'Муассис',
      subTitle: 'Ҳукумати Ҷумҳурии Тоҷикистон',
      leaderTitle: 'Роҳбарият',
      leader: [
        {
          id: 1,
          name: "БОБОЗОДА ҲОКИМШОҲ ҶУРАХОН",
          post: "Раиси Раёсати КВД БССТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/1.JPG",
            alt: "Profile",
          },
        },
        {
          id: 2,
          name: "ҒАРИБШОЗОДА АЗИЗШО ҚИМАТШО",
          post: "Муовини якуми Раиси Раёсати КВД БССТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/2.JPG",
            alt: "Profile",
          },
        },
        {
          id: 3,
          name: "МУҲИДДИНЗОДА ШУҲРАТ ФАРИДУН",
          post: "Муовини Раиси Раёсати КВД БССТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/3.JPG",
            alt: "Profile",
          },
        },
      ],
      boardTitle: 'Аъзоёни Раёсат',
      board: [
        {
          id: 1,
          name: "БОБОЗОДА ҲОКИМШОҲ ҶУРАХОН",
          post: "Раиси Раёсати КВД БССТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/1.JPG",
            alt: "Profile",
          },
        },
        {
          id: 2,
          name: "ҒАРИБШОЗОДА АЗИЗШО ҚИМАТШО",
          post: "Муовини якуми Раиси Раёсати КВД БССТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/2.JPG",
            alt: "Profile",
          },
        },
        {
          id: 3,
          name: "МУҲИДДИНЗОДА ШУҲРАТ ФАРИДУН",
          post: "Муовини Раиси Раёсати КВД БССТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/3.JPG",
            alt: "Profile",
          },
        },

        {
          id: 5,
          name: "МАҶИДӢ ЮСУФ ХАЙРУЛЛО",
          post: "Муовини Вазири молияи Ҷумҳурии Тоҷикистон",
          img: {
            src: "/image/board/5.jpg",
            alt: "Profile",
          },
        },
      ],
    },

    aboutBank: {
      banner: {
        title: 'Бобозода Ҳокимшоҳ Ҷурахон <br> Раиси Раёсати КВД БССТ <br>“Саноатсодиротбонк”',
        description: '',
        image: '/image/head/1.JPG'
      },
      description: 'Мизоҷон ва ҳамватанони гиромӣ!<br><br> Тавре ҳамаи мову Шумо медонем, солҳои охир таваҷҷӯҳи Ҳукумати Ҷумҳурии Тоҷикистон барои беҳтар намудани фазои соҳибкорӣ ҳамчун омили пешбарандаи рушди иқтисодӣ афзун шуда, дар самти ислоҳоти иқтисодӣ корҳои назаррасе амалӣ карда шуд ва ба ин васила дар самти ҷалби сармоягузории хориҷӣ ва маблағгузории мустақими буҷавӣ барои фаъолияти соҳибкорӣ замина гузошта шуд.<br><br> Дар ин раванд, бо мақсади боз ҳам тақвият бахшидан ба рушди соҳибкорӣ ва фароҳам овардани фазои солими тиҷоратӣ бо қарори Ҳукумати Ҷумҳурии Тоҷикистон №34 аз 5 феврали соли 2013 Муассисаи давлатии «Фонди дастгирии соҳибкорӣ» таъсис дода шуд.<br><br> Ҳадаф аз таъсисёбии Фонди мазкур ин мусоидат ба раванди бунёди муносибатҳои бозорӣ дар асоси дастгирии соҳибкорӣ ва рушди рақобат бо роҳҳои самаранок пеш бурдани барномаҳои давлатӣ ва афзалиятҳои истеҳсолӣ, лоиҳаҳо ва чорабиниҳои маблағгузорӣ бахши соҳибкории хурду миёна, таъминоти бозори мол, таъсиси ҷойҳои нави корӣ, ҳимоя ва дастгирии молиявии фаъолияти инноватсионии самтҳои соҳибкорӣ, ҳавасмандкунӣ барои навоварӣ ва истеҳсоли намудҳои нави маҳсулот, бунёди фазои солими соҳибкорӣ дар самти хизматрасонӣ буд, ки дар ин давра фонди мазкур ба натиҷаҳои дилхоҳ низ расид.<br><br> Ҷиҳати иҷрои банди 19 Протоколи маҷлиси Ҳукумати Ҷумҳурии Тоҷикистон аз 29 октябри соли 2014 тибқи қарори Ҳукумати Ҷумҳурии Тоҷикистон аз 14 феврали соли 2015 №62 шакли идоракунии Муассисаи давлатии “Фонди дастгирии соҳибкорӣ” тағйир дода шуда, ба Муассисаи давлатии “Фонди дастгирии соҳибкории назди Ҳукумати Ҷумҳурии Тоҷикистон” табдил дода шуд.<br><br> Мақсади асосии Муассисаи давлатии “Фонди дастгирии соҳибкории назди Ҳукумати Ҷумҳурии Тоҷикистон” ин мусоидат ба раванди бунёди муносибатҳои бозорӣ дар асоси дастгирии соҳибкорӣ ва рушди рақобат бо роҳҳои самаранок пеш бурдани барномаҳои давлатӣ ва афзалиятҳои истеҳсолӣ, таъсиси ҷойҳои нави корӣ, ҳимоя ва дастгирии молиявии фаъолияти соҳибкорӣ ва бунёди фазои солими соҳибкорӣ дар самти хизматрасониро дар бар мегирифт. Фонд давра ба давра бо пешниҳоди маблағҳои қарзӣ сармояи молиявии худро устувор намуда, сандуқи қарзии худро то ба 150 милион сомонӣ расонид.<br><br> Аз 25 июни соли 2020 №390 бо қарори Ҳукумати Ҷумҳурии Тоҷикистон Муассисаи давлатии "Фонди дастгирии соҳибкории назди Ҳукумати Ҷумҳурии Тоҷикистон" ба корхонаи воҳиди давлатии бонки саноативу содиротии Тоҷикистон "Саноатсодиротбонк" табдил дода шуд.<br><br> Санаи 23-уми октябри соли 2020 КВД БССТ “Саноатсодиротбонк” иҷозатномаи Бонки миллии Тоҷикистон барои анҷомдиҳии фаъолияти бонкӣ дастрас намуд, ки масъулияти Бонк назди мизоҷонаш зиёдтар шуд. Минбаъд, Бонк метавонад доираи хизматрасониҳои худро васеъ намуда, кушодани суратҳисобҳои пасандозӣ ва амонатӣ, хизматрасонии интиқоли маблағ ва қарздиҳиро бо асъори миллӣ ва хориҷӣ дар якҷоягӣ бо маҳсулотҳои қарзии мавҷудбуда пешкаши мизоҷони худ гардонад.<br><br> Масъулияти Роҳбарият ва ҳар нафар корманд, назди мизоҷон ва корафтодагон боз ҳам зиёдтар шуд ва мо минбаъд ҳам фаъолияти худро ҷиҳати иҷрои дастуру супоришҳои Асосгузори сулҳу ваҳдати миллӣ, Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон, муҳтарам Эмомалӣ Раҳмон, ҷиҳати бомуваффақият ва дар амал татбиқ намудани нақшаҳои стратегӣ, мустаҳкам намудани мавқеи Саноатсодиротбонк дар бозори байнибонкии ҷумҳурӣ дар заминаи дастгирии бештари соҳибкорони ватанӣ, баланд бардоштани сифати хизматрасониҳои бонкӣ идома медиҳем.<br><br> Мо омодаем барои таҷлили ҷашни 35 солагии Тоҷикистони азиз бо дастгирии молиявии соҳибкорони ватанӣ саҳми арзандаи худро гузорем. Ҳадафи мо имконияти мусоиди сармоягузории соҳибкорони ватанӣ ва самтҳои афзалиятноки иқтисодии кишвар маҳсуб ёфта бо таъмини сармояи дохилӣ рушд намудани маҳсулоти ватании ба содирот нигаронидашудаву воридотивазкунанда мебошад.<br><br> Мо дар соҳа рушдро дар самти сармоягузории дохилӣ идома дода, пайи ҷустуҷӯи самтҳои нав ҳастем ва лоиҳаҳои навро ба мизоҷон пешниҳод менамоем.<br><br> Мо омодаи ҳамкорӣ ва дастгирии лоиҳаҳои воқеии манфиатбахш ҳастем. Мо дар якҷоягӣ пойдевори истиқлолиятро устувор хоҳем кард.<br><br> Мизоҷон ва соҳибкорони гиромӣ мо таҳти шиори “Ҳадафи мо муваффақияти Шумост” якҷоя баҳри дастовардҳои назарраси кишвар талош хоҳем кард.'
    },
    rights: {
      banner: {
        title: 'КВД БССТ "Саноатсодиротбонк"',
        description: 'Ҳадафи мо - муваффақияти Шумо!',
        image: '/image/ssb.webp'
      },
      title: 'Ҳуқуқи мизоҷ',
      list: ['Ҳар як мизоҷи КВД БССТ “Саноатсодиротбонк” ҳуқуқ дорад, ки оид ба сифати хизматрасонии бонк шикоят/пешниҳодро ба бонк ирсол намояд. Шикоятҳо / пешниҳодҳои Шумо барои рушди минбаъдаи фаъолияти бонк ва баланд бардоштани сифати хизматрасонӣ равона карда мешаванд.', 'Маълумот оид ба тартиби қабул ва баррасии муроҷиатҳои истеъмолкунандагон.', 'Тартиби қабул ва баррасии муроҷиатҳои истеъмолкунандагон дар Саноатсодиротбонк  дар асоси Қонуни ҶТ “Дар бораи муроҷиатҳои шахсони воқеӣ ва ҳуқуқӣ” ба роҳ монда шудааст. Баррасии ҳамаи арзу шикоятҳои мизоҷон дар мӯҳлатҳои муқаррар намудаи Қонуни ҶТ “Дар бораи муроҷиатҳои шахсони воқеӣ ва ҳуқуқӣ” аз ҷониби масъулини Саноатсодиротбонк  баррасӣ карда мешавад. Мӯҳлати умумии баррасии арзу шикоятҳо наметавонад аз 30 рӯзи тақвими зиёд бошад. Дар инхусус ба муроҷиаткунанда дар мӯҳлати се рӯзи корӣ хабар расонида мешавад.', 'Маълумот дар барои тартиби пешниҳоди муроҷиатҳои истеъмолкунандагон, аз ҷумла мавриди шикоят қарор гирифтани амали(беамалӣ) кормандони ташкилоти қарзии молиявӣ, бо зикри маълумот барои тамос (телефон, суроға, ному насаб) бо шахсони масъули ташкилоти қарзии молиявӣ, ки ба онҳо истеъмолкунандагон барои ҳифзи ҳуқуқҳои худ муроҷиат карда метавонанд.', 'Амонатбонк  муроҷиатҳои мизоҷонро (арзу шикоятҳоро) дар шакли хаттӣ ва шифоҳӣ қабул мекунад.'],
      rulesTitle: 'Ба арзу шикояти хаттӣ дохил мешавад:',
      rules: ['Арзу шикояте, ки дар намуди қоғазӣ (дастӣ ё электронӣ) ва ҳам ҳангоми қабули шахсӣ ва/ё тавассути почта ворид гардад;', 'Арзу шикоят тавассути почтаи электронии расмии Бонк;', 'Ҷойгир кардани арзу шикоят дар китоби арзу шикоятҳои воҳидҳои сохтории Бонк;', 'Арзу шикоят дар сомонаи расмии Бонк;', 'Арзу шикоятҳо дар шабакаҳои иҷтимоии интернет, яъне саҳифаҳои Бонк ё саҳифаҳо, ки ба онҳо Бонк номнавис шудааст.'],
      lamentTitle: 'Ба арзу шикояти шифоҳӣ дохил мешавад:',
      lament: ['Арзу шикояти телефонӣ ба Маркази тамоси Бонк тариқи занги телефонӣ ба рақами 8855;', 'Ҳангоми қабули роҳбарияти Бонк (Раиси Раёсати Бонк ва директорони филиалҳо);', 'Бояд қайд кард, ки дар Саноатсодиротбонк сохтори алоҳидаи масъул оид ба муроҷиатҳои (арзу шикоят) мизоҷон “Шуъбаи умумии Бонк” фаъолият дорад. '],
      other: ['Суроға: 734013, Ҷумҳурии Тоҷикистон, Душанбе, хиёбони Саъдии Шерозӣ 21;', 'Рақами телефон: 8855, +992 44 630 51 18;', 'Суроғаи электронӣ: info@ssb.tj;', 'Ташаккур барои  муроҷиат!']
    }
  }
}
