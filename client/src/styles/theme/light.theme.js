import { grey, lightBlue } from "@mui/material/colors";

export default {
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: 10,
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "#e4e4e4",
          borderRadius: 100,
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: 100,
          border: "3px solid transparent",
          backgroundClip: "content-box",
          backgroundColor: lightBlue[600],
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode: "light",
    primary: lightBlue,
    divider: lightBlue[600],
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
};
