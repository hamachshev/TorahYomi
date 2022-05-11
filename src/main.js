import "../firebase.config.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




const app = createApp(App);



app.use(router);

app.mount("#app");
