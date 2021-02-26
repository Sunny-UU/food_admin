import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:sessionStorage.getItem("login"),
  },
  mutations: {
    SET_LOGIN: (state, login) => {
      let log = JSON.stringify(login)
      state.login = log;
      sessionStorage.setItem("login",log)
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    login: state =>state.login
  }
})
