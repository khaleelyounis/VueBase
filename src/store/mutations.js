export const TYPES = {
  UPDATE_ALERT: 'UPDATE_ALERT',
};

export default {
  [TYPES.UPDATE_ALERT](appState, alertTypeWithMessage) {
    const stateToMutate = appState;
    stateToMutate.alert = alertTypeWithMessage;
  },
};
