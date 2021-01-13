<template>
  <h1>{{ msg }}</h1>
  <br />
  <button
    class="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    @click="state.count++"
  >
    OK count is: {{ state.count }}
    <i class="fas fa-heart"></i>
  </button>
</template>


<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
