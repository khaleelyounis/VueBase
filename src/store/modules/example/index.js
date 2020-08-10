import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
  exampleDetails: {
    loading: false,
    errorMessage: '',
    successMessage: '',
    data: {},
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
