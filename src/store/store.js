import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const store = (preloadedState = {}) => createStore(rootReducer, preloadedState);

export default store;
