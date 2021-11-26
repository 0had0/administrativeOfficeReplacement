import loadingSelectors from './loading.selectors';

describe('Loading Value Selector', () => {
  describe('createIsLoadingSelector', () => {
    const REQUEST_NAME = 'REQUEST_NAME';
    const actions = [REQUEST_NAME];

    it('Should return true if an action type is loading', () => {
      const currentState = {
        api: {
          loading: {
            [REQUEST_NAME]: true,
          },
        },
      };

      const selectLoading = loadingSelectors.createIsLoadingSelector(actions);
      expect(selectLoading(currentState)).toBe(true);
    });

    it("Should return false for an action type that don't exist", () => {
      const currentState = {
        api: {
          loading: {},
        },
      };

      const selectLoading = loadingSelectors.createIsLoadingSelector(actions);
      expect(selectLoading(currentState)).toBe(false);
    });

    it('Should return true if one actions is still loading', () => {
      const ANOTHER_REQUEST_NAME = 'ANOTHER_REQUEST_NAME';
      const currentState = {
        api: {
          loading: {
            [REQUEST_NAME]: true,
            [ANOTHER_REQUEST_NAME]: false,
          },
        },
      };

      const selectLoading = loadingSelectors.createIsLoadingSelector([
        ANOTHER_REQUEST_NAME,
        ...actions,
      ]);
      expect(selectLoading(currentState)).toBe(true);
    });
    it('Should return true if no actions is loading', () => {
      const ANOTHER_REQUEST_NAME = 'ANOTHER_REQUEST_NAME';
      const currentState = {
        api: {
          loading: {
            [REQUEST_NAME]: false,
            [ANOTHER_REQUEST_NAME]: false,
          },
        },
      };

      const selectLoading = loadingSelectors.createIsLoadingSelector([
        ANOTHER_REQUEST_NAME,
        ...actions,
      ]);
      expect(selectLoading(currentState)).toBe(false);
    });
  });
});
