import { combineReducers } from "redux";
import films from "./films";
import users from "./users";
const rootReducer = combineReducers({
  films,
  users,
});

export default rootReducer;
