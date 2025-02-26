<template>
  <NavBar :loggedIn="loggedIn" @logOut="toggleLogin"/>
    <!-- only listen for @loggedIn in login page-->
    <RouterView v-if="$route.path === '/login'" @loggedIn="toggleLogin"/>
  <RouterView v-else />
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import { ref } from 'vue'

const loggedIn = ref(false)

function toggleLogin() {
  loggedIn.value = !loggedIn.value;
}

</script>

<style scoped>

</style>
