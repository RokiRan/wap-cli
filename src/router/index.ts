import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import(/* webpackChunkName: "Home" */ '@/pages/me.vue')
      },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/home.vue')
  },
  {
    path: '/animate',
    name: 'Animate',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/animate.vue')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router