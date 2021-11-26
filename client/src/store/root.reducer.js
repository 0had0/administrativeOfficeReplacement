import { combineReducers } from 'redux';

import authReducer, { initialState as authState } from './auth/auth.reducer';
import apiReducer, { initState as apiState } from './api/api.reducer';
import appReducer, { initState as appState } from './app/app.reducer';

export const initState = {
  auth: authState,
  api: apiState,
  app: appState,
};

export default combineReducers({
  auth: authReducer,
  api: apiReducer,
  app: appReducer,
});
