import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView'
import CreateView from '../views/CreateView'
import DetailView from '../views/DetailView'
import NotFound404 from '../views/NotFound404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/404-not-found', 
    //detail보다 먼저, 404번째 게시글과 혼동x 위해 /404-not-found로 등록
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '*',
    redirect: { name: 'NotFound404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
