import { SET_CURRENT_PODCAST } from "../actions/currentPodcast";

const currentPodcastReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_PODCAST:
      return action.podcast;
    default:
      return state;
  }
};

export default currentPodcastReducer;
