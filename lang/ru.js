import vacancy from './ru/vacancy'
import credit from './ru/credit'
import deposit from './ru/deposit'
export default {
  vacancy: vacancy,
  credit: credit,
  deposit: deposit,
  advtg:'ПРЕИМУЩЕСТВА',
  msn:'МИССИЯ',
  msn_text:'Миссией Банка является реализация государственной политики в направлении финансовой поддержки развития производственного потенциала, содействия экспорту промышленных товаров и производству импортозамещающей продукции в республике, а также мечты, цели и требования наши клиенты составляют основу нашей деятельности.',
  vls_about:'ЦЕННОСТИ',
  name: 'Имя',
  familyName: 'Фамилия',
  phone: 'Телефон',
  email: 'Эл. адрес',
  muff: 'Подробнее',
  region: 'Регион',
  deadline: 'Крайний срок подачи анкет',
  responsibilities: 'Основные обязанности:',

  //Cards
  doc_card_visa:'Тарифы Банковских карт Visa',
  doc_card_guide:'Порядок оказания услуг с использованием банковских карт',
  doc_swift_rates:'Стоимость услуг через SWIFT',


  //Структура
  res_doc:'Постановления и устав банка',

  // Titles
  internetBanking: 'Интернет-банкинг',
  recommandedProducts: 'Рекомендуемые продукты',
  requests: ' запросы',
  loanCalculator: 'Кредитный калькулятор',
  bankPermenentMember: 'Постоянный член банка',
  approvalRequest: 'Запрашивать разрешение',
  sendRequest: 'Отправить запрос',
  readMore: 'Читать далее',
  exchangeRate: 'Обменный курс',
  realPersons: 'Реальные лица',
  legalEntities: 'Юридические лица',
  moneyTransfer: 'Перевод денег',
  cards: 'Карты',
  currency: 'Валюта',
  BMT: 'НБТ',
  buy: 'Купить',
  sell: 'Продавать',
  dollar: 'Доллар США',
  euro: 'ЕВРО',
  ruble: 'Российский рубль',
  calculatorError: 'Сумма и месяц должны быть между минимумом и максимумом.',
  SSB: 'Саноатсодиротбанк',
  subscribe: 'Подписаться',
  information: 'Информация',
  addressDetails: '734018, Республика Таджикистан, ш. Душанбе, пр. С. Ширози 21 Н/М: 20402972016551, RMA: 020039715, RMB: 350101655',

  //Deposit page
  minimumAmount: 'Минимальная сумма',
  termDeposit: 'Срок вклада',

  //Credit page
  interestRateAnnual: 'Процентная ставка (годовая)',
  maximumLoanAmount: 'Максимальная сумма кредита',

  //Sales page
  saleProperty: 'Продажа имущества',
  salePropertyDetail: 'Для дополнительной информации обращаться по телефону +992 (44)-630-51-15, +992 (44)-630-21-62.',
  number: 'Нет',
  regionsRepublic: 'Регионы республики',
  price: 'Цена',

  //Gallery
  gallery: 'Галерия',
  photo: 'Фото',
  video: 'Видео',

  ourLocation: 'Мы здесь',
  office: 'Офис',
  ATM: 'Банкомат',
  POS: 'ПОС терминалы',


  // Old Data
  search: 'Поиск',
  searchResult: 'Резултать поиска',
  yourAddress: 'Ваш адрес',
  headerListPage: [
    {
      id: 1,
      link: `/?type=${1}`,
      svg: '#onePerson',
      text: 'Физические лица',
      mobileText: 'Лица',
      child: [
        {
          link: `/Deposit?type=${1}`,
          name: 'deposits',
          text: 'Депозиты',
        },
        {
          link: `/Credit?type=${1}`,
          name: 'credits',
          text: 'Кредиты',
        },
        {
          link: `/transfers?type=${1}`,
          name: 'transfers',
          text: 'Денежные переводы',
        },
        {
          link: `/Card?type=${1}`,
          name: 'cards',
          text: 'Карты',
        },
        {
          link: `/rko?type=${1}`,
          name: 'rko',
          text: 'Расчетно-кассовое обслуживание',
        },
        {
          link: `/safe-operations?type=${1}`,
          name: 'safe-operations',
          text: 'Безопасные операции',
        },
        {
          link: `/SSB-mobile?type=${1}`,
          name: 'SSB-mobile',
          text: 'ССБ мобайл',
        },
      ]
    },
    {
      id: 2,
      link: `/legal-person?type=${2}`,
      svg: '#twoPerson',
      text: 'Юридические лица',
      mobileText: 'Юридическое лицо',
      child: [
        {
          link: `/Deposit?type=${2}`,
          name: 'deposits',
          text: 'Депозиты',
        },
        {
          link: `/Credit?type=${2}`,
          name: 'credits',
          text: 'Кредиты',
        },
        {
          link: `/rko?type=${2}`,
          name: 'rko',
          text: 'Расчетно-кассовое обслуживание',

        },
        {
          link: `/services?type=${2}`,
          name: 'services',
          text: 'Услуги',
        },
        {
          link: `/SSB-mobile?type=${2}`,
          name: 'SSB-mobile',
          text: 'ССБ мобайл',

        },
      ]
    },
    {
      id: 3,
      link: `/financial-organization?type=${3}`,
      svg: '#dollar',
      text: 'Финансовые институты',
      mobileText: 'Фин институты',
      child: [
        {
          link: `/correspondence?type=${3}`,
          name: 'correspondence',
          text: 'Корреспонденция',
        },
        {
          link: `/sale?type=${3}`,
          name: 'sale',
          text: 'Продажа недвижимости',
        },
        {
          link: `/interbank-lending?type=${3}`,
          name: 'interbank-lending',
          text: 'Межбанковское кредитование',
        },
        {
          link: `/services?type=${3}`,
          name: 'services',
          text: 'Услуги',
        },
      ]
    },
    {
      id: 4,
      link: `/about?type=${4}`,
      svg: '#home',
      text: 'О Банке',
      mobileText: 'About us',
      child: [
        {
          link: `/about-bank?type=${4}`,
          name: 'about-bank',
          text: 'О Банке',
        },
        {
          link: `/documents?type=${4}`,
          name: 'documents',
          text: 'Документы',
        },
        {
          link: `/history?type=${4}`,
          name: 'history',
          text: 'История банка',
        },
        {
          link: `/news?type=${4}`,
          name: 'press-center',
          text: 'Пресс-центр',
        },
        {
          link: `/head?type=${4}`,
          name: 'head',
          text: 'Правление',
        },
        {
          link: `/structure?type=${4}`,
          name: 'structure',
          text: 'Структура',
        },
        {
          link: `/gallery?type=${4}`,
          name: 'gallery',
          text: 'Галерея',
        },
        {
          link: `/addresses?type=${4}`,
          name: 'addresses',
          text: 'Адреса',
        },
        {
          link: `/rights?type=${4}`,
          name: 'rights',
          text: 'Права клиента'
        },
      ]
    },
  ],
  advantages: [
    {
      id: 1,
      title: '',
      description: 'Государственная гарантия',
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
      description: 'Доступные процентные ставки',
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
      description: 'Кредиты в национальной валюте',
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
      description: 'Краткосрочное рассмотрение',
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
      description: 'Кредиты от 1 до 5 лет',
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
      description: 'Наши ценности — клиент прежде всего, постоянное развитие, честность и добросовестность в работе.'
    },
    {
      id: 2,
      isReverse: true,
      img: {
        src: '/image/values/2.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Приоритет клиента. Мы уважаем пожелания наших клиентов, предоставляем своевременные, качественные и комплексные услуги, понимая их требования и соблюдая принцип равенства.'
    },
    {
      id: 3,
      isReverse: false,
      img: {
        src: '/image/values/3.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Постоянное развитие. Все наши усилия направлены на самосовершенствование, творчество, инновации и постоянный поиск лучших средств и возможностей для эффективной работы Банка.'
    },
    {
      id: 4,
      isReverse: true,
      img: {
        src: '/image/values/4.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Честность и порядочность. Наша деятельность основана на принципах честности, порядочности и обеспечения прозрачности в отношениях с коллегами и клиентами.'
    },
  ],
  footer: {
    pages: [
      {
        id: 1,
        name: 'Банк',
        classWidth: 'w-[27%]'
      },
      {
        id: 2,
        name: 'Услуги',
        classWidth: 'w-[27%]',
        showChild: false,
        child: [
          {
            id: 1,
            link: `/?type=${1}`,
            text: 'Лица',
            child: [
              {
                link: `/Deposit?type=${1}`,
                name: 'deposits',
                text: 'Депозиты',
              },
              {
                link: `/Credit?type=${1}`,
                name: 'credits',
                text: 'Кредиты',
              },
              {
                link: `/transfers?type=${1}`,
                name: 'transfers',
                text: 'Денежные переводы',
              },
              {
                link: `/Card?type=${1}`,
                name: 'cards',
                text: 'Карты',
              },
              {
                link: `/rko?type=${1}`,
                name: 'rko',
                text: 'Расчетно-кассовое обслуживание',
              },
              {
                link: `/safe-operations?type=${1}`,
                name: 'safe-operations',
                text: 'Безопасные операции',
              },
              {
                link: `/SSB-mobile?type=${1}`,
                name: 'SSB-mobile',
                text: 'ССБ-мобайл',
              },
            ]
          },
          {
            id: 2,
            link: `/legal-person?type=${2}`,
            text: 'Юридические лица',
            child: [
              {
                link: `/Deposit?type=${2}`,
                name: 'deposits',
                text: 'Депозиты',
              },
              {
                link: `/Credit?type=${2}`,
                name: 'credits',
                text: 'Кредиты',
              },
              {
                link: `/rko?type=${2}`,
                name: 'rko',
                text: 'Расчетно-кассовое обслуживание',
              },
              {
                link: `/services?type=${2}`,
                name: 'services',
                text: 'Услуги',
              },
              {
                link: `/SSB-mobile?type=${2}`,
                name: 'SSB-mobile',
                text: 'ССБ-мобайл',
              },
            ]
          },
          {
            id: 3,
            link: `/financial-organization?type=${3}`,
            text: 'Финансовые институты',
            child: [
              {
                link: `/correspondence?type=${3}`,
                name: 'correspondence',
                text: 'Корреспондеция',
              },
              {
                link: `/sale?type=${3}`,
                name: 'sale',
                text: 'Продажа недвижимости',
              },
              {
                link: `/interbank-lending?type=${3}`,
                name: 'interbank-lending',
                text: 'Межбанковское кредитование',
              },
              {
                link: `/services?type=${3}`,
                name: 'services',
                text: 'Услуги',
              },
            ]
          },
          {
            id: 4,
            link: `/about?type=${4}`,
            text: 'О нас',
            child: [
              {
                link: `/about-bank?type=${4}`,
                name: 'about-bank',
                text: 'О Банке',
              },
              {
                link: `/documents?type=${4}`,
                name: 'documents',
                text: 'Документы',
              },
              {
                link: `/history?type=${4}`,
                name: 'history',
                text: 'История банка',
              },
              {
                link: `/press-center?type=${4}`,
                name: 'press-center',
                text: ' Пресс-центр',
              },
              {
                link: `/head?type=${4}`,
                name: 'head',
                text: 'Правление',
              },
              {
                link: `/structure?type=${4}`,
                name: 'structure',
                text: 'Структура',
              },
              {
                link: `/gallery?type=${4}`,
                name: 'gallery',
                text: 'Галерея',
              },
              {
                link: `/addresses?type=${4}`,
                name: 'addresses',
                text: 'Адреса',
              }
            ]
          },
        ]
      },
      {
        id: 3,
        name: 'Объявления',
        classWidth: 'w-[19%]',
        showChild: false,
        child: [
          {
            text: 'Вакансии',
            link: '/vacancy'
          },
          {
            text: 'Тендеры',
            link: '/tenders'
          },
          {
            text: 'Продажа недвижимости',
            link: '/sale'
          },
          {
            text: 'Новости',
            link: '/news'
          },
          {
            text: 'Контакты',
            link: '/contact-us'
          }
        ],
      },
      {
        id: 4,
        name: 'Подписывайтесь на нашу новостную рассылку',
        classWidth: 'w-[27%]',
        child: 'Подписавшись на нашу рассылку, вы будете получать новости еженедельно',
      },
    ],
    phones: [
      {
        text: 'Рабочие дни: с понедельника по пятницу с 08:00 до 17:00 <br> Суббота: с 9:00 до 12:00 «День приема граждан».<br> Воскресенье: выходной',
        phone: "Рабочее время",
      },
      {
        text: "Для звонков из любой точки мира",
        phone: "+992 44 601 40 40",
      },

      {
        text: "Горячая линия Национального Банка Таджикистана",
        phone: "+992 44 600 15 20",
      },
      {
        text: "Для звонков по Таджикистану",
        phone: "8855",
      },
    ],
    manuals: [
      {
        name: "Национальная стратегия развития Республики Таджикистан на период до 2030 года",
        link: "/documents/1- Стратегияи_миллии_рушди_Чумхурии_Точикистон_барои_давраи_то_соли.pdf",
      },
      {
        name: "Национальная стратегия финансовой доступности Республики Таджикистан на 2022 - 2026 годы",
        link: "/documents/2- Стратегияи_миллии_фарогирии_молиявии_Чумхурии_Точикистон_барои_солхои.pdf",
      },
      {
        name: "Среднесрочная программа развития Республики Таджикистан на 2016-2020 годы ",
        link: "/documents/3 - Барномаи_миёнамухлати_рушди_Чумхурии_Точикистон_барои_солхои_2016.pdf",
      },
    ],
  },
  currency: {
    title: 'Обменный курс',
    tabs: [
      {
        id: 1,
        text: "Физические лица",
        api: "NON_CASH",
      },
      {
        id: 2,
        text: " Юридические лица",
        api: "Waiting for API",
      },
      {
        id: 3,
        text: "Перевод денег",
        api: "TRANSFER",
      },
      {
        id: 4,
        text: "Карты (физические лица)",
        api: "CardTransfer",
      },
    ],
    currency: 'Валюта',
    bmt: 'БМТ',
    purchase: 'Покупка',
    sale: 'Продажа'
  },
  bannerMobile: {
    title: 'Приложение "SSB Mobile" от Саноатсодиротбанка',
    description: 'Оплата кредитов и процентов по ним, прием вкладов, переводы на все национальные карты и карты России, переводы на электронные кошельки банков по Таджикистану и за границу, оплата ЖКХ, комиссий интернет-провайдеров, комиссий мобильной связи, ТВ, радио и др. услуги в приложении "SSB Mobile".<br><br>Скачай "SSB Mobile" и оплачивай все услуги онлайн через это приложение.',
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
          text: '2022-2026 «Годы развития промышленности»',
          image: {
            src: '/image/links/rushdisanoat_tj.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/category/umuri-bonkdor/'
        },
        {
          id: 2,
          text: 'Послания и выступления Основателя национального мира и единства – Лидера нации, Президента Республики Таджикистан Эмомали Рахмона',
          image: {
            src: '/image/emblem.webp',
            alt: 'President Image'
          },
          link: 'http://www.president.tj/taxonomy/term/5/68'
        },
        {
          id: 3,
          text: '35-летие Государственной Независимости Республики Таджикистан',
          image: {
            src: '/image/links/35soliistiqloliyat.png',
            alt: 'Emblem Image'
          },
          link: 'https://khovar.tj/category/27-solagii-isti-loliyat/'
        },
        {
          id: 4,
          text: 'Официальный сайт Президента Республики Таджикистан',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://president.tj/'
        },
        {
          id: 5,
          text: 'Национальный банк Таджикистана',
          image: {
            src: '/image/links/bank.jpg',
            alt: 'Bank Image'
          },
          link: 'https://nbt.tj/'
        },
        {
          id: 6,
          text: 'Национальное информационное агентство Таджикистана',
          image: {
            src: '/image/links/hovar.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/'
        },
        {
          id: 7,
          text: 'Министерство финансов Республики Таджикистан',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://minfin.tj/'
        },
      ],
      linksTitle: 'Полезные ссылки',
      applicationTitle: 'Заявки',
      newsTitle: 'Новости',
      socialTitle: 'Мы в социальных сетях',
      popularProductsTitle: 'Доступные продукты'
    },
    organizationDocuments: {
      title: 'Документы'
    },
    legalPerson: {
      title: 'Аспект предпринимательства и развития бизнеса',
      cards: [
        {
          id: 1,
          background: "#EDF7FD",
          title: "Кредит на развитие производства и увеличение объемов производства",
          description: "",
          img: {
            src: "/image/legalPerson/14_new_resized2.png",
            alt: "bank Image",
          },
          button: "Подробнее",
          link: "https://ssb.tj/Credit/13?type=1",
        },
        {
          id: 2,
          background: "#ECEBFE",
          title: "Финансирование юридических лиц и индивидуальных предпринимателей для уплаты таможенных платежей и приравненных к ним платежей",
          description: "",
          img: {
            src: "/image/legalPerson/favri(optimized)_resized.png",
            alt: "bank Image",
          },
          button: "Подробнее",
          link: "http://ssb.tj/Credit?type=2",
        },
        {
          id: 3,
          background: "#EEEFF6",
          title: "Легко и удобно управлять счетами через интернет-банкинг.",
          description: "",
          img: {
            src: "/image/legalPerson/e-banking(resized).png",
            alt: "bank Image",
          },
          button: "Подробнее",
          link: "https://ibank.ssb.tj/v1/Login",
        },
        {
          id: 4,
          background: "#EFF8FB",
          title: "Развитие бизнеса - купля-продажа товаров и продуктов, услуг, выполнение работ, строительство, приобретение зданий, других сооружений, капитальных средств (приборов и машин, машин), для начала или расширения предпринимательской деятельности.",
          description: "",
          img: {
            src: "/image/legalPerson/ssb_sohibkori_resized.png",
            alt: "bank Image",
          },
          button: "Подробнее",
          link: "https://ssb.tj/Credit/5?type=1",
        },
      ],
      links: [
        {
          id: 1,
          text: '2022-2026 «Годы развития промышленности»',
          image: {
            src: '/image/links/rushdisanoat_tj.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/category/umuri-bonkdor/'
        },
        {
          id: 2,
          text: 'Послания и выступления Основателя национального мира и единства – Лидера нации, Президента Республики Таджикистан Эмомали Рахмона',
          image: {
            src: '/image/emblem.webp',
            alt: 'President Image'
          },
          link: 'http://www.president.tj/taxonomy/term/5/68'
        },
        {
          id: 3,
          text: '35-летие Государственной Независимости Республики Таджикистан',
          image: {
            src: '/image/links/35soliistiqloliyat.png',
            alt: 'Emblem Image'
          },
          link: 'https://khovar.tj/category/27-solagii-isti-loliyat/'
        },
        {
          id: 4,
          text: 'Официальный сайт Президента Республики Таджикистан',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://president.tj/'
        },
        {
          id: 5,
          text: 'Национальный банк Таджикистана',
          image: {
            src: '/image/links/bank.jpg',
            alt: 'Bank Image'
          },
          link: 'https://nbt.tj/'
        },
        {
          id: 6,
          text: 'Национальное информационное агентство Таджикистана',
          image: {
            src: '/image/links/hovar.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/'
        },
        {
          id: 7,
          text: 'Министерство финансов Республики Таджикистан',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://minfin.tj/'
        },
      ],
      linksTitle: 'Полезные ссылки',
      newsTitle: 'Новости',
      socialTitle: 'Мы в социальных сетях'
    },
    rko: {
      banner: {
        title: 'Финансовые услуги',
        description: 'Саноатсодиротбанк предлагает все виды финансовых услуг',
        image: '/image/hazinavi_records1.png',
        button: 'Отправить запрос'
      },
      listTitle: 'Саноатсодиротбанк предлагает все виды финансовых услуг, в том числе:',
      list: [
        {
          id: 1,
          text: 'открытие и ведение счетов в национальной и иностранной валюте для резидентов и нерезидентов Республики Таджикистан;',
        },
        {
          id: 2,
          text: 'перевод средств клиентов с их счетов;'
        },
        {
          id: 3,
          text: 'снятие наличных со счетов;'
        },
        {
          id: 4,
          text: 'предоставление информации об операциях по счету;'
        },
        {
          id: 5,
          text: 'прием и зачисление денежных средств на счета;'
        },
        {
          id: 6,
          text: 'инкассация денежных средств и доставка ценностей;'
        }
      ],
      description: 'Мы гарантируем быструю обработку ваших платежей в кратчайшие сроки в нашей операционной, где специалисты могут оказать необходимую услугу, а также полезные советы.',
      documentsTitle: 'Тарифы на оплату банковских услуг согласно Тарифам на услуги КВД БССТ "Саноацодиротбанк"',
      documents: [
        {
          id: 1,
          name: 'Тарифы на оплату банковских услуг согласно Тарифам на услуги КВД БССТ "Саноацодиротбанк"',
          size: '',
          link: '/documents/rko.pdf',
          type: 'pdf'
        },
      ]
    },
    transfers: {
      title: 'Денежные переводы',
      cards: [
        // {
        //   id: 1,
        //   img: {
        //     src: "/image/transfers/1.png",
        //     alt: "Contact",
        //   },
        //   type: "transfers",
        //   title: "CONTACT",
        //   description: "Система CONTACT имеет большую сеть сервисов по всему миру, что позволяет переводить и оплачивать деньги по всему миру.",
        //   options: [
        //     "1- Валюта перевода: Российский рубль, доллар США, ЕВРО<br>2- Комиссия за обслуживание: от 1%, а также в зависимости от суммы и страны<br>3- Комиссия за обслуживание: 0% для импортных переводов<br>4- Телефон для информации",
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
          description: "Международная платежная система Юнистрим — одна из самых престижных систем в России и странах СНГ.",
          options: [
            "1. Данная система доставки действует в большинстве стран мира;<br>2. Валюта доставки: российский рубль, доллар США и ЕВРО;<br>3. Скорость перевода денег - от 5 минут;<br>4. Комиссия за услугу: от 0,5% до 1,5% также в зависимости от суммы и страны;",
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
            "Система внутрибанковских денежных переводов «Зудрас» осуществляется только в пределах Республики Таджикистан и только через КВД БССТ «Саноатсодиротбанк», и действует во всех частях Таджикистана, областях и областях, городах и районах между филиалами и сервисными центрами банка.",
          options: [
            "1. Сумма перевода: национальная валюта - сомони 2. Комиссия за обслуживание: плата за обслуживание при оплате денежных переводов физическим лицам не взимается;<br>3. Плата за обслуживание при внутриреспубликанском переводе денежных средств физических лиц из одного региона в другой через структурные подразделения КВД БССТ «Саноатсодиротбанк»<br>4. 0,5% от суммы перевода 5. Телефон для информации:",
          ],
        },
      ]
    },
    services: {
      title: 'Услуги',
      cards: [
        {
          id: 1,
          img: {
            src: "/image/salary_project.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Зарплатные проекты",
          description: "",
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
              id: 1,
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
          title: "Банковские гарантии",
          description: "",
          link: "",
          advantages: [
            {
              id: 1,
              title: "Тендерная гарантия",
              description: "",
            },
            {
              id: 2,
              title: "Гарантия исполнения контракта",
              description: "",
            },
            {
              id: 1,
              title: "Гарантия уплаты таможенных пошлин",
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
          title: "Транспортные услуги",
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
          title: "Безопасные операции",
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
        title: "Приложение 'SSB Mobile' от Саноатсодиротбанка",
        description: "Лучшее приложение мобильного банкинга",
        image: "/image/ssb_mobile.png",
        buttonDownload: {
          text: "Скачать",
          scroll: true,
          link: "/SSB-mobile?type=1#mobile-application-download",
        },
      },
      title: 'Услуги',
      advantages: [
        {
          id: 1,
          description: "Доставка на все национальные платежные карты и карты России",
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
          description: "Перевод на электронные кошельки банков в Таджикистане и за рубежом",
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
          description: "Банковское сотрудничество",
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
          description: "Оплата интернет-провайдеров",
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
          description: "Другие услуги",
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
        title: 'Скачайте «SSB Mobile» и оплачивайте все услуги онлайн через это приложение.',
        description: "Оплата кредита и проценты по нему; Прием вкладов; Перевод на все национальные платежные карты и карты России; Перевод на электронные кошельки банков в Таджикистане и за рубежом; Оплата коммунальных услуг; Тарифы интернет-провайдеров; Плата за мобильную связь; Количество ТВ, радио и других сервисов в приложении `SSB Mobile`."
      }
    },
    correspondence: {
      title: 'Корреспондентские отношения',
      table: {
        header: [
          {
            text: '№',
            color: 'white'
          },
          {
            text: 'Страна',
            color: 'white'
          },
          {
            text: 'Название банка',
            color: 'white'
          },
          {
            text: 'Валюта',
            color: 'white'
          },
          {
            text: 'Счет',
            color: 'white'
          },
          {
            text: 'Адрес',
            color: 'white'
          },
        ],
        body: [
          {
            id: 1,
            country: 'Россия',
            nameBank: 'Межгосударственный банк Interstate Bank',
            currency: 'USD <br> EUR <br> RUB',
            numberScore: '30111840000000000061 30111978600000000061 30111810700000000061',
            requisites: 'Адрес места нахождения/ почтовый адрес: 115162 г. Москва, ул. Шухова, д. 15; тел./ факс: +7 (495) 954-9258, 954-4354, Telex 914790 ISBNK RU, E-mail: isbnk@isbnk.ru ИНН 9909400764, КПП 774763001, ОГРН 1027739567228, Код ОКВЭД: 99,00, код ОКПО: 00010263 БИК 044525362 Swift: INEARUMMAXXX',
            background: 'background'
          },
          {
            id: 2,
            country: 'Узбекистан',
            nameBank: 'Акционерное общество «Национальный банк внешнеэкономической деятельности Республики Узбекистан»JOINT- STOCK COMPANY NATIONAL BANK FOR FORIENG ECONOMIC OF THE REPUBLIC OF UZBEKISTAN',
            currency: 'USD <br> EUR',
            numberScore: '21002840000090235001 21002978900090235001',
            requisites: '100084, Республика Узбекистан, г. Ташкент, пр. Амира Темура 101; тел. +998 78-147-15-70 МФО 00450; ИНН 200836354; Swift: NBFAUZ2X'
          },
          {
            id: 3,
            country: 'Туркия',
            nameBank: 'Aktif Yatırım Bankası A.Ş.',
            currency: 'USD <br> EUR <br> CNY',
            numberScore: 'TR150014300000000014203702 TR340014300000000014203748 TR550014300000000014203758',
            requisites: 'Aktif Bank Genel Müdürlük Esentepe Mahallesi Kore Şehitleri Caddesi No: 8/1 Şişli 34394 İstanbul T. 0212 340 80 00 F. 0212 340 88 79 SWIFT: CAYTTISXXX'
          },
        ],
      }
    },
    sale: {
      title: 'Продажа недвижимости',
      description: 'Дополнительную информацию можно получить по телефону +992 (44)-630-51-15, +992 (44)-630-21-62.',
      table: {
        header: [
          {
            text: '№'
          },
          {
            text: 'Регионы республики'
          },
          {
            text: 'Заложенное имущество'
          },
          {
            text: 'Цена'
          },
        ],
      }
    },
    history: {
      banner: {
        title: 'Саноатсодиротбанк',
        description: 'Возможность получения кредита в национальной валюте по доступным процентным ставкам',
        image: '/image/bank_history.png'
      },
      title: 'ПРОМЫШЛЕННЫЙ БАНК ОТ НАЧАЛА ДО СЕГОДНЯ!',
      list: [
        '1. Постановлением Правительства Республики Таджикистан № 34 от 5 февраля 2013 года при Государственном комитете по инвестициям и управлению государственным имуществом Республики Таджикистан создано государственное учреждение «Фонд поддержки предпринимательства».',
        '2. Постановлением Правительства Республики Таджикистан № 62 от 14 февраля 2015 года организационно-правовая форма Государственного учреждения «Фонд поддержки предпринимательства» изменена и преобразована в Государственное учреждение «Фонд поддержки предпринимательства при Правительство Республики Таджикистан».',
        '3. Постановлением Правительства Республики Таджикистан от 25 июня 2020 года № 390 государственное учреждение «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан» преобразовано в государственное унитарное предприятие Промышленно-экспортного Банк Таджикистана "Саноатсодиротбанк".',
        '23 октября 2020 года КВД БССТ «Саноатсодиротбанк» стал обладателем лицензии БМТ №0000126, что повышает ответственность Банка перед своими клиентами и призывает нас к честному и добросовестному обслуживанию. КВД БССТ "Саноатсодиротбанк" начал свою деятельность под лозунгом "Наша цель - Ваш успех" и укрепляет свои позиции в качестве государственного банка на межбанковском рынке.',
        'На данный момент Банк предлагает услуги по приему вкладов, переводу денег, платежным картам, открытию счета, выдаче кредитов, депозитным операциям, расчетным операциям, обмену старых денег для физических и юридических лиц.',
        'В 2021-2022 годах в целях развития деятельности Банка и обслуживания клиентов регионов страны, в 2021-2022 годах филиалы Банка в городе Худжанд Согдийской области, городах Бохтар, Куляб, Начали работу Дангара Хатлонской области, город Хорог Горно-Бадахшанской автономной области и центр банковского обслуживания в Раштском районе.'
      ]
    },
    news: {
      title: 'Новости',
      answer: 'Перейти к ответам прессе'
    },
    structure: {
      title: 'Структура'
    },
    gallery: {
      title: 'Галерея',
      photo: 'Фотографии',
      video: 'Видео'
    },
    addresses: {
      title: 'Мы находимся тут',
      tabs: [
        {
          id: 1,
          text: "Офисы",
        },
        {
          id: 2,
          text: "Банкоматы",
        },
        {
          id: 3,
          text: "POS терминалы",
        },
      ],
    },
    question: {
      title: 'Перейти к ответам прессе'
    },
    head: {
      title: 'Основатель',
      subTitle: 'Правительство Республики Таджикистан',
      leaderTitle: 'Руководство',
      leader: [
        {
          id: 1,
          name: "БОБОЗОДА ХОКИМШОХ ДЖУРАХОН",
          post: "Председатель Правления ГУП ПЭБТ “Саноатсодиротбонк”",
          img: {
            src: "/image/head/1.JPG",
            alt: "Profile",
          },
        },
        {
          id: 2,
          name: "ГАРИБШОЗОДА АЗИЗШО КИМАТШО",
          post: "Первый заместитель Председателя Правления ГУП ПЭБТ “Саноатсодиротбонк“",
          img: {
            src: "/image/head/2.JPG",
            alt: "Profile",
          },
        },
        {
          id: 3,
          name: "МУХИДДИНЗОДА ШУХРАТ ФАРИДУН",
          post: "Заместитель Председателя Правления ГУП ПЭБТ “Саноатсодиротбонк“",
          img: {
            src: "/image/head/3.JPG",
            alt: "Profile",
          },
        },
      ],
      boardTitle: 'Члены правления',
      board: [
        {
          id: 1,
          name: "БОБОЗОДА ХОКИМШОХ ДЖУРАХОН",
          post: "Председатель Правления ГУП ПЭБТ “Саноатсодиротбонк“",
          img: {
            src: "/image/head/1.JPG",
            alt: "Profile",
          },
        },
        {
          id: 2,
          name: "ГАРИБШОЗОДА АЗИЗШО КИМАТШО",
          post: "Первый заместитель Председателя Правления ГУП ПЭБТ “Саноатсодиротбонк“",
          img: {
            src: "/image/head/2.JPG",
            alt: "Profile",
          },
        },
        {
          id: 3,
          name: "МУХИДДИНЗОДА ШУХРАТ ФАРИДУН",
          post: "Заместитель Председателя Правления ГУП ПЭБТ “Саноатсодиротбонк“",
          img: {
            src: "/image/head/3.JPG",
            alt: "Profile",
          },
        },

        {
          id: 4,
          name: "МАДЖИДИ ЮСУФ ХАЙРУЛЛО",
          post: "Заместитель Министра финансов Республики Таджикистан",
          img: {
            src: "/image/board/5.jpg",
            alt: "Profile",
          },
        },
      ],
    },

    aboutBank: {
      banner: {
        title: 'Бобозода Хокимшох Джурахон <br> Председатель Правления ГУП ПЭБТ <br>“Саноатсодиротбонк”',
        description: '',
        image: '/image/head/1.JPG'
      },
      description: 'Уважаемые клиенты и соотечественники!<br><br> Как всем известно, в последние годы усилилось внимание Правительства Республики Таджикистан к улучшению делового климата как движущего фактора экономического развития, проведена значительная работа в направлении экономических реформ, и тем самым заложена основа в направлении привлечения иностранных инвестиций и прямого бюджетного финансирования предпринимательской деятельности.<br><br> В этом процессе, в целях дальнейшего усиления развития предпринимательства и создания здоровой деловой среды, Постановлением Правительства Республики Таджикистан №34 от 5 февраля 2013 года было создано Государственное учреждение «Фонд поддержки предпринимательства».<br><br> Целью создания данного Фонда было содействие процессу выстраивания рыночных отношений на основе поддержки бизнеса и развития конкуренции с эффективными способами реализации государственных программ и производственных приоритетов, проектов и финансирования деятельности в сфере малого и среднего бизнеса, обеспечения рынка товаров, создания новых рабочих мест, защиты и финансовой поддержки инновационной деятельности в сферах бизнеса, стимулирования инноваций и производства новых видов продукции, создания здоровой бизнес-среды в сфере услуг, в ходе чего данный фонд также достиг желаемых результатов.<br><br> В соответствии с выполнением пункта 19 Протокола заседания Правительства Республики Таджикистан от 29 октября 2014 года, согласно постановлению Правительства Республики Таджикистан №62 от 14 февраля 2015 года форма управления ГУП «Фонд поддержки предпринимательства» изменена на ГУП «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан».<br><br> Основной целью ГУП «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан» было содействие процессу построения рыночных отношений на основе поддержки бизнеса и развития конкуренции с эффективными способами продвижения государственных программ и производственных приоритетов, создания новых рабочих мест, защиты и финансовой поддержки предпринимательской деятельности, создания здоровой деловой среды в сфере услуг. Фонд периодически стабилизировал свой финансовый капитал, предлагая кредитные средства, и увеличил свой кредитный портфель до 150 миллионов сомони.<br><br> С 25 июня 2020 года постановлением Правительства Республики Таджикистан №390 государственное учреждение «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан» преобразовано в государственное унитарное предприятие Промышленно-экспортного банка Таджикистана «Саноатсодиротбанк».<br><br> 23 октября 2020 года КВД БССТ «Саноатсодиротбанк» получил лицензию Национального банка Таджикистана на осуществление банковской деятельности, что повысило ответственность банка перед своими клиентами. В дальнейшем Банк может расширить спектр своих услуг, открывая сберегательные и депозитные счета, услуги денежных переводов и кредитования в национальной и иностранной валюте, наряду с существующими кредитными продуктами. <br><br> Возросла ответственность руководства и каждого сотрудника перед клиентами и сотрудниками, и мы продолжим свою деятельность во исполнение поручений и распоряжений Основателя национального мира и единства, Лидера нации, Президента Республики Таджикистан уважаемого Эмомали Рахмона, в целях успешной и реализации стратегических планов, укрепления позиций Саноатсодиротбанка на межбанковском рынке Республики на основе большей поддержки отечественных предпринимателей, повышения качества банковских услуг.<br><br> Мы готовы внести свой ценный вклад в празднование 35-летия дорогого Таджикистана при финансовой поддержке отечественных предпринимателей. Наша цель – благоприятные инвестиционные возможности отечественных предпринимателей и развитие экспортоориентированной и импортозамещающей отечественной продукции с привлечением отечественного капитала.<br><br> Мы продолжаем развиваться в сфере в направлении внутренних инвестиций, ищем новые направления и предлагаем новые проекты нашим клиентам.<br><br> Мы готовы к сотрудничеству и поддержке реальных выгодных проектов. Вместе мы укрепим фундамент независимости.<br><br> Уважаемые клиенты и предприниматели,  мы будем работать вместе для значительных достижений страны под лозунгом «Наша цель — ваш успех».'
    },
    rights: {
      banner: {
        title: 'ГУП ПЭБТ “Саноатсодиротбонк“"',
        description: 'Наша цель - Ваш успех!',
        image: '/image/ssb.webp'
      },
      title: 'Базовые Права клиента',
      list: ['Каждый клиент ГУП ПЭБТ «Саноатсодиротбонк» имеет право направить в банк жалобу/предложение относительно качества услуг банка. Ваши жалобы/предложения будут направлены на дальнейшее развитие деятельности банка и улучшение качества обслуживания.', 'Информация о порядке приема и рассмотрения обращений потребителей.', 'Порядок приема и рассмотрения обращений потребителей в Саноатсодиротбонке основан на Законе Республики Таджикистан «Об обращениях физических и юридических лиц». Рассмотрение всех жалоб и жалоб клиентов рассматривается должностными лицами Саноатсодиротбонка в сроки, установленные Законом Республики Таджикистан «Об обращениях физических и юридических лиц». Общий срок рассмотрения обращений не может превышать 30 календарных дней. В частности, заявитель будет уведомлен в течение трех рабочих дней.', 'Информация о порядке подачи обращений потребителей, в том числе жалоб на действия (бездействие) работников финансово-кредитной организации, с указанием контактных данных (номер телефона, адрес, имя и фамилия) с ответственными лицами финансово-кредитной организации, к которым потребители могут защитить свои права, они могут обращаться сами.'],
      rulesTitle: 'Саноатсодиротбонк принимает обращения (жалобы) клиентов в письменной и устной форме. Письменная жалоба включает в себя:',
      rules: ['Жалобы подаются в бумажном виде (вручную или в электронном виде) и при личном приеме и/или по почте;', 'Жалобы через официальную электронную почту Банка;', 'Размещение жалоб в книге жалоб структурных подразделений Банка;', 'Жалобы на официальном сайте Банка;', 'Претензии и жалобы в социальных сетях Интернета, то есть страницах Банка или страницах, на которых зарегистрирован Банк.'],
      lamentTitle: 'Устные жалобы включают в себя:',
      lament: ['Запрос и жалоба по телефону в Контакт-центр Банка по номеру 8855;', 'При принятии Банка в управление (Председатель Правления Банка и директора филиалов);', 'Следует отметить, что в Саноатсодиротбонке   существует отдельная структура, отвечающая за обращения (жалобы) клиентов. (Общий отдел банка)'],
      other: ['Адрес: 734013, Республика Таджикистан, г. Душанбе, пр. С. Шерози 21', 'Телефон: 8855, +992 44 630 51 18;', 'Адрес электронной почты: (info@ssb.tj)', 'Спасибо за ссылку!']
    }
  }
}
