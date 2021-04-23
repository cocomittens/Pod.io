import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { setCurrentEpisode } from "../actions/currentEpisode";
import { setPodcasts } from "../actions/displayType";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  selected: {
    backgroundColor: "#edeef7",
  },
  back: {
    fontSize: "60px",
  },
});
const EpisodeList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);

  const handleClick = (episode, index) => {
    dispatch(setCurrentEpisode(episode));
    setSelected(index);
  };

  const handleBackClick = () => {
    dispatch(setPodcasts());
  };
  const { episodes } = props;
  return (
    <TableContainer component={Paper}>
      <ArrowBackIcon className={classes.back} onClick={handleBackClick} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Title</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Description</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Date</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode, index) => (
            <TableRow
              className={index === selected ? classes.selected : ""}
              onClick={() => handleClick(episode, index)}
              key={index}
            >
              <TableCell component="th" scope="row">
                {episode.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {episode.content_text}
              </TableCell>
              <TableCell component="th" scope="row">
                {new Date(episode.date_published).getMonth()}-
                {new Date(episode.date_published).getDate()}-
                {new Date(episode.date_published).getFullYear()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeList;
