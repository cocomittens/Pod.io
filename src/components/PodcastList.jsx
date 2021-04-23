import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";

import { fetchPodcast } from "../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import urls from "../utils/urls";

const useStyles = makeStyles({
  img: {
    width: "100%",
    borderRadius: "5px",
  },
  podcasts: {
    margin: "0 5vw",
  },
});
const PodcastList = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const getData = useCallback((url) => {
    fetchPodcast(url).then(function (response) {
      setData((data) => [...data, response]);
    });
  }, []);

  useEffect(() => {
    setData([]);
    const podcastUrls = Object.entries(urls).map((url) => url[1]);
    podcastUrls.forEach((url) => getData(url));
  }, [getData]);

  return (
    <div className="App">
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12}>
          <Typography variant="h1">Pod.io</Typography>
        </Grid>
        {data.map((podcast, index) => {
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
              <Grid item>
                <img
                  className={classes.img}
                  src={podcast.icon}
                  alt={podcast.title}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">{podcast.title}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PodcastList;
