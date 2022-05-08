<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: { Datepicker },
  data() {
    return {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      date: null,
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
      <input v-model="first_name"/>
      <input v-model="last_name">
      <Datepicker v-model="date" week-start="0"></Datepicker>
      <input v-model="email" />
      <input type="password" v-model="password" />

      <button type="submit">go</button>
    </form>
  </div>
</template>
<style></style>
