import { TYPES } from './mutations';

function pushMessageAlert({ commit }, { message, type = 'error' }) {
  commit(TYPES.UPDATE_ALERT, { message, type });
}

export default {
  pushMessageAlert,
};
