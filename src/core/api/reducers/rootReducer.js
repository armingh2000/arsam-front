//Root reducer
import event from "./event";
import profile from "./profile";
import { combineReducers } from "redux";

export default combineReducers({
  event,
  profile
});
