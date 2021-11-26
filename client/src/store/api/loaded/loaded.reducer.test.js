import loadedReducer, { initState } from './loaded.reducer';

describe('Loaded Reducer', () => {
  it('Should return initState for no API Action', () => {
    expect(loadedReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });

  const REQUEST_NAME = 'REQUEST_NAME';

  it('Should set request name true when getting an API Action only of Type SUCCESS', () => {
    const TYPE = 'SUCCESS';

    const state = loadedReducer(initState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe(true);
  });

  it('Should set request name false when getting an API Action only of Type CLEAR', () => {
    const TYPE = 'CLEAR';
    const currentState = {
      [REQUEST_NAME]: true,
    };

    const state = loadedReducer(currentState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe(false);
  });
});
