import { Grid, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";

import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import ReactHowler from "react-howler";
import { makeStyles } from "@material-ui/core/styles";
import { setEpisodeList } from "../actions/displayType";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #7868e6 30%, #b8b5ff 90%)",
    width: "100vw",
    position: "fixed",
    bottom: "0",
  },
  playPause: {
    fontSize: "60px",
    color: "#edeef7",
    padding: "2vh 0",
    "&:hover": {
      cursor: "pointer",
      opacity: ".8",
    },
  },
});

const PodcastPlayer = (props) => {
  const { episode } = props;
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(episode !== null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    setIsPlaying(episode !== null);
  }, [episode, setIsPlaying]);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  const getAudio = episode ? [episode.attachments[0].url] : [""];

  const icon = isPlaying ? (
    <PauseCircleFilledIcon className={classes.playPause} />
  ) : (
    <PlayCircleFilledWhiteIcon className={classes.playPause} />
  );

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignContent="center"
    >
      <Grid item onClick={handlePlayButtonClick}>
        {icon}
      </Grid>
      <ReactHowler
        src={getAudio}
        playing={isPlaying}
        ref={(ref) => setPlayer(ref)}
      />
    </Grid>
  );
};

export default PodcastPlayer;
