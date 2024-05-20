export default {

  // READ ME!!!: Please translate the second part only. For example: [name: 'Name'] only translate Name not name.
  // Don't tranlsate lines which start with: id,link,svg,name

    // Personal name
    name: 'Name',
    familyName: 'Family Name',
    phone: 'Phone',
    email: 'Email',

    // Titles
    internetBanking: 'Internet Banking',
    recommandedProducts: 'Recommanded Products',
    requests: 'Requests',
    loanCalculator: 'Loan calculator',
    loans: 'Loans',
    loanAmount: 'Loan amount',
    loanDuration: 'Loan duration',
    bankPermenentMember:'Bank permanent member',
    monthlyPayment: 'Monthly payment',
    youNeed: 'You need',
    tajikistanPassport: 'Tajikistan Passport',
    approvalProbability: 'Probability of approval',
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

    //Three columns
    columnFirst: '2022-2026 "Years of Industrial Development"',
    columnSecond: 'Messages and speeches of the Founder of national peace and unity - Leader of the nation, President of the Republic of Tajikistan Emomali Rahmon',
    columnThree: '35th anniversary of the State Independence of the Republic of Tajikistan',

    news: 'News',
    joinSocialNetwork: 'We are on social networks',
    usefulLinks: 'Useful Links',
    usefulLinksFirst: 'The official website of the President of the Republic of Tajikistan',
    usefulLinksSecond: 'National Bank of Tajikistan',
    usefulLinksThird: 'National Information Agency of Tajikistan',
    usefulLinksFourth: 'Ministry of Finance of the Republic of Tajikistan',

    //Footer
    workingHours: 'Working Hours',
    workingHoursDetails: 'Working days: Monday to Friday from 08:00 to 17:00, Saturday: 9:00 a.m. to 12:00 p.m. "Citizens\'s Reception Day", Sunday: rest',
    internationalCall: 'For calling from all over the globe',
    BMTHotlin: 'BMT hotline',
    localCall: 'For calls within Tajikistan',
    information: 'Information',
    addressDetails: '734018, Republic of Tajikistan, sh. Dushanbe, S. Ave. Shirozi 21 H/M: 20402972016551, RMA: 020039715, RMB: 350101655',
    bankName: 'SSB',

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


    // Old Data
    search: 'Search',
    searchResult: 'Search results',
    yourAddress: 'Your address',
    credits: 'Loans',
    deposits: 'Deposits',
    transfers: 'Money transfers',
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
            link: '/',
            text: 'SSB Mobile'
          },
        ]
      },
      {
        id: 2,
        link: `/legal-person?type=${2}`,
        svg: '#twoPerson',
        text: 'Legal entities',
        mobileText: 'Legal ent.',
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
            text: 'SSB Mobile'
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
            text: 'Correspondence'
          },
          {
            link: `/sale?type=${3}`,
            name: 'sale',
            text: 'Property sale'
          },
          {
            link: `/interbank-lending?type=${3}`,
            name: 'interbank-lending',
            text: 'Interbank lending'
          },
          {
            link: `/services?type=${3}`,
            name: 'services',
            text: 'Services'
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
            text: 'About Bank '
          },
          {
            link: `/documents?type=${4}`,
            name: 'documents',
            text: 'Documents'
          },
          {
            link: `/history?type=${4}`,
            name: 'history',
            text: "Bank's history"
          },
          {
            link: `/news?type=${4}`,
            name: 'press-center',
            text: 'Press center'
          },
          {
            link: `/head?type=${4}`,
            name: 'head',
            text: 'Management Board'
          },
          {
            link: `/structure?type=${4}`,
            name: 'structure',
            text: 'Structure'
          },
          {
            link: `/gallery?type=${4}`,
            name: 'gallery',
            text: 'Gallery'
          },
          {
            link: `/addresses?type=${4}`,
            name: 'addresses',
            text: 'Addresses'
          }
        ]
      },
    ],
    footer: [
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
                link: '/',
                text: 'SSB Mobile'
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
                text: 'SSB Mobile'
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
                text: 'Correspondence'
              },
              {
                link: `/sale?type=${3}`,
                name: 'sale',
                text: 'Property sale'
              },
              {
                link: `/interbank-lending?type=${3}`,
                name: 'interbank-lending',
                text: 'Interbank lending'
              },
              {
                link: `/services?type=${3}`,
                name: 'services',
                text: 'Services'
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
                text: 'About Bank '
              },
              {
                link: `/documents?type=${4}`,
                name: 'documents',
                text: 'Documents'
              },
              {
                link: `/history?type=${4}`,
                name: 'history',
                text: "Bank's history"
              },
              {
                link: `/press-center?type=${4}`,
                name: 'press-center',
                text: 'Press center'
              },
              {
                link: `/head?type=${4}`,
                name: 'head',
                text: 'Management Board'
              },
              {
                link: `/structure?type=${4}`,
                name: 'structure',
                text: 'Structure'
              },
              {
                link: `/gallery?type=${4}`,
                name: 'gallery',
                text: 'Gallery'
              },
              {
                link: `/addresses?type=${4}`,
                name: 'addresses',
                text: 'Addresses'
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
        ],
      },
      {
        id: 4,
        name: 'Subscribe to our newsletter',
        classWidth: 'w-[27%]',
        child: 'By subscribing to our newsletter, you will receive news weekly.'
      },
    ]
  }
