<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import Carousel from "../components/Carousel.vue";

export default {
  mounted() {
    this.redirectIfSignedIn();
  },
  methods: {
    redirectIfSignedIn() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push({ path: "/account" });
        }
      });
    },
  },
  components: { Carousel },
};
</script>

<template>
  <Carousel />
</template>
