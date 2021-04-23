import { DETAILS, EPISODES, PODCASTS } from "../utils/constants";
import {
  SET_DETAILS,
  SET_EPISODES,
  SET_PODCASTS,
} from "../actions/displayType";

const displayTypeReducer = (state = PODCASTS, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_PODCASTS:
      return PODCASTS;
    case SET_EPISODES:
      return EPISODES;
    case SET_DETAILS:
      return DETAILS;
    default:
      return state;
  }
};

export default displayTypeReducer;
