import apiReducer, { initState } from './api.reducer';

describe('Api reducer', () => {
  it('should return the initial state', () => {
    expect(apiReducer(initState, { type: '@@INIT' })).toEqual(initState);
    expect(apiReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });
});
