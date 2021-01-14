<template>
  <div class="flex flex-wrap py-0">
    <div class="w-full px-1">
      <nav
        class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 rounded"
      >
        <div
          class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="w-full relative flex justify-between lg:w-auto pl-1 pr-4 lg:static lg:block lg:justify-start"
          >
            <router-link to="/"
              ><img
                class="logo"
                src="../assets/Images/logo.png"
                alt="wealth tracker"
            /></router-link>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div
            v-bind:class="{ hidden: !menuShow, flex: menuShow }"
            class="lg:flex lg:flex-grow items-center"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <router-link
                  to="/about"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/portfolio"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >Portfolio</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/profile"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >Profile&nbsp;<i class="fas fa-user"></i></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
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
  height: 30px;
}
</style>