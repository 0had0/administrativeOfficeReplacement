export const initState: LoadedState = {};

export default (
  state: LoadedState = initState,
  action: Action
): LoadedState => {
  const { type } = action;
  const matches = /(.*)_(SUCCESS|CLEAR)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, reqName, reqStatus] = matches;
  return {
    ...state,
    [reqName]: reqStatus === "SUCCESS",
  };
};
