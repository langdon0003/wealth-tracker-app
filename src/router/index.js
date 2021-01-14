import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'
import Portfolio from '../views/Portfolio.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
