import { SET_EPISODE_LIST } from "../actions/episodeList";

const episodeListReducer = (state = [], action) => {
  Object.freeze(state);
  console.log(action.type, action.list);
  switch (action.type) {
    case SET_EPISODE_LIST:
      return [...action.list];
    default:
      return state;
  }
};

export default episodeListReducer;
