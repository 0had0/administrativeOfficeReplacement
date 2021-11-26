import authReducer, { initialState } from './auth.reducer';
import AuthActionTypes from './auth.types';

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });
  const ID = 5;

  it('should set accountId and isAuth to true on loginSuccess action', () => {
    const action = {
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: { accountId: ID },
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({ accountId: ID, isAuth: true });
  });

  it('should reset accountId and isAuth on logoutSuccess action', () => {
    const action = {
      type: AuthActionTypes.LOGOUT_SUCCESS,
    };
    const currentState = { accountId: ID };
    const state = authReducer(currentState, action);
    expect(state).toEqual({ accountId: null, isAuth: false });
  });

  it('should set accountId and isAuth to true on authSuccess action', () => {
    const action = {
      type: AuthActionTypes.AUTH_SUCCESS,
      payload: { accountId: ID },
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({ accountId: ID, isAuth: true });
  });
});
