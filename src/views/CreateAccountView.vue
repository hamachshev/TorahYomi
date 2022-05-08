<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      this.redirectIfSignedIn();
    },
    log() {
      console.log(this.email);
    },
    redirectIfSignedIn() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push({ path: "/" });
        }
      });
    },
  },
  mounted() {
    this.redirectIfSignedIn();
  },
};
</script>
<template>
  <div>
    <form type="submit" @submit.prevent="onSubmit">
      <input v-model="email" placeholder="email" @input="log" />
      <input type="password" v-model="password" />
      <button type="submit">go</button>
    </form>
  </div>
</template>
<style></style>
