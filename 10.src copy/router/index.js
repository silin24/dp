import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({

  mode: 'hash',
  // 项目中所有路由
  routes
})