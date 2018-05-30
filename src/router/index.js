import Vue from 'vue'
import Router from 'vue-router'
import system from './system'
import customer from './customer'
const _import = require('./_import_' + process.env.NODE_ENV)
/* Layout */
import Layout from '../views/layout/layout'

Vue.use(Router)

const defaultRouters = [
  {
    path: '/login',
    name: 'login',
    component: _import('login')
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/*',
    name: '404',
    component: _import('notFound')
  }
]

const routes = [...system,...customer,...defaultRouters]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
