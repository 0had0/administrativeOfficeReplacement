import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

const selectAccountId = createSelector([selectAuth], (auth) => auth.accountId);

const selectIsAuth = createSelector([selectAuth], (auth) => auth.isAuth);

export default {
  selectAccountId,
  selectIsAuth,
};
