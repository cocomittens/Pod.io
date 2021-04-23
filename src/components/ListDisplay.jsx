import { DETAILS, EPISODES, PODCASTS } from "../utils/constants";
import { Grid, Typography } from "@material-ui/core";
import { Howl, Howler } from "howler";

import EpisodeList from "./EpisodeList";
import PodcastList from "./PodcastList";
import PodcastPlayer from "./PodcastPlayer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  background: {
    backgroundColor: "#edeef7",
  },
});
const ListDisplay = () => {
  const classes = useStyles();
  const episodes = useSelector((state) => state.episodeList);
  const displayType = useSelector((state) => state.displayType);

  const renderDisplay = () => {
    switch (displayType) {
      case PODCASTS:
        return <PodcastList />;
      case EPISODES:
        return <EpisodeList episodes={episodes} />;
      default:
        return <PodcastList />;
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        {renderDisplay()}
      </Grid>
      <Grid item xs={12}>
        <PodcastPlayer />
      </Grid>
    </Grid>
  );
};

export default ListDisplay;
