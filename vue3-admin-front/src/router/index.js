import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
import Home from "../views/home/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];
=======
// import Home from "../views/Home.vue";
import routes from './route'
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ "../views/About.vue");
//     },
//   },
// ];
>>>>>>> c55ff3366647614c6fddfc3935ba03ac1859e59f

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
