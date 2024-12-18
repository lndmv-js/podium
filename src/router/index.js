import { createRouter, createWebHistory } from '@ionic/vue-router';

import Auth from '@/views/Auth.vue'
// import TabsLayout from '@/components/base/TabsLayout.vue'

const routes = [
  {
    path: '/',
    component: Auth
  },
  {
    path: '/tabs/',
    redirect: '/tabs/bonuscards',
  },
  {
    path: '/tabs/',
    component: () => import('@/components/base/TabsLayout.vue'),
    children: [
      {
        path: '',
        redirect: 'bonuscards',
      },
      {
        path: 'bonuscards',
        name: 'bonuscards',
        component: () => import('@/views/BonusCards.vue'),
      },
      {
        path: 'purchases',
        name: 'purchases',
        component: () => import('@/views/Purchases.vue'),
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import('@/views/Notifications.vue'),
      },
      {
        path: 'support',
        name: 'support',
        component: () => import('@/views/Support.vue'),
      },
    ],
  }
]

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
