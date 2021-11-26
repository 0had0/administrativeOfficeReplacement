// @flow
import type { Action } from "types";
import AuthActionTypes from "./auth.types";

const login = (payload: PostLoginBody): Action => ({
  type: AuthActionTypes.LOGIN,
  payload,
});

const loginStart = (): Action => ({
  type: AuthActionTypes.LOGIN_START,
});

const loginSuccess = (payload: AccountId): Action => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (error: string): Action => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: { error },
});

const loginClear = (): Action => ({
  type: AuthActionTypes.LOGIN_CLEAR,
});

const logout = (): Action => ({
  type: AuthActionTypes.LOGOUT,
});

const logoutStart = (): Action => ({
  type: AuthActionTypes.LOGOUT_START,
});

const logoutSuccess = (): Action => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
});

const logoutFailure = (error: string): Action => ({
  type: AuthActionTypes.LOGOUT_FAILURE,
  payload: { error },
});

const auth = (): Action => ({
  type: AuthActionTypes.AUTH,
});

const authStart = (): Action => ({
  type: AuthActionTypes.AUTH_START,
});

const authSuccess = (payload: AccountId): Action => ({
  type: AuthActionTypes.AUTH_SUCCESS,
  payload,
});

const authFailure = (error: string): Action => ({
  type: AuthActionTypes.AUTH_FAILURE,
  payload: { error },
});

const authClear = (): Action => ({
  type: AuthActionTypes.AUTH_CLEAR,
});

export default {
  login,
  loginStart,
  loginSuccess,
  loginFailure,
  loginClear,
  logout,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  auth,
  authStart,
  authSuccess,
  authFailure,
  authClear,
};
