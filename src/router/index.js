import Vue from 'vue'
import Router from 'vue-router'
import UserForm from '@/components/UserForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserForm',
      component: UserForm
    }
  ]
})
