import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import example from './modules/example';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    alert: {
      type: '',
      message: '',
    },
  },
  actions,
  getters,
  modules: {
    example,
  },
  mutations,
});

export default store;
