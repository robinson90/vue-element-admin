import Vue from 'vue'
import Router from 'vue-router'
import system from './system'
import customer from './customer'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const defaultRouters = [
  {
    path: '/login',
    name: 'login',
    component: _import('login')
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
