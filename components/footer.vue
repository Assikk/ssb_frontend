<template>
  <footer class="bg-background">
    <div class="bg-[#29293D]">
      <nav
        class="main__container flex items-center py-8 text-white font-medium text-xl-1 lg:px-6 xl:px-0"
      >
        <p :class="item.classWidth" v-for="item in $t('footer.pages')" :key="item.id">
          {{ item.name }}
        </p>
      </nav>
    </div>
    <div class="main__container lg:px-6 xl:px-0">
      <div class="flex mt-[47px] mb-9 text-sm-1">
        <div class="w-[27%] flex items-center">
          <Logo className="w-[202px] h-[69px]" />
        </div>
        <div class="w-[27%]">
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in $t('footer.pages[1].child')"
              :key="item.id"
              class="cursor-pointer"
              :class="
                $route.query.type == item.id
                  ? 'text-primary'
                  : 'hover:text-primary'
              "
              @click="$emit('changePage', item)"
            >
              <span v-html="item.text"></span>
            </li>
          </ul>
        </div>
        <div class="w-[19%]">
          <ul class="flex flex-col gap-2">
            <li
              v-for="(item, index) in $t('footer.pages[2].child')"
              :key="index"
              class="cursor-pointer"
              :class="
                $route.path.endsWith(item.link)
                  ? 'text-primary'
                  : 'hover:text-primary'
              "
              @click="$router.push(localePath(item.link) + '?type=1')"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
        <div class="w-[27%] flex flex-col justify-between">
          <p>
            {{ $t("footer.pages[3].child") }}
          </p>
          <Subscription />
        </div>
      </div>
      <div
        class="border-y border-black-ssb/10 py-8 flex items-center justify-between"
      >
        <div class="w-4/5 flex justify-between">
          <ContactCenter
            v-for="(phone, index) in $t('footer.phones')"
            :key="index"
            :item="phone"
          />
        </div>
        <div class="w-1/5 flex gap-4 justify-end">
          <a
            :href="icon.link"
            v-for="(icon, index) in icons"
            :key="index"
            target="_blank"
          >
            <img :src="icon.src" :alt="icon.alt" class="w-8 h-8" />
          </a>
        </div>
      </div>

      <div
        class="border-y border-black-ssb/10 py-8 flex items-center justify-between"
      >
        <div class="w-2/3 flex justify-between">
          <ul class="list-disc pl-5">
            <li v-for="(name, index) in $t('footer.manuals')" :key="index">
              <a :href="name.link">{{ name.name }} ⬇️</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 mb-[73px]">
        <h3 class="font-semibold text-xl-1 mb-4">
          {{ $t("information") }}
        </h3>
        <p class="text-small-base-1">
          {{ $t("addressDetails") }}<br /><br />

          {{ $t("email") }}: <a href="mailto:info@ssb.tj">info@ssb.tj</a>
        </p>
      </div>
    </div>
    <div class="bg-[#F2F2F2]">
      <div
        class="main__container lg:px-6 xl:px-0 flex justify-between items-center py-8"
      >
        <img src="/image/livo.svg" alt="Livo Logo" class="w-[47px] h-[23px]" />
        <p class="text-sm-1">© 2023 “{{$t('SSB')}}”</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        {
          alt: "facebook",
          src: "/image/social/facebook.svg",
          link: "https://www.facebook.com/sanoatsodirotbonk/",
        },
        {
          alt: "instagram",
          src: "/image/social/instagram.svg",
          link: "https://instagram.com/sanoatsodirotbonk_ssb",
        },
        {
          alt: "telegram",
          src: "/image/social/telegram.svg",
          link: "https://t.me/sanoatsodirotbonk",
        },
      ],
    }
  },
};
</script>
