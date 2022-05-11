<script>
import Dropdown from "./Dropdown.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { RouterLink } from "vue-router";
import Search from "./Search.vue";



export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    Dropdown,
    RouterLink,
    Search,
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        console.log(user);
      }
    });
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
    logout() {
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
  },
};
</script>
<template>
  <b-container>
    <b-row>
  <div class="header">
    <RouterLink to="/" class="heroLogo">
      <div class="image">
        <img src="/loigoi.jpeg" />
        <h1>Torah Yomi</h1>
      </div>
    </RouterLink>
    <Search />
    <div class="links">
      <Dropdown />
      <RouterLink to="/createAccount" v-if="isNotUser" class="registerLink">Register</RouterLink>
      <RouterLink to="/login" v-if="isNotUser" class="loginLink"
        >Login</RouterLink
      >
      <a href="#" v-if="isUser" @click.prevent="logout" class="loginLink"
        >Logout</a
      >
      <p class="user" v-if="isUser">Welcome {{ user.email }}!</p>
    </div>
  </div>
   </b-row>
  </b-container>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #01adee;
  margin: 0;
  padding: 0;
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
.registerLink{
  padding: 25px;
}
</style>
