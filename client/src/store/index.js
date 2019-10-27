import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: {
      type: 0,
      name: 'Watter Bottle',
      tip: 'Bottled drinks are recyclable waste, including all kinds of scrap metal, glass bottles, beverage bottles, electronic products and so on. When putting in, we should pay attention to light handling, clean and dry, and avoid pollution.'
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
