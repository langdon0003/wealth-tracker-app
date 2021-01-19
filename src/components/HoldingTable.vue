<template>
  <div class="w-full mx-auto overflow-auto">
    <table class="table-auto w-full text-left whitespace-no-wrap">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 font-medium text-gray-900 text-md">Name</th>
          <th class="px-4 py-2 font-medium text-gray-900 text-md">Amount</th>
          <th class="px-4 py-2 font-medium text-gray-900 text-md xs:hidden">
            Price
          </th>
          <th class="px-4 py-2 font-medium text-gray-900 text-md">Total</th>
          <th class="px-4 py-2 font-medium text-gray-900 text-md">P / L</th>
          <th class="px-4 py-2 font-medium text-gray-900 text-md"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2 text-sm font-light text-left">
            <div
              class="h-5 w-5 bg-no-repeat bg-contain rounded-full inline-block"
              :style="{
                'background-image':
                  'url(\'https://app.intotheblock.com/static-assets/coins/btc.png\')',
              }"
            ></div>
            Bitcoin - BTC
          </td>
          <td class="px-4 py-2 text-sm font-light">0.02000000</td>
          <td class="px-4 py-2 text-sm font-light">$37,068.16</td>
          <td class="px-4 py-2 text-sm font-light">$741.36</td>
          <td class="px-4 py-2 text-sm font-light">$45.36</td>
          <td class="px-4 py-2 text-xs font-light">
            <i class="bx bx-add-to-queue bx-xs"></i>&nbsp;&nbsp;
            <i class="bx bx-show bx-xs"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>