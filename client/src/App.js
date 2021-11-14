import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

import Routes from "routes/Routes";
import ErrorBoundary from "component/ErrorBoundary/ErrorBoundary";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";

const getDesignTokens = (mode: PaletteMode) => ({
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary>
            <CssBaseline />
            <Routes />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
