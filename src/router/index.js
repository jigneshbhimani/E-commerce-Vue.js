import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    component: () => import("../components/Authentication/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Authentication/Login.vue"),
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../components/Common/Category.vue"),
  },
  {
    path: "/electronics",
    component: () => import("../components/Electronics/Electronics.vue"),
    name: "electronics",
  },
  {
    path: "/clothes",
    component: () => import("../components/Clothes/Cloth.vue"),
    name: "clothes",
  },
  {
    path: "/books",
    component: () => import("../components/Books/Book.vue"),
    name: "books",
  },
  {
    path: "/toys",
    component: () => import("../components/Toys/Toys.vue"),
    name: "toys",
  },
  {
    path: "/shoes",
    component: () => import("../components/Shoe/Shoes.vue"),
    name: "shoes",
  },
  {
    path: "/electronic-details/:id",
    name: "electronic-details",
    component: () => import("../components/Electronics/ElectronicDetails.vue"),
  },
  {
    path: "/cloth-details/:id",
    name: "cloth-details",
    component: () => import("../components/Clothes/ClothDetails.vue"),
  },
  {
    path: "/boook-details/:id",
    name: "book-details",
    component: () => import("../components/Books/BookDetails.vue"),
  },
  {
    path: "/toy-details/:id",
    name: "toy-details",
    component: () => import("../components/Toys/ToyDetails.vue"),
  },
  {
    path: "/shoes-details/:id",
    name: "shoes-details",
    component: () => import("../components/Shoe/ShoesDetails.vue"),
  },
  {
    path: "/cart",
    component: () => import("../components/Cart/Cart.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("../views/Success.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("../views/Cancel.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
