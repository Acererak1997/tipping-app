import Vue from 'vue'
import Router from 'vue-router'
import CreateAccount from '../components/createAccount'
import Signin from '../components/Signin'
import DashBoard from '../components/dashBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/createAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})