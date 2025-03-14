<template>
  <NavBar :loggedIn="loggedIn" :userUID="userUID" :userEmail="userEmail" @logOut="logOut" />
  <RouterView v-if="$route.path === '/login'" @loggedIn="toggleLogin" />
  <RouterView v-else />
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import { ref, onMounted } from 'vue'
import { useAuth } from '@/auth/auth.js'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const { loggedIn, userUID, userEmail } = useAuth()

function logOut() {
  const auth = getAuth()
  const user = auth.currentUser

  if (user) {
    const userUIDBeforeLogout = user.uid // capture UID before logout
    const userEmailBeforeLogout = user.email // capture email before logout

    signOut(auth)
      .then(() => {
        console.log(`Successfully signed out.\nUser Email: ${userEmailBeforeLogout}\nUser UID: ${userUIDBeforeLogout}`)
      })
      .catch((error) => {
        console.log("Logout Error:", error.message)
      })
  } else {
    console.log("No user is currently logged in.")
  }
}
</script>

<style scoped></style>
