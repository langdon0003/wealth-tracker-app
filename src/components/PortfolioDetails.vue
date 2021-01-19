<template>
  <div class="w-full">
    <div class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pb-2 flex-row">
          <li class="-mb-px mx-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-gray-400 bg-white hover:text-gray-800 hover:bg-gray-200':
                  openTab !== 1,
                'text-white bg-gray-800 hover:text-white': openTab === 1,
              }"
            >
              HOLDINGS
            </a>
          </li>
          <li class="-mb-px mx-2 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-gray-400 bg-white hover:text-gray-800 hover:bg-gray-200':
                  openTab !== 2,
                'text-white bg-gray-800 hover:text-white': openTab === 2,
              }"
            >
              CHARTS
            </a>
          </li>
          <li class="-mb-px mx-0 flex-auto text-center">
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block cursor-pointer"
              v-on:click="toggleTabs(3)"
              v-bind:class="{
                'text-gray-400 bg-white hover:text-gray-800 hover:bg-gray-200':
                  openTab !== 3,
                'text-white bg-gray-800 hover:text-white': openTab === 3,
              }"
            >
              TRANSACTIONS
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div class="p-2 flex-auto">
            <div class="tab-content">
              <div
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <holding-table />
                <predict-table />
                <iframe
                  width="100%"
                  scrolling="yes"
                  allowtransparency="true"
                  frameborder="0"
                  src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;currencies=BTC&amp;font_family=sans&amp;font_size=15&amp;header_bg_color=30343B&amp;header_text_color=FFFFFF&amp;link_color=0091C2&amp;news_feed=trending&amp;posts_limit=3&amp;text_color=333333&amp;title=Latest%20News"
                  height="200px"
                ></iframe>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <p>Completely synergize</p>
                <chart-table />
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
              >
                <p>Efficiently unleash</p>
                <transaction-table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartTable from "./ChartTable.vue";
import HoldingTable from "./HoldingTable.vue";
import PredictTable from "./PredictTable.vue";
import TransactionTable from "./TransactionTable.vue";
export default {
  components: {
    HoldingTable,
    PredictTable,
    ChartTable,
    TransactionTable,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style scoped>
.CryptoPanicWidget-header-logo {
  display: none !important;
}
</style>