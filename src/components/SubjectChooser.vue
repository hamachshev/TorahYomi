<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";
import db from "../../store/firestore";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default {
  props: ["type"],
  data() {
    return {
      user: {},
      noChok: [],
      limudim: [],
      checked: [],
    };
  },
  mounted() {
    const progress = this.$progress.start();
    this.redirectIfSignedOut();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });

    axios.get("https://www.sefaria.org/api/calendars").then(({ data }) => {
      this.noChok = data.calendar_items.filter(
        (e) => e.title.en !== "Chok LeYisrael"
      );
      this.limudim = data.calendar_items;
      console.log(this.limudim);
    });
    progress.finish();
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

    async initialize() {
      const progress = this.$progress.start();
      console.log("working initialize");

      try {
        const usersRef = collection(db, "users2");
        const uid = this.user.uid;
        const docRef = await setDoc(doc(usersRef, uid), {
          user: this.user.uid,
          subjects: this.checked,
        });
        console.log("Document written with ID: ");
        this.$router.push({ path: "/" });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      progress.finish();
    },
    async update() {
      const progress = this.$progress.start();
      const uid = this.user.uid;
      const doc1 = doc(db, "users2", uid);

      await updateDoc(doc1, {
        subjects: this.checked,
      });
      console.log("worked");
      this.$router.push({ path: "/" });
      progress.finish();
    },
  },
};
</script>

<template>
  <h1>Welcome {{ user.email }} to Torah Yomi!!</h1>
  <h3>To begin, please select the limudim that you want:</h3>
  <form
    type="submit"
    @submit.prevent="[type === 'onboarding' ? initialize() : update()]"
  >
    <div v-for="limud in noChok">
      <input type="checkbox" :value="limud.title.he" v-model="checked" />
      <label :for="limud.title.he">{{ limud.title.he }}</label>
    </div>
    <button type="submit">submit</button>
  </form>
  {{ checked }}
  {{ type }}
</template>
