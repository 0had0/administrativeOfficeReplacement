import apiSelectors from './api.selectors';

describe('API Selectors', () => {
  it('Should return api state', () => {
    const api = {
      SOME_KEY: 'SOME_VALUE',
    };

    expect(apiSelectors.selectApi({ api })).toEqual(api);
  });
});
