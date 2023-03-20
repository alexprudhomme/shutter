import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/main.css";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import infiniteScroll from "vue3-infinite-scroll-good";

const app = createApp(App);
const pinia = createPinia();

app.use(infiniteScroll)
pinia.use(piniaPluginPersistedState);
app.use(pinia);
app.use(router);

app.mount("#app");
