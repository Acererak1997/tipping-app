import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      wallet: 300
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setLoggedin(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
  }
})