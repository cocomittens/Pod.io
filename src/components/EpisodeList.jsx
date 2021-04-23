import {
  Box,
  Collapse,
  IconButton,
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import { setCurrentEpisode } from "../actions/currentEpisode";
import { setPodcasts } from "../actions/displayType";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  unselected: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#edeef7",
    },
  },
  selected: {
    cursor: "pointer",
    backgroundColor: "#edeef7",
  },
  back: {
    "&:hover": {
      cursor: "pointer",
      opacity: ".8",
    },
    fontSize: "60px",
  },
  body: {
    paddingBottom: "10vh",
  },
});
const EpisodeList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState(-1);

  const handleClick = (episode, index) => {
    dispatch(setCurrentEpisode(episode));
    setSelected(index);
  };

  const handleBackClick = () => {
    dispatch(setPodcasts());
  };
  const { episodes } = props;
  return (
    <TableContainer className={classes.body} component={Paper}>
      <ArrowBackIcon className={classes.back} onClick={handleBackClick} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Title</Typography>
            </TableCell>

            <TableCell>
              <Typography variant="h6">Date</Typography>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody className={classes.episodes}>
          {episodes.map((episode, index) => (
            <React.Fragment>
              <TableRow
                className={
                  index === selected ? classes.selected : classes.unselected
                }
                onClick={() => handleClick(episode, index)}
                key={index}
              >
                <TableCell>
                  <Typography variant="body1">{episode.title}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    {new Date(episode.date_published).getMonth()}-
                    {new Date(episode.date_published).getDate()}-
                    {new Date(episode.date_published).getFullYear()}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(open >= 0 ? -1 : index)}
                  >
                    {open === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={12}
                >
                  <Collapse in={open === index} timeout="auto" unmountOnExit>
                    <Typography variant="body1">
                      {episode.content_text}
                    </Typography>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodeList;
