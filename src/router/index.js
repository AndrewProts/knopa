import Vue from "vue";
import VueRouter from "vue-router";
import Intro from "@/views/Intro/Intro";
import Other from "../views/Other.vue";
import Presentations3d from "../views/Presentation3d/Presentations3d.vue";
import Creatives from "../views/Creatives/Creatives.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:lang/",
    name: "Home",
    component: Presentations3d
  },
  {
    path: "/",
    redirect: "/en"
  },
  {
    path: "/:lang/intro",
    name: "Intro",
    component: Intro
  },
  {
    path: "/:lang/other",
    name: "Other",
    component: Other
  },
  {
    path: "/:lang/3dpresentations",
    name: "Presentations3d",
    component: Presentations3d
  },
  {
    path: "/:lang/creatives",
    name: "Creatives",
    component: Creatives
  },
  {
    path: "*",
    redirect: "/en"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
