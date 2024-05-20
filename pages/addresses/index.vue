<template>
  <section class="main__container px-6 xl:px-0">
    <Titles class="mt-5">{{$t('pages.addresses.title')}}</Titles>

    <div class="flex items-center gap-6 my-5">
      <div v-for="tab in $t('pages.addresses.tabs')" :key="tab.id">
        <span
          class="cursor-pointer font-semibold"
          :class="tab.id === tabId ? 'text-red-500' : ''"
          :id="tab.id"
          @click.prevent="showAddress(tab.id)"
          >{{ tab.text }}</span
        >
      </div>
    </div>

    <div class="bg-white rounded-xl drop-shadow p-5 md:flex gap-4">
      <div class="md:w-1/3 w-full">
        <div
          class="
            bg-background
            py-3
            mb-5
            px-4
            flex
            items-center
            justify-between
            rounded-md
          "
        >
          <input
            type="text"
            :placeholder="$t('search')"
            class="w-full bg-transparent outline-0 text-base text-black"
            v-model="search"
            @input="toSearch($event)"
          />
          <img
            src="/image/search-gray.svg"
            alt="Search Icon"
            class="min-w-[20px] min-h-[20px]"
          />
        </div>

        <div v-if="showOffices" class="overflow-auto h-[500px]">
          <div
            v-for="item in filtered"
            :key="item.id"
            class="my-2 border-t border-red-500 py-2 cursor-pointer"
            @click="loadCoordinateInMap([item.latitude, item.longitude])"
          >
            <p class="font-semibold">{{ item.title }}</p>
            <div class="mt-2">
              <span>📞{{ item.phone }}</span>
              <span>⏲️{{ item.open_from }} - {{ item.open_until }}</span>
            </div>
            <p class="mt-2">🏛️{{ item.address }}</p>
          </div>
        </div>

        <div v-if="showAtms" class="overflow-auto h-[500px]">
          <div
            v-for="item in filtered"
            :key="item.id"
            class="my-2 border-t border-red-500 py-2 cursor-pointer"
            @click="loadCoordinateInMap([item.latitude, item.longitude])"
          >
            <p class="font-semibold">{{ item.title }}</p>
            <div class="mt-2">
              <span>📞{{ item.phone }}</span>
            </div>
            <p class="mt-2">🏛️{{ item.address }}</p>
          </div>
        </div>

        <div v-if="showPosTerminals" class="overflow-auto h-[500px]">
          <div
            v-for="item in filtered"
            :key="item.id"
            class="my-2 border-t border-red-500 py-2 cursor-pointer"
            @click="loadCoordinateInMap([item.latitude, item.longitude])"
          >
            <p class="font-semibold">{{ item.title }}</p>
            <span>📞{{ item.phone }}</span>
            <p class="mt-2">🏛️{{ item.address }}</p>
          </div>
        </div>
      </div>

      <div class="md:w-2/3 w-full">
        <!-- MAP -->
        <div class="rounded-lg overflow-hidden">
          <yandex-map
            :coords="coords"
            class="rounded-lg h-[560px]"
            :zoom="10"
            :controls="['trafficControl']"
          >
            <ymap-marker :coords="coords" :icon="markerIcon" />
            <ymap-marker
              v-for="coordinates in offices"
              v-if="showOffices"
              :key="coordinates.id"
              :icon="markerIcon"
              :coords="[coordinates.latitude, coordinates.longitude]"
            />
            <ymap-marker
              v-for="coordinates in atms"
              v-if="showAtms"
              :key="coordinates.id"
              :icon="markerIcon"
              :coords="[coordinates.latitude, coordinates.longitude]"
            />
            <ymap-marker
              v-for="coordinates in posterminals"
              v-if="showPosTerminals"
              :key="coordinates.id"
              :icon="markerIcon"
              :coords="[coordinates.latitude, coordinates.longitude]"
            />
          </yandex-map>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "AddressPage",
  components: {
    // MAP - These are the yandex map components used in the template
    yandexMap,
    ymapMarker,
  },
  data() {
    return {
      // Address containers based on type
      showOffices: true,
      showAtms: false,
      showPosTerminals: false,
      tabId: 1,
      search: "",
      // Coordinates when map loaded
      coords: [38.568451, 68.791635],
      // All coordinates based on selected tab
      allCoords: [],

      markerIcon: {
        layout: "default#image",
        imageHref: "/image/bank_icon.svg",
        imageSize: [20, 20],
        imageOffset: [0, 0],
      },
    };
  },

  computed: {
    // Computing data from API from vuex
    ...mapState({
      offices: (state) => state.api.offices,
      atms: (state) => state.api.atms,
      posterminals: (state) => state.api.posterminals,
      language_id: state => state.language.language_id,
    }),

    // Computed data based on the input field
    filtered() {
      if (this.tabId === 1) {
        return this.offices.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      }
      if (this.tabId === 2) {
        return this.atms.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      }
      if (this.tabId === 3) {
        return this.posterminals.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      }
    },
  },

  methods: {
    // Changing tabs status

    showAddress(tabId) {
      this.tabId = tabId;

      if (this.tabId == 1) {
        this.showOffices = true;
        this.showAtms = false;
        this.showPosTerminals = false;
      }
      if (this.tabId == 2) {
        this.showOffices = false;
        this.showAtms = true;
        this.showPosTerminals = false;
      }
      if (this.tabId == 3) {
        this.showOffices = false;
        this.showAtms = false;
        this.showPosTerminals = true;
      }
    },

    // Chnage the map coordinates based on map click
    loadCoordinateInMap(val) {
      this.coords = val;
    },

    // Getting data from API from vuex
    ...mapActions({
      get_page: "api/get_page",
    }),

    get_offices() {
      let payload = {
        request: `Office/?language_id=${this.language_id}`,
        key: "offices",
        body: [],
      };
      this.get_page(payload);
    },

    get_atms() {
      let payload = {
        request: `Atm/?language_id=${this.language_id}`,
        key: "atms",
        body: [],
      };
      this.get_page(payload);
    },

    get_posterminals() {
      let payload = {
        request: `PosTerminal/?language_id=${this.language_id}`,
        key: "posterminals",
        body: [],
      };
      this.get_page(payload);
    },
  },

  mounted() {
    // Showing received data in this component
    this.get_offices();
    this.get_atms();
    this.get_posterminals();
  },
};
</script>

<style>
</style>
