import { createRouter, createWebHistory } from 'vue-router'
// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
    {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
