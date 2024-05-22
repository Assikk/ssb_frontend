import vacancy from './en/vacancy'
import credit from './en/credit'
import deposit from './en/deposit'
import gold from './en/gold'
import reception from './en/reception'
export default {
  vacancy: vacancy,
  credit: credit,
  deposit: deposit,
  gold: gold,
  reception: reception,
  advtg:'ADVANTAGES',
  msn:'MISSION',
  msn_text:"The Bank's mission is to implement state policy in the direction of financial support for the development of production potential, promoting the export of industrial goods and the production of import-substituting products in the republic, as well as the dreams, goals and requirements of our clients form the basis of our activities.",
  vls_about:'VALUES',
  // Personal name
  name: 'Name',
  familyName: 'Family Name',
  phone: 'Phone',
  email: 'Email',
  muff: 'More details',
  // Vacancies
  region: 'Region',
  deadline: 'Application Deadline',
  responsibilities: 'Main Responsibilties:',
  //Cards
  doc_card_visa:'Bank Visa card rates',
  doc_card_guide:'The procedure for providing services using bank cards',
  doc_swift_rates:'Cost of service via SWIFT',
  //Structure
  res_doc:'Bank regulations and charter',

  // Titles
  internetBanking: 'Internet Banking',
  recommandedProducts: 'Recommanded Products',
  requests: 'Requests',
  loanCalculator: 'Loan calculator',
  bankPermenentMember: 'Bank permanent member',
  approvalRequest: 'Approval Request',
  sendRequest: 'Send request',
  readMore: 'Read more',
  exchangeRate: 'Exchange rate',
  realPersons: 'Real persons',
  legalEntities: 'Legal entities',
  moneyTransfer: 'Money transfer',
  cards: 'Cards',
  currency: 'Currency',
  BMT: 'BMT',
  buy: 'Buy',
  sell: 'Sell',
  dollar: 'USD Dollar',
  euro: 'Euro',
  ruble: 'Russian Ruble',
  calculatorError: 'Amount and month must be between minimum and maximum.',
  SSB: 'Sanoatsodirotbank',

  information: 'Information',
  addressDetails: '734018, Republic of Tajikistan, sh. Dushanbe, S. Ave. Shirozi 21 H/M: 20402972016551, RMA: 020039715, RMB: 350101655',

  //Deposit page
  minimumAmount: 'Minimum amount',
  termDeposit: 'Term of deposit',

  //Credit page
  interestRateAnnual: 'Interest rate (annual)',
  maximumLoanAmount: 'Maximum loan amount',

  //Sales page
  saleProperty: 'Sale of property',
  salePropertyDetail: 'For more information, contact +992 (44)-630-51-15, +992 (44)-630-21-62.',
  number: 'No.',
  regionsRepublic: 'Regions of the republic',
  price: 'Price',

  //Gallery
  gallery: 'Gallery',
  photo: 'Photo',
  video: 'Video',

  ourLocation: 'We are here',
  office: 'Office',
  ATM: 'ATM',
  POS: 'POS Terminals',
  subscribe: 'Subscribe',

  // Old Data
  search: 'Search',
  searchResult: 'Search results',
  yourAddress: 'Your address',
  headerListPage: [
    {
      id: 1,
      link: `/?type=${1}`,
      svg: '#onePerson',
      text: 'Individuals',
      mobileText: 'Inidividuals',
      child: [
        {
          link: `/Deposit?type=${1}`,
          name: 'deposits',
          text: 'Deposits'
        },
        {
          link: `/Credit?type=${1}`,
          name: 'credits',
          text: 'Loans'
        },
        {
          link: `/transfers?type=${1}`,
          name: 'transfers',
          text: 'Money transfers'
        },
        {
          link: `/Card?type=${1}`,
          name: 'cards',
          text: 'Cards'
        },
        {
          link: `/rko?type=${1}`,
          name: 'rko',
          text: 'Settlement and cash services'
        },
        {
          link: `/safe-operations?type=${1}`,
          name: 'safe-operations',
          text: 'Safe operations'
        },
        {
          link: `/SSB-mobile?type=${1}`,
          name: 'SSB-mobile',
          text: 'SSB Mobile'
        },
      ]
    },
    {
      id: 2,
      link: `/legal-person?type=${2}`,
      svg: '#twoPerson',
      text: 'Legal entities',
      mobileText: 'Legal ent',
      child: [
        {
          link: `/Deposit?type=${2}`,
          name: 'deposits',
          text: 'Deposits'
        },
        {
          link: `/Credit?type=${2}`,
          name: 'credits',
          text: 'Loans'
        },
        {
          link: `/rko?type=${2}`,
          name: 'rko',
          text: 'Settlement and cash services'

        },
        {
          link: `/services?type=${2}`,
          name: 'services',
          text: 'Services'
        },
        {
          link: `/SSB-mobile?type=${2}`,
          name: 'SSB-mobile',

          text: 'SSB Mobile',

        },
      ]
    },
    {
      id: 3,
      link: `/financial-organization?type=${3}`,
      svg: '#dollar',
      text: 'Financial institutions',
      mobileText: 'Fin institutions',
      child: [
        {
          link: `/correspondence?type=${3}`,
          name: 'correspondence',
          text: 'Correspondence',
        },
        {
          link: `/sale?type=${3}`,
          name: 'sale',
          text: 'Property sale',
        },
        {
          link: `/interbank-lending?type=${3}`,
          name: 'interbank-lending',
          text: 'Interbank lending',
        },
        {
          link: `/services?type=${3}`,
          name: 'services',
          text: 'Services',
        },
      ]
    },
    {
      id: 4,
      link: `/about?type=${4}`,
      svg: '#home',
      text: 'About us',
      mobileText: 'About us',
      child: [
        {
          link: `/about-bank?type=${4}`,
          name: 'about-bank',
          text: 'About Bank',
        },
        {
          link: `/documents?type=${4}`,
          name: 'documents',
          text: 'Documents',
        },
        {
          link: `/history?type=${4}`,
          name: 'history',
          text: 'Bank\'s history',
        },
        {
          link: `/news?type=${4}`,
          name: 'press-center',
          text: 'Press center',
        },
        {
          link: `/head?type=${4}`,
          name: 'head',
          text: 'Management Board',
        },
        {
          link: `/structure?type=${4}`,
          name: 'structure',
          text: 'Structure',
        },
        {
          link: `/gallery?type=${4}`,
          name: 'gallery',
          text: 'Gallery',
        },
        {
          link: `/addresses?type=${4}`,
          name: 'addresses',
          text: 'Addresses'
        },
        {
          link: `/rights?type=${4}`,
          name: 'rights',
          text: 'Client rights'
        },
      ]
    },
  ],
  advantages: [
    {
      id: 1,
      title: '',
      description: 'State guarantee',
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
      description: 'Available Interest Rates',
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
      description: 'Loans in national currency',
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
      description: 'Short term review',
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
      description: 'Loans from 1 to 5 years',
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
      description: 'Our values ​​are customer first, constant development, honesty and integrity in our work.'
    },
    {
      id: 2,
      isReverse: true,
      img: {
        src: '/image/values/2.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Customer priority. We respect the wishes of our clients, provide timely, high-quality and comprehensive services, understanding their requirements and respecting the principle of equality.'
    },
    {
      id: 3,
      isReverse: false,
      img: {
        src: '/image/values/3.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Constant development. All our efforts are aimed at self-improvement, creativity, innovation and the constant search for the best means and opportunities for the effective operation of the Bank.'
    },
    {
      id: 4,
      isReverse: true,
      img: {
        src: '/image/values/4.png',
        alt: 'Heart'
      },
      title: '',
      description: 'Honesty and integrity. Our activities are based on the principles of honesty, integrity and transparency in relations with colleagues and clients.'
    },
  ],
  footer: {
    pages: [
      {
        id: 1,
        name: 'Bank',
        classWidth: 'w-[27%]'
      },
      {
        id: 2,
        name: 'Services',
        classWidth: 'w-[27%]',
        showChild: false,
        child: [
          {
            id: 1,
            link: `/?type=${1}`,
            text: 'Inidividuals',
            child: [
              {
                link: `/Deposit?type=${1}`,
                name: 'deposits',
                text: 'Deposits',
              },
              {
                link: `/Credit?type=${1}`,
                name: 'credits',
                text: 'Loans',
              },
              {
                link: `/transfers?type=${1}`,
                name: 'transfers',
                text: 'Money transfers',
              },
              {
                link: `/Card?type=${1}`,
                name: 'cards',
                text: 'Cards',
              },
              {
                link: `/rko?type=${1}`,
                name: 'rko',
                text: 'Settlement and cash services',
              },
              {
                link: `/safe-operations?type=${1}`,
                name: 'safe-operations',
                text: 'Safe operations',
              },
              {
                link: `/SSB-mobile?type=${1}`,
                name: 'SSB-mobile',
                text: 'SSB Mobile',
              },
            ]
          },
          {
            id: 2,
            link: `/legal-person?type=${2}`,
            text: 'Legal entities',
            child: [
              {
                link: `/Deposit?type=${2}`,
                name: 'deposits',
                text: 'Deposits',
              },
              {
                link: `/Credit?type=${2}`,
                name: 'credits',
                text: 'Loans',
              },
              {
                link: `/rko?type=${2}`,
                name: 'rko',
                text: 'Settlement and cash services',
              },
              {
                link: `/services?type=${2}`,
                name: 'services',
                text: 'Services',
              },
              {
                link: `/SSB-mobile?type=${2}`,
                name: 'SSB-mobile',
                text: 'SSB Mobile',
              },
            ]
          },
          {
            id: 3,
            link: `/financial-organization?type=${3}`,
            text: 'Financial institutions',
            child: [
              {
                link: `/correspondence?type=${3}`,
                name: 'correspondence',
                text: 'Correspondence',
              },
              {
                link: `/sale?type=${3}`,
                name: 'sale',
                text: 'Property sale',
              },
              {
                link: `/interbank-lending?type=${3}`,
                name: 'interbank-lending',
                text: 'Interbank lending',
              },
              {
                link: `/services?type=${3}`,
                name: 'services',
                text: 'Services',
              },
            ]
          },
          {
            id: 4,
            link: `/about?type=${4}`,
            text: 'About us',
            child: [
              {
                link: `/about-bank?type=${4}`,
                name: 'about-bank',
                text: 'About Bank',
              },
              {
                link: `/documents?type=${4}`,
                name: 'documents',
                text: 'Documents',
              },
              {
                link: `/history?type=${4}`,
                name: 'history',
                text: 'Bank\'s history',
              },
              {
                link: `/press-center?type=${4}`,
                name: 'press-center',
                text: 'Press center',
              },
              {
                link: `/head?type=${4}`,
                name: 'head',
                text: 'Management Board',
              },
              {
                link: `/structure?type=${4}`,
                name: 'structure',
                text: 'Structure',
              },
              {
                link: `/gallery?type=${4}`,
                name: 'gallery',
                text: 'Gallery',
              },
              {
                link: `/addresses?type=${4}`,
                name: 'addresses',
                text: 'Addresses',
              }
            ]
          },
        ]
      },
      {
        id: 3,
        name: 'Announcements',
        classWidth: 'w-[19%]',
        showChild: false,
        child: [
          {
            text: 'Vacancies',
            link: '/vacancy'
          },
          {
            text: 'Tenders',
            link: '/tenders'
          },
          {
            text: 'Property sale',
            link: '/sale'
          },
          {
            text: 'News',
            link: '/news'
          },
          {
            text: 'Contact',
            link: '/contact-us'
          },
        ],
      },
      {
        id: 4,
        name: 'Subscribe to our newsletter',
        classWidth: 'w-[27%]',
        child: 'By subscribing to our newsletter, you will receive news weekly.',
      },
    ],
    phones: [
      {
        text: 'Working days: Monday to Friday from 08:00 to 17:00 <br> Saturday: from 09:00 to 12:00 "Citizens reception day".<br> Sunday: day off',
        phone: "Work time",
      },
      {
        text: "For calls from anywhere in the world",
        phone: "+992 44 601 40 40",
      },

      {
        text: "Hotline Natonal Bank Of Tajikistan",
        phone: "+992 44 600 15 20",
      },
      {
        text: "For calls within Tajikistan",
        phone: "8855",
      },
    ],
    manuals: [
      {
        name: "National Development Strategy of the Republic of Tajikistan for the period up to 2030",
        link: "/documents/1- Стратегияи_миллии_рушди_Чумхурии_Точикистон_барои_давраи_то_соли.pdf",
      },
      {
        name: "National Strategy for Financial Inclusion of the Republic of Tajikistan for 2022-2026",
        link: "/documents/2- Стратегияи_миллии_фарогирии_молиявии_Чумхурии_Точикистон_барои_солхои.pdf",
      },
      {
        name: "Medium-term development program of the Republic of Tajikistan for 2016-2020",
        link: "/documents/3 - Барномаи_миёнамухлати_рушди_Чумхурии_Точикистон_барои_солхои_2016.pdf",
      },
    ],
  },
  currency: {
    title: 'Exchange rate',
    tabs: [
      {
        id: 1,
        text: "Individuals",
        api: "NON_CASH",
      },
      {
        id: 2,
        text: " Legal entities",
        api: "Waiting for API",
      },
      {
        id: 3,
        text: "Money transfer",
        api: "TRANSFER",
      },
      {
        id: 4,
        text: "Cards (individuals)",
        api: "CardTransfer",
      },
    ],
    currency: 'Currency',
    bmt: 'BMT',
    purchase: 'Purchase',
    sale: 'Sale'
  },
  bannerMobile: {
    title: 'Application "SSB Mobile" from Sanoatsodirotbank',
    description: 'Payment of loans and interest on them, acceptance of deposits, transfers to all national cards and cards of Russia, transfers to electronic wallets of banks in Tajikistan and abroad, payment of housing and communal services, Internet provider commissions, mobile communication commissions, TV, radio and other services in application "SSB Mobile".<br><br>Download "SSB Mobile" and pay for all services online through this application.',
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
      // {
      //   id: 3,
      //   image: {
      //     src: "/image/apk.png",
      //     alt: "APK",
      //   },
      //   link: "/apk/ССБ Мобайл_1.0.0.11_apkcombo.com.apk",
      // },
    ],
  },
  pages: {
    main: {
      links: [
        {
          id: 1,
          text: '2022-2026 "Years of industrial development"',
          image: {
            src: '/image/links/rushdisanoat_tj.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/category/umuri-bonkdor/'
        },
        {
          id: 2,
          text: 'Messages and speeches of the Founder of National Peace and Unity - Leader of the Nation, President of the Republic of Tajikistan Emomali Rahmon',
          image: {
            src: '/image/emblem.webp',
            alt: 'President Image'
          },
          link: 'http://www.president.tj/taxonomy/term/5/68'
        },
        {
          id: 3,
          text: '35th anniversary of the State Independence of the Republic of Tajikistan',
          image: {
            src: '/image/links/35soliistiqloliyat.png',
            alt: 'Emblem Image'
          },
          link: 'https://khovar.tj/category/27-solagii-isti-loliyat/'
        },
        {
          id: 4,
          text: 'Official website of the President of the Republic of Tajikistan',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://president.tj/'
        },
        {
          id: 5,
          text: 'National Bank of Tajikistan',
          image: {
            src: '/image/links/bank.jpg',
            alt: 'Bank Image'
          },
          link: 'https://nbt.tj/'
        },
        {
          id: 6,
          text: 'National News Agency of Tajikistan',
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
      linksTitle: 'Useful links',
      applicationTitle: 'Applications',
      newsTitle: 'News',
      socialTitle: 'We are in social networks',
      popularProductsTitle: 'Available Products'
    },
    organizationDocuments: {
      title: 'Documents'
    },
    legalPerson: {
      title: 'Aspect of Entrepreneurship and Business Development',
      cards: [
        {
          id: 1,
          background: "#EDF7FD",
          title: "Credit for the development of production and increasing the volume of production",
          description: "",
          img: {
            src: "/image/legalPerson/14_new_resized2.png",
            alt: "bank Image",
          },
          button: "More",
          link: "https://ssb.tj/Credit/13?type=1",
        },
        {
          id: 2,
          background: "#ECEBFE",
          title: "Financing legal entities and individual entrepreneurs to pay customs duties and equivalent payments",
          description: "",
          img: {
            src: "/image/legalPerson/favri(optimized)_resized.png",
            alt: "bank Image",
          },
          button: "More",
          link: "http://ssb.tj/Credit?type=2",
        },
        {
          id: 3,
          background: "#EEEFF6",
          title: "Easily and conveniently manage accounts through Internet banking.",
          description: "",
          img: {
            src: "/image/legalPerson/e-banking(resized).png",
            alt: "bank Image",
          },
          button: "More",
          link: "https://ibank.ssb.tj/v1/Login",
        },
        {
          id: 4,
          background: "#EFF8FB",
          title: "Business development - purchase and sale of goods and products, services, performance of work, construction, acquisition of buildings, other structures, capital assets (instruments and machines, machines), to start or expand business activities.",
          description: "",
          img: {
            src: "/image/legalPerson/ssb_sohibkori_resized.png",
            alt: "bank Image",
          },
          button: "More",
          link: "https://ssb.tj/Credit/5?type=1",
        }
      ],
      links: [
        {
          id: 1,
          text: '2022-2026 "Years of industrial development"',
          image: {
            src: '/image/links/rushdisanoat_tj.png',
            alt: 'Mountains Image'
          },
          link: 'https://khovar.tj/category/umuri-bonkdor/'
        },
        {
          id: 2,
          text: 'Messages and speeches of the Founder of National Peace and Unity - Leader of the Nation, President of the Republic of Tajikistan Emomali Rahmon',
          image: {
            src: '/image/emblem.webp',
            alt: 'President Image'
          },
          link: 'http://www.president.tj/taxonomy/term/5/68'
        },
        {
          id: 3,
          text: '35th anniversary of the State Independence of the Republic of Tajikistan',
          image: {
            src: '/image/links/35soliistiqloliyat.png',
            alt: 'Emblem Image'
          },
          link: 'https://khovar.tj/category/27-solagii-isti-loliyat/'
        },
        {
          id: 4,
          text: 'Official website of the President of the Republic of Tajikistan',
          image: {
            src: '/image/emblem.webp',
            alt: 'Emblem Image'
          },
          link: 'http://president.tj/'
        },
        {
          id: 5,
          text: 'National Bank of Tajikistan',
          image: {
            src: '/image/links/bank.jpg',
            alt: 'Bank Image'
          },
          link: 'https://nbt.tj/'
        },
        {
          id: 6,
          text: 'National News Agency of Tajikistan',
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
      linksTitle: 'Useful links',
      newsTitle: 'News',
      socialTitle: 'We are in social networks'
    },
    rko: {
      banner: {
        title: 'Financial services',
        description: 'Sanoatsodirotbank offers all types of financial services',
        image: '/image/hazinavi_records1.png',
        button: 'Submit an inquiry'
      },
      listTitle: 'Sanoatsodirotbank offers all types of financial services, including:',
      list: [
        {
          id: 1,
          text: 'opening and maintaining accounts in national and foreign currencies for residents and non-residents of the Republic of Tajikistan;',
        },
        {
          id: 2,
          text: 'transfer of clients funds from their accounts;'
        },
        {
          id: 3,
          text: 'withdrawal of cash from accounts;'
        },
        {
          id: 4,
          text: 'providing information about account transactions;'
        },
        {
          id: 5,
          text: 'receiving and crediting funds to accounts;'
        },
        {
          id: 6,
          text: 'cash collection and delivery of valuables;'
        }
      ],
      description: 'We guarantee fast processing of your payments in the shortest possible time in our operating room, where specialists can provide the necessary service, as well as useful advice.',
      documentsTitle: 'Tariffs for payment of banking services in accordance with the Tariffs for the services of the KVD of the BSST "Sanoatsodirotbank"',
      documents: [
        {
          id: 1,
          name: 'Tariffs for payment of banking services in accordance with the Tariffs for the services of the KVD of the BSST "Sanoatsodirotbank"',
          size: '',
          link: '/documents/rko.pdf',
          type: 'pdf'
        },
      ]
    },
    transfers: {
      title: 'Money transfers',
      cards: [
        // {
        //   id: 1,
        //   img: {
        //     src: "/image/transfers/1.png",
        //     alt: "Contact",
        //   },
        //   type: "transfers",
        //   title: "CONTACT",
        //   description: "The CONTACT system has a large network of services around the world, which allows you to transfer and pay money around the world.",
        //   options: [
        //     "1- Transfer currency: Russian ruble, US dollar, EURO<br>2- Service fee: from 1%, as well as depending on the amount and country<br>3- Service fee: 0% for import transfers<br> 4- Phone for information",
        //   ],
        // },
        {
          id: 2,
          img: {
            src: "/image/transfers/2.png",
            alt: "Contact",
          },
          type: "transfers",
          title: "Unistream",
          description: "The Unistream international payment system is one of the most prestigious systems in Russia and the CIS countries.",
          options: [
            "1. This delivery system operates in most countries of the world;<br>2. Delivery currency: Russian ruble, US dollar and EURO;<br>3. Money transfer speed - from 5 minutes;<br>4. Service fee: from 0.5% to 1.5% also depending on the amount and country;",
          ],
        },
        {
          id: 3,
          img: {
            src: "/image/transfers/3.png",
            alt: "Contact",
          },
          type: "transfers",
          title: "Zudras",
          description: 'The system of intra-bank money transfers "Zudras" is carried out only within the Republic of Tajikistan and only through the KVD BSST "Sanoatsodirotbank", and operates in all parts of Tajikistan, regions and regions, cities and districts between branches and service centers of the bank.',
          options: [
            '1. Transfer amount: national currency - somoni 2. Service fee: no service fee is charged when paying for money transfers to individuals;<br>3. Service fee for intra-republican transfer of funds of individuals from one region to another through the structural divisions of the CIA of the BSST "Sanoatsodirotbank"<br>4. 0.5% of the transfer amount 5. Phone for information:',
          ],
        },
      ]
    },
    services: {
      title: 'Services',
      cards: [
        {
          id: 1,
          img: {
            src: "/image/salary_project.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Submission",
          description: "Submission of payroll using bank payment cards - 'Korti Milli'",
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
          title: "Bank guarantees",
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
          id: 3,
          img: {
            src: "/image/akkreditiv1.png",
            alt: "Ticket",
          },
          type: "services",
          title: "Letter of credit",
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
          title: "Transport services",
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
          title: "Safe Operations",
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
        title: "'SSB Mobile' application from Sanaatsodirotbank",
        description: "The best mobile banking app",
        image: "/image/ssb_mobile.png",
        buttonDownload: {
          text: "Download",
          scroll: true,
          link: "/SSB-mobile?type=1#mobile-application-download",
        },
      },
      title: 'Services',
      advantages: [
        {
          id: 1,
          description: "Delivery to all national payment cards and cards of Russia",
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
          description: "Transfer to e-wallets of banks in Tajikistan and abroad",
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
          description: "Banking cooperation",
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
          description: "ISP payment",
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
          description: "Other services",
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
        title: 'Download "SSB Mobile" and pay for all services online through this application.',
        description: "Loan payment and interest on it; Acceptance of deposits; Transfer to all national payment cards and cards of Russia; Transfer to electronic wallets of banks in Tajikistan and abroad; Payment of utility services; Tariffs of Internet providers; Mobile communication fee; The number of TV, radio and other services in the `SSB Mobile` application."
      }
    },
    correspondence: {
      title: 'Correspondent relations',
      table: {
        header: [
          {
            text: '№',
            color: 'white'
          },
          {
            text: 'Country',
            color: 'white'
          },
          {
            text: "Bank's name",
            color: 'white'
          },
          {
            text: 'Currency',
            color: 'white'
          },
          {
            text: 'Check',
            color: 'white'
          },
          {
            text: 'Address',
            color: 'white'
          },
        ],
        body: [
          {
            id: 1,
            country: 'Russia',
            nameBank: 'Interstate Bank',
            currency: 'USD <br> EUR <br> RUB',
            numberScore: '30111840000000000061 30111978600000000061 30111810700000000061',
            requisites: 'Location address / postal address: 115162 Moscow, st. Shukhova, 15; phone/fax: +7 (495) 954-9258, 954-4354, Telex 914790 ISBNK RU, E-mail: isbnk@isbnk.ru TIN 9909400764, KPP 774763001, PSRN 1027739567228, OKVED code: 99.00, OKPO code : 00010263 BIC 044525362 Swift: INEARUMMAXXX',
            background: 'background'
          },
          {
            id: 2,
            country: 'Uzbekistan',
            nameBank: 'Joint Stock Company "National Bank for Foreign Economic Affairs of the Republic of Uzbekistan"JOINT- STOCK COMPANY NATIONAL BANK FOR FORIENG ECONOMIC OF THE REPUBLIC OF UZBEKISTAN',
            currency: 'USD <br> EUR',
            numberScore: '21002840000090235001 21002978900090235001',
            requisites: '100084, Republic of Uzbekistan, Tashkent, Amir Temur Ave. 101; tel. +998 78-147-15-70 MFO 00450; TIN 200836354; Swift: NBFAUZ2X'
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
      title: 'Property For Sale',
      description: 'Additional information can be obtained by calling +992 (44) -630-51-15, +992 (44) -630-21-62.',
      table: {
        header: [
          {
            text: '№'
          },
          {
            text: 'Regions of the Republic'
          },
          {
            text: 'Mortgaged property'
          },
          {
            text: 'Price'
          },
        ],
      }
    },
    history: {
      banner: {
        title: 'Sanoatsodirotbank',
        description: 'The possibility of obtaining a loan in national currency at affordable interest rates',
        image: '/image/bank_history.png'
      },
      title: 'INDUSTRIAL BANK FROM THE BEGINNING TO TODAY!',
      list: [
        '1. By Decree of the Government of the Republic of Tajikistan No. 34 dated February 5, 2013, a state institution "Entrepreneurship Support Fund" was established under the State Committee for Investments and State Property Management of the Republic of Tajikistan.',
        '2. By Decree of the Government of the Republic of Tajikistan No. 62 dated February 14, 2015, the organizational and legal form of the State Institution "Entrepreneurship Support Fund" was changed and transformed into the State Institution "Entrepreneurship Support Fund under the Government of the Republic of Tajikistan".',
        '3. By Decree of the Government of the Republic of Tajikistan dated June 25, 2020 No. 390, the state institution "Entrepreneurship Support Fund under the Government of the Republic of Tajikistan" was transformed into the state unitary enterprise of the Industrial Export Bank of Tajikistan "Sanoatsodirotbank".',
        'On October 23, 2020, KVD BSST "Sanoatsodirotbank" became the owner of BMT license No. 0000126, which increases the Bank`s responsibility to its customers and calls us to honest and conscientious service. KVD BSST "Sanoatsodirotbank" began its activity under the slogan "Our goal is your success" and strengthens its position as a state-owned bank in the interbank market.',
        'At the moment, the Bank offers services for accepting deposits, transferring money, payment cards, opening an account, issuing loans, deposit operations, settlement operations, exchange of old money for individuals and legal entities.',
        'In 2021-2022, in order to develop the Bank`s activities and serve customers in the country`s regions, in 2021-2022, the Bank`s branches in the city of Khujand, Sughd region, the cities of Bokhtar, Kulyab, Dangara, Khatlon region, the city of Khorog, Gorno-Badakhshan Autonomous Region, and the center of the banking services in the Rasht region.'
      ]
    },
    news: {
      title: 'News',
      answer: 'Go to Press Answers'
    },
    structure: {
      title: 'Structure'
    },
    gallery: {
      title: 'Gallery',
      photo: 'Photos',
      video: 'Video'
    },
    addresses: {
      title: 'We are here',
      tabs: [
        {
          id: 1,
          text: "Offices",
        },
        {
          id: 2,
          text: "ATMs",
        },
        {
          id: 3,
          text: "POS terminals",
        },
      ],
    },
    question: {
      title: 'Go to Press Answers'
    },
    head: {
      title: 'Founder',
      subTitle: 'Government of the Republic of Tajikistan',
      leaderTitle: 'Management',
      leader: [
        {
          id: 1,
          name: "BOBOZODA HOKOMSHOH JURAKHON",
          post: "Chairman of the Board of the SUE IEBT “Sanoatsodirotbonk”",
          img: {
            src: "/image/head/1.JPG",
            alt: "Profile",
          },
        },
        {
          id: 2,
          name: "GARIBSHOZODA AZIZSHO QIMATSHO",
          post: "First Deputy Chairman of the Board of the SUE IEBT “Sanoatsodirotbonk”",
          img: {
            src: "/image/head/2.JPG",
            alt: "Profile",
          },
        },
        {
          id: 3,
          name: "MUHIDDINZODA SHUHRAT FARIDUN",
          post: "Deputy Chairman of the Board of the SUE IEBT “Sanoatsodirotbonk”",
          img: {
            src: "/image/head/3.JPG",
            alt: "Profile",
          },
        },
      ],
      boardTitle: 'Board members',
      board: [
        {
          id: 1,
          name: "BOBOZODA HOKOMSHOH JURAKHON",
          post: "Chairman of the Board of the SUE IEBT “Sanoatsodirotbonk”",
          img: {
            src: "/image/head/1.JPG",
            alt: "Profile",
          },
        },
        {
          id: 2,
          name: "GARIBSHOZODA AZIZSHO QIMATSHO",
          post: "First Deputy Chairman of the Board of the SUE IEBT “Sanoatsodirotbonk”",
          img: {
            src: "/image/head/2.JPG",
            alt: "Profile",
          },
        },
        {
          id: 3,
          name: "MUHIDDINZODA SHUHRAT FARIDUN",
          post: "Deputy Chairman of the Board of the SUE IEBT “Sanoatsodirotbonk”",
          img: {
            src: "/image/head/3.JPG",
            alt: "Profile",
          },
        },

        {
          id: 4,
          name: "MAJIDI YUSUF KHAYRULLO",
          post: "Deputy Minister of Finance of the Republic of Tajikistan",
          img: {
            src: "/image/board/5.jpg",
            alt: "Profile",
          },
        },
      ],
    },

    aboutBank: {
      banner: {
        title: 'BOBOZODA HOKOMSHOH JURAKHON <br> Chairman of the Board SUE IEBT  <br>“Sanoatsodirotbonk”',
        description: '',
        image: '/image/head/1.JPG'
      },
      description: 'Уважаемые клиенты и соотечественники!<br><br> Как всем известно, в последние годы усилилось внимание Правительства Республики Таджикистан к улучшению делового климата как движущего фактора экономического развития, проведена значительная работа в направлении экономических реформ, и тем самым заложена основа в направлении привлечения иностранных инвестиций и прямого бюджетного финансирования предпринимательской деятельности.<br><br> В этом процессе, в целях дальнейшего усиления развития предпринимательства и создания здоровой деловой среды, Постановлением Правительства Республики Таджикистан №34 от 5 февраля 2013 года было создано Государственное учреждение «Фонд поддержки предпринимательства».<br><br> Целью создания данного Фонда было содействие процессу выстраивания рыночных отношений на основе поддержки бизнеса и развития конкуренции с эффективными способами реализации государственных программ и производственных приоритетов, проектов и финансирования деятельности в сфере малого и среднего бизнеса, обеспечения рынка товаров, создания новых рабочих мест, защиты и финансовой поддержки инновационной деятельности в сферах бизнеса, стимулирования инноваций и производства новых видов продукции, создания здоровой бизнес-среды в сфере услуг, в ходе чего данный фонд также достиг желаемых результатов.<br><br> В соответствии с выполнением пункта 19 Протокола заседания Правительства Республики Таджикистан от 29 октября 2014 года, согласно постановлению Правительства Республики Таджикистан №62 от 14 февраля 2015 года форма управления ГУП «Фонд поддержки предпринимательства» изменена на ГУП «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан».<br><br> Основной целью ГУП «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан» было содействие процессу построения рыночных отношений на основе поддержки бизнеса и развития конкуренции с эффективными способами продвижения государственных программ и производственных приоритетов, создания новых рабочих мест, защиты и финансовой поддержки предпринимательской деятельности, создания здоровой деловой среды в сфере услуг. Фонд периодически стабилизировал свой финансовый капитал, предлагая кредитные средства, и увеличил свой кредитный портфель до 150 миллионов сомони.<br><br> С 25 июня 2020 года постановлением Правительства Республики Таджикистан №390 государственное учреждение «Фонд поддержки предпринимательства при Правительстве Республики Таджикистан» преобразовано в государственное унитарное предприятие Промышленно-экспортного банка Таджикистана «Саноатсодиротбанк».<br><br> 23 октября 2020 года КВД БССТ «Саноатсодиротбанк» получил лицензию Национального банка Таджикистана на осуществление банковской деятельности, что повысило ответственность банка перед своими клиентами. В дальнейшем Банк может расширить спектр своих услуг, открывая сберегательные и депозитные счета, услуги денежных переводов и кредитования в национальной и иностранной валюте, наряду с существующими кредитными продуктами. <br><br> Возросла ответственность руководства и каждого сотрудника перед клиентами и сотрудниками, и мы продолжим свою деятельность во исполнение поручений и распоряжений Основателя национального мира и единства, Лидера нации, Президента Республики Таджикистан уважаемого Эмомали Рахмона, в целях успешной и реализации стратегических планов, укрепления позиций Саноатсодиротбанка на межбанковском рынке Республики на основе большей поддержки отечественных предпринимателей, повышения качества банковских услуг.<br><br> Мы готовы внести свой ценный вклад в празднование 35-летия дорогого Таджикистана при финансовой поддержке отечественных предпринимателей. Наша цель – благоприятные инвестиционные возможности отечественных предпринимателей и развитие экспортоориентированной и импортозамещающей отечественной продукции с привлечением отечественного капитала.<br><br> Мы продолжаем развиваться в сфере в направлении внутренних инвестиций, ищем новые направления и предлагаем новые проекты нашим клиентам.<br><br> Мы готовы к сотрудничеству и поддержке реальных выгодных проектов. Вместе мы укрепим фундамент независимости.<br><br> Уважаемые клиенты и предприниматели,  мы будем работать вместе для значительных достижений страны под лозунгом «Наша цель — ваш успех».'
    },
    rights: {
      banner: {
        title: 'KVD BSST "Sanoatsodirotbonk"',
        description: 'Our goal is your success!',
        image: '/image/ssb.webp'
      },
      title: 'Базовые Права клиента',
      list: ['Каждый клиент ГУП ПЭБТ «Саноатсодиротбонк» имеет право направить в банк жалобу/предложение относительно качества услуг банка. Ваши жалобы/предложения будут направлены на дальнейшее развитие деятельности банка и улучшение качества обслуживания.', 'Информация о порядке приема и рассмотрения обращений потребителей.', 'Порядок приема и рассмотрения обращений потребителей в Саноатсодиротбонке основан на Законе Республики Таджикистан «Об обращениях физических и юридических лиц». Рассмотрение всех жалоб и жалоб клиентов рассматривается должностными лицами Саноатсодиротбонка в сроки, установленные Законом Республики Таджикистан «Об обращениях физических и юридических лиц». Общий срок рассмотрения обращений не может превышать 30 календарных дней. В частности, заявитель будет уведомлен в течение трех рабочих дней.', 'Информация о порядке подачи обращений потребителей, в том числе жалоб на действия (бездействие) работников финансово-кредитной организации, с указанием контактных данных (номер телефона, адрес, имя и фамилия) с ответственными лицами финансово-кредитной организации, к которым потребители могут защитить свои права, они могут обращаться сами.'],
      rulesTitle: 'Саноатсодиротбонк принимает обращения (жалобы) клиентов в письменной и устной форме. Письменная жалоба включает в себя:',
      rules: ['Жалобы подаются в бумажном виде (вручную или в электронном виде) и при личном приеме и/или по почте;', 'Жалобы через официальную электронную почту Банка;', 'Размещение жалоб в книге жалоб структурных подразделений Банка;', 'Жалобы на официальном сайте Банка;', 'Претензии и жалобы в социальных сетях Интернета, то есть страницах Банка или страницах, на которых зарегистрирован Банк.'],
      lamentTitle: 'Устные жалобы включают в себя:',
      lament: ['Запрос и жалоба по телефону в Контакт-центр Банка по номеру 8855;', 'При принятии Банка в управление (Председатель Правления Банка и директора филиалов);', 'Следует отметить, что в Саноатсодиротбонке   существует отдельная структура, отвечающая за обращения (жалобы) клиентов. (Общий отдел банка)']
    }
  }
}
