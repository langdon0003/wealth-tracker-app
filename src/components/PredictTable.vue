<template>
  <div class="text-md font-bold">Price Predictions</div>
  <div class="flex flex-wrap text-center m-0 mb-2">
    <div class="w-full flex-1 border shadow-lg rounded-lg text-sm p-0 m-2">
      <div class="header bg-gray-100 font-bold p-2">01:00 AM-02:00 AM</div>
      <div class="body my-4">
        <i class="bx bx-trending-up bx-md text-green-600" />
        <div class="- text-xs my-2">Up</div>
      </div>
      <div class="footer bg-gray-100 pt-1">
        <div class="font-bold">
          <i class="bx bx-check-circle bx-xs text-blue-500"></i> Correct!
        </div>
        <div class="">
          <div class="text-xs">Reference Price</div>
          <div class="text-xs font-bold">$35,936.26</div>
        </div>
      </div>
    </div>
    <div class="w-full flex-1 border shadow-lg rounded-lg text-sm p-0 m-2">
      <div class="header bg-gray-100 font-bold p-2">02:00 AM-03:00 AM</div>
      <div class="body my-4">
        <i class="bx bx-trending-down bx-md text-red-600" />
        <div class="- text-xs my-2">Down</div>
      </div>
      <div class="footer bg-gray-100 pt-1">
        <div class="font-bold">
          <i class="bx bx-check-circle bx-xs text-blue-500"></i> Correct!
        </div>
        <div class="">
          <div class="text-xs">Reference Price</div>
          <div class="text-xs font-bold">$35,936.26</div>
        </div>
      </div>
    </div>
    <div class="w-full flex-1 border shadow-lg rounded-lg text-sm p-0 m-2">
      <div class="header bg-gray-100 font-bold p-2">03:00 AM-04:00 AM</div>
      <div class="body my-4">
        <i class="bx bx-trending-up bx-md text-green-600" />
        <div class="- text-xs my-2">Up</div>
      </div>
      <div class="footer bg-gray-100 pt-1">
        <div class="font-bold">
          <i class="bx bx-error bx-xs text-red-500"></i> Wrong!
        </div>
        <div class="">
          <div class="text-xs">Reference Price</div>
          <div class="text-xs font-bold">$35,936.26</div>
        </div>
      </div>
    </div>
    <div class="w-full flex-1 border shadow-lg rounded-lg text-sm p-0 m-2">
      <div class="header bg-gray-100 font-bold p-2">04:00 AM-05:00 AM</div>
      <div class="body my-4">
        <i class="bx bx-trending-down bx-md text-red-600" />
        <div class="- text-xs my-2">Down</div>
      </div>
      <div class="footer bg-gray-100 pt-1">
        <div class="font-bold">
          <i class="bx bx-check-circle bx-xs text-blue-500"></i> Correct!
        </div>
        <div class="">
          <div class="text-xs">Reference Price</div>
          <div class="text-xs font-bold">$35,936.26</div>
        </div>
      </div>
    </div>
    <div class="w-full flex-1 border shadow-lg rounded-lg text-sm p-0 m-2">
      <div class="header bg-gray-100 font-bold p-2">05:00 AM-06:00 AM</div>
      <div class="body my-4">
        <i class="bx bx-trending-down bx-md text-red-600" />
        <div class="- text-xs my-2">Down</div>
      </div>
      <div class="footer bg-gray-100 pt-1">
        <div class="font-bold">
          <i class="bx bx-hourglass bx-spin bx-xs text-blue-500"></i> Waiting!
        </div>
        <div class="">
          <div class="text-xs">Reference Price</div>
          <div class="text-xs font-bold">$35,936.26</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from "vue";
import axios from "axios";


export default {
  setup() {
    onMounted(() => console.log("object :>> "));
    
  },
};
</script>

<style>
</style>