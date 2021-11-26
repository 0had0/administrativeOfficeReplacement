import { takeLatest, all, call, put } from "redux-saga/effects";

import api from "api/institution";
import authActions from "./auth.actions";
import AuthActionTypes from "./auth.types";

export function* login({ payload: { email, password } }: Action) {
  yield put(authActions.loginStart());
  try {
    const {
      result: { id },
    } = yield call(api.login, { email, password });

    yield put(authActions.loginSuccess(id));
    yield call([localStorage, "setItem"], "AORB-id", id);
  } catch (error) {
    if (error instanceof TypeError) {
      yield put(authActions.loginFailure("Connection Error :("));
    } else {
      yield put(authActions.loginFailure(error.message));
    }
  }
}

export function* logout() {
  yield put(authActions.logoutStart());
  try {
    yield call([localStorage, "removeItem"], "AORB-id");
    yield put(authActions.logoutSuccess());
  } catch (error) {
    yield call(authActions.logoutFailure(error));
  }
}

export function* onLogin() {
  yield takeLatest(AuthActionTypes.LOGIN, login);
}

export function* onLogout() {
  yield takeLatest(AuthActionTypes.LOGOUT, logout);
}

export function* checkAuthState() {
  yield put(authActions.authStart());
  const storageId = yield call([localStorage, "getItem"], "schedex-id");

  try {
    if (storageId) {
      const {
        data: {
          result: { id },
        },
      } = yield call(api.authenticate, storageId);

      yield put(authActions.authSuccess(id));
    } else {
      yield put(authActions.authFailure("No Local Data"));
    }
  } catch (error) {
    yield put(authActions.authFailure(error.message));
  }
}

export function* onAuthCheck() {
  yield takeLatest(AuthActionTypes.AUTH, checkAuthState);
}

export default function* authSagas() {
  yield all([call(onLogin), call(onLogout), call(onAuthCheck)]);
}
