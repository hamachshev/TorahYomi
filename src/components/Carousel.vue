<template>
  <carousel :items-to-show="1" wrapAround="true" autoplay="3500">
    <slide v-for="image in images" :key="image">
      <img :src="image" />
    </slide>

    <template #addons>
      <navigation class="nav" />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        "/public/gemara2.jpg",
        "/mishnah_brurah.jpg",
        "/mishnah.jpg",
        "/nach-yomi.jpg",
      ],
    };
  },
};
</script>
<style>
.nav {
  margin: 50px;
}
</style>
