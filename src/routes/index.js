import { store } from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Signup from "./Signup.vue";
import Inside from "./Inside.vue";
import Groups from "./Groups.vue";
import GroupHome from "./GroupHome.vue";

const routes = [
  { path: "/", component: Home, meta: { public: true } },
  { path: "/signup", component: Signup, meta: { public: true } },
  { path: "/inside", component: Inside },
  { path: "/groups", component: Groups },
  { path: "/groups/:slug", component: GroupHome },
  { path: "/notifications", component: Inside },
  { path: "/profile", component: Inside },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from) => {
  if (!to.meta.public && store.state.user === null) {
    router.push("/");
    return false;
  }
});

export { router };
