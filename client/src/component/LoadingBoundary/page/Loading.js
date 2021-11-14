// @flow
import { Grid, CircularProgress } from "@mui/material";

type LoadingScreenProps = {
  height?: number,
  sx?: object,
  CircularProgressProps?: Object,
};

function LoadingScreen({
  height,
  sx,
  CircularProgressProps,
}: LoadingScreenProps): Node {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      sx={{ height: height ?? "100%", ...sx }}
    >
      <CircularProgress {...CircularProgressProps} />
    </Grid>
  );
}

LoadingScreen.defaultProps = {
  height: null,
  sx: {},
  CircularProgressProps: {},
};

export default LoadingScreen;
