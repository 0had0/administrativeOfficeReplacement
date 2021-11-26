import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import api from 'api/schedex';

import * as authSagas from './auth.sagas';
import authActions from './auth.actions';
import AuthActionTypes from './auth.types';

describe('Auth sagas', () => {
  describe('onLogin saga', () => {
    it('should trigger on LOGIN', () => {
      testSaga(authSagas.onLogin).next().takeLatest(AuthActionTypes.LOGIN, authSagas.login);
    });
  });

  describe('onLogout saga', () => {
    it('should trigger on LOGOUT', () => {
      testSaga(authSagas.onLogout).next().takeLatest(AuthActionTypes.LOGOUT, authSagas.logout);
    });
  });

  describe('onAuthCheck saga', () => {
    testSaga(authSagas.onAuthCheck)
      .next()
      .takeLatest(AuthActionTypes.AUTH, authSagas.checkAuthState);
  });

  describe('Login Sagas', () => {
    beforeEach(() => {
      localStorage.setItem.mockClear();
    });

    it('Should fire loginStart then loginSuccess if credentials are correct', async () => {
      const RESPONSE = { data: { result: { id: 5 } } };
      const ACTION = {
        type: 'LOGIN',
        payload: {
          email: 'user@company.domain',
          password: 'ImAHardPassword',
        },
      };

      await expectSaga(authSagas.login, ACTION)
        .put(authActions.loginStart())
        .provide([[matchers.call.fn(api.login), RESPONSE]])
        .put(authActions.loginSuccess(RESPONSE.data.result.id))
        .run();

      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('schedex-id', RESPONSE.data.result.id);
    });

    it('Should fire loginStart then loginFailure if credentials are incorrect', async () => {
      const RESPONSE_ERROR = throwError({ message: 'no error message' });
      const ACTION = {
        payload: {
          email: 'user@company.domain',
          password: 'ImAHardPassword',
        },
      };

      await expectSaga(authSagas.login, ACTION)
        .provide([[matchers.call.fn(api.login), RESPONSE_ERROR]])
        .put(authActions.loginStart())
        .put(authActions.loginFailure('no error message'))
        .run();
    });
  });

  describe('Check Auth State Sagas', () => {
    beforeEach(() => {
      localStorage.getItem.mockClear();
    });

    it('Should fire authStart then authSuccess if id found in localStorage and authenticated', async () => {
      const ID = 5;
      const RESPONSE = { data: { result: { id: ID } } };

      await expectSaga(authSagas.checkAuthState)
        .put(authActions.authStart())
        .provide([
          [matchers.call.fn(localStorage.getItem, 'schedex-id'), ID],
          [matchers.call.fn(api.authenticate, ID), RESPONSE],
        ])
        .put(authActions.authSuccess(ID))
        .run();
    });

    it('Should fire fire authStart then authFailure if id found in localStorage and not authenticated', async () => {
      const ID = 5;
      const RESPONSE_ERROR = throwError({ message: 'invalide id' });

      await expectSaga(authSagas.checkAuthState)
        .put(authActions.authStart())
        .provide([
          [matchers.call.fn(localStorage.getItem, 'schedex-id'), ID],
          [matchers.call.fn(api.authenticate, ID), RESPONSE_ERROR],
        ])
        .put(authActions.authFailure('invalide id'))
        .run();
    });

    it('Should do nothing if no id found in the localStorage', async () => {
      localStorage.clear();

      await expectSaga(authSagas.checkAuthState).run();

      expect(localStorage.getItem).toHaveBeenCalledTimes(1);
      expect(localStorage.getItem).toHaveBeenCalledWith('schedex-id');
    });
  });

  describe('Logout Sagas', () => {
    beforeEach(() => {
      localStorage.setItem.mockClear();
    });

    it('Should fire logoutStart & remove id from localStorage', async () => {
      const ID = 5;

      localStorage.setItem('schedex-id', ID);

      await expectSaga(authSagas.logout)
        .put(authActions.logoutStart())
        .put(authActions.logoutSuccess())
        .run();

      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledWith('schedex-id');
    });
  });
});
