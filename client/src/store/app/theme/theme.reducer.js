import { handleActions } from "redux-actions";

import themeTypes from "./theme.types";

export const initialState: ThemeMode =
  localStorage.getItem("AORB-theme-mode") ?? "light";

const toggleTheme = (state: ThemeMode): ThemeMode =>
  state === "light" ? "dark" : "light";

const reducerMap = {
  [themeTypes.TOGGLE_THEME]: toggleTheme,
};

export default handleActions(reducerMap, initialState);
