import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    updateKey: 0,
  },
  mutations: {
    incrementUpdateKey: (state) => state.updateKey++,
  },
  actions: {},
  modules: {},
  getters: {
    getUpdateKey: (state) => state.updateKey,
  },
});
