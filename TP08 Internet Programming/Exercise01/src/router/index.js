import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import ResisterView from '../views/ResisterView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
      //or
      // component: () => import('../views/LoginView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/resister',
      name: 'Resister',
      component: ResisterView
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    }
  ]
})
export default router
