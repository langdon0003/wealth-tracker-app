<template>
  <div class="ml-4 uppercase font-bold text-lg">
    Top 6 Cryptocurrency Prices by Market Cap
  </div>

  <div class="flex flex-wrap">
    <div
      v-for="item in topSixListD"
      :key="item.id"
      class="w-full flex-1 border rounded-lg shadow-lg mx-4 mt-1 mb-4 p-0"
    >
      <div class="bg-gray-100 p-2">
        <div class="flex justify-between flex-wrap">
          <div class="flex">
            <div
              v-bind:style="{
                'background-image':
                  'url(' +
                  'https://s2.coinmarketcap.com/static/img/coins/64x64/' +
                  item.id +
                  '.png' +
                  ')',
              }"
              class="h-11 w-11 bg-no-repeat bg-contain rounded-full inline-block mr-2"
            ></div>
            <div class="pr-0">
              <div class="text-gray-500 uppercase font-bold text-xs">
                {{ item.name }} [{{ item.symbol }}]
              </div>
              <span
                v-if="item.quote.USD.price > 1"
                class="font-semibold text-md text-gray-800"
              >
                ${{
                  item.quote.USD.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }}
              </span>
              <span
                v-if="item.quote.USD.price <= 1"
                class="font-semibold text-md text-gray-800"
              >
                ${{
                  item.quote.USD.price.toLocaleString(undefined, {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  })
                }}
              </span>
            </div>
          </div>

          <div class="font-normal text-xs text-gray-400">
            <span class="text-right">RANK: #{{ item.cmc_rank }}</span>
          </div>
        </div>
      </div>
      <div class="text-xs font-bold p-2">
        <div class="flex justify-between mb-1">
          <div>Market Cap</div>
          <div>
            ${{
              Math.round(item.quote.USD.market_cap / 1000000).toLocaleString()
            }}
            M
          </div>
        </div>
        <div class="flex justify-between mb-1">
          <div>Volume 24h</div>

          <div>
            ${{
              Math.round(item.quote.USD.volume_24h / 1000000).toLocaleString()
            }}
            M
          </div>
        </div>
        <div class="flex justify-between mb-0">
          <div>24h change</div>
          <div
            v-if="item.quote.USD.percent_change_24h > 0"
            class="text-green-500"
          >
            {{
              item.quote.USD.percent_change_24h.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }}
            %
          </div>
          <div
            v-if="item.quote.USD.percent_change_24h <= 0"
            class="text-red-600"
          >
            {{
              item.quote.USD.percent_change_24h.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }}
            %
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import dumbData from "../assets/dumbData.js";
export default {
  setup() {
    const topSixListD = dumbData.slice(0, 6);
    console.log("topSixListD :>> ", topSixListD);

    onMounted(() => {});

    return {
      topSixListD,
    };
  },
};
</script>
