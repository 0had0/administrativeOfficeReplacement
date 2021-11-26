import loadedSelectors from './loaded.selectors';

describe('Loaded Selectors', () => {
  describe('createIsLoadedSelector', () => {
    const REQUEST_NAME = 'REQUEST_NAME';
    const actions = [REQUEST_NAME];
    it('Should return true for actions with loaded type', () => {
      const currentState = {
        api: {
          loaded: {
            [REQUEST_NAME]: true,
          },
        },
      };

      const selectLoaded = loadedSelectors.createIsLoadedSelector(actions);
      expect(selectLoaded(currentState)).toBe(true);
    });

    it('Should return false for actions with not loaded type', () => {
      const currentState = {
        api: {
          loaded: {},
        },
      };

      const selectLoaded = loadedSelectors.createIsLoadedSelector(actions);
      expect(selectLoaded(currentState)).toBe(false);
    });

    it('Should return false if one action is not loaded yet', () => {
      const ANOTHER_REQUEST_NAME = 'ANOTHER_REQUEST_NAME';
      const currentState = {
        api: {
          loaded: {
            [REQUEST_NAME]: false,
            [ANOTHER_REQUEST_NAME]: true,
          },
        },
      };

      const selectLoaded = loadedSelectors.createIsLoadedSelector([
        ANOTHER_REQUEST_NAME,
        ...actions,
      ]);
      expect(selectLoaded(currentState)).toBe(false);
    });
  });
});
