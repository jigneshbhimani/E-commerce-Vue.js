import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  { path: "/products", component: Home, name: "products" },
  {
    path: "/product-details",
    name: "product-details",
    component: () => import("../components/ProductDetails.vue"),
  },
  {
    path: "/cart",
    component: () => import("../components/Cart.vue"),
  },
  {
    path: "/checkout",
    component: () => import("../components/Checkout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
