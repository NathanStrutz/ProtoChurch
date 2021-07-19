import { store } from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Signup from "./Signup.vue";
import Inside from "./Inside.vue";
import Groups from "./Groups.vue";
import GroupHome from "./GroupHome.vue";
import Notifications from "./Notifications.vue";
import Profile from "./Profile.vue";
import Prayer from "./Prayer.vue";

const routes = [
  { path: "/", component: Home, meta: { public: true } },
  { path: "/signup", component: Signup, meta: { public: true } },
  { path: "/inside", component: Inside },
  { path: "/groups", component: Groups },
  { path: "/groups/:id", component: GroupHome, props: true },
  { path: "/notifications", component: Notifications },
  { path: "/prayer", component: Prayer },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from) => {
  if (to.meta.public && store.state.user) {
    store.commit("logOut");
  }

  if (to.meta.public || (!to.meta.public && store.state.user)) {
    return true;
  } else {
    // Bypass security - go wherever
    store.commit("logIn", { id: 99, name: "Whoever" });
    return true;
    // Enable security - go to the login page if you aren't logged in
    // router.push("/");
    // return false;
  }
});

export { router };
