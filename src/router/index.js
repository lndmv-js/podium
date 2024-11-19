import { createRouter, createWebHistory } from '@ionic/vue-router';

import Purchases from '@/pages/Purchases.vue'

const routes = [
  {
    path: '/',
    redirect: '/purchases'
  },
	{
		path: '/purchases',
		name: 'Purchases',
		component: Purchases
	},
	{
		path: '/notifications',
		name: 'Notifications',
		component: () => import('../pages/Notifications.vue')
	}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
