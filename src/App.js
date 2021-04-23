import "./App.css";

import { Route, Switch } from "react-router-dom";

import EpisodeDetails from "./components/EpisodeDetail";
import EpisodeList from "./components/EpisodeList";
import PodcastList from "./components/PodcastList";

const App = () => {
  return (
    <Switch>
      <Route path="/play" component={EpisodeDetails} />
      <Route path="/episodes" component={EpisodeList} />
      <Route exact path="/" component={PodcastList} />
    </Switch>
  );
};

export default App;
