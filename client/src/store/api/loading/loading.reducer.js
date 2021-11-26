export const initState: ErrorState = {};

export default (state: ErrorState = initState, action: Action): ErrorState => {
  const { type } = action;
  const matches = /(.*)_(START|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, reqName, reqStatus] = matches;
  return {
    ...state,
    [reqName]: reqStatus === "START",
  };
};
