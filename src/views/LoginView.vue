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
      signInWithEmailAndPassword(auth, this.email, this.password)
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
    },
  },
};
</script>
<template>
  <div>
    <form type="submit" @submit.prevent="onSubmit">
      <input />
      <input type="password" />
      <button type="submit">go</button>
    </form>
  </div>
</template>
<style></style>
