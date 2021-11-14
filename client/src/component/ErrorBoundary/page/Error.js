import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import withFullPageContainer from "utils/HOC/withFullPageContainer";

export default withFullPageContainer(() => {
  return (
    <Grid
      container
      sx={{ height: "100%" }}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <ErrorRoundedIcon sx={{ fontSize: 200, color: "error.main" }} />
      </Grid>
      <Typography sx={{ color: "error.main", my: 1 }}>
        Something Wrong!
      </Typography>
      <Button
        as={RouterLink}
        to="/"
        sx={{
          backgroundColor: "error.main",
          color: "background.default",
          my: 1,
          textDecoration: "none",
        }}
        variant="contained"
      >
        Go Home
      </Button>
    </Grid>
  );
}, "full-height");
