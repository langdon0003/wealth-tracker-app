<template>
  <div class="w-full shadow-lg rounded-lg px-4 mb-3">
    <div class="flex justify-center">
      <button
        class="bg-gray-800 rounded-full text-white text-xs px-6 py-3 mb-3 uppercase font-bold shadow-xl hover:bg-gray-900 hover:text-yellow-300 focus:outline-none"
      >
        add portfolio
      </button>
    </div>

    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <input
        type="text"
        placeholder="Search"
        class="px-1 py-2 placeholder-gray-400 text-gray-800 relative bg-white rounded-md border border-solid border-gray-100 text-sm shadow-xl w-full pr-10 focus:outline-none"
      />
      <span
        class="text-gray-400 absolute right-0 pt-2 pr-2 hover:text-gray-800"
      >
        <i class="bx bx-search bx-sm"></i>
      </span>
    </div>

    <ul class="list-none mt-3">
      <li class="pb-2 border-b border-opacity-20">
        <div class="flex justify-between">
          <div>
            <i
              class="text-gray-600 bx bx-money bx-xs inline-block text-lg mr-2"
            ></i>
            <span class="text-gray-600 text-sm font-bold">Total Assets</span>
          </div>
          <div class="mt-1">
            <span class="text-gray-600 text-sm font-bold">$123,456.78</span>
          </div>
        </div>
      </li>

      <li class="py-1">
        <div class="flex items-center">
          <div>
            <i
              class="text-gray-600 bx bx-category bx-xs inline-block text-lg mr-2"
            />
          </div>
          <div class="flex-grow text-left">
            <span class="text-gray-600 text-sm uppercase">btc</span>
          </div>
          <div>
            <i class="text-gray-600 bx bx-edit bx-xs text-lg mr-2" />
          </div>
          <div>
            <i class="text-gray-600 bx bx-trash bx-xs inline-block text-lg" />
          </div>
        </div>
      </li>

      <li class="py-1">
        <div class="flex items-center">
          <div>
            <i
              class="text-gray-600 bx bx-category bx-xs inline-block text-lg mr-2"
            />
          </div>
          <div class="flex-grow text-left">
            <span class="text-gray-600 text-sm uppercase">ETH</span>
          </div>
          <div>
            <i class="text-gray-600 bx bx-edit bx-xs text-lg mr-2" />
          </div>
          <div>
            <i class="text-gray-600 bx bx-trash bx-xs inline-block text-lg" />
          </div>
        </div>
      </li>

      <li class="py-1">
        <div class="flex items-center">
          <div>
            <i
              class="text-gray-600 bx bx-category bx-xs inline-block text-lg mr-2"
            />
          </div>
          <div class="flex-grow text-left">
            <span class="text-gray-600 text-sm uppercase">xrp</span>
          </div>
          <div>
            <i class="text-gray-600 bx bx-edit bx-xs text-lg mr-2" />
          </div>
          <div>
            <i class="text-gray-600 bx bx-trash bx-xs inline-block text-lg" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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

