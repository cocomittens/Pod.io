import { SET_CURRENT_EPISODE } from "../actions/currentEpisode";

const episodeListReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_EPISODE:
      return Object.assign({}, action.episode);
    default:
      return state;
  }
};

export default episodeListReducer;
