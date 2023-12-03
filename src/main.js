import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui/es/preset";
import Ant from "ant-design-vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(Ant);
app.use(naive);
app.use(router);

app.mount("#app");
