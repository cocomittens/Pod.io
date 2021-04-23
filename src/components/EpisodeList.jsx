import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import React from "react";
import { useDispatch } from "react-redux";

const EpisodeList = (props) => {
  const { episodes } = props;
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
