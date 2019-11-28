import Vue from 'vue'
import Router from 'vue-router'
import MySpreadsheets from '@/components/MySpreadsheets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MySpreadsheets',
      component: MySpreadsheets
    }
  ]
})
