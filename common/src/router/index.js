import Vue from 'vue'
import Router from 'vue-router'
import WDGSelect from '@/components/WDGSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WDGSelect',
      component: WDGSelect
    }
  ]
})
