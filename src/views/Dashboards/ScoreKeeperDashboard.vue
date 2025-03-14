<template>
    <div v-if="isLoading">
        <h1>Loading...</h1>
        <p>Checking permissions...</p>
    </div>

    <div v-else-if="hasAccess">
        <h1>Scorekeeper Dashboard, Scorekeeper Access only!</h1>
    </div>

    <div v-else>
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
    </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/auth/auth.js'

const { loggedIn, userRole } = useAuth()
const hasAccess = ref(false)
const isLoading = ref(true) // <-- Add a loading state
const router = useRouter()

watch(loggedIn, (newLoggedIn) => {
    if (!newLoggedIn) {
        console.log("User logged out, redirecting to Home page.")
        router.push("/login")
    }
})

// Use watchEffect to react to when userRole is updated from Firestore
watchEffect(() => {
    if (!loggedIn.value) {
        console.log("User not logged in, redirecting to Home page.")
        router.push("/")
        return
    }
    console.log(`Initial User Role ${userRole.value}`)
    if (userRole.value === null) {
        console.log("Waiting for role to be fetched...")
        return
    }

    console.log(`Checking role: ${userRole.value}`)

    if (userRole.value === "Scorekeeper") {
        hasAccess.value = true
    } else {
        console.log("Access Denied, only Scorekeepers can view this page.")
        router.push("/") // Redirect unauthorized users
    }

    isLoading.value = false // Mark loading as complete
})
</script>
