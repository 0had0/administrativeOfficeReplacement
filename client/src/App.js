import { useMemo } from "react";
import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Routes from "routes/Routes";
import ErrorBoundary from "component/ErrorBoundary/ErrorBoundary";

import themeSelector from "store/app/theme/theme.selector";
import darkTheme from "styles/theme/dark.theme";
import lightTheme from "styles/theme/light.theme";

export default function App() {
  const isDarkTheme = useSelector(themeSelector.isDarkTheme);

  const theme = useMemo(
    () => createTheme(isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <BrowserRouter>
          <ReactRouterRoutes>
            <Routes />
            <Navigate to="/" />
          </ReactRouterRoutes>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
