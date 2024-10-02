import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/Inicio' },
  {
    path: '/',
    name: 'default',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Default.vue'),
    children: [
      {
        path: 'inicio',
        component: () => import('../pages/views/Inicio.vue'),
      },
      {
        path: 'filtro',
        component: () => import('../pages/views/Fantasma-Caracteristicas.vue'),
      },
      {
        path: 'Cronometro',
        component: () => import('../pages/views/Cronometro.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
