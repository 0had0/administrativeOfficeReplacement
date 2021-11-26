import { createSelector } from 'reselect';

import apiSelectors from '../api.selectors';

const selectError = createSelector([apiSelectors.selectApi], (api) => api.error);

// need to pass actions in an Array
const createErrorSelector = (actions) =>
  createSelector(
    [selectError],
    (errorState) =>
      actions.map((action) => errorState[action]).filter((errorMessage) => !!errorMessage)[0] ?? '',
  );

export default { createErrorSelector };
