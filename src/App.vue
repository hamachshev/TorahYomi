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
  <vue3-progress-bar></vue3-progress-bar>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
$vue3-progress-bar-color: #fff;
@import "@marcoschulte/vue3-progress/dist/";
</style>
