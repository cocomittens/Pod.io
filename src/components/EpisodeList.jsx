import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "5vh",
    objectFit: "cover",
    borderRadius: "5px",
  },
});

const EpisodeList = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  );
};

export default EpisodeList;
