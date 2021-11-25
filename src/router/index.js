import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import NotFoundPage from '@/views/404'
import store from '../store'

const routes = [{
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isToken) {
    next('/login')
  } else {
    next()
  }
})
export default router