<script>
import Dropdown from "./Dropdown.vue";

export default {
    components:{
        Dropdown
    }
}
</script>
<template>
<div class="header">
  <div class="image">
    <img src="/loigoi.jpeg"/>
    <h1>Torah Yomi</h1>
  </div>

  
  <form >
  <input>
  <button type="submit">Search</button></form>

 
  <div class="links">
  <a href="#">login</a>
  <Dropdown/>
</div>
</div>
</template>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #01ADEE;
  margin: 0;
  padding: 0;
}
img {
  width: 100px;
  height: 80px;
  padding-right: 10px;
  
}

.image{
  display: flex;
  align-items: center;
  color: antiquewhite;
  font-family: sans-serif;
}
.links{
  display: flex;
  align-items: center;
}
</style>
