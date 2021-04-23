import { Grid, Typography } from "@material-ui/core";
import { Howl, Howler } from "howler";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FF0000",
    height: "10vh",
    width: "100vw",
    position: "fixed",
    bottom: "0",
  },
});

const PodcastPlayer = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item></Grid>
    </Grid>
  );
};

export default PodcastPlayer;
