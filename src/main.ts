import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";

import "./assets/css/reset.css";
import "./style.css";
import "ant-design-vue/dist/antd.css";

import router from "@/router";

createApp(App).use(Antd).use(router).mount("#app");
