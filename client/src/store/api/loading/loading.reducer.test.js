import loadingReducer, { initState } from './loading.reducer';

describe('Loading Reducer', () => {
  it('Should return initState', () => {
    expect(loadingReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });

  const REQUEST_NAME = 'REQUEST_NAME';

  it('Should set Request Name true when getting an Action only of Type START', () => {
    const TYPE = 'START';

    const state = loadingReducer(initState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe(true);
  });

  it('Should set request name false for FAILURE action TYPE', () => {
    const TYPE = 'FAILURE';
    const currentState = {
      [REQUEST_NAME]: true,
    };

    const state = loadingReducer(currentState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe(false);
  });

  it('Should set request name false for SUCCESS action TYPE', () => {
    const TYPE = 'SUCCESS';
    const currentState = {
      [REQUEST_NAME]: true,
    };

    const state = loadingReducer(currentState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe(false);
  });
});
