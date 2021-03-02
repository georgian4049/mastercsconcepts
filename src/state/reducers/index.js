import platformReducer from "./platformReducer";
import notificationReducer from "./notificationReducer";
import authenticationReducer from "./authenticationReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  platform: platformReducer,
  notifications: notificationReducer,
  authentication: authenticationReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};
export default rootReducer;
