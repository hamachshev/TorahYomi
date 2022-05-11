<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";




export default {
  data() {
    return {
      showDropList: false,
    };
  },
  methods: {
    open() {
      this.showDropList = true;
      console.log("open");
    },
    close() {
      this.showDropList = false;
    },
  },
  components: {
    RouterLink,
    RouterView,
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
