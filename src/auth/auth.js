// filepath: /Users/stanley/BT3103-final-project/src/auth/auth.js
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const firebaseApp = initializeApp(firebaseConfig)

const loggedIn = ref(false)
const userUID = ref(null)
const userEmail = ref(null)
const userRole = ref(null)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

onAuthStateChanged(auth, async (user) => {
  if (user) {
    loggedIn.value = true
    userUID.value = user.uid
    userEmail.value = user.email

    // fetch user role from Firestore
    // add aditional things to fetch accordingly like followed residences/tournaments etc.
    try {
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        if (userDoc.exists()) {
            userRole.value = userDoc.data().role
            console.log(`User Role: ${userRole.value}`)
        } else {
            userRole.value = "User"
            console.log("Defaulting to basic User Role.")
        }
    } catch (error) {
        console.error("Error fetching user role: ", error)
    }
  } else {
    loggedIn.value = false
    userUID.value = null
    userEmail.value = null
  }
})

export function useAuth() {
  return {
    loggedIn,
    userUID,
    userEmail,
    userRole
  }
}