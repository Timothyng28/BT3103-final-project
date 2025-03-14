<template>
  <div class="navbar bg-[#fc105B] sticky top-0 z-50 rounded-b-lg">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><router-link to="/games" class="text-black" active-class="!text-white font-bold">Games</router-link></li>
          <li><a class="text-black">Schedule</a></li>
          <li><router-link to="/residences" class="text-black" active-class="!text-white font-bold"> Residences
            </router-link></li>
        </ul>


      </div>
      <RouterLink to="/" class="click-pointer text-xl text-black pl-5 pr-5">App name?</RouterLink>
      <TournamentSelector class="bg-white rounded-xl" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/games" class="text-black" active-class="!text-white font-bold">Games</router-link></li>
        <li><a class="text-black">Schedule</a></li>
        <li><router-link to="/residences" class="text-black" active-class="!text-white font-bold">Residences</
              router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <RouterLink v-if="!loggedIn && $route.path !== '/login'" to="/login"
        class="btn bg-white text-black border-[#e5e5e5]">Login
      </RouterLink>

      <div v-else-if="loggedIn" class="dropdown dropdown-end">
        <div class="avatar cursor-pointer" role="button" tabindex="0" btn-ghost>
          <div class="mask mask-squircle w-14">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <span class="text-white text-sm">
            {{ userEmail ? `Logged in as: ${userEmail}` : "User Logged In" }}
          </span>
        </div>
        <ul tabindex="0" class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a @click="logOut">Log Out</a></li>
          <li>
            <RouterLink to="/scorekeeperDashboard">Dashboard</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TournamentSelector from './TournamentSelector.vue';
import { useRouter } from 'vue-router'

export default {
  name: "NavBar",
  props: {
    loggedIn: Boolean,
    userUID: String,
    userEmail: String
  },
  emits: ["logOut"],
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    logOut() {
      this.$emit("logOut");
      if (this.$route.path === '/scorekeeperDashboard') {
        this.router.push('/')
      }
    }
  },
  components: {
    TournamentSelector
  }
};
</script>

<style scoped></style>