import "../firebase.config.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Vue3ProgressPlugin } from "@marcoschulte/vue3-progress";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./services/limudService";
import "../store/firestore";
const app = createApp(App);

app.use(router);
app.use(Vue3ProgressPlugin);
app.mount("#app");
