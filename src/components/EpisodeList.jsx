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

import { makeStyles } from "@material-ui/core/styles";
import { setCurrentEpisode } from "../actions/currentEpisode";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  selected: {
    backgroundColor: "#edeef7",
  },
});
const EpisodeList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);

  const handleClick = (episode, index) => {
    dispatch(setCurrentEpisode(episode));
    setSelected(index);
    console.log(index, selected);
  };
  const { episodes } = props;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeList;
