<template>
<div class="py-3 border-y-[1px] border-divider">
  <div class="flex items-center justify-between"
  @click="isShow = !isShow">
    <div class="flex items-center gap-[9px]">
      <img src="/image/lang.svg" alt="Lang Icon" class="w-[22.2px] h-[22.2px]">
      <p class="text-primary">
        {{activeLang}}
      </p>
    </div>
      <!-- <svg class="w-5 h-5 fill-gray" :class="isShow ? 'rotate-180' : ''">
        <use xlink:href="#arrow"></use>
      </svg> -->
  </div>
  <!-- <ul v-if="isShow" class="mt-3">
    <li v-for="item in newLang" :key="item.id" class="flex items-center gap-[9px] py-3"
    @click="changeLang(item)">
      <img src="/image/black-lang.svg" alt="Lang Icon" class="w-[22.2px] h-[22.2px]">
      <p>
        {{item.text}}
      </p>
    </li>
  </ul> -->
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      activeLang: this.$route.path.startsWith('/en') ? 'EN' : this.$route.path.startsWith('/tj') ? 'TJ' : 'RU',
      lang: [
        {
          id: 1,
          text: 'RU',
          locale: 'ru'
        },
        {
          id: 2,
          text: 'TJ',
          locale: 'tj'
        },
        {
          id: 3,
          text: 'EN',
          locale: 'en'
        }
      ],
      isShow: false
    }
  },
  computed: {
    newLang() {
      return this.lang.filter(item => {
        return item.text !== this.activeLang
      })
    }
  },
  methods: {
    ...mapMutations({
      // Мутация, изменяющая язык (language_id)
      change_language: 'language/CHANGE_LANGUAGE'
    }),
    changeLang(item) {
      this.activeLang = item.text
      this.isShow = false
      this.change_language(item.id)
      this.$i18n.setLocale(item.locale)
      this.$emit('closeAside')
    }
  }
}
</script>
