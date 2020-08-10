import { TYPES } from './mutations';
import api from './api';

const GENERIC_TYPES = {
  EXAMPLE: 'exampleDetails',
};

function exampleAction({ commit }, { apiData }) {
  return new Promise(async (resolve, reject) => {
    commit(TYPES.GENERIC_REQUEST, GENERIC_TYPES.EXAMPLE);
    try {
      const { data } = await api.exampleAPI({ apiData });
      commit(TYPES.EXAMPLE_SUCCESS, data);
      resolve(data);
    } catch (error) {
      commit(TYPES.GENERIC_ERROR, {
        type: GENERIC_TYPES.EXAMPLE,
        message: error.message,
      });
      reject(error);
    }
  });
}

export default {
  exampleAction,
};
