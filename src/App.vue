<template>
  <the-navbar />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

body {
  /* display: flex;
  align-items: top; */
}
* {
  /* border: 1px dotted blue; */
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; */
  /* font-family: "Airbnb Cereal App", sans-serif; */
  /* margin: 0px;
  padding: 0px;
  outline-style: none;
  text-align: center; */
}

/* body,
#app {
  height: 100%;
}*/
/* .custom-screen {
  height: calc(100vh-48px);
  height: 90vh;
  background-color: blue;
}  */
</style>