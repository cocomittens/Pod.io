import { SET_EPISODE_LIST } from "../actions/episodeList";

const episodeListReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_EPISODE_LIST:
      return [...action.list];
    default:
      return state;
  }
};

export default episodeListReducer;
