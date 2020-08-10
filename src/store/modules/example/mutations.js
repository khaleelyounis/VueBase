export const TYPES = {
  GENERIC_REQUEST: 'GENERIC_REQUEST',
  GENERIC_ERROR: 'GENERIC_ERROR',
  EXAMPLE_SUCCESS: 'EXAMPLE_SUCCESS',
};

export default {
  [TYPES.GENERIC_REQUEST](state, type) {
    const currentState = state;
    currentState[type].loading = true;
    currentState[type].successMessage = '';
    currentState[type].errorMessage = '';
  },
  [TYPES.GENERIC_ERROR](state, errorInfo) {
    const currentState = state;
    currentState[errorInfo.type].errorMessage = errorInfo.message;
    currentState[errorInfo.type].successMessage = '';
    currentState[errorInfo.type].loading = false;
  },
  [TYPES.EXAMPLE_SUCCESS](state, { data }) {
    const currentState = state;
    currentState.exampleDetails.data = data;
    currentState.orderDetails.errorMessage = '';
    currentState.orderDetails.loading = false;
  },
};
