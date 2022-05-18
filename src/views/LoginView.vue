<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export default {
  data() {
    return {
      email1: "",
      //email2: "",
      password: "",
      // first_name: "",
      // last_name: "",
      // date: null,
      emailPattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/,
      // fNameMessage: "*",
      // lNameMessage: "*",
      // ageMessage: "*",
      email1Message: "*",
      // email2Message: "*",
      passMessage: "*",
      isValid: true,
    };
  },
  methods: {
    onSubmit(event) {
      const auth = getAuth();
      console.log(this.email1, this.password);
      signInWithEmailAndPassword(auth, this.email1, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...

          console.log("signed in");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      // validate the first name entry
      // if (this.first_name === "") {
      //   this.fNameMessage = "This field is required.";
      //   this.isValid = false;
      // } else {
      //   this.fNameMessage = "";
      // }
      // //last name check
      // if (this.last_name === "") {
      //   this.lNameMessage = "This field is required.";
      //   this.isValid = false;
      // } else {
      //   this.lNameMessage = "";
      // }
      //email1 check
      if (this.email1 === "") {
        (this.email1Message = "This field is required."),
          (this.isValid = false);
      } else if (!this.emailPattern.test(this.email1)) {
        (this.email1Message = "Must be a valid email address."),
          (this.isValid = false);
      } else {
        this.email1Message = "";
      }
      // validate the second email entry
      // if (this.email2 === "") {
      //   this.email2Message = "This field is required.";
      //   this.isValid = false;
      // } else if (this.email2 !== this.email1 ) {
      //   this.email2Message = "Must equal first email entry.";
      //   this.isValid = false;
      // } else {
      //   this.email2Message = "";
      // }
      if (this.password === "") {
        this.passMessage = "This field is required.";
        this.isValid = false;
      } else if (this.password.length < 6) {
        this.passMessage = "Password must be at least six characters";
        this.isValid = false;
      } else {
        this.passMessage = "";
      }
      if (this.isValid === false) {
        event.preventDefault();
      }
      this.redirectIfSignedIn();
    },
    redirectIfSignedIn() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$router.push({ path: "/account" });
        }
      });
    },
  },
  mounted() {
    this.redirectIfSignedIn();
  },
};
</script>
<template>
  <div class="col-md-12">
    <form
      class="row gy-2 gx-3 align-items-center"
      type="submit"
      @submit.prevent="onSubmit($event)"
    >
      <!--      <div class="col-auto">-->
      <!--        <div class="form-outline">-->
      <!--          <label class="form-label" for="f_name"> First Name: </label>-->
      <!--          <input-->
      <!--            class="form-control-sm"-->
      <!--            v-model.trim="first_name"-->
      <!--            id="f_name"-->
      <!--          />-->
      <!--          <span>{{ fNameMessage }}</span>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="col-auto">-->
      <!--        <div class="form-outline">-->
      <!--          <label class="form-label" for="l_name">Last Name: </label>-->
      <!--          <input class="form-control-sm" v-model.trim="last_name" id="l_name" />-->
      <!--          <span>{{ lNameMessage }}</span>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="col-auto">-->
      <!--        <div class="form-outline">-->
      <!--          <div class="row">-->
      <!--            <div class="col align-self-auto"><p>Enter your DOB:</p></div>-->
      <!--            <div class="col align-self-auto">-->
      <!--              <Datepicker v-model="date" week-start="0"></Datepicker>-->
      <!--            </div>-->
      <!--            <span class="col align-self-auto">{{ ageMessage }}</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <hr />-->
      <div class="col-auto">
        <div class="form-outline">
          <label class="form-label" for="email1"> Email Address: </label>
          <input id="email1" class="form-control-sm" v-model.trim="email1" />
          <span>{{ email1Message }}</span>
        </div>
      </div>
      <!--      <div class="col-auto">-->
      <!--        <div class="form-outline">-->
      <!--          <label class="form-label" for="email2">Confirm Email: </label>-->
      <!--          <input id="email2" class="form-control-sm" v-model.trim="email2" />-->
      <!--          <span>{{ email2Message }}</span>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="col-auto">
        <div class="form-outline">
          <label class="form-control-sm" for="password">
            Password (six characters):
          </label>
          <input
            id="password"
            class="form-control-sm"
            type="password"
            v-model.trim="password"
          />
          <span>{{ passMessage }}</span>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-primary btn-md w-50" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<style>
span {
  color: red;
}
</style>
