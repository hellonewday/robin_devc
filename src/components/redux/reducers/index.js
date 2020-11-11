import { combineReducers } from "redux";
import films from "./films";
import film from "./film";

const rootReducer = combineReducers({
  films,
  film,
});

export default rootReducer;
