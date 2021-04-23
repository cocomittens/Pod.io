import { DETAILS, EPISODES, PODCASTS } from "../utils/constants";
import { Grid, Typography } from "@material-ui/core";
import { Howl, Howler } from "howler";

import EpisodeList from "./EpisodeList";
import PodcastList from "./PodcastList";
import PodcastPlayer from "./PodcastPlayer";
import React from "react";
import { useSelector } from "react-redux";

const ListDisplay = () => {
  const episodes = useSelector((state) => state.episodeList);
  const displayType = useSelector((state) => state.displayType);
  const renderDisplay = () => {
    console.log(displayType);
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
      <Grid item>{renderDisplay()}</Grid>
      <Grid item>
        <PodcastPlayer />
      </Grid>
    </Grid>
  );
};

export default ListDisplay;
