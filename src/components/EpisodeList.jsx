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
      "-webkit-box-shadow":
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#b8b5ff",

      borderRadius: "5px",
    },
  },
  unselected: {
    boxShadow: " 0px 1px 2px 2px rgba(200,200,200,.15)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#b8b5ff",
    },
  },
  selected: {
    cursor: "pointer",
    backgroundColor: "#b8b5ff",
  },
  back: {
    "&:hover": {
      cursor: "pointer",
      color: "#b8b5ff",
    },
    fontSize: "60px",
    position: "fixed",
    padding: "1vh",
    color: "#7868e6",
  },
  body: {
    background: "linear-gradient(45deg, #edeef7 30%, #fff 90%)",
  },
  img: {
    marginTop: "2vh",
    marginBottom: "1vh",
    width: "100%",
    borderRadius: "5px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  podcastInfo: { paddingTop: "1vh" },
  description: {
    marginTop: "2vh",
    maxHeight: "20vh",
    overflow: "auto",
    paddingRight: "8px",
  },

  header: {
    fontFamily: "raleway",
    fontWeight: "bold",
    color: "#7868e6",
    "&:hover": {
      cursor: "default",
    },
  },
  subheader: {
    marginTop: "1vh",
    fontFamily: "raleway",
    fontWeight: 600,
    color: "#b8b5ff",
    "&:hover": {
      cursor: "default",
    },
  },
  expandButton: {
    color: "#7868e6",
    marginRight: "1vw",
  },
  open: {
    borderBottom: "1px solid #111",
  },
  closed: {
    padding: 0,
    border: "none",
  },
  tableCell: {
    borderBottom: "1px solid #666",
  },
});
const EpisodeList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState([]);

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
          <Typography className={classes.header} variant="h2">
            {podcast.title}
          </Typography>
        </Grid>
        <Grid item xs={6} lg={2}>
          <img className={classes.img} src={podcast.icon} alt={podcast.title} />
        </Grid>
        <Grid item xs={10} lg={6}>
          <Typography className={classes.subheader} variant="h4">
            Description
          </Typography>
        </Grid>
        <Grid item xs={10} lg={6}>
          <Typography
            gutterBottom
            className={classes.description}
            variant="subtitle1"
            align="center"
          >
            {podcast.description}
          </Typography>
        </Grid>
        <Grid item xs={10} lg={6}>
          <Typography gutterBottom className={classes.subheader} variant="h4">
            Episodes
          </Typography>
        </Grid>
      </Grid>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.tableCell}
              variant="head"
              align="center"
            >
              <Typography variant="h6">Title</Typography>
            </TableCell>
            <TableCell
              className={classes.tableCell}
              variant="head"
              align="center"
            >
              <Typography variant="h6">Length</Typography>
            </TableCell>
            <TableCell
              className={classes.tableCell}
              variant="head"
              align="center"
            >
              <Typography variant="h6">Date</Typography>
            </TableCell>
            <TableCell className={classes.tableCell} />
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
                <TableCell
                  className={classes.tableCell}
                  align="center"
                  size="small"
                >
                  <Typography variant="body1">{episode.title}</Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Typography variant="body1">
                    {`${Math.floor(
                      episode.attachments[0].duration_in_seconds / 60
                    )} min`}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Typography variant="body1">
                    {new Date(episode.date_published).getMonth()}-
                    {new Date(episode.date_published).getDate()}-
                    {new Date(episode.date_published).getFullYear()}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(open >= 0 ? -1 : index);
                    }}
                    className={classes.expandButton}
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
                  className={open === index ? classes.open : classes.closed}
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
