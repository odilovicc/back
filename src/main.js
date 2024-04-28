import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primeflex/primeflex.css";
import router from "./router";
import store from "./store";
import ToastService from "primevue/toastservice";
import axios from "./plugins/axios";

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(store)
  .use(axios)
  .mount("#app");

