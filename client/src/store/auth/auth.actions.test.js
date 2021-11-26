import authActions from './auth.actions';
import AuthActionTypes from './auth.types';

describe('Auth action creators', () => {
  const EMAIL = 'user@company.domain';
  const PASSWORD = '123456789';
  const ERROR = 'ERROR MESSAGE';
  const ID = '5';

  describe('login action creator', () => {
    it('should create the login action', () => {
      const action = authActions.login({ email: EMAIL, password: PASSWORD });
      expect(action.type).toBe(AuthActionTypes.LOGIN);
      expect(action.payload).toEqual({ email: EMAIL, password: PASSWORD });
    });
  });

  describe('loginStart action creator', () => {
    it('should create the loginStart action', () => {
      const action = authActions.loginStart();
      expect(action.type).toBe(AuthActionTypes.LOGIN_START);
    });
  });

  describe('loginSuccess action creator', () => {
    it('should create the loginSuccess action', () => {
      const action = authActions.loginSuccess(ID);
      expect(action.type).toBe(AuthActionTypes.LOGIN_SUCCESS);
      expect(action.payload).toEqual({ accountId: ID });
    });
  });

  describe('loginFailure action creator', () => {
    it('should create the loginFailure action', () => {
      const action = authActions.loginFailure(ERROR);
      expect(action.type).toBe(AuthActionTypes.LOGIN_FAILURE);
      expect(action.payload).toEqual({ error: ERROR });
    });
  });

  describe('loginClear action creator', () => {
    it('should create the loginClear action', () => {
      const action = authActions.loginClear();
      expect(action.type).toBe(AuthActionTypes.LOGIN_CLEAR);
    });
  });

  describe('logout action creator', () => {
    it('should create the logout action', () => {
      const action = authActions.logout();
      expect(action.type).toBe(AuthActionTypes.LOGOUT);
    });
  });

  describe('logoutStart action creator', () => {
    it('should create the logoutStart action', () => {
      const action = authActions.logoutStart();
      expect(action.type).toBe(AuthActionTypes.LOGOUT_START);
    });
  });

  describe('logoutSuccess action creator', () => {
    it('should create the logoutSuccess action', () => {
      const action = authActions.logoutSuccess();
      expect(action.type).toBe(AuthActionTypes.LOGOUT_SUCCESS);
    });
  });

  describe('logoutFailure action creator', () => {
    it('should create the logoutFailure action', () => {
      const action = authActions.logoutFailure(ERROR);
      expect(action.type).toBe(AuthActionTypes.LOGOUT_FAILURE);
      expect(action.payload).toEqual({ error: ERROR });
    });
  });
});
