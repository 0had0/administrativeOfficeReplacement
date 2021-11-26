import { handleActions } from "redux-actions";

import AuthActionTypes from "./auth.types";

export const initialState: AuthState = {
  accountId: null,
  isAuth: false,
};

const loginSuccess = (state: AuthState, action: Action): AuthState => ({
  ...state,
  accountId: action?.payload || null,
  isAuth: true,
});

const logoutSuccess = (): AuthState => initialState;

const reducerMap = {
  [AuthActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthActionTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AuthActionTypes.AUTH_SUCCESS]: loginSuccess,
};

export default handleActions(reducerMap, initialState);
