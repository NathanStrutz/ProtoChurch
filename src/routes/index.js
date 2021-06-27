import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./Home.vue";
import Signup from "./Signup.vue";
import Inside from "./Inside.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/signup", component: Signup },
  { path: "/inside", component: Inside },
  { path: "/groups", component: Inside },
  { path: "/groups/:slug", component: Inside },
  { path: "/notifications", component: Inside },
  { path: "/profile", component: Inside },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export { router };
