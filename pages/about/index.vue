<template>
  <section>
    <Banner :banner="$t('pages.rights.banner')" />
    <div class="max-w-[1062px] mx-auto py-20 px-6 xl:px-0">
      <Titles class="text-center mb-6">
        {{ $t('advtg') }} 
      </Titles>
      <div class="grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardAdvantage v-for="advantage in $t('advantages')" :key="advantage.id" :advantage="advantage" />
      </div>
      <div class="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <CardAdvantage v-for="advantage in $t('advantages').slice(0,3)" :key="advantage.id" :advantage="advantage" />
      </div>
      <div class="hidden lg:flex gap-10 mt-10 justify-center">
        <CardAdvantage class="max-w-[327px]" v-for="advantage in $t('advantages').slice(3,5)" :key="advantage.id"
          :advantage="advantage" />
      </div>
    </div>
    <BannerMobile />
    <div class="max-w-[1062px] mx-auto mt-[80px] px-6 lg:px-0">
      <h2 class="text-center font-medium text-2xl-1 mb-6">
        {{$t('msn')}}
      </h2>
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 mb-[80px]">
        <p class="text-base-1 text-light">
          {{ $t('msn_text') }}
        </p>
        <img src="/image/РИСОЛАТ.png" alt="Mission SSB" class="w-[410px] h-[176px]">
      </div>
      <h2 class="text-center font-medium text-2xl-1 mb-6">
        {{ $t('vls_about') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardValues v-for="value in $t('values')" :key="value.id" :value="value" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      // advantages: [
      //   {
      //     id: 1,
      //     title: '',
      //     description: 'Кафолати давлатӣ',
      //     img: {
      //       src: '/image/advantages/1.png',
      //       alt: 'Person Icon'
      //     },
      //     mobile: {
      //       src: '/image/advantages/1.png',
      //       alt: 'Person Icon'
      //     }
      //   },
      //   {
      //     id: 2,
      //     title: '',
      //     description: 'Фоизҳои дастрас',
      //     img: {
      //       src: '/image/advantages/2.png',
      //       alt: 'Wallet Icon'
      //     },
      //     mobile: {
      //       src: '/image/advantages/2.png',
      //       alt: 'Wallet Icon'
      //     }
      //   },
      //   {
      //     id: 3,
      //     title: '',
      //     description: 'Пешниҳоди қарз бо пули миллӣ',
      //     img: {
      //       src: '/image/advantages/3.png',
      //       alt: 'Done Icon'
      //     },
      //     mobile: {
      //       src: '/image/advantages/3.png',
      //       alt: 'Done Icon'
      //     }
      //   },
      //   {
      //     id: 4,
      //     title: '',
      //     description: 'Муҳлати кӯтоҳи баррасии дархостҳо',
      //     img: {
      //       src: '/image/advantages/4.png',
      //       alt: 'Centre Icon'
      //     },
      //     mobile: {
      //       src: '/image/advantages/4.png',
      //       alt: 'Centre Icon'
      //     }
      //   },
      //   {
      //     id: 5,
      //     title: '',
      //     description: 'Қарзҳо аз 1 то 5 сол',
      //     img: {
      //       src: '/image/advantages/5.png',
      //       alt: 'Filial Icon'
      //     },
      //     mobile: {
      //       src: '/image/advantages/5.png',
      //       alt: 'Filial Icon'
      //     }
      //   },
      // ],
      // values: [
      //   {
      //     id: 1,
      //     isReverse: false,
      //     img: {
      //       src: '/image/values/1.png',
      //       alt: 'Heart'
      //     },
      //     title: '',
      //     description: 'Арзишҳои мо пеш аз ҳама авлавияти муштарӣ, рушди пайваста, ростқавлӣ ва фасоднопазирӣ дар фаъолияти корӣ мебошад.'
      //   },
      //   {
      //     id: 2,
      //     isReverse: true,
      //     img: {
      //       src: '/image/values/2.png',
      //       alt: 'Heart'
      //     },
      //     title: '',
      //     description: 'Авлавияти муштарӣ.  Мо ба ормонҳои муштариёни худ эҳтиром мегузорем, бо дарки талабот ва риояи оини баробарӣ ба онҳо саривақт, босифат ва мукаммал хизмат мерасонем.'
      //   },
      //   {
      //     id: 3,
      //     isReverse: false,
      //     img: {
      //       src: '/image/values/3.png',
      //       alt: 'Heart'
      //     },
      //     title: '',
      //     description: 'Рушди пайваста. Тамоми саъю кӯшиши мо баҳри худтакмилдиҳӣ, эҷодкорӣ,  навоварӣ ва ҷустуҷуи доимии воситаю имкониятҳои беҳтарини фаъолияти пурсамари Бонк равона карда мешаванд.'
      //   },
      //   {
      //     id: 4,
      //     isReverse: true,
      //     img: {
      //       src: '/image/values/4.png',
      //       alt: 'Heart'
      //     },
      //     title: '',
      //     description: 'Ростқавлӣ ва фасоднопазирӣ. Фаъолияти мо дар асоси принсипҳои ростқавлӣ, фасоднопазирӣ ва таъмини шаффофият дар муносибат бо ҳамкорон ва муштариён ба роҳ монда мешавад.'
      //   },
      // ]
    }
  }
}
</script>
