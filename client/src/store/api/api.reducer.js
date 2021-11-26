import { combineReducers } from 'redux';

import loadedReducer, { initState as loadedState } from './loaded/loaded.reducer';
import loadingReducer, { initState as loadingState } from './loading/loading.reducer';
import errorReducer, { initState as errorState } from './error/error.reducer';

export const initState = {
  loaded: loadedState,
  loading: loadingState,
  error: errorState,
};

export default combineReducers({
  loaded: loadedReducer,
  loading: loadingReducer,
  error: errorReducer,
});
