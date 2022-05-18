<script>
import Dropdown from "./Dropdown.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { RouterLink } from "vue-router";
// import Search from "./Search.vue";

import Search2 from "./Search2.vue";

export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    Dropdown,
    RouterLink,

    Search2,
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log(user);
      }
    });
    //window.$ = window.jQuery = require('jquery');
    // $(document).ready(function () {
    //   $("#logo").button();
    //   $("#logo").click(function (){
    //     $("#dialog-message").dialog({
    //       modal: true,
    //
    //       buttons: {
    //         Exit: function () {
    //           $(this).dialog("close");
    //         }
    //       }
    //     });
    // })
    //   $("#enter").button();
    //   $("#enter").click(function (){
    //     let n1 = $("num1").val();
    //     let n2 = $("num2").val();
    //     $("#sum").val(n1 + n2);
    //     console.log(n1)
    //   });
    //});
  },
  computed: {
    isUser() {
      return this.user.email ? true : false;
    },
    isNotUser() {
      return this.user.email ? false : true;
    },
  },
  methods: {
    // calculate(){
    //     let num1 = $("num1").val();
    //     let num2 = $("num2").val();
    //     this.sum = this.num1 + this.num2;

    logout() {
      console.log("hello");
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("logged out");
          this.user = {};
          console.log(this.isUser());
        })
        .catch((error) => {
          console.log(error);
        });
    },
    log() {
      console.log("the header is ready your highness");
    },
  },
};
</script>
<template>
  <div class="col-md-12">
    <div class="header">
      <RouterLink to="/" class="heroLogo">
        <div class="image">
          <img src="/loigoi.jpeg" />
          <!--        <div id="dialog-message"  style="display: none">-->
          <!--          <p>-->
          <!--            <span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>-->
          <!--            You found the secret button! Enjoy a calculator!</p>-->
          <!--          <input v-model.number="num1" id="num1" placeholder="ex. 999"   /> + <input v-model.number="num2" id="num2" placeholder="ex. 999"  /> = <p id="sum" >{{sum}}</p>-->
          <!--          <button id="enter" @click="calculate">Enter</button>-->

          <h1>Torah Yomi</h1>
        </div>
      </RouterLink>
      <Search2 />
      <div class="links">
        <Dropdown @loadedDataHeader="log" />
        <RouterLink to="/createAccount" v-if="isNotUser" class="registerLink"
          >Register</RouterLink
        >
        <RouterLink to="/login" v-if="isNotUser" class="loginLink"
          >Login</RouterLink
        >
        <a href="#" v-if="isUser" @click.prevent="logout" class="loginLink"
          >Logout</a
        >
        <p class="user" v-if="isUser">Welcome {{ user.email }}!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #01adee;
  margin: 0;
  padding: 0;
  width: 100%;
  text-decoration: none;
  font-family: sans-serif;
}
img {
  width: 100px;
  height: 80px;
  padding-right: 10px;
}

.image {
  display: flex;
  align-items: center;
  color: whitesmoke;
  font-family: sans-serif;
}
.links {
  display: flex;
  align-items: center;
}
a {
  color: whitesmoke;
  text-decoration: none;
}
.heroLogo {
  color: blue;
  text-decoration: none;
}
.user {
  font-family: sans-serif;
  text-align: center;
  color: whitesmoke;
  padding-right: 25px;
}
.loginLink {
  padding: 25px;
}
.registerLink {
  padding: 25px;
}
#sum {
  background-color: #dddddd;
  width: 67.5%;
}
#dialog-message,
span.ui-icon-circle-check,
.ui-dialog-content,
.ui-dialog-buttonset {
  background-color: chartreuse;
  color: blue;
}
/*#dialog-message,.ui-dialog,.ui-widget, .ui-widget-content, .ui-corner-all, .foo, .ui-draggable, .ui-resizable {background:yellow !important}*/
</style>
