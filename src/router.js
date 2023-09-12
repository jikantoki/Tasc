import { createRouter, createWebHistory } from 'vue-router'
import Helloworld from './components/HelloWorld'
import Osakana from './components/test'
import NotFound from './components/error/404'
import MetaFunction from '../functions/metaFunctions'

/**
 * ここに登録されたページしか使えない
 */
const routes = [
  {
    path: '/',
    component: Helloworld,
    meta: {
      title: 'Top',
      description: '友達と、会社の人と、簡単にタスクを共有。Tasc by エノキ電気'
    }
  },
  {
    path: '/a',
    component: Osakana,
    meta: {
      title: 'Sub'
    }
  },
  {
    path: '/:catchAll(.*)', //404
    component: NotFound,
    meta: {
      title: '404 Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

router.afterEach((to) => {
  MetaFunction.setTitle(to.meta.title)
  if (to.meta.description) {
    MetaFunction.updateMeta('og:description', to.meta.description)
    MetaFunction.updateMeta('description', to.meta.description)
  }
})
