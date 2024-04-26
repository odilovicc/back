import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import List from '@/pages/List.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
