import { createRouter, createWebHistory } from 'vue-router'
import createPage from '../pages/createPage.vue'
import pageList from '@/pages/pageList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: createPage
  },
  {
    path: '/list',
    name: 'list',
    component: pageList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
