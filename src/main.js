import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeflex/primeflex.css'
import router from './router'
import ToastService from 'primevue/toastservice'


createApp(App)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)
    .mount('#app')
