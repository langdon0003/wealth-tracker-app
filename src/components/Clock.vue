<template>
  <div class="clock">
    AuthParameters
    {{ time }}
  </div>
</template>

<script>
import moment from "moment";
import { onMounted, ref } from "vue";
export default {
  name: "Clock",
  setup() {
    const time = ref(null);

    const setTimer = () => {
      time.value = moment().format("HH:mm:ss");
    };

    onMounted(() => {
      console.log("object :>> onMounted ");
      // setInterval(() => {
      //   setTimer();
      // }, 1000);
    });

    return { time };
  },
};
</script>