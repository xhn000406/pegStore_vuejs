import { createApp } from "vue";
import App from "./App.vue";

import "@/assets/css/base.less";
import "@element-plus/icons-vue";

import { createPinia } from "pinia";
import router from "./routers";

const pinpia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinpia);
app.mount("#app");
