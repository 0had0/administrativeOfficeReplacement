import { createSelector } from 'reselect';

import apiSelectors from '../api.selectors';

const selectLoading = createSelector([apiSelectors.selectApi], (api) => api.loading);

const createIsLoadingSelector = (actions) =>
  createSelector([selectLoading], (loadingState) => actions.some((action) => loadingState[action]));

const createIsLoadingSelectorInitialised = (actions) =>
  createSelector([selectLoading], (loadingState) =>
    actions.some((action) => loadingState[action] ?? true),
  );

export default {
  createIsLoadingSelector,
  createIsLoadingSelectorInitialised,
};
