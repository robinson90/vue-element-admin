import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
  
   
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
})
