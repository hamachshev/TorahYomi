<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const auth = getAuth();
      console.log(this.email, this.password);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("signed in");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
  },
};
</script>
<template>
  <div>
    <form type="submit" @submit.prevent="onSubmit">
      <input v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">go</button>
    </form>
  </div>
</template>
<style></style>
