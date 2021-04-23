import "./App.css";

import { Route, Switch } from "react-router-dom";

import EpisodeDetails from "./components/EpisodeDetail";
import EpisodeList from "./components/EpisodeList";
import ListDisplay from "./components/ListDisplay";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={ListDisplay} />
    </Switch>
  );
};

export default App;
