import { createApp } from "vue";
import { router } from "./routes";
import { store } from "./store";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import "@/assets/social-sign-in/auth-buttons.css";

createApp(App).use(router).use(store).mount("#app");

import "./utils/initialize-time-ago";
