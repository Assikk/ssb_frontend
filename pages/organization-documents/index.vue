<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="my-6">
      {{$t('pages.organizationDocuments.title')}}
    </Titles>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      <div class="border border-divider rounded-2xl p-4"
      v-for="card in cards" :key="card.id">
        <img class="w-[82px] h-[100px] mb-4 mx-auto" src="/image/pdf.webp" alt="">
        <div class="flex flex-col gap-4 justify-between h-[180px]">
          <p class="text-sm-1 sm:text-base text-black mb-6">
            {{ card.description }}
          </p>
          <a
            v-show="card.type == 'organization-documents-link'"
            :href="card.link"
            download
          >
            <span class="text-red-500">{{ $t("readMore") }} </span
            ><span
              ><img
                src="/image/openLink.png"
                alt="Pdf"
                class="w-6 h-6 opacity-40"
            /></span>
          </a>
          <a
            v-show="card.type == 'organization-documents'"
            :href="card.link"
            download
          >
            <img src="/image/downald.svg" alt="Pdf" class="w-6 h-6"/>
          </a>
        </div>
      </div>
    </div>
    <Titles class="my-6">
      {{$t('pages.organizationDocuments.title2')}}
    </Titles>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      <div class="border border-divider rounded-2xl p-4"
      v-for="doc in docs" :key="doc.id">
        <img class="w-[82px] h-[100px] mb-4 mx-auto" src="/image/pdf.webp" alt="">
        <div class="flex flex-col gap-4 justify-between h-[180px]">
          <p class="text-sm-1 sm:text-base text-black mb-6">
            {{ doc.description }}
          </p>
          <a
            v-show="doc.type == 'organization-documents-link'"
            :href="doc.link"
            download
          >
            <span class="text-red-500">{{ $t("readMore") }} </span
            ><span
              ><img
                src="/image/openLink.png"
                alt="Pdf"
                class="w-6 h-6 opacity-40"
            /></span>
          </a>
          <a
            v-show="doc.type == 'organization-documents'"
            :href="doc.link"
            download
          >
            <img src="/image/downald.svg" alt="Pdf" class="w-6 h-6"/>
          </a>
        </div>
      </div>
    </div>
    <Titles class="my-6">
      {{$t('pages.organizationDocuments.title3')}}
    </Titles>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      <div class="border border-divider rounded-2xl p-4"
      v-for="rate in rates" :key="rate.id">
        <img class="w-[82px] h-[100px] mb-4 mx-auto" src="/image/pdf.webp" alt="">
        <div class="flex flex-col gap-4 justify-between h-[180px]">
          <p class="text-sm-1 sm:text-base text-black mb-6">
            {{ rate.description }}
          </p>
          <a
            v-show="rate.type == 'organization-documents-link'"
            :href="rate.link"
            download
          >
            <span class="text-red-500">{{ $t("readMore") }} </span
            ><span
              ><img
                src="/image/openLink.png"
                alt="Pdf"
                class="w-6 h-6 opacity-40"
            /></span>
          </a>
          <a
            v-show="rate.type == 'organization-documents'"
            :href="rate.link"
            download
          >
            <img src="/image/downald.svg" alt="Pdf" class="w-6 h-6"/>
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col gap-6 mb-6">
      <CardProduct v-for="card in cards" :key="card.id"
      :card="card"
      :list="cards"/>
    </div> -->
    <pagination v-show="false" />
  </section>
  
