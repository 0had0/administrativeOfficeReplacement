import { takeLatest, all, call, select } from "redux-saga/effects";

import themeSelectors from "./theme.selector";
import themeTypes from "./theme.types";

export function* rememberTheme() {
  const themeVariant = yield select(themeSelectors.selectTheme);
  try {
    localStorage.setItem("AORB-theme-mode", themeVariant);
  } catch (error) {
    console.log(error);
  }
}

export function* onRememberTheme() {
  yield takeLatest(themeTypes.TOGGLE_THEME, rememberTheme);
}

export default function* themeSagas() {
  yield all([call(onRememberTheme)]);
}
