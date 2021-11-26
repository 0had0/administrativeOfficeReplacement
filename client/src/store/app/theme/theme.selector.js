import { createSelector } from "reselect";
import appSelectors from "store/app/app.selectors";

const selectTheme = createSelector(
  [appSelectors.selectApp],
  (app) => app.theme
);

const isLightTheme = createSelector(
  [appSelectors.selectApp],
  (app) => app.theme === "light"
);
const isDarkTheme = createSelector(
  [appSelectors.selectApp],
  (app) => app.theme === "dark"
);

export default {
  selectTheme,
  isLightTheme,
  isDarkTheme,
};
