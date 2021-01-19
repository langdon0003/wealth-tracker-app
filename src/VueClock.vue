<template>
  <div class="clock" v-if="hourtime != ''">
    <div class="clock__hours">
      <span class="clock__hourtime" v-text="hourtime"></span>
      <span>{{ hours }}1</span>
    </div>
    <div class="clock__minutes" v-text="minutes"></div>
    <div class="clock__seconds" v-text="seconds"></div>
  </div>
  <div class="bg-yellow-500 text-lg font-bold">Counter: {{ ID }}.</div>
  <div class="bg-yellow-500 text-lg font-bold">
    Timer: {{ timerMinutes }} {{ timerSeconds }}.
  </div>
  <div class="bg-yellow-500 text-lg font-bold">
    List:
    {{ predictionList[0]["results"]["btcOb60mAvg60m"]["v6.0"]["result"] }}.
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  props: {},

  setup(props) {
    let ID = ref(0);
    let timerSeconds = ref("");
    let timerMinutes = ref("");
    const URL = "https://services.intotheblock.com/api/BTC/predictions";
    const predictionList = ref([]);

    async function getPredictionsList() {
      const { data } = await axios.get(URL);
      predictionList.value = await data.predictions;
    }

    function updateTime() {
      const now = new Date();
      const nowSeconds = now.getUTCSeconds();
      const nowMinutes = now.getUTCMinutes();

      timerSeconds.value = nowSeconds;
      timerMinutes.value = nowMinutes;
      ID.value = window.setTimeout(() => updateTime(), 1000);

      if (nowSeconds % 5 === 0) {
        console.log("fetch...: ", nowSeconds % 5);
      } else {
        console.log("NOT fetch...: ", nowSeconds % 5);
      }
    }

    getPredictionsList();

    onMounted(() => {
      ID.value = window.setTimeout(() => updateTime(), 1000);
    });

    return { ID, timerMinutes, timerSeconds, predictionList, updateTime };
  },
  onBeforeUnmount() {
    window.clearTimeout(ID);
  },
};
</script>

<style scoped>
.clock {
  background: #fff;
  border: 0.3rem solid #fff;
  border-radius: 0.5rem;
  display: inline-block;
  margin-bottom: 1em;
}

.clock__hours,
.clock__minutes,
.clock__seconds {
  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);
  display: inline-block;
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 3rem;
  font-weight: 300;
  padding: 0.5rem 1rem;
  text-align: center;
  position: relative;
}

.clock__hours {
  border-right: 0.15rem solid #fff;
  border-radius: 0.5rem 0 0 0.5rem;
}

.clock__minutes {
  border-right: 0.15rem solid #fff;
}

.clock__seconds {
  border-radius: 0 0.5rem 0.5rem 0;
}

.clock__hourtime {
  font-size: 1rem;
  position: absolute;
  top: 2px;
  left: 8px;
}
</style>
