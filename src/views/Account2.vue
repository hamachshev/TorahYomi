<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

import { collection, query, where, getDocs } from "@firebase/firestore";
import db from "../../store/firestore";
export default {
  data() {
    return {
      user: {},
      noChok: [],
      limudim: [],
      checked: [],
      MyLimudimArray: [],
      myLimudim: [],
    };
  },

  async mounted() {
    this.redirectIfSignedOut();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;

        const usersRef = collection(db, "users2");
        const q = query(usersRef, where("user", "==", user.uid));
        const q = await getDocs(q)
          .then((res) =>
            res.forEach((d) => {
              this.MyLimudimArray = d.data();
              console.log(this.MyLimudimArray);
            })
          )
          .catch((e) => console.log(e));
      }
    });

    axios.get("https://www.sefaria.org/api/calendars").then(({ data }) => {
      this.noChok = data.calendar_items.filter(
        (e) => e.title.en !== "Chok LeYisrael"
      );
      this.limudim = data.calendar_items;
    });

    const newArray = await this.noChok.filter((e) => {
      this.MyLimudimArray.subjects.includes(e.title.he);
    });
    if (newArray) {
      console.log(newArray);
    }
  },
  methods: {
    redirectIfSignedOut() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.$router.push({ path: "/login" });
        }
      });
    },
  },
  computed: {
    uid() {
      return this.user.uid;
    },
  },
};
</script>
<template>
  <h1>Welcome {{ user.email }} !!</h1>
  <form type="submit">
    <div v-for="limud in noChok">
      <input type="checkbox" :value="limud.title.he" v-model="checked" />
      <label :for="limud.title.he">{{ limud.title.he }}</label>
    </div>
    <button type="submit">submit</button>
  </form>

  {{ MyLimudimArray.subjects }}
</template>
