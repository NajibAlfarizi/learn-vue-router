import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("../views/Product.vue"),
      children: [
        {
          path: "owner",
          name: "owner",
          component: () => import("../views/Owner.vue"),
        },
      ],
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/:catchAll(.*)*",
      name: "not-found",
      component: () => import("../views/errors/404.vue"),
    },
  ],
});

export default router