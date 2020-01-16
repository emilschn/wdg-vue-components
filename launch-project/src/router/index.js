import Vue from 'vue'
import Router from 'vue-router'
import LaunchProject from '@/components/LaunchProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LaunchProject',
      component: LaunchProject
    }
  ]
})
