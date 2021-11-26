import { all, call } from "redux-saga/effects";

import themeSagas from "./theme/theme.sagas";

export default function* appSagas() {
  yield all([call(themeSagas)]);
}
