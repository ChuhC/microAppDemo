import { createRouter, createWebHistory } from 'vue-router'
import vue3App from '../views/vue3page/vue3App.vue'

// 定义路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') // 懒加载
  },
  {
    path: '/about1',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    // 非严格匹配，/vue3-app/* 都指向 vue3App 页面
    path: '/vue3-sub/:page*',
    name: 'vue3-sub',
    component: vue3App,
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router