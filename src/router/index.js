import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../views/About.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
