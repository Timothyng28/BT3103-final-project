<template>
  <h1>Login with your Email or Google Account</h1><br>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p><br>
  <p class="text-red-500 text-sm min-h-[20px]">{{ errorMessage }}</p>
  <p><button class="btn bg-white text-black border-[#e5e5e5]" @click="login">Login</button></p>
  <p><button class="btn bg-white text-black border-[#e5e5e5]" @click="signInWithGoogle">Sign In With Google</button></p>
  <br>

  <p>Don't have an account?</p>
  <p>
    <RouterLink to="/register" class="btn bg-white text-black border-[#e5e5e5]"> Sign Up</RouterLink>
  </p>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { useAuth } from '@/auth/auth.js'

export default {
  name: "LoginPage",
  emits: ["loggedIn"],
  data() {
    return {
      email: "",
      password: "",
      errorMessage: ""
    }
  },
  methods: {
    login() {
      this.errorMessage = "" // reset previous error message
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`Successfully Signed In\nUser Email: ${user.email}\nUser UID: ${user.uid}`)
          console.log(getAuth().currentUser)
          const { loggedIn, userUID, userEmail } = useAuth()
          loggedIn.value = true
          userUID.value = user.uid
          userEmail.value = user.email
          this.$emit("loggedIn")
          this.$router.push("/")
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Invalid email address."
              break
            case "auth/network-request-failed":
              this.errorMessage = "Network Error. Please try again."
              break
            case "auth/user-not-found":
              this.errorMessage = "No account with that Email was found." // will not detect if email does not exist, only username
              break
            case "auth/invalid-credential":
              this.errorMessage = "Email or Password is Incorrect."
              break
            case "auth/missing-password":
              this.errorMessage = "Please enter your Password."
              break
            default:
              this.errorMessage = "Email or Password is Incorrect"
              break
          }
        })
    },
    signInWithGoogle() {
      console.log("Google Sign In not implemented yet.")
    }
  }
}
</script>
