<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export default {
  mounted() {
    this.redirectIfSignedOut();
  },
  methods: {
    redirectIfSignedOut() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.$router.push({ path: "/login" });
        }
      });
    },
  },
};
</script>
<template>
  <h1>Welcome to your account!!</h1>
</template>
