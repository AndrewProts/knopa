import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:lang/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    redirect: "/ru"
  },
  {
    path: '*',
    redirect: "/ru"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
