import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
    pageName: "Home Page"
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
    meta: {
    pageName: "My Portfolio"
  }
  },
  {
    path: "/packages",
    name: "Packages",
    component: () => import("../views/Packages.vue"),
    meta: {
    pageName: "My Packages"
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
    pageName: "Contact Me"
  },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router