import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/addDrivers',
      name: 'addDrivers',
      component: () => import('../views/addDrivers.vue')
    },
    {
      path: '/editDrivers',
      name: 'editDrivers',
      component: () => import('../views/editDrivers.vue')
    },
    {
      path: '/addOrders',
      name: 'addOrders',
      component: () => import('../views/addOrders.vue')
    },
    {
      path: '/editOrders',
      name: 'editOrders',
      component: () => import('../views/editOrders.vue')
    },
    {
      path: '/contactView',
      name: 'contactView',
      component: () => import('../views/contactView.vue')
    }
  ]
})

export default router

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.