import rootReducer, { initState } from './root.reducer';

describe('Root Reducer', () => {
  it('Should return initState', () => {
    expect(rootReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });
});
