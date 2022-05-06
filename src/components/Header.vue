<script>
import Dropdown from "./Dropdown.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    Dropdown,
    RouterLink,
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
      return this.user.email;
    },
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("logged out");
          this.user = {};
        })
        .catch((error) => {
          console.log(e);
        });
    },
  },
};
</script>
<template>
  <div class="header">
    <RouterLink to="/" class="heroLogo">
      <div class="image">
        <img src="/loigoi.jpeg" />
        <h1>Torah Yomi</h1>
      </div>
    </RouterLink>

    <form>
      <input />
      <button type="submit">Search</button>
    </form>

    <div class="links">
      <RouterLink to="/login">Login</RouterLink>
      <Dropdown />
      <a href="#" v-if="isUser" @click.prevent="logout">Logout</a>
      {{ user.email }}
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
</style>
