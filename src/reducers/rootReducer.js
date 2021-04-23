import { combineReducers } from "redux";
import currentEpisodeReducer from "./currentEpisodeReducer";
import currentPodcastReducer from "./currentPodcastReducer";
import displayTypeReducer from "./displayTypeReducer";
import episodeListReducer from "./episodeListReducer";

export default combineReducers({
  currentEpisode: currentEpisodeReducer,
  episodeList: episodeListReducer,
  displayType: displayTypeReducer,
  currentPodcast: currentPodcastReducer,
});
