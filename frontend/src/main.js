import { createApp, markRaw } from 'vue'
import App from './App.vue'

import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

app.use(pinia)
app.use(router)
app.mount('#app')
