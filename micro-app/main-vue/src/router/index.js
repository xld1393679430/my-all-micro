import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

const router = createRouter();

export default router;
