import { createRouter, createWebHistory } from '@ionic/vue-router';

import StartPage from '@/views/StartPage.vue'

const routes = [
	{
    path: '/',
    // component: StartPage
    redirect: '/program'
    // component: () => import('@/views/TestApi.vue')
  },
	{
    path: '/auth',
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/tabs/',
    redirect: '/tabs/bonuscards'
  },
  {
    path: '/tabs/',
    component: () => import('@/components/base/TabsLayout.vue'),
    children: [
      {
        path: '',
        redirect: 'bonuscards'
      },
      {
        path: 'bonuscards',
        name: 'bonuscards',
        component: () => import('@/views/BonusCards.vue')
      },
      {
        path: 'purchases',
        name: 'purchases',
        component: () => import('@/views/Purchases.vue')
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import('@/views/Notifications.vue')
      },
      {
        path: 'support',
        name: 'support',
        component: () => import('@/views/Support.vue')
      },
    ],
  },
	{
    path: '/cardpage/:id',
    component: () => import('@/views/CardPage.vue')
  },
  {
    path: '/userpage',
    component: () => import('@/views/UserPage.vue')
  },
  {
    path: '/politics',
    component: () => import('@/views/TextPage.vue'),
		props: { name: 'privacy_policy' }
  },
  {
    path: '/program',
    component: () => import('@/views/TextPage.vue'),
		props: { name: 'loyalty_program' }
  },
	{
    path: '/shoplist',
    component: () => import('@/views/ShopList.vue')
  }
]

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
