<template>
  <SearchInput v-model="searchVal" />
</template>

<script>
import { ref } from "vue";
import SearchInput from "vue-search-input";
// Optionally import default styling
import "vue-search-input/dist/styles.css";

const searchVal = ref("");

export default {
  components: {
    SearchInput,
  },
  setup() {
    return {
      searchVal,
    };
  },
};
</script>
