<template>
  <footer>
    <div class="bg-background">
      <div class="py-4 px-6 border-b border-black-ssb/10">
        <Logo className="w-[123px] h-[42px]" />
      </div>
      <div class="px-6 py-4 border-b border-black-ssb/10" v-for="(item, index) in $t('footer.pages').slice(1,3)" :key="index">
        <div class="flex justify-between text-base" @click="item.showChild = !item.showChild">
          <p>{{item.name}}</p>
          <svg class="fill-light w-5 h-5" :class="item.showChild ? 'rotate-180' : ''">
            <use xlink:href="#arrow"></use>
          </svg>
        </div>
        <ul v-if="item.showChild">
          <li class="p-4" v-for="(link, index) in item.child" :key="index" @click="clickPage(item, link)"
            :class="$route.path.endsWith(link.link) ? 'text-primary' : 'hover:text-primary'">
            {{link.text}}
          </li>
        </ul>
      </div>
      <div class="px-6 py-4 flex flex-col gap-4">
        <h2 class="font-semibold text-lg-1">
          {{$t('footer.pages[3].name')}}
        </h2>
        <p class="text-small-base-1">
          {{$t('footer.pages[3].child')}}
        </p>
        <Subscription />
      </div>
      <div class="px-6 py-4 border-y border-black-ssb/10 grid grid-cols-2 gap-x-[30.5px] gap-y-6">
        <ContactCenter v-for="(phone, index) in $t('footer.phones')" :key="index" :item="phone" />
      </div>
      <div class="px-6 py-4 border-y border-black-ssb/10 flex items-center gap-4">
        <a :href="icon.link" v-for="(icon, index) in icons" :key="index" target="_blank">
          <img :src="icon.src" :alt="icon.alt" class="w-8 h-8">
        </a>
      </div>
      <div class="px-6 py-4">
        <h2 class="font-semibold text-lg-1 mb-4">
          Информация
        </h2>
        <p class="text-small-base-1">
          734018, Ҷумҳурии Тоҷикистон, ш. Душанбе, хиёбони С. Шерозӣ 21
          ҳ/м: 20402972016551, РМА: 020039715, РМБ: 350101655 <br><br>

          Суроғаи электронӣ: <a href="mailto:info@ssb.tj">info@ssb.tj</a>
        </p>
      </div>
    </div>
    <div class="bg-[#F2F2F2]">
      <div class="flex items-center justify-between px-6 py-4">
        <img src="/image/livo.svg" alt="Livo Logo" class="w-[47px] h-[22px]">
        <p class="text-small-base-1">
          © 2022 “Саноатсодиротбонк”
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'MobileFooter',
  data() {
    return {
      icons: [
        {
          alt: 'facebook',
          src: '/image/social/facebook.svg',
          link: 'https://www.facebook.com/sanoatsodirotbonk/'
        },
        {
          alt: 'instagram',
          src: '/image/social/instagram.svg',
          link: 'https://instagram.com/sanoatsodirotbonk_ssb'
        },
        {
          alt: 'telegram',
          src: '/image/social/telegram.svg',
          link: 'https://t.me/sanoatsodirotbonk'
        },
      ],
    }
  },
  methods: {
    clickPage(item, link) {
      item.showChild = false
      this.$emit('changePage', link)
    }
  }
}
</script>
