import { createRouter, createWebHistory } from 'vue-router'
import Helloworld from './components/HelloWorld'
import Osakana from './components/test'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Helloworld
  },
  {
    path: '/a',
    name: 'sub',
    component: Osakana
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
