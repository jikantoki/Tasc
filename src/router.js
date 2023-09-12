import { createRouter, createWebHistory } from 'vue-router'
import Helloworld from './components/HelloWorld'
import Osakana from './components/test'
import NotFound from './components/error/404'

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
  },
  {
    path: '/:catchAll(.*)', //404
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
