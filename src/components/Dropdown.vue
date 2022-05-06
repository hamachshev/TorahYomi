<script>
export default {
  data() {
    return {
      showDropList: false,
    };
  },
  methods: {
    open() {
      this.showDropList = true;
    },
    close() {
      this.showDropList = false;
    },
  },
};
</script>

<template>
  <div class="dropdown">
    <button @mouseenter="open" @mouseleave="close" class="dropbtn">
      Learning options
    </button>
    <div
      v-if="showDropList"
      @mouseenter="open"
      @mouseleave="close"
      id="myDropdown"
      class="dropdown-content"
    >
      <a href="#">Daf Yomi</a>
      <a href="#">Nach Yomi</a>
      <a href="#">Daily Mishnah Brurah</a>
    </div>
  </div>
</template>

<style scoped>
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}
</style>
