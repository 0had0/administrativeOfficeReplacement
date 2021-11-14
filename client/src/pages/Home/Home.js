import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Link, Typography } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/test",
    }).then((res) => {
      setLoading(false);
      setName(res?.data?.result?.name);
    });
  }, [setLoading, setName]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      component="header"
      sx={{ height: "100%" }}
    >
      {loading ? (
        <Typography>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
      ) : (
        <Typography>Welcome to {name}!</Typography>
      )}
      <Link
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Grid>
  );
}

export default Home;
