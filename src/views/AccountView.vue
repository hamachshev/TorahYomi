<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { collection, query, where, getDocs } from "@firebase/firestore";
import db from "../../store/firestore";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      uid: "",
      MyLimudimArray: [],
      noChok: [],
      limudToShow: [],
    };
  },

  mounted() {
    this.redirectIfSignedOut();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
      }
    });
  },
  components: {
    RouterLink,
  },
  methods: {
    makeLink(limud) {
      console.log("making link");

      return `/subjects/${limud.url}`;
    },
    stupid(limud) {
      return limud.he;
    },
    redirectIfSignedOut() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.$router.push({ path: "/login" });
        }
      });
    },
    go() {
      this.$router.push({ path: "/update" });
      console.log("going");
    },
  },
  watch: {
    uid() {
      const usersRef = collection(db, "users2");
      const q = query(usersRef, where("user", "==", this.uid));
      getDocs(q)
        .then((res) =>
          res.forEach((d) => {
            this.MyLimudimArray = d.data();
            console.log(this.MyLimudimArray);
          })
        )
        .catch((e) => console.log(e));
    },
    MyLimudimArray() {
      axios.get("https://www.sefaria.org/api/calendars").then(({ data }) => {
        this.noChok = data.calendar_items.filter(
          (e) => e.title.en !== "Chok LeYisrael"
        );
        // this.limudim = data.calendar_items;
      });
    },
    noChok() {
      console.log(this.noChok[0].title.he);
      console.log(this.MyLimudimArray.subjects);
      console.log(
        this.MyLimudimArray.subjects.includes(this.noChok[0].title.he)
      );
      let array = [];

      this.noChok.forEach((e) => {
        if (this.MyLimudimArray.subjects.includes(e.title.he)) {
          console.log(e);
          array.push(e);
        }
      });
      console.log(array[0].title.he, "array e");

      this.limudToShow = array;
      console.log(this.noChok[0].title.he, "array ee");
    },
  },
};
</script>
<template>
  <h1>Your Limudim:</h1>

  <ul>
    <li v-for="limud in limudToShow">
      <RouterLink :to="makeLink(limud)">{{ limud.title.he }}</RouterLink>
    </li>
  </ul>
  <RouterLink to="/subjects">All Limudim</RouterLink>
  <button @click="go">Update or Add Limudim</button>
</template>
