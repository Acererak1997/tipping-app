import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      wallet: 300
    },
    otherUsers: [],
  },
  getters: {
    user(state) {
      return state.user
    },
    otherUsers(state){
      return state.otherUsers
    }
  },
  mutations: {
    setLoggedin(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
    otherUsers(state, otherUsers){
      state.otherUsers.push(otherUsers)
    },
    moneyTransfer(state, n){
      state.user.wallet -= n
    }
  },
  actions: {
    fetchuser({ commit }) {
      firebase.firestore().collection('user').get().then(snapshot => {
        snapshot.forEach(doc => commit('otherUsers', doc.data))
      })
    }
  }
})