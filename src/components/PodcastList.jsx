import { Grid, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Autocomplete } from "@material-ui/lab";
import PodcastPlayer from "./PodcastPlayer";
import { fetchPodcast } from "../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import { setEpisodeList } from "../actions/episodeList";
import { setEpisodes } from "../actions/displayType";
import urls from "../utils/urls";

const useStyles = makeStyles({
  img: {
    width: "100%",
    borderRadius: "5px",
  },
  podcasts: {
    width: "100%",
    margin: "0",
    padding: "0 1vw",
    paddingBottom: "10vh",
  },
  header: {
    fontFamily: "raleway",
    fontWeight: "bold",
    color: "#7868e6",
  },
});
const PodcastList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const getData = useCallback((url) => {
    fetchPodcast(url).then(function (response) {
      setData((data) => [...data, response]);
    });
  }, []);

  useEffect(() => {
    setData([]);
  }, [dispatch]);

  useEffect(() => {
    const podcastUrls = Object.entries(urls).map((url) => url[1]);
    podcastUrls.forEach((url) => getData(url));
  }, [getData]);

  const handleClick = (podcast) => {
    dispatch(setEpisodeList(podcast.items));
    dispatch(setEpisodes());
  };

  const handleSelection = (e, newValue) => {
    setSearch(newValue);
  };

  const SearchPodcasts = () => {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={data.map((data) => data.title)}
        onChange={handleSelection}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        value={search}
        renderInput={(params) => (
          <TextField
            {...params}
            autoFocus={search}
            label="Search Podcasts..."
            variant="outlined"
          />
        )}
      />
    );
  };

  return (
    <div className="App">
      <Grid container className={classes.podcasts} spacing={2} justify="center">
        <Grid item xs={12}>
          <Typography className={classes.header} variant="h1">
            Pod.io
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <SearchPodcasts />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom className={classes.header} variant="h2">
            Featured
          </Typography>
        </Grid>
        {data
          .filter((podcast) => {
            if (search && podcast.title !== search) {
              return false;
            } else {
              return true;
            }
          })
          .map((podcast, index) => {
            return (
              <Grid
                container
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={2}
                justify="center"
                alignContent="flex-start"
              >
                <Grid item onClick={() => handleClick(podcast)}>
                  <img
                    className={classes.img}
                    src={podcast.icon}
                    alt={podcast.title}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{podcast.title}</Typography>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
      <PodcastPlayer />
    </div>
  );
};

export default PodcastList;
