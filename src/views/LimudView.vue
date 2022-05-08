<script>
import axios from "axios";
export default {
  data() {
    return {
      limud: {},
      arrayLimud: [],
      route: this.$route.params.limud,
    };
  },

  watch: {
    "$route.params": {
      handler() {
        axios
          .get(`https://sefaria.org/api/texts/${this.$route.params.limud}`)
          .then(({ data }) => {
            this.limud = data;
            let array = [];
            // if (this.type === "ArrayOfArrays") {
            //   data.he.forEach((e) => e.forEach((element) => array.push(element)));
            // } else {
            data.he.forEach((e) => array.push(e));
            // }
            console.log(array);
            this.arrayLimud = array.join();
          });
      },
      immediate: true,
    },
  },
};
</script>
<template>
  <h1>{{ limud.heRef }}</h1>
  <p v-html="arrayLimud" dir="rtl"></p>
</template>
<style scoped>
p {
  margin: 10px;
}
</style>
