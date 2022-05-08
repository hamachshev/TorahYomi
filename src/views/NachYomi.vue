<script>
import axios from "axios";
export default {
  data() {
    return {
      dayOfYear: 0,
      year: 1,
    };
  },
  mounted() {
    function dayOfTheYear(date) {
      return Math.floor(
        (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
      );
    }

    this.dayOfYear = dayOfTheYear(new Date());

    axios
      .get("https://www.sefaria.org/api/texts/Ecclesiastes.5")
      .then((res) => {
        console.log(res.data);
      });

    this.getRef();
  },
  methods: {
    getRef() {
      const tanach = ["Joshua"];
      axios
        .get("https://www.sefaria.org/api/index/Ecclesiastes")
        .then(({ data }) => {
          console.log(data.schema.lengths[0]);
        });
    },
  },
};
</script>
<template>
  <h1>Hello</h1>
</template>
