import themeTypes from "./theme.types";

const toggleTheme = (payload: ThemeMode): Action => ({
  type: themeTypes.TOGGLE_THEME,
  payload,
});

export default {
  toggleTheme,
};
