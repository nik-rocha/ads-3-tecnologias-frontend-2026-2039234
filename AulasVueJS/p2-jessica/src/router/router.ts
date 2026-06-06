import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/views/ListView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView,
    },
    {
      path: '/about/:id',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
