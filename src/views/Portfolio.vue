<template>
  <div class="container px-1 mx-auto custom-screen">
    <top-six />
    <div class="font-bold ml-4 text-lg uppercase">Your portfolio</div>
    <div class="flex flex-wrap mt-2">
      <div class="flex-grow px-4 sm:w-3/12">
        <portfolio-summary />
      </div>
      <div class="flex-grow px-4 sm:w-9/12">
        <PortfolioDetails />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioDetails from "../components/PortfolioDetails.vue";
import PortfolioSummary from "../components/PortfolioSummary.vue";
import TopSix from "../components/TopSix.vue";

export default {
  components: {
    PortfolioDetails,
    PortfolioSummary,
    TopSix,
  },
};
</script>

<style>
</style>