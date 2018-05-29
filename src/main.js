// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

// 引入ele样式
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import '@/styles/index.scss' // global css

import './permission' // 鉴权文件
import './mock' // simulation datacnpm

Vue.config.productionTip = false


Vue.use(Element, {
  size: 'medium', // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
