<template>
  <h1>Create an Account</h1><br>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p><br>

  <p class="text-red-500 text-sm min-h-[20px]">{{ errorMessage }}</p>

  <p><button class="btn bg-white text-black border-[#e5e5e5]" @click="register">Sign Up</button></p>
  <p><button class="btn bg-white text-black border-[#e5e5e5]" @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useAuth } from '@/auth/auth.js'
import { getFirestore, doc, setDoc } from "firebase/firestore"

export default {
  name: "RegisterPage",
  emits: ["loggedIn"],
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    }
  },
  methods: {
    async register() {
      this.errorMessage = "" // reset previous error message

      const auth = getAuth()
      const db = getFirestore()

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredential.user
        console.log("Successfully Registered: ", user)

        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role: "User" // default role
        })

        const { loggedIn, userUID, userEmail } = useAuth()
        loggedIn.value = true
        userUID.value = user.uid
        userEmail.value = user.email
        this.$emit("loggedIn")
        this.$router.push("/")
      } catch (error) {
        console.log(error.code, error.message)
        // display error message to user with firebase auth erros
        switch (error.code) {
          case "auth/network-request-failed":
            this.errorMessage = "Network Error. Please try again."
            break
          case "auth/email-already-in-use":
            this.errorMessage = "Email is already in use. Try logging in."
            break
          case "auth/invalid-email":
            this.errorMessage = "Invalid email format."
            break
          case "auth/weak-password":
            this.errorMessage = "Password should be at least 6 characters."
            break
          default:
            this.errorMessage = "Registration failed. Please try again."
            break
        }
      }
    },
    signInWithGoogle() {
      console.log("Google Sign In not implemented yet.")
    }
  }
}
</script>