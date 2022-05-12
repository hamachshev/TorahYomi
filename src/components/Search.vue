<template>
  <form class="searchForm">
    <input class="search" />
    <button type="submit">Search</button>
  </form>
</template>
<style scoped>
.searchForm {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search {
  background-color: white;
  background-image: url("public/search.svg");
  background-position: 8px 10px;
  background-repeat: no-repeat;
  background-size: 5%;
  padding-left: 40px;
  border-radius: 10px;
  border: none;
}
.search:focus-within {
  border: none;
}
button {
  border-radius: 10px;
  border: none;
}
</style>
