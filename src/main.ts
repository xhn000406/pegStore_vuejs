import { createApp } from "vue";
import App from "./App.vue";

import "@/assets/css/base.less";
import "@element-plus/icons-vue";

import { createPinia } from "pinia";
const pinpia = createPinia();

createApp(App).use(pinpia).mount("#app");
