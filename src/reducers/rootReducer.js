import { combineReducers } from "redux";
import currentEpisodeReducer from "./currentEpisodeReducer";
import displayTypeReducer from "./displayTypeReducer";
import episodeListReducer from "./episodeListReducer";

export default combineReducers({
  currentEpisode: currentEpisodeReducer,
  episodeList: episodeListReducer,
  displayType: displayTypeReducer,
});
