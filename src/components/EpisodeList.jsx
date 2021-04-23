import {
  Collapse,
  Grid,
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
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/core/styles";
import { setCurrentEpisode } from "../actions/currentEpisode";
import { setPodcasts } from "../actions/displayType";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
      borderRadius: "5px",
    },
  },
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
    position: "fixed",
    padding: "1vh",
  },
  body: {
    paddingBottom: "10vh",
  },
  img: {
    width: "100%",
    borderRadius: "5px",

    "&:hover": {
      cursor: "pointer",
      opacity: ".8",
    },
  },
  podcastInfo: {},
  description: {
    marginTop: "2vh",
    maxHeight: "20vh",
    overflow: "auto",
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
  const { episodes, podcast } = props;
  return (
    <TableContainer className={classes.body} component={Paper}>
      <ArrowBackIcon className={classes.back} onClick={handleBackClick} />
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.podcastInfo}
      >
        <Grid item>
          <Typography variant="h2" gutterBottom>
            {podcast.title}
          </Typography>
        </Grid>
        <Grid item xs={6} lg={2}>
          <img className={classes.img} src={podcast.icon} alt={podcast.title} />
        </Grid>
        <Grid item xs={10} lg={6}>
          <Typography className={classes.description} variant="subtitle1">
            {podcast.description}
          </Typography>
        </Grid>
      </Grid>

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
