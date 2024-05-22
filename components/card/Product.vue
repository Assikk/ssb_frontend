<template>
  <div
    class="border border-divider rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-6"
  >
    <div class="w-full lg:w-1/6">
      <img
        src="/image/pdf.webp"
        v-if="card.type == 'organization-documents'"
        :alt="card.title"
        class="hover:scale-110 duration-300 ease-in-out w-auto mx-auto"
      />
      <img v-if="card.image"
        :src="card.image"
        :alt="card.title"
        class="hover:scale-110 duration-300 ease-in-out w-auto mx-auto"
      />
      <img
        v-if="type == 'services'"
        :src="card.img.src"
        :alt="card.title"
        class="hover:scale-110 duration-300 ease-in-out w-auto mx-auto"
      />
      <img
        src="/image/website.png"
        v-if="card.type == 'organization-documents-link'"
        :alt="card.title"
        class="hover:scale-110 duration-300 ease-in-out w-20 mx-auto opacity-90"
      />
    </div>
    <div class="w-full lg:w-4/6">
      <h2 class="font-semibold text-xl-1 sm:text-2xl-1 mb-2">
        {{ card.title }}
      </h2>
      <div v-html="card.description"/>
      <div
        class="flex justify-between lg:justify-start flex-col md:flex-row gap-4 mb-6"
      >
        <div class="w-full md:w-[230px]">
          <h3 class="text-medium text-base sm:text-base-2 mb-2 sm:mb-0">
            {{ card.annual_rate }}
          </h3>
          <p class="text-sm-1 text-black">
            {{ card.annual_rate_subtitle }}
          </p>
        </div>
        <div class="w-full md:w-[230px]">
          <h3 class="text-medium text-base sm:text-base-2 mb-2 sm:mb-0">
            {{ card.get_credit }}
          </h3>
          <p class="text-sm-1 text-black">
            {{ card.get_credit_subtitle }}
          </p>
        </div>
        <div class="w-full md:w-[230px]">
          <h3 class="text-medium text-base sm:text-base-2 mb-2 sm:mb-0">
            {{ card.max_term }}
          </h3>
          <p class="text-sm-1 text-black">
            {{ card.max_term_subtitle }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-col-reverse sm:flex-row gap-6 sm:gap-0 items-center justify-between"
      >
        <NuxtLink
          v-show="
            card.type != 'organization-documents' &&
            card.type != 'organization-documents-link'
          "
          :to="localePath('/FAQ')"
          class="text-black text-base-1 text-right sm:text-left w-full sm:w-auto hidden"
        >
          Саволи иловагӣ доред?
        </NuxtLink>
        <div
          class="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-4"
        >
          <Button
            v-show="
              card.type != 'organization-documents' &&
              card.type != 'organization-documents-link' &&
              card.type != 'services'
            "
            @click="$router.push(localePath(`/${type}/` + card.id))"
            :outlined="true"
          >
            {{ $t("readMore") }}
          </Button>

          <!-- Services read more button -->
          <Button
            v-show="card.type == 'services'"
            @click="updateServiceDetails(card)"
            :outlined="true"
            :details="true"
          >
            {{ $t("readMore") }}
          </Button>
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
          <Button
            v-show="
              card.type != 'organization-documents' &&
              card.type != 'organization-documents-link'
            "
            @click="openApplication"
            :primary="true"
          >
            {{ $t("sendRequest") }}
          </Button>
          <a
            v-show="card.type == 'organization-documents'"
            :href="card.link"
            download
          >
            <span class="text-red-500">Боргири</span
            ><span
              ><img src="/image/downald.svg" alt="Pdf" class="w-6 h-6"
            /></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "CardProduct",
  props: ["card", "list", "type"],

  methods: {
    ...mapMutations({
      changeApplication: "application/changeApplication",
      changeProduct: "application/changeProduct",
      openList: "application/openList",
      update_service_details: "application/update_service_details",
    }),
    openApplication() {
      if(this.type == 'Card' || this.type == 'credit' || this.type == 'Deposit') {
        this.$emit('clickSendRequest')
      } else {
        this.changeApplication(true);
        this.changeProduct(this.card);
        this.openList(this.list);
      }

    },
    updateServiceDetails(data) {
      this.update_service_details(data);
      this.$router.push(this.localePath(`/services/${data.id}`));
    },
  },
};
</script>
