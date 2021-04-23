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
    background: "linear-gradient(45deg, #edeef7 30%, #fff 90%)",
    minHeight: "90vh",
    overflow: "hidden",
  },
});
const ListDisplay = () => {
  const classes = useStyles();
  const episodes = useSelector((state) => state.episodeList);
  const currentEpisode = useSelector((state) => state.currentEpisode);
  const currentPodcast = useSelector((state) => state.currentPodcast);
  const displayType = useSelector((state) => state.displayType);
  console.log(currentPodcast);
  const renderDisplay = () => {
    if (displayType === EPISODES)
      return <EpisodeList podcast={currentPodcast} episodes={episodes} />;
    return <PodcastList />;
  };
  return (
    <Grid container className={classes.background}>
      <Grid item xs={12}>
        {renderDisplay()}
      </Grid>
      <Grid item xs={12}>
        <PodcastPlayer episode={currentEpisode} />
      </Grid>
    </Grid>
  );
};

export default ListDisplay;
