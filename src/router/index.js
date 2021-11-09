import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'

const routes = [
  {
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
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
