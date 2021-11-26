import errorReducer, { initState } from './error.reducer';

// API Action is of form req_Name_Type ;where Type = START|SUCCESS|FAILURE|CLEAR

describe('Error reducer', () => {
  it('Should return initState for no API Action', () => {
    expect(errorReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });

  const REQUEST_NAME = 'REQUEST_NAME';
  const ERROR_MESSAGE = 'Im the error msg';

  it('Should set Error Message for Request Name when getting an API Action of Type FAILURE', () => {
    const TYPE = 'FAILURE';

    const state = errorReducer(initState, {
      type: `${REQUEST_NAME}_${TYPE}`,
      payload: { error: ERROR_MESSAGE },
    });
    expect(state[REQUEST_NAME]).toBe(ERROR_MESSAGE);
  });

  it("Should set Error Message = '' when getting an API Action of Type START", () => {
    const TYPE = 'START';
    const currentState = {
      [REQUEST_NAME]: ERROR_MESSAGE,
    };

    const state = errorReducer(currentState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe('');
  });

  it("Should set Error Message = '' when getting an API Action of Type SUCCESS", () => {
    const TYPE = 'SUCCESS';
    const currentState = {
      [REQUEST_NAME]: ERROR_MESSAGE,
    };

    const state = errorReducer(currentState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe('');
  });

  it("Should set Error Message = '' when getting an API Action of Type CLEAR", () => {
    const TYPE = 'CLEAR';
    const currentState = {
      [REQUEST_NAME]: ERROR_MESSAGE,
    };

    const state = errorReducer(currentState, { type: `${REQUEST_NAME}_${TYPE}` });
    expect(state[REQUEST_NAME]).toBe('');
  });
});
