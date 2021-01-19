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

* {
  /* border: 1px dotted blue; */
}
</style>