import requestReducer from "./requestReducer";
import authenticationReducer from "./authenticationReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  request: requestReducer,
  authentication: authenticationReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return reducer(state, action);
};
export default rootReducer;
