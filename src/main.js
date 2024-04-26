import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primeflex/primeflex.css";
import router from "./router";
import store from "./store";
import ToastService from "primevue/toastservice";
import axios from "axios";

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(store)
  .mount("#app");

// Axios config

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    const res = response.data
    if(response.status !== 200) {
        console.log('Axios interceptors response:', response)
    } else {
        return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);
