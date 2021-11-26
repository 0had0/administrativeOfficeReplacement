import { all, call } from 'redux-saga/effects';

import authSagas from './auth/auth.sagas';
import appSagas from './app/app.sagas';

export default function* rootSaga() {
  yield all([call(authSagas), call(appSagas)]);
}
