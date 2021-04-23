import { Grid, Typography } from "@material-ui/core";
import { Howl, Howler } from "howler";

import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setEpisodeList } from "../actions/displayType";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#7868e6",

    width: "100vw",
    position: "fixed",
    bottom: "0",
  },
  playPause: {
    fontSize: "60px",
    color: "#edeef7",
    padding: "2vh 0",
  },
});

const PodcastPlayer = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignContent="center"
    >
      <Grid item>
        <PlayCircleFilledWhiteIcon className={classes.playPause} />
      </Grid>
    </Grid>
  );
};

export default PodcastPlayer;
