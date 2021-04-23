import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const EpisodeList = () => {
  const episodes = useSelector((state) => state.episodeList);
  console.log(episodes);
  return (
    <List>
      {episodes.map((episode) => (
        <ListItem button>
          <ListItemText primary={episode.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default EpisodeList;
