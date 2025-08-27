import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // { path: '/about', component: () => import('@/views/AboutView.vue') },
  ],
  scrollBehavior() { return { top: 0 } },
})