</template>
<script>
export default {
  name: 'Cards',
  data() {
    return {
      cards: [
        {
          id: 1,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Дар бораи чораҳои МҚД/МТ/МПСҚО',
          link: "/documents/Қонунигардонӣ.pdf",
          description: 'Дар бораи чораҳои МҚД/МТ/МПСҚО"',
        },
        {
          id: 2,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Дар бораи чораҳои МҚД/МТ/МПСҚО',
          link: "/documents/объеденённ.pdf",
          description: 'Стратегияи давлатии муқовимат ба коррупсия дар Ҷумҳурии Тоҷикистон барои давраи то соли 2030',
        },
        {
          id: 3,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents-link',
          name: 'Дар бораи чораҳои МҚД/МТ/МПСҚО',
          link: "https://www.nbt.tj/tj/amnesty/",
          description: 'Санадҳои меъёрии ҳуқуқӣ оид ба қонунигардонии маблағҳо',
        },
        {
          id: 4,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents-link',
          name: 'Дар бораи чораҳои МҚД/МТ/МПСҚО',
          link: "https://www.nbt.tj/tj/laws/",
          description: 'Қонунҳои соҳаи бонкӣ',
        },
        {
          id: 5,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents-link',
          name: 'Дар бораи чораҳои МҚД/МТ/МПСҚО',
          link: "https://www.nbt.tj/tj/normative/",
          description: 'Санадҳои меъёрии ҳуқуқии БМТ',
        },
        {
          id: 6,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Шахсони вобаста 01.12.2023',
          link: "/documents/Шахсони вобаста 01.12.2023.pdf",
          description: 'Шахсони вобаста 01.12.2023',
        },
        {
          id: 7,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Шахсони вобаста 03.12.2023',
          link: "/documents/Шахсони вобаста 03.12.2023.pdf",
          description: 'Шахсони вобаста 03.12.2023',
        },
        {
          id: 8,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Шахсони вобаста 01.04.2024',
          link: "/documents/Шахсони вобаста 01.04.2024.pdf",
          description: 'Шахсони вобаста 01.04.2024',
        },
       
      ],
      docs: [
        {
          id: 1,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Кодекси ҳуқувайронкунии маъмурӣ',
          link: "/documents/Кодекси ҳуқувайронкунии маъмурӣ.pdf",
          description: 'Кодекси ҳуқувайронкунии маъмурӣ',
        },
        {
          id: 2,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Конвенсияи СММ бар зидди коррупсия',
          link: "/documents/Конвенсияи_СММ_бар_зидди_коррупсия.pdf",
          description: 'Конвенсияи СММ бар зидди коррупсия',
        },
        {
          id: 3,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Конститутсияи ҶТ',
          link: "/documents/Конститутсияи ҶТ.pdf",
          description: 'Конститутсияи ҶТ',
        },
        {
          id: 4,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Методологияи тартиби ва методикаи таҳлили фаъолият хавфҳои коррупсионӣ',
          link: "/documents/Методологияи_тартиби_ва_методикаи_таҳлили_фаъолият_хавфҳои_коррупсионӣ.pdf",
          description: 'Методологияи тартиби ва методикаи таҳлили фаъолият хавфҳои коррупсионӣ',
        },
        {
          id: 5,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Низомномаи Шурои_миллии муқовимат бо коррупсия',
          link: "/documents/Низомномаи_Шурои_миллии_муқовимат_бо_коррупсия.pdf",
          description: 'Низомномаи Шурои миллии муқовимат бо коррупсия',
        },
        {
          id: 6,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Стартегияи давлатии муқовимат бо коррупсия барои давраи то соли',
          link: "/documents/Стартегияи_давлатии_муқовимат_бо_коррупсия_барои_давраи_то_соли.pdf",
          description: 'Стартегияи давлатии муқовимат бо коррупсия барои давраи то соли',
        },
        {
          id: 7,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Қонуни ҶТ дар бораи АНДММ бо коррупсия',
          link: "/documents/Қонуни_ҶТ_дар_бораи_АНДММ_бо_коррупсия.pdf",
          description: 'Қонуни ҶТ дар бораи АНДММ бо коррупсия',
        },
        {
          id: 8,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Қонуни ҶТ дар бораи муқовимат бо коррупсия',
          link: "/documents/Қонуни_ҶТ_дар_бораи_муқовимат_бо_коррупсия.pdf",
          description: 'Қонуни ҶТ дар бораи муқовимат бо коррупсия',
        },
        {
          id: 9,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Тартиби баҳисобгирии ҳуқуқвайронкунии бо коррупсия',
          link: "/documents/Тартиби_баҳисобгирии_ҳуқуқвайронкунии_бо_коррупсия.pdf",
          description: 'Тартиби баҳисобгирии ҳуқуқвайронкунии бо коррупсия',
        },
        
      ],
      rates:[
      {
          id: 1,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Тарофаҳо барои шахсони воқеӣ',
          link: "/documents/Тарофаҳо_шахсони_воқеӣ.pdf",
          description: 'Тарофаҳо барои шахсони воқеӣ',
        },
        {
          id: 2,
          img: {
            src: '/image/ticket.png',
            alt: 'Ticket'
          },
          type: 'organization-documents',
          name: 'Тарофаҳо барои шахсони ҳуқуқӣ',
          link: "/documents/Тарофаҳо_шахсони_ҳуқуқӣ.pdf",
          description: 'Тарофаҳо барои шахсони ҳуқуқӣ',
        },
      ]
      
    }
  }
}
</script>

