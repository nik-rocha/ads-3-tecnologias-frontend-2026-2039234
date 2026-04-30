import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exercicio1View from '@/views/Exercicio1View.vue'
import Exercicio2View from '@/views/Exercicio2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/exercicio1',
      name: 'exercicio1',
      component: Exercicio1View,
    },
    {
      path: '/exercicio2',
      name: 'exercicio2',
      component: Exercicio2View,
    },
  ],
})

export default router
