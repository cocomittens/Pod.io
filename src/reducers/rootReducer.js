import { combineReducers } from "redux";
import currentEpisodeReducer from "./currentEpisodeReducer";
import episodeListReducer from "./episodeListReducer";

export default combineReducers({
  currentEpisode: currentEpisodeReducer,
  episodeList: episodeListReducer,
});
