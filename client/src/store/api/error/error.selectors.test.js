import errorSelectors from './error.selectors';

describe('Error Selectors', () => {
  describe('createErrorSelector', () => {
    const REQUEST_NAME = 'REQUEST_NAME';
    const ERROR_MESSAGE = 'Error Message';
    const actions = [REQUEST_NAME];

    it('Should return error message if exist', () => {
      const currentState = {
        api: {
          error: {
            [REQUEST_NAME]: ERROR_MESSAGE,
          },
        },
      };

      const selectError = errorSelectors.createErrorSelector(actions);
      expect(selectError(currentState)).toBe(ERROR_MESSAGE);
    });

    it('Should return empty string if no error message found', () => {
      const currentState = {
        api: {
          error: {},
        },
      };

      const selectError = errorSelectors.createErrorSelector(actions);
      expect(selectError(currentState)).toBe('');
    });

    it('Should return error message if one action have faild even when others are succeeded', () => {
      const ANOTHER_REQUEST_NAME = 'ANOTHER_REQUEST_NAME';
      const currentState = {
        api: {
          error: {
            [REQUEST_NAME]: ERROR_MESSAGE,
            [ANOTHER_REQUEST_NAME]: '',
          },
        },
      };

      const selectError = errorSelectors.createErrorSelector([ANOTHER_REQUEST_NAME, ...actions]);
      expect(selectError(currentState)).toBe(ERROR_MESSAGE);
    });
  });
});
