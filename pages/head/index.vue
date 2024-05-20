<template>
  <section>
    <div class="pt-10 max-w-[845px] mx-auto px-6 lg:px-0">
      <div
        class="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 mb-20"
      >
        <div>
          <p class="text-light text-base-1 md:text-base">
            <Titles class="mb-6 md:mb-0">
              {{$t('pages.head.title')}}
              <br />
              <br />
              <br />
              {{$t('pages.head.subTitle')}}
            </Titles>
          </p>
        </div>
        <img
          src="/image/emblem.webp"
          alt="Emblem"
          class="w-[302px] h-[211px]"
        />
      </div>
      <Titles class="mb-6"> {{$t('pages.head.leaderTitle')}} </Titles>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <CardProfile v-for="item in $t('pages.head.leader')" :key="item.id" :item="item" />
      </div>

      <Titles class="mb-6 mt-16"> {{$t('pages.head.boardTitle')}} </Titles>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <CardProfile v-for="item in $t('pages.head.board')" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeadPage",
  data() {
    return {
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
          id: 4,
          name: "МАҶИДӢ ЮСУФ ХАЙРУЛЛО",
          post: "Муовини Вазири молияи Ҷумҳурии Тоҷикистон",
          img: {
            src: "/image/board/5.jpg",
            alt: "Profile",
          },
        },
      ],
    };
  },
};
</script>
