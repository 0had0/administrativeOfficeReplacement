import { combineReducers } from "redux";

// import subModuleReducer, {
//   initialState as subModuleState,
// } from "./subModule/subModule.reducer";

import themeReducer, {
  initialState as themeState,
} from "./theme/theme.reducer";

export const initState: AppState = {
  // subModule: subModuleState,
  theme: themeState,
};

export default combineReducers({
  // subModule: subModuleReducer,
  theme: themeReducer,
});
