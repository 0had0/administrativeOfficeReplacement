import Grid from "@mui/material/Grid";

export default (Component, option) => (params) => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        [option === "full-height" ? "height" : "minHeight"]: "100vh",
        flex: 1,
      }}
    >
      <Component {...params} />
    </Grid>
  );
};
