<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      limudim: [],
      noChok: [],
    };
  },
  mounted() {
    const progress = this.$progress.start();
    axios.get("https://www.sefaria.org/api/calendars").then(({ data }) => {
      this.noChok = data.calendar_items.filter(
        (e) => e.title.en !== "Chok LeYisrael"
      );
      this.limudim = data.calendar_items;
      console.log(this.limudim);
    });
    progress.finish();
  },
  components: {
    RouterLink,
  },
  methods: {
    makeLink(limud) {
      console.log("making link");

      return `/subjects/${limud.url}`;
    },
  },
};
</script>
<template>
  <div class="col-md-12">
  <ul>
    <li v-for="limud in noChok">
      <RouterLink :to="makeLink(limud)">{{ limud.title.he }}</RouterLink>
    </li>
  </ul>
  </div>
</template>
