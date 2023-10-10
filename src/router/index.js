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
      path: '/Drivers',
      name: 'Drivers',
      component: () => import('../views/Drivers.vue')
    },
    {
      path: '/3Dprices',
      name: '3Dprices',
      component: () => import('../views/3DpricesView.vue')
    },
    {
      path: '/T.O.S',
      name: 'T.O.S',
      component: () => import('../views/T.O.Sview.vue')
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: () => import('../views/Orders.vue')
    }
  ]
})

export default router

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.