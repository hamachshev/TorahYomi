<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


import Carousel from "../components/Carousel.vue";




export default {
  mounted() {
    this.redirectIfSignedIn();
    let acc;

    acc = document.getElementsByClassName("accordion");
    let i
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    };
  },
  methods: {
     // acc = document.getElementsByClassName("accordion"),
    //let i,


    redirectIfSignedIn() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push({ path: "/account" });
        }
      });
    },
    // updateDaf() {
    //   setInterval(function(){this.src++; },this.dayInMilliseconds) }
  },
  components: { Carousel},
  data() {
    return {
      src: 0,
      dayInMilliseconds : 1000 * 60 * 60 * 24,
      // oldDates:[],
      // newDate: new Date(),

    }
  },
 }
</script>


 



<template>
  <Carousel />
  <button class="accordion">Who are the developers of Torah Yomi?</button>
  <div class="panel">
    <p>Torah Yomi was developed by TorahYomi Ltd. We are headed by our board of Aharon Sidman, Shlomo Kalinsky, and Benji Mayer.
      We are computer science majors from Lander College for Men, and have developed this project as part of our final project.</p>
  </div>

  <button class="accordion">What is the purpose of our website?</button>
  <div class="panel">
    <p>The purpose of Torah Yomi is to serve as a primary hub for all those that are looking to keep up with their daily Torah quotas on the fly.</p>
  </div>

  <button class="accordion">What Limudim does Torah Yomi offer?</button>
  <div class="panel">
    <p>We at Torah Yomi offer all sorts of limudim, such as Tanach, Daf Yomi, Mishnah Yomi and B'ezras Hashem many others
      <br> will offered soon.</p>
  </div>


  <button class="accordion">How does it work?</button>
  <div class="panel">
    <p>In order to provide our texts, we use Sefaria's open source API to fetch the varous texts, adjusting accordingly our daily Limud.</p>
  </div>

  <button class="accordion">Are there any other resources I an use to help me learn?</button>
  <div class="panel">
    <p>Sure! Baruch Hashem in our time there has been a wealth of online service to help all Jews study Torah. You can access classes on
      <br>anything from Talmud to Tanya on websites including <a href="https://www.torahanytime.com/"> Torah Anytime, </a> <a href=https://www.chabad.com/> Chabad</a>,
      and many other sites you can find by searching the web.</p>
  </div>

</template>
<style scoped>
.panel {

  padding: 0 18px;
  background-color: #49d3ff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.accordion {
  background-color: deepskyblue;
}
</style>