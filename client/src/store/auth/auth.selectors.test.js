import authSelectors from './auth.selectors';

describe('Auth selectors', () => {
  describe('selectAccountId', () => {
    it('should return the accountId', () => {
      const ID = 5;
      const currentState = { auth: { accountId: ID } };
      const selectedAccountId = authSelectors.selectAccountId(currentState);
      expect(selectedAccountId).toBe(ID);
    });
  });

  describe('selectIsAuth', () => {
    it('should return isAuth if equal to true', () => {
      const currentState = { auth: { accountId: 5, isAuth: true } };
      const selectedIsAuth = authSelectors.selectIsAuth(currentState);
      expect(selectedIsAuth).toBe(true);
    });

    it('should return isAuth if equal to false', () => {
      const currentState = { auth: { accountId: null, isAuth: false } };
      const selectedIsAuth = authSelectors.selectIsAuth(currentState);
      expect(selectedIsAuth).toBe(false);
    });
  });
});
