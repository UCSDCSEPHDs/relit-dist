import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: {
      type: 0,
      name: 'Lorem Ipsum',
      tip: 'Zhu ma dian Ren yi Men'
    }
  },
  mutations: {
    updateResult (state, result) {
      state.result = result
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    result: state => state.result
  }
})
