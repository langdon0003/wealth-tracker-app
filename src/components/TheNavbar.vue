<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-gray-800 mb-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 pl-0 lg:static lg:block lg:justify-start"
      >
        <router-link class="m-0 p-0" to="/"
          ><img
            class="logo inline-block leading-relaxed"
            src="../assets/Images/logo.png"
            alt="wealth tracker"
        /></router-link>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="bx bx-menu bx-md"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        v-bind:class="{ hidden: !menuShow }"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:text-yellow-300"
              to="/about"
              ><span class="ml-2">about</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:text-yellow-300"
              to="/portfolio"
              ><span class="ml-2">portfolio</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="my-auto px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white text-sm hover:text-yellow-300"
              to="/profile"
            >
              <span class="inline-block mx-2">profile</span>
              <i class="bx bx-user bx-xs" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "the-navbar",
  data() {
    return {
      menuShow: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.menuShow = !this.menuShow;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 44px;
  width: auto;
}
</style>