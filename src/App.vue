<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

  export default {
  data() {
    return {
      showDropList: false
    }
  },
  methods: {
      open() {
        this.showDropList = true
        console.log("open");
    },
    close(){
      this.showDropList = false
    }
    },
    components:{
      RouterLink,
      RouterView,
      Header
    }
  }
</script>

<template>
<Header/>




<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>



  <RouterView />
</template>


