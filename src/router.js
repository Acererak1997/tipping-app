import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import DashBoard from './views/dashBoard.vue';
import CreateAccount from './views/createAccount.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/', component: Login
  }, {
    path: '/DashBoard', component: DashBoard
  }, {
    path: '/CreateAccount', component: CreateAccount
  }]
});