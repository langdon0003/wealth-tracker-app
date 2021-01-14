<template>
  <TheNavbar />
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
#app {
  font-family: -apple-system, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>